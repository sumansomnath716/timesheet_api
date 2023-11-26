'use strict'

const firebase = require('../db');

const Position = require('../models/position');

const firestore = firebase.firestore();

/******** FOR UPDATE AND ADD POSITION */
const  positionAddEdit = async ( req,res,next) =>{
                    try{
                    if(req.body.dt.id === 0){
                    const data = {...req.body.dt,id:new Date().getTime()};
                    const result = await firestore.collection('md_position').add(data);
                    res.send({suc:1,msg:'Added Successfully',data: {...req.body.dt,id:result.id}    
                    });
                    }   
                    else{
                    const posRef = firestore.collection('md_position').doc(req.body.dt.id);
                    const result = await posRef.set(req.body.dt, { merge: true });        
                    res.send({suc:1,msg:'Updated Successfully',data: req.body.dt});    
                    } 
                    }
                    catch(error){
                         res.status(400).send(error.message);
                    }
               
}
/*********END */
/****** FOR GETTING ALL POSITION */
const getPositions = async (req, res, next) => {
                    try {
                                        const position = await firestore.collection('md_position');
                                        const data = await position.get();
                                        const posiiton_data = [];
                                        if (data.empty) {
                                                            res.status(404).send([]);
                                        }
                                        else {
                                                            data.forEach(el => {
                                                                                console.log(el.data())
                                                                                const posObj = new Position(
                                                                                                    el.id,
                                                                                                    el.data().pos_name,
                                                                                                    el.data().pos_dtls,
                                                                                                    el.data().created_at,
                                                                                                    el.data().created_by,
                                                                                                    el.data().updated_at,
                                                                                                    el.data().updated_by,
                                                                                );
                                                                                posiiton_data.push(posObj);
                                                            })
                                        }
                                        res.send(posiiton_data);
                    }
                    catch (error) {
                                        res.status(400).send(error.message)
                    }
}

/******* END */

module.exports = {positionAddEdit,getPositions};