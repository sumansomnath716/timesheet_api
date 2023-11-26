'use strict'

const firebase = require('../db');

const User = require('../models/user');

const firestore = firebase.firestore();

/****** FOR GETTING ALL USERS */
const getUsers = async (req, res, next) => {
                    try {
                                        const user = await firestore.collection('md_user');
                                        const data = await user.get();
                                        const user_data = [];
                                        if (data.empty) {
                                                            res.status(404).send('No User Found');
                                        }
                                        else {
                                                            data.forEach(el => {
                                                                                const userObj = new User(
                                                                                                    el.data().cover_pic,
                                                                                                    el.data().created_at,
                                                                                                    el.data().created_by,
                                                                                                    el.data().dob,
                                                                                                    el.data().email,
                                                                                                    el.id,
                                                                                                    el.data().isOnline,
                                                                                                    el.data().name,
                                                                                                    el.data().password,
                                                                                                    el.data().updated_at,
                                                                                                    el.data().updated_by,
                                                                                );
                                                                                user_data.push(userObj);
                                                            })
                                        }
                                        res.send(user_data);
                    }
                    catch (error) {
                                        res.status(400).send(error.message)
                    }
}

/******* END */

/******** FOR UPDATE AND ADD USER */
const  userAddEdit = async ( req,res,next) =>{
                    try{
                    if(req.body.id === '0'){
                    // Make Add Operation
                    const data = {...req.body,id:new Date().getTime()};
                    await firestore.collection('md_user').doc().set(data);
                    res.send('User Added Successfully');
                    }   
                    else{
                    //Make Update Operation
                    } 
                    }
                    catch(error){
                         res.status(400).send(error.message);
                    }
               
}
/*********END */

module.exports = {
                    getUsers,
                    userAddEdit
};