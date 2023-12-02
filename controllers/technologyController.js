'use strict'

const firebase = require('../db');
const Technology = require('../models/technology');
const firestore = firebase.firestore();

/******** FOR UPDATE AND ADD POSITION */
const  technologyAddEdit = async ( req,res,next) =>{
          // return res.send(req.body.dt); 
          try{
          if(req.body.dt.id === 0){
          const data = {...req.body.dt,id:new Date().getTime(),status:false,created_at:(new Date()).toLocaleString(),created_by:'admin',updated_at:null,updated_by:null};
          const result = await firestore.collection('md_technology').add(data);
          res.send({suc:1,msg:'Added Successfully',data: {...req.body.dt,id:result.id,status:false,created_at:(new Date()).toLocaleString(),created_by:'admin',updated_at:null,updated_by:null}    
          });
          }   
          else{
          const posRef = firestore.collection('md_technology').doc(req.body.dt.id);
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
/****** FOR GETTING ALL Technology */
const getTechnology = async (req, res, next) => {
          try {
                              const technology = await firestore.collection('md_technology');
                              const data = await technology.get();
                              const technologyDT = [];
                              if (!data.empty){
                                         data.forEach(el => {
                                                  const techObj = new Technology(
                                                                      el.id,
                                                                      el.data().tech_name,
                                                                      el.data().tech_type,
                                                                      el.data().tech_dtls,
                                                                      el.data().status,
                                                                      el.data().created_at,
                                                                      el.data().created_by,
                                                                      el.data().updated_at,
                                                                      el.data().updated_by,
                                                  );
                                                  technologyDT.push(techObj);
                                          })
                                   }
                                res.send(technologyDT);
          }
          catch (error) {
                              res.status(400).send(error.message)
          }
}

/********FOR DELETE PROJECT */
const deleteTechnology =  async (req, res, next) => {
 
           try{
                    const project = await firestore.collection('md_technology');
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

module.exports = {technologyAddEdit,getTechnology,deleteTechnology};