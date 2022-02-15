/* const express = require('express');
const router = express.Router();

const { getAllJobs,getJob,createJob,updateJob,deleteJob} = require('../controllers/jobs');


router.route('/').post(createJob).get(getAllJobs)
router.route('/:id').delete(deleteJob).get(getJob).patch(updateJob)





module.exports = router; */
const { getAllJobs,getJob,createJob,updateJob,deleteJob} = require('../controllers/jobs');

const express = require('express')
const router = express.Router()


router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').delete(deleteJob).patch(updateJob).get(getJob)


module.exports = router