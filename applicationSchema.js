var docAdvSchema = new mongoose.Schema({
jobAppliedFor: {type: String,default:''},
salaryDesired: {type: String,default:''},
emergencyContactName: {type: String,default:''},
Phone: {type: String,default:''},
Relationship: {type: String, trim:true, default:''}
applcationDate:{type: String,default:''},
applicantNames:{type: String,default:''},
applicantSignature:{type: String,default:''},
DOB:{type: String,default:''},
driversLicense:{type: String,default:''},
emergencyContactName:{type: String,default:''},
emergencyContactPhone:{type: String,default:''},
emergencyContactRelationship:{type: String,default:''},
employerName1:{type: String,default:''},
employerName2:{type: String,default:''},
employmentDateFrom1:{type: String,default:''},
employmentDateFrom2:{type: String,default:''},
employmentDateTo1:{type: String,default:''},
employmentDateTo2:{type: String,default:''},
employmentLocation1:{type: String,default:''},
employmentLocation2:{type: String,default:''},
employmentReasonForLeaving1:{type: String,default:''},
employmentReasonForLeaving2:{type: String,default:''},
employmentTitle1:{type: String,default:''},
employmentTitle2:{type: String,default:''},
firstname:{type: String,default:''},
fX:Array(4) [{type: String,default:''},, {type: String,default:''},, {type: String,default:''},, …]
homeAddress:{type: String,default:''},
jobPositionAppliedFor:{type: String,default:''},
lastname:{type: String,default:''},
otherInfo:{type: String,default:''},
professional license:{type: String,default:''},
referenceFacility1:{type: String,default:''},
referenceFacility2:{type: String,default:''},
referenceName1:{type: String,default:''},
referenceName2:{type: String,default:''},
referenceRelationship1:{type: String,default:''},
referenceRelationship2:{type: String,default:''},
referenceRelationship1:{type: String,default:''},
referenceRelationship2:{type: String,default:''},
referenceTelephone1:{type: String,default:''},
referenceTelephone2:{type: String,default:''},
referenceTitle1:{type: String,default:''},
referenceTitle2:{type: String,default:''},
ssNo:{type: String,default:''},
stateIssued:{type: String,default:''},
supervisorName1:{type: String,default:''},
supervisorName2:{type: String,default:''},
town:{type: String,default:''},
zipCode:{type: String,default:''},
});