'use strict'

const firebase = require('../db');

const Project = require('../models/project');

const firestore = firebase.firestore();
// import { serverTimestamp } from "firebase/firestore";
// const {serverTimestamp} = require('firebase/firestore');

/******** FOR UPDATE AND ADD POSITION */
const  projectAddEdit = async ( req,res,next) =>{
          try{
          if(req.body.dt.id === 0){
          const data = {...req.body.dt,id:new Date().getTime(),status:false,created_at:(new Date()).toLocaleString(),created_by:'admin',updated_at:null,updated_by:null};
          const result = await firestore.collection('md_project').add(data);
          console.log(result);
          res.send({suc:1,msg:'Added Successfully',data: {...req.body.dt,id:result.id,status:false,created_at:(new Date()).toLocaleString(),created_by:'admin',updated_at:null,updated_by:null}    
          });
          }   
          else{
          const posRef = firestore.collection('md_project').doc(req.body.dt.id);
          const result = await posRef.set(
                    {
                              ...req.body.dt,
                              updated_at:(new Date()).toLocaleString(),
                              updated_by:'admin'
                    }, 
                    
                    { merge: true });  
          res.send({suc:1,msg:'Updated Successfully',data: req.body.dt, updated_at:(new Date()).toLocaleString(),updated_by:'admin'});    
          } 
          }
          catch(error){
               res.status(400).send(error.message);
          }
     
}
/*********END */
/****** FOR GETTING ALL POSITION */
const getProject = async (req, res, next) => {
          try {
                              const project = await firestore.collection('md_project');
                              const data = await project.get();
                              const ProjectDT = [];
                              if (!data.empty){
                                         data.forEach(el => {
                                                  const posObj = new Project(
                                                                      el.id,
                                                                      el.data().proj_name,
                                                                      el.data().proj_dtls,
                                                                      el.data().proj_url,
                                                                      el.data().status,
                                                                      el.data().created_at,
                                                                      el.data().created_by,
                                                                      el.data().updated_at,
                                                                      el.data().updated_by,
                                                  );
                                                  ProjectDT.push(posObj);
                                          })
                                   }
                                res.send(ProjectDT);
                              // }
          }
          catch (error) {
                              res.status(400).send(error.message)
          }
}

/********FOR DELETE PROJECT */
const deleteProject =  async (req, res, next) => {
 
           try{
                    const project = await firestore.collection('md_project');
                    project.doc(req.query.id).delete().then(function(dt){
                              console.log(dt);
                              res.send({suc:1,id:req.query.id,msg:'Deleted Successfully'});
                    }).catch(function(error) {
                               res.status(400).send({suc:0,id:req.query.id,msg:error.message})
                    });      
           }
           catch(error){
                    res.status(400).send({suc:0,id:req.query.id,msg:error.message})
           }

}
/********END */

/******* END */

module.exports = {projectAddEdit,getProject,deleteProject};