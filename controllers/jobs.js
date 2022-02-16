/*  const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')



const getAllJobs = async (req,res)=>{
    const jobs = await Job.find({createdBy : req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs,count:jobs.length})
}


const getJob = async (req,res)=>{
    const {user:{userId},params:{id:jobId}}=req
    const job = await Job.findOne({_id:jobId,createdBy:userId})
        if(!job) {
            throw new NotFoundError('now job withe this id')
        }
    res.status(StatusCodes.OK).json(job)
}



const createJob = async (req,res)=>{
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}


const updateJob = async (req,res)=>{
    const {
        user:{userId},
        params:{id:jobId},
        body:{company,position}
    }=req

    if(company === '' || position === ''){
        throw new BadRequestError('company or position filds cannot be empty')
    }
    const job = await Job.findByIdAndUpdate({_id:jobId,createdBy:userId},req.body,{new:true,runValidators:true})
        if(!job) {
            throw new NotFoundError('now job withe this id')
        }
        res.status(StatusCodes.OK).json(job)
}


const deleteJob = async (req,res)=>{
    const {user:{userId},params:{id:jobId}}=req
    const job = await Job.findByIdAndRemove({_id:jobId,createdBy:userId})
        if(!job) {
            throw new NotFoundError('now job withe this id')
        }
    res.status(StatusCodes.OK).send()
}





module.exports ={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}  */
// getAllJobs,getJob,createJob,updateJob,deleteJob
 const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const Job = require('../models/Job')

//*get all jobs for a user
const getAllJobs = async  (req,res)=>{
    const job= await Job.find({createdBy:req.user.userId}).sort('createdAt')

    res.status(StatusCodes.OK).json({job,count:job.length})
}



//*get a singel job for a user
    const getJob = async (req,res)=>{
     const {user:{userId},params:{id:jobId}}=req
        //console.log(req.user.userId,req.params)

    const job = await Job.findOne({_id:jobId,createdBy:userId})
        if(!job) {
            throw new NotFoundError('now job withe this id')
        }
    res.status(StatusCodes.OK).json(job) 
}
const createJob = async (req,res)=>{
    req.body.createdBy = req.user.userId
    //console.log(req.user)
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json(job)
}



//*upadate a job for a user

const updateJob =async (req,res)=>{
    const {user:{userId},
    params:{id:jobId},
    body:{company,position}
}=req

const job = await Job.indByIdAndUpdate({_id:jobId,createdBy:userId},req.body,{new:true,runValidators:true})
    res.status(StatusCodes.OK).json({job})
}
//*delete a job for a user

const deleteJob =async (req,res)=>{
const {user:{userId},
params:{id:jobId},}=req
const job = await Job.findByIdAndRemove({_id:jobId,createdBy:userId})
    res.status(StatusCodes.OK).send('deleted')
}

module.exports ={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} 