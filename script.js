if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log("Service Worker Registered"));
}
// QuickKaam Application - Main JavaScript File
// Complete implementation of all features described in the requirements
// ==================== DATA STRUCTURES & STORAGE ====================
// Initialize localStorage with default data if empty
if (!localStorage.getItem('quickkaam_users')) {
// Sample users for demonstration
const sampleUsers = [
{
id: 'user_1',
name: 'Rajesh Kumar',
email: 'rajesh@example.com',
phone: '+919876543210',
password: 'password123',
userType: 'worker',
verified: true,
verificationBadge: true,
createdAt: new Date().toISOString(),
profile: {
photo: 'https://randomuser.me/api/portraits/men/1.jpg',
profession: 'Private Chef',
skills: ['Indian Cuisine', 'Continental', 'Baking', 'Meal Planning'],
experience: '5 years',
expectedSalary: 30000,
expectedSalaryRange: { min: 25000, max: 35000 },
workingHours: 'Full-time (8 hours/day)',
location: 'Delhi, India',
locationLat: 28.6139,
locationLng: 77.2090,
travelDistance: 10,
availability: 'Immediate',
languages: ['Hindi', 'English'],
certifications: ['Professional Chef Course', 'Food Safety'],
bio: 'Experienced private chef specializing in North Indian and Continental cuisine.'
},
ratings: [],
averageRating: 0,
jobsCompleted: 0,
subscription: {
active: true,
startDate: new Date().toISOString(),
endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
plan: '3 months'
},
status: 'available',
unavailability: null,
currentJobId: null,
notifications: [],
savedJobs: [],
appliedJobs: [],
chats: []
},
{
id: 'user_2',
name: 'Priya Sharma',
email: 'priya@example.com',
phone: '+919876543211',
password: 'password123',
userType: 'worker',
verified: true,
verificationBadge: true,
createdAt: new Date().toISOString(),
profile: {
photo: 'https://randomuser.me/api/portraits/women/1.jpg',
profession: 'Home Tutor',
skills: ['Mathematics', 'Science', 'English', 'Exam Preparation'],
experience: '8 years',
expectedSalary: 25000,
expectedSalaryRange: { min: 20000, max: 30000 },
workingHours: 'Part-time (4 hours/day)',
location: 'Gurgaon, India',
locationLat: 28.4595,
locationLng: 77.0266,
travelDistance: 5,
availability: 'Immediate',
languages: ['Hindi', 'English', 'Punjabi'],
certifications: ['B.Ed', 'M.Sc Mathematics'],
bio: 'Experienced home tutor for classes 1-10. Specialized in mathematics and
science.'
},
ratings: [],
averageRating: 0,
jobsCompleted: 0,
subscription: {
active: true,
startDate: new Date().toISOString(),
endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
plan: '3 months'
},
status: 'available',
unavailability: null,
currentJobId: null,
notifications: [],
savedJobs: [],
appliedJobs: [],
chats: []
},
{
id: 'user_3',
name: 'Amit Patel',
email: 'amit@example.com',
phone: '+919876543212',
password: 'password123',
userType: 'employer',
verified: true,
verificationBadge: true,
createdAt: new Date().toISOString(),
profile: {
photo: 'https://randomuser.me/api/portraits/men/2.jpg',
company: 'Personal Account',
location: 'Delhi, India',
locationLat: 28.6139,
locationLng: 77.2090
},
ratings: [],
averageRating: 0,
jobsPosted: [],
notifications: [],
chats: []
},
{
id: 'user_4',
name: 'Neha Gupta',
email: 'neha@example.com',
phone: '+919876543213',
password: 'password123',
userType: 'employer',
verified: true,
verificationBadge: true,
createdAt: new Date().toISOString(),
profile: {
photo: 'https://randomuser.me/api/portraits/women/2.jpg',
company: 'Gupta Household',
location: 'Noida, India',
locationLat: 28.5355,
locationLng: 77.3910
},
ratings: [],
averageRating: 0,
jobsPosted: [],
notifications: [],
chats: []
}
];
// Sample jobs
const sampleJobs = [
{
id: 'job_1',
employerId: 'user_3',
title: 'Private Chef Needed',
category: 'Private Chef',
description: 'Looking for an experienced private chef for daily meal preparation. Must be
skilled in North Indian cuisine. Timing: 10 AM to 6 PM.',
location: 'Delhi, India',
locationLat: 28.6139,
locationLng: 77.2090,
salary: 30000,
salaryType: 'monthly',
workingHours: '8 hours/day',
jobType: 'full-time',
requirements: {
gender: 'any',
minExperience: '3 years',
skills: ['Indian Cuisine', 'Meal Planning'],
languages: ['Hindi']
},
createdAt: new Date().toISOString(),
status: 'active',
applicants: [],
hiredWorkerId: null
},
{
id: 'job_2',
employerId: 'user_4',
title: 'Home Tutor for Class 8 Student',
category: 'Home Tutor',
description: 'Need a mathematics and science tutor for my daughter studying in class 8.
Classes will be 2 hours daily after school.',
location: 'Noida, India',
locationLat: 28.5355,
locationLng: 77.3910,
salary: 12000,
salaryType: 'monthly',
workingHours: '2 hours/day',
jobType: 'part-time',
requirements: {
gender: 'female',
minExperience: '2 years',
skills: ['Mathematics', 'Science'],
languages: ['English', 'Hindi']
},
createdAt: new Date().toISOString(),
status: 'active',
applicants: [],
hiredWorkerId: null
},
{
id: 'job_3',
employerId: 'user_3',
title: 'House Maid Needed',
category: 'House Maid',
description: 'Looking for a reliable house maid for daily cleaning, cooking, and household
chores. 6 hours daily.',
location: 'Delhi, India',
locationLat: 28.6139,
locationLng: 77.2090,
salary: 15000,
salaryType: 'monthly',
workingHours: '6 hours/day',
jobType: 'full-time',
requirements: {
gender: 'female',
minExperience: '1 year',
skills: ['Cleaning', 'Cooking'],
languages: ['Hindi']
},
createdAt: new Date().toISOString(),
status: 'active',
applicants: [],
hiredWorkerId: null
}
];
localStorage.setItem('quickkaam_users', JSON.stringify(sampleUsers));
localStorage.setItem('quickkaam_jobs', JSON.stringify(sampleJobs));
localStorage.setItem('quickkaam_messages', JSON.stringify([]));
}
// ==================== HELPER FUNCTIONS ====================
function generateId() {
return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
function showToast(message, type = 'info') {
const toastContainer = document.getElementById('toast-container') || createToastContainer();
const toast = document.createElement('div');
toast.className = `toast toast-${type}`;
toast.innerHTML = `
<div class="toast-content">
<span class="toast-message">${message}</span>
</div>
<button class="toast-close">&times;</button>
`;
toastContainer.appendChild(toast);
const closeBtn = toast.querySelector('.toast-close');
closeBtn.addEventListener('click', () => toast.remove());
setTimeout(() => {
if (toast.parentNode) toast.remove();
}, 5000);
}
function createToastContainer() {
const container = document.createElement('div');
container.id = 'toast-container';
container.style.cssText = `
position: fixed;
bottom: 20px;
right: 20px;
z-index: 9999;
display: flex;
flex-direction: column;
gap: 10px;
`;
document.body.appendChild(container);
return container;
}
function getCurrentUser() {
const userId = localStorage.getItem('quickkaam_current_user');
if (!userId) return null;
const users = JSON.parse(localStorage.getItem('quickkaam_users'));
return users.find(u => u.id === userId) || null;
}
function saveUser(user) {
const users = JSON.parse(localStorage.getItem('quickkaam_users'));
const index = users.findIndex(u => u.id === user.id);
if (index !== -1) {
users[index] = user;
localStorage.setItem('quickkaam_users', JSON.stringify(users));
}
function updateUser(user) {
saveUser(user);
function getJobs() {
return JSON.parse(localStorage.getItem('quickkaam_jobs')) || [];
function saveJobs(jobs) {
localStorage.setItem('quickkaam_jobs', JSON.stringify(jobs));
}
}
}
}
function getMessages() {
return JSON.parse(localStorage.getItem('quickkaam_messages')) || [];
function saveMessages(messages) {
localStorage.setItem('quickkaam_messages', JSON.stringify(messages));
function getUsers() {
return JSON.parse(localStorage.getItem('quickkaam_users')) || [];
}
}
}
// ==================== AUTHENTICATION SYSTEM ====================
function handleLogin(event) {
event.preventDefault();
const email = document.getElementById('login-email').value;
const password = document.getElementById('login-password').value;
const users = getUsers();
const user = users.find(u => u.email === email && u.password === password);
if (user) {
localStorage.setItem('quickkaam_current_user', user.id);
showToast('Login successful!', 'success');
// Add login notification
addNotification(user.id, 'Welcome back to QuickKaam!', 'success');
// Redirect based on user type
if (user.userType === 'worker') {
navigateTo('worker-dashboard');
} else {
navigateTo('employer-dashboard');
}
} else {
showToast('Invalid email or password', 'error');
}
}
function handleSignup(event) {
event.preventDefault();
const name = document.getElementById('signup-name').value;
const email = document.getElementById('signup-email').value;
const phone = document.getElementById('signup-phone').value;
const password = document.getElementById('signup-password').value;
const userType = document.getElementById('signup-type').value;
const users = getUsers();
if (users.find(u => u.email === email)) {
showToast('Email already registered', 'error');
return;
}
const newUser = {
id: generateId(),
name,
email,
phone,
password,
userType,
verified: false,
verificationBadge: false,
createdAt: new Date().toISOString(),
profile: userType === 'worker' ? {
photo: 'https://via.placeholder.com/150',
profession: '',
skills: [],
experience: '',
expectedSalary: 0,
expectedSalaryRange: { min: 0, max: 0 },
workingHours: '',
location: '',
locationLat: null,
locationLng: null,
travelDistance: 5,
availability: 'Immediate',
languages: [],
certifications: [],
bio: ''
} : {
photo: 'https://via.placeholder.com/150',
company: '',
location: '',
locationLat: null,
locationLng: null
},
ratings: [],
averageRating: 0,
subscription: {
active: false,
startDate: null,
endDate: null,
plan: null
},
status: 'available',
unavailability: null,
currentJobId: null,
notifications: [],
savedJobs: [],
appliedJobs: [],
chats: []
};
if (userType === 'employer') {
newUser.jobsPosted = [];
} else {
newUser.jobsCompleted = 0;
}
users.push(newUser);
localStorage.setItem('quickkaam_users', JSON.stringify(users));
localStorage.setItem('quickkaam_current_user', newUser.id);
showToast('Account created successfully! Please complete your profile.', 'success');
if (userType === 'worker') {
navigateTo('worker-profile-setup');
} else {
navigateTo('employer-profile-setup');
}
}
function logout() {
localStorage.removeItem('quickkaam_current_user');
showToast('Logged out successfully', 'info');
navigateTo('welcome');
}
// ==================== PROFILE SETUP & MANAGEMENT ====================
function completeWorkerProfile(event) {
event.preventDefault();
const user = getCurrentUser();
if (!user) return;
user.profile.photo = document.getElementById('profile-photo').value || 'https://
via.placeholder.com/150';
user.profile.profession = document.getElementById('profession').value;
user.profile.skills = document.getElementById('skills').value.split(',').map(s => s.trim());
user.profile.experience = document.getElementById('experience').value;
user.profile.expectedSalary = parseInt(document.getElementById('expected-salary').value);
user.profile.expectedSalaryRange = {
min: user.profile.expectedSalary - 5000,
max: user.profile.expectedSalary + 5000
};
user.profile.workingHours = document.getElementById('working-hours').value;
user.profile.location = document.getElementById('location').value;
user.profile.bio = document.getElementById('bio').value;
// Simulate geocoding
if (user.profile.location.includes('Delhi')) {
user.profile.locationLat = 28.6139;
user.profile.locationLng = 77.2090;
} else if (user.profile.location.includes('Gurgaon')) {
user.profile.locationLat = 28.4595;
user.profile.locationLng = 77.0266;
} else if (user.profile.location.includes('Noida')) {
user.profile.locationLat = 28.5355;
user.profile.locationLng = 77.3910;
}
saveUser(user);
// Trigger verification process
initiateVerification(user);
showToast('Profile completed! Your account is being verified.', 'success');
navigateTo('worker-dashboard');
}
function completeEmployerProfile(event) {
event.preventDefault();
const user = getCurrentUser();
if (!user) return;
user.profile.photo = document.getElementById('employer-photo').value || 'https://
via.placeholder.com/150';
user.profile.company = document.getElementById('company-name').value;
user.profile.location = document.getElementById('employer-location').value;
 // Simulate geocoding
if (user.profile.location.includes('Delhi')) {
user.profile.locationLat = 28.6139;
user.profile.locationLng = 77.2090;
} else if (user.profile.location.includes('Gurgaon')) {
user.profile.locationLat = 28.4595;
user.profile.locationLng = 77.0266;
} else if (user.profile.location.includes('Noida')) {
user.profile.locationLat = 28.5355;
user.profile.locationLng = 77.3910;
}
saveUser(user);
showToast('Profile completed!', 'success');
navigateTo('employer-dashboard');
}
function initiateVerification(user) {
// Simulate verification process
setTimeout(() => {
user.verified = true;
user.verificationBadge = true;
saveUser(user);
'success');
addNotification(user.id, 'Your profile has been verified! You now have a verification badge.',
showToast('Profile verified successfully!', 'success');
// Refresh current page if on dashboard
const currentPage = document.querySelector('.page.active')?.id;
if (currentPage === 'worker-dashboard' || currentPage === 'employer-dashboard') {
loadDashboard();
}
}, 3000);
}
// ==================== JOB POSTING SYSTEM ====================
function postJob(event) {
event.preventDefault();
const user = getCurrentUser();
if (!user || user.userType !== 'employer') return;
const newJob = {
id: generateId(),
employerId: user.id,
title: document.getElementById('job-title').value,
category: document.getElementById('job-category').value,
description: document.getElementById('job-description').value,
location: document.getElementById('job-location').value,
locationLat: null,
locationLng: null,
salary: parseInt(document.getElementById('job-salary').value),
salaryType: document.getElementById('salary-type').value,
workingHours: document.getElementById('job-hours').value,
jobType: document.getElementById('job-type').value,
requirements: {
gender: document.getElementById('gender-preference').value,
minExperience: document.getElementById('min-experience').value,
skills: document.getElementById('required-skills').value.split(',').map(s => s.trim()),
languages: document.getElementById('required-languages').value.split(',').map(l => l.trim())
},
createdAt: new Date().toISOString(),
status: 'active',
applicants: [],
hiredWorkerId: null
};
// Geocode location
if (newJob.location.includes('Delhi')) {
newJob.locationLat = 28.6139;
newJob.locationLng = 77.2090;
} else if (newJob.location.includes('Gurgaon')) {
newJob.locationLat = 28.4595;
newJob.locationLng = 77.0266;
} else if (newJob.location.includes('Noida')) {
newJob.locationLat = 28.5355;
newJob.locationLng = 77.3910;
}
const jobs = getJobs();
jobs.push(newJob);
saveJobs(jobs);
// Add to user's posted jobs
user.jobsPosted.push(newJob.id);
saveUser(user);
showToast('Job posted successfully!', 'success');
// Find matching workers and notify them
findMatchingWorkers(newJob);
document.getElementById('post-job-form').reset();
navigateTo('employer-dashboard');
}
function findMatchingWorkers(job) {
const users = getUsers();
const workers = users.filter(u => u.userType === 'worker' && u.verified && u.status ===
'available');
workers.forEach(worker => {
let matchScore = 0;
// Profession match
if (worker.profile.profession.toLowerCase().includes(job.category.toLowerCase())) {
matchScore += 30;
}
// Location match (simple check)
const jobCity = job.location.split(',')[0];
const workerCity = worker.profile.location.split(',')[0];
if (jobCity === workerCity) {
matchScore += 20;
}
// Salary match
if (worker.profile.expectedSalaryRange.min <= job.salary &&
worker.profile.expectedSalaryRange.max >= job.salary) {
matchScore += 20;
}
// Skills match
const requiredSkills = job.requirements.skills || [];
const workerSkills = worker.profile.skills || [];
const matchedSkills = requiredSkills.filter(skill =>
workerSkills.some(ws => ws.toLowerCase().includes(skill.toLowerCase()))
);
matchScore += (matchedSkills.length / Math.max(requiredSkills.length, 1)) * 20;
if (matchScore >= 50) {
addNotification(worker.id, `New job match: ${job.title} at ${job.location} with salary ₹$
{job.salary}/${job.salaryType}`, 'match');
}
});
}
// ==================== JOB APPLICATION SYSTEM ====================
function applyForJob(jobId) {
const user = getCurrentUser();
if (!user) return;
if (user.userType !== 'worker') {
showToast('Only workers can apply for jobs', 'error');
return;
}
// Check subscription
if (!checkSubscription(user)) {
showToast('Please subscribe to apply for jobs. ₹100 for 3 months', 'warning');
navigateTo('subscription');
return;
}
const jobs = getJobs();
const job = jobs.find(j => j.id === jobId);
if (!job) return;
if (job.applicants.includes(user.id)) {
showToast('You have already applied for this job', 'info');
return;
}
job.applicants.push(user.id);
saveJobs(jobs);
// Add to user's applied jobs
if (!user.appliedJobs.includes(jobId)) {
user.appliedJobs.push(jobId);
saveUser(user);
}
showToast('Application submitted successfully!', 'success');
// Notify employer
addNotification(job.employerId, `${user.name} applied for your job: ${job.title}`, 'application');
loadJobDetails(jobId);
}
function hireWorker(jobId, workerId) {
const user = getCurrentUser();
if (!user || user.userType !== 'employer') return;
const jobs = getJobs();
const job = jobs.find(j => j.id === jobId);
if (!job) return;
const workers = getUsers();
const worker = workers.find(w => w.id === workerId);
if (!worker) return;
job.hiredWorkerId = workerId;
job.status = 'filled';
saveJobs(jobs);
// Update worker status
worker.status = 'assigned';
worker.currentJobId = jobId;
saveUser(worker);
// Notify worker
addNotification(workerId, `Congratulations! You have been hired for ${job.title} at ₹${job.salary}/
${job.salaryType}`, 'success');
showToast('Worker hired successfully!', 'success');
loadJobDetails(jobId);
}
// ==================== MATCHING & RECOMMENDATION SYSTEM
====================
function getRecommendedJobsForWorker(worker) {
const jobs = getJobs();
const activeJobs = jobs.filter(j => j.status === 'active' && j.hiredWorkerId === null);
return activeJobs.map(job => {
let matchScore = 0;
// Profession match
if (worker.profile.profession.toLowerCase().includes(job.category.toLowerCase())) {
matchScore += 30;
}
// Location match
const jobCity = job.location.split(',')[0];
const workerCity = worker.profile.location.split(',')[0];
const distance = calculateDistance(
worker.profile.locationLat, worker.profile.locationLng,
job.locationLat, job.locationLng
);
if (distance <= worker.profile.travelDistance) {
matchScore += 25;
} else if (distance <= worker.profile.travelDistance * 2) {
matchScore += 10;
}
// Salary match
if (worker.profile.expectedSalaryRange.min <= job.salary &&
worker.profile.expectedSalaryRange.max >= job.salary) {
matchScore += 20;
}
// Skills match
const requiredSkills = job.requirements.skills || [];
const workerSkills = worker.profile.skills || [];
const matchedSkills = requiredSkills.filter(skill =>
workerSkills.some(ws => ws.toLowerCase().includes(skill.toLowerCase()))
);
matchScore += (matchedSkills.length / Math.max(requiredSkills.length, 1)) * 15;
// Experience match
const requiredExp = parseInt(job.requirements.minExperience) || 0;
const workerExp = parseInt(worker.profile.experience) || 0;
if (workerExp >= requiredExp) {
matchScore += 10;
}
return { job, matchScore };
}).filter(m => m.matchScore > 30).sort((a, b) => b.matchScore - a.matchScore);
}
function getRecommendedWorkersForEmployer(job) {
const users = getUsers();
const workers = users.filter(u => u.userType === 'worker' && u.verified && u.status ===
'available');
return workers.map(worker => {
let matchScore = 0;
// Profession match
if (worker.profile.profession.toLowerCase().includes(job.category.toLowerCase())) {
matchScore += 30;
}
// Location match
const jobCity = job.location.split(',')[0];
const workerCity = worker.profile.location.split(',')[0];
const distance = calculateDistance(
worker.profile.locationLat, worker.profile.locationLng,
job.locationLat, job.locationLng
);
if (distance <= worker.profile.travelDistance) {
matchScore += 25;
}
// Salary match
if (worker.profile.expectedSalaryRange.min <= job.salary &&
worker.profile.expectedSalaryRange.max >= job.salary) {
matchScore += 20;
}
// Skills match
const requiredSkills = job.requirements.skills || [];
const workerSkills = worker.profile.skills || [];
const matchedSkills = requiredSkills.filter(skill =>
workerSkills.some(ws => ws.toLowerCase().includes(skill.toLowerCase()))
);
matchScore += (matchedSkills.length / Math.max(requiredSkills.length, 1)) * 15;
// Rating bonus
matchScore += (worker.averageRating / 5) * 10;
return { worker, matchScore };
}).filter(m => m.matchScore > 30).sort((a, b) => b.matchScore - a.matchScore);
}
function calculateDistance(lat1, lng1, lat2, lng2) {
if (!lat1 || !lng1 || !lat2 || !lng2) return 100;
const R = 6371;
const dLat = (lat2 - lat1) * Math.PI / 180;
const dLng = (lng2 - lng1) * Math.PI / 180;
const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
Math.sin(dLng/2) * Math.sin(dLng/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
return R * c;
}
// ==================== SUBSCRIPTION SYSTEM ====================
function checkSubscription(user) {
if (!user.subscription.active) return false;
if (new Date(user.subscription.endDate) < new Date()) {
user.subscription.active = false;
saveUser(user);
return false;
}
return true;
}
function purchaseSubscription() {
const user = getCurrentUser();
if (!user) return;
// Simulate payment processing
showToast('Processing payment...', 'info');
setTimeout(() => {
user.subscription = {
active: true,
startDate: new Date().toISOString(),
endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
plan: '3 months'
};
saveUser(user);
addNotification(user.id, 'Subscription activated! You now have access to all premium
features.', 'success');
showToast('Subscription successful! ₹100 deducted.', 'success');
loadSubscriptionPage();
}, 1500);
}
// ==================== NOTIFICATION SYSTEM ====================
function addNotification(userId, message, type = 'info') {
const users = getUsers();
const user = users.find(u => u.id === userId);
if (!user) return;
const notification = {
id: generateId(),
message,
type,
read: false,
createdAt: new Date().toISOString(),
actionUrl: null
};
user.notifications.unshift(notification);
if (user.notifications.length > 50) user.notifications.pop();
saveUser(user);
// Update notification badge if user is current
const currentUser = getCurrentUser();
if (currentUser && currentUser.id === userId) {
updateNotificationBadge();
renderNotifications();
}
// Show in-app notification
if (currentUser && currentUser.id === userId) {
showToast(message, type === 'match' ? 'success' : type);
}
}
function updateNotificationBadge() {
const user = getCurrentUser();
if (!user) return;
const unreadCount = user.notifications.filter(n => !n.read).length;
const badge = document.getElementById('notification-badge');
if (badge) {
if (unreadCount > 0) {
badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
badge.style.display = 'flex';
} else {
badge.style.display = 'none';
}
}
}
function markNotificationAsRead(notificationId) {
const user = getCurrentUser();
if (!user) return;
const notification = user.notifications.find(n => n.id === notificationId);
if (notification) {
notification.read = true;
saveUser(user);
updateNotificationBadge();
renderNotifications();
}
}
function clearAllNotifications() {
const user = getCurrentUser();
if (!user) return;
user.notifications = [];
saveUser(user);
updateNotificationBadge();
renderNotifications();
}
// ==================== CHAT SYSTEM ====================
function sendMessage(receiverId, message, jobId = null) {
const sender = getCurrentUser();
if (!sender) return;
const messages = getMessages();
const newMessage = {
id: generateId(),
senderId: sender.id,
receiverId: receiverId,
message: message,
jobId: jobId,
read: false,
createdAt: new Date().toISOString()
};
messages.push(newMessage);
saveMessages(messages);
// Add chat reference to both users
addChatReference(sender.id, receiverId, jobId);
addChatReference(receiverId, sender.id, jobId);
// Notify receiver
'message');
addNotification(receiverId, `New message from ${sender.name}: ${message.substring(0, 50)}`,
// Refresh chat UI if open
const activeChat = document.querySelector('.chat-container.active');
if (activeChat && activeChat.dataset.userId === receiverId) {
renderChatMessages(receiverId, jobId);
}
}
function addChatReference(userId, otherUserId, jobId) {
const users = getUsers();
const user = users.find(u => u.id === userId);
if (!user) return;
const chatExists = user.chats.some(c => c.userId === otherUserId && c.jobId === jobId);
if (!chatExists) {
user.chats.push({
userId: otherUserId,
jobId: jobId,
lastMessageAt: new Date().toISOString()
});
} else {
saveUser(user);
const chat = user.chats.find(c => c.userId === otherUserId && c.jobId === jobId);
if (chat) chat.lastMessageAt = new Date().toISOString();
saveUser(user);
}
}
function getChatMessages(userId, jobId = null) {
const currentUser = getCurrentUser();
if (!currentUser) return [];
const messages = getMessages();
return messages.filter(m =>
(m.senderId === currentUser.id && m.receiverId === userId) ||
(m.senderId === userId && m.receiverId === currentUser.id)
).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
}
function markMessagesAsRead(senderId) {
const currentUser = getCurrentUser();
if (!currentUser) return;
const messages = getMessages();
let updated = false;
messages.forEach(m => {
if (m.senderId === senderId && m.receiverId === currentUser.id && !m.read) {
m.read = true;
updated = true;
}
});
if (updated) {
saveMessages(messages);
}
}
// ==================== SEARCH & FILTER SYSTEM ====================
function performSearch(query, filters = {}) {
const currentUser = getCurrentUser();
if (!currentUser) return [];
const jobs = getJobs();
const users = getUsers();
let results = [];
if (currentUser.userType === 'worker') {
// Worker searching for jobs
results = jobs.filter(job => {
if (job.status !== 'active') return false;
if (job.hiredWorkerId) return false;
const searchMatch = job.title.toLowerCase().includes(query.toLowerCase()) ||
job.category.toLowerCase().includes(query.toLowerCase()) ||
job.description.toLowerCase().includes(query.toLowerCase()) ||
job.location.toLowerCase().includes(query.toLowerCase());
if (!searchMatch && query) return false;
// Apply filters
if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase()))
return false;
if (filters.salaryMax && job.salary > filters.salaryMax) return false;
if (filters.salaryMin && job.salary < filters.salaryMin) return false;
if (filters.jobType && job.jobType !== filters.jobType) return false;
if (filters.gender && job.requirements.gender !== 'any' && job.requirements.gender !==
filters.gender) return false;
return true;
});
} else {
// Employer searching for workers
results = users.filter(user => {
if (user.userType !== 'worker') return false;
if (!user.verified) return false;
const searchMatch = user.name.toLowerCase().includes(query.toLowerCase()) ||
user.profile.profession.toLowerCase().includes(query.toLowerCase()) ||
(user.profile.skills || []).some(s =>
s.toLowerCase().includes(query.toLowerCase()));
if (!searchMatch && query) return false;
// Apply filters
if (filters.profession && !
user.profile.profession.toLowerCase().includes(filters.profession.toLowerCase())) return false;
if (filters.location && !
user.profile.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
if (filters.salaryMax && user.profile.expectedSalary > filters.salaryMax) return false;
if (filters.minRating && user.averageRating < filters.minRating) return false;
return true;
});
}
return results;
}
// ==================== RATING & REVIEW SYSTEM ====================
function submitRating(reviewedUserId, rating, review, jobId) {
const reviewer = getCurrentUser();
if (!reviewer) return;
const users = getUsers();
const reviewedUser = users.find(u => u.id === reviewedUserId);
if (!reviewedUser) return;
const newRating = {
id: generateId(),
reviewerId: reviewer.id,
reviewerName: reviewer.name,
rating: rating,
review: review,
jobId: jobId,
createdAt: new Date().toISOString()
};
reviewedUser.ratings.push(newRating);
// Calculate average rating
const totalRating = reviewedUser.ratings.reduce((sum, r) => sum + r.rating, 0);
reviewedUser.averageRating = totalRating / reviewedUser.ratings.length;
if (reviewedUser.userType === 'worker') {
reviewedUser.jobsCompleted = (reviewedUser.jobsCompleted || 0) + 1;
}
saveUser(reviewedUser);
addNotification(reviewedUserId, `${reviewer.name} rated you ${rating} stars: ${review}`, 'rating');
showToast('Rating submitted successfully!', 'success');
}
// ==================== ICON STATUS SYSTEM ====================
function updateWorkerStatus(status, unavailability = null) {
const user = getCurrentUser();
if (!user || user.userType !== 'worker') return;
user.status = status;
user.unavailability = unavailability;
saveUser(user);
showToast(`Status updated to ${status}`, 'success');
// Refresh dashboard
if (document.getElementById('worker-dashboard').classList.contains('active')) {
loadDashboard();
}
}
function getStatusIcon(user) {
if (user.userType !== 'worker') return null;
if (user.currentJobId) {
return { icon: '🔴 ', text: 'Currently Assigned', color: '#dc3545' };
} else if (user.status === 'unavailable' && user.unavailability) {
return { icon: '🟡 ', text: `Unavailable: ${user.unavailability.reason}`, color: '#ﬀc107' };
} else {
return { icon: '🟢 ', text: 'Available for Work', color: '#28a745' };
}
}
// ==================== LOCATION-BASED SEARCH ====================
function getNearbyWorkers(radius = 10) {
const currentUser = getCurrentUser();
if (!currentUser || currentUser.userType !== 'employer') return [];
const users = getUsers();
const workers = users.filter(u => u.userType === 'worker' && u.verified && u.status !==
'assigned');
return workers.map(worker => {
const distance = calculateDistance(
currentUser.profile.locationLat, currentUser.profile.locationLng,
worker.profile.locationLat, worker.profile.locationLng
);
return { worker, distance };
}).filter(w => w.distance <= radius).sort((a, b) => a.distance - b.distance);
}
// ==================== DASHBOARD & UI RENDERING ====================
function loadDashboard() {
const user = getCurrentUser();
if (!user) return;
if (user.userType === 'worker') {
renderWorkerDashboard(user);
} else {
renderEmployerDashboard(user);
}
updateNotificationBadge();
}
function renderWorkerDashboard(user) {
const container = document.getElementById('worker-dashboard');
if (!container) return;
const recommendedJobs = getRecommendedJobsForWorker(user);
const nearbyJobs = recommendedJobs.slice(0, 5);
const statusIcon = getStatusIcon(user);
container.innerHTML = `
<div class="dashboard-header">
<div class="user-info">
<img src="${user.profile.photo}" alt="${user.name}" class="profile-avatar">
<div class="user-details">
<h2>${user.name}</h2>
<p class="profession">${user.profile.profession || 'Professional'}</p>
${statusIcon ? `<span class="status-badge" style="background: $
{statusIcon.color}">${statusIcon.icon} ${statusIcon.text}</span>` : ''}
${user.verificationBadge ? '<span class="verified-badge">✓ Verified</span>' : ''}
</div>
</div>
<div class="stats">
<div class="stat">
<span class="stat-value">${user.averageRating.toFixed(1)}</span>
<span class="stat-label">Rating</span>
</div>
<div class="stat">
<span class="stat-value">${user.jobsCompleted || 0}</span>
<span class="stat-label">Jobs Completed</span>
</div>
<div class="stat">
<span class="stat-value">₹${user.profile.expectedSalary}</span>
<span class="stat-label">Expected</span>
</div>
</div>
</div>
<div class="status-controls">
<h3>Availability Status</h3>
<div class="status-buttons">
<button onclick="updateWorkerStatus('available', null)" class="btn-small ${user.status
=== 'available' ? 'active' : ''}">Available</button>
<button onclick="showUnavailabilityModal()" class="btn-small ${user.status ===
'unavailable' ? 'active' : ''}">Set Unavailable</button>
</div>
</div>
<div class="recommended-section">
<h3>Recommended Jobs For You</h3>
<div class="jobs-grid">
${recommendedJobs.slice(0, 6).map(m => `
<div class="job-card" onclick="loadJobDetails('${m.job.id}')">
<h4>${m.job.title}</h4>
<p class="salary">₹${m.job.salary}/${m.job.salaryType}</p>
<p class="location">📍 ${m.job.location}</p>
<p class="hours">⏰ ${m.job.workingHours}</p>
<div class="match-score">${Math.round(m.matchScore)}% Match</div>
<button class="btn-primary btn-small" onclick="event.stopPropagation();
applyForJob('${m.job.id}')">Apply Now</button>
</div>
`).join('')}
</div>
</div>
<div class="nearby-section">
<h3>Nearby Jobs</h3>
<div class="jobs-list">
${nearbyJobs.map(m => `
<div class="job-list-item" onclick="loadJobDetails('${m.job.id}')">
<div class="job-info">
<strong>${m.job.title}</strong>
<span>₹${m.job.salary}/${m.job.salaryType}</span>
<span>📍 ${m.job.location}</span>
</div>
<button class="btn-outline btn-small" onclick="event.stopPropagation();
applyForJob('${m.job.id}')">Apply</button>
</div>
`).join('')}
</div>
</div>
<div class="applied-jobs-section">
<h3>Your Applications</h3>
<div class="jobs-list">
${user.appliedJobs.map(jobId => {
const job = getJobs().find(j => j.id === jobId);
if (!job) return '';
return `
<div class="job-list-item" onclick="loadJobDetails('${job.id}')">
<div class="job-info">
<strong>${job.title}</strong>
<span>₹${job.salary}/${job.salaryType}</span>
<span>Status: ${job.hiredWorkerId === user.id ? 'Hired ✓' : (job.status ===
'filled' ? 'Filled' : 'Under Review')}</span>
</div>
</div>
`;
}).join('')}
</div>
</div>
`;
}
function renderEmployerDashboard(user) {
const container = document.getElementById('employer-dashboard');
if (!container) return;
const myJobs = getJobs().filter(job => job.employerId === user.id);
const activeJobs = myJobs.filter(job => job.status === 'active');
const filledJobs = myJobs.filter(job => job.status === 'filled');
container.innerHTML = `
<div class="dashboard-header">
<div class="user-info">
<img src="${user.profile.photo}" alt="${user.name}" class="profile-avatar">
<div class="user-details">
<h2>${user.name}</h2>
<p>${user.profile.company || 'Individual'}</p>
${user.verificationBadge ? '<span class="verified-badge">✓ Verified</span>' : ''}
</div>
</div>
<div class="stats">
<div class="stat">
<span class="stat-value">${myJobs.length}</span>
<span class="stat-label">Total Jobs</span>
</div>
<div class="stat">
<span class="stat-value">${activeJobs.length}</span>
<span class="stat-label">Active Jobs</span>
</div>
</div>
<button class="btn-primary" onclick="navigateTo('post-job')">+ Post New Job</button>
</div>
<div class="active-jobs-section">
<h3>Active Jobs</h3>
<div class="jobs-grid">
${activeJobs.map(job => `
<div class="job-card" onclick="loadJobDetails('${job.id}')">
<h4>${job.title}</h4>
<p class="salary">₹${job.salary}/${job.salaryType}</p>
<p class="location">📍 ${job.location}</p>
<p class="applicants">📝 ${job.applicants.length} applicants</p>
<button class="btn-primary btn-small" onclick="event.stopPropagation();
loadJobDetails('${job.id}')">View Details</button>
</div>
`).join('')}
</div>
</div>
<div class="filled-jobs-section">
<h3>Filled Jobs</h3>
<div class="jobs-list">
${filledJobs.map(job => {
const worker = getUsers().find(u => u.id === job.hiredWorkerId);
return `
<div class="job-list-item">
<div class="job-info">
<strong>${job.title}</strong>
<span>Hired: ${worker ? worker.name : 'Worker'}</span>
</div>
'${job.id}')">Message</button>
</div>
<button class="btn-outline btn-small" onclick="startChat('${job.hiredWorkerId}',
`;
}).join('')}
</div>
</div>
<div class="nearby-workers-section">
<h3>Nearby Workers</h3>
<div class="workers-grid">
${getNearbyWorkers(10).slice(0, 6).map(({worker, distance}) => `
<div class="worker-card" onclick="viewWorkerProfile('${worker.id}')">
<img src="${worker.profile.photo}" alt="${worker.name}" class="worker-avatar">
<h4>${worker.name}</h4>
<p class="profession">${worker.profile.profession}</p>
<p class="rating">⭐ ${worker.averageRating.toFixed(1)}</p>
<p class="distance">📍 ${distance.toFixed(1)} km away</p>
<button class="btn-primary btn-small" onclick="event.stopPropagation();
startChat('${worker.id}')">Contact</button>
</div>
`).join('')}
</div>
</div>
`;
}
function loadJobDetails(jobId) {
const user = getCurrentUser();
if (!user) return;
const jobs = getJobs();
const job = jobs.find(j => j.id === jobId);
if (!job) return;
const employer = getUsers().find(u => u.id === job.employerId);
const hasApplied = user.userType === 'worker' && user.appliedJobs.includes(jobId);
const isHired = job.hiredWorkerId === user.id;
const container = document.getElementById('job-details');
if (!container) return;
container.innerHTML = `
<div class="job-detail-header">
<h2>${job.title}</h2>
<span class="job-status ${job.status}">${job.status}</span>
</div>
<div class="job-detail-info">
<div class="info-row">
<span class="label">Salary:</span>
<span class="value">₹${job.salary}/${job.salaryType}</span>
</div>
<div class="info-row">
<span class="label">Location:</span>
<span class="value">📍 ${job.location}</span>
</div>
<div class="info-row">
<span class="label">Working Hours:</span>
<span class="value">⏰ ${job.workingHours}</span>
</div>
<div class="info-row">
<span class="label">Job Type:</span>
<span class="value">${job.jobType}</span>
</div>
<div class="info-row">
<span class="label">Posted by:</span>
<span class="value">${employer ? employer.name : 'Unknown'}</span>
</div>
${job.requirements.gender !== 'any' ? `
<div class="info-row">
<span class="label">Preference:</span>
<span class="value">${job.requirements.gender === 'male' ? '👨 Female'}</span>
</div>
` : ''}
</div>
Male' : '👩
<div class="job-description">
<h3>Description</h3>
<p>${job.description}</p>
</div>
<div class="job-requirements">
<h3>Requirements</h3>
<ul>
</ul>
</div>
<li>Experience: ${job.requirements.minExperience || 'Not specified'}</li>
<li>Skills: ${(job.requirements.skills || []).join(', ')}</li>
<li>Languages: ${(job.requirements.languages || []).join(', ')}</li>
<div class="job-applicants" id="job-applicants-section">
<h3>Applicants (${job.applicants.length})</h3>
<div class="applicants-list">
${job.applicants.map(applicantId => {
const applicant = getUsers().find(u => u.id === applicantId);
if (!applicant) return '';
return `
<div class="applicant-card">
<img src="${applicant.profile.photo}" alt="${applicant.name}" class="applicant-
avatar">
<div class="applicant-info">
<strong>${applicant.name}</strong>
<p>${applicant.profile.profession}</p>
<p>⭐ ${applicant.averageRating.toFixed(1)} | Experience: $
{applicant.profile.experience}</p>
<p>Expected: ₹${applicant.profile.expectedSalary}</p>
</div>
<div class="applicant-actions">
<button class="btn-outline btn-small" onclick="viewWorkerProfile('$
{applicant.id}')">View Profile</button>
${user.userType === 'employer' && job.status === 'active' && !
job.hiredWorkerId ?
`<button class="btn-primary btn-small" onclick="hireWorker('${job.id}', '$
{applicant.id}')">Hire</button>` : ''}
<button class="btn-outline btn-small" onclick="startChat('${applicant.id}', '$
{job.id}')">Message</button>
</div>
</div>
`;
}).join('')}
</div>
</div>
<div class="job-actions">
${user.userType === 'worker' && !hasApplied && !isHired && job.status === 'active' ?
`<button class="btn-primary" onclick="applyForJob('${job.id}')">Apply for this Job</
button>` : ''}
${user.userType === 'worker' && hasApplied ?
`<button class="btn-secondary" disabled>Applied ✓</button>` : ''}
${user.userType === 'worker' && isHired ?
`<button class="btn-success">Hired! 🎉 </button>` : ''}
${user.userType === 'employer' && job.employerId === user.id ?
`<button class="btn-outline" onclick="editJob('${job.id}')">Edit Job</button>
<button class="btn-danger" onclick="deleteJob('${job.id}')">Delete Job</button>` : ''}
</div>
`;
navigateTo('job-details');
}
function viewWorkerProfile(workerId) {
const worker = getUsers().find(u => u.id === workerId);
if (!worker) return;
const statusIcon = getStatusIcon(worker);
const container = document.getElementById('worker-profile-view');
if (!container) return;
container.innerHTML = `
<div class="profile-header">
<img src="${worker.profile.photo}" alt="${worker.name}" class="profile-avatar-large">
<div class="profile-info">
<h2>${worker.name}</h2>
<p class="profession">${worker.profile.profession}</p>
${statusIcon ? `<span class="status-badge" style="background: ${statusIcon.color}">$
{statusIcon.icon} ${statusIcon.text}</span>` : ''}
${worker.verificationBadge ? '<span class="verified-badge">✓ Verified Professional</
span>' : ''}
</div>
<div class="profile-rating">
<span class="rating-stars">⭐ ${worker.averageRating.toFixed(1)}</span>
<span class="rating-count">(${worker.ratings.length} reviews)</span>
</div>
</div>
<div class="profile-details">
<div class="details-grid">
<div class="detail-card">
<h4>Experience</h4>
<p>${worker.profile.experience || 'Not specified'}</p>
</div>
<div class="detail-card">
<h4>Expected Salary</h4>
<p>₹${worker.profile.expectedSalary}/month</p>
</div>
<div class="detail-card">
<h4>Working Hours</h4>
<p>${worker.profile.workingHours}</p>
</div>
<div class="detail-card">
<h4>Location</h4>
<p>📍 ${worker.profile.location}</p>
</div>
</div>
<div class="skills-section">
<h3>Skills & Expertise</h3>
<div class="skills-list">
${(worker.profile.skills || []).map(skill => `<span class="skill-tag">${skill}</
span>`).join('')}
</div>
</div>
<div class="bio-section">
<h3>About</h3>
<p>${worker.profile.bio || 'No bio provided'}</p>
</div>
<div class="reviews-section">
<h3>Reviews from Employers</h3>
<div class="reviews-list">
${worker.ratings.slice(0, 5).map(rating => `
<div class="review-card">
<div class="review-header">
<strong>${rating.reviewerName}</strong>
<span class="rating">${'⭐ '.repeat(rating.rating)}</span>
</div>
<p>${rating.review}</p>
<small>${new Date(rating.createdAt).toLocaleDateString()}</small>
</div>
`).join('')}
${worker.ratings.length === 0 ? '<p>No reviews yet</p>' : ''}
</div>
</div>
</div>
<div class="profile-actions">
<button class="btn-primary" onclick="startChat('${worker.id}')">Send Message</button>
${getCurrentUser().userType === 'employer' ?
`<button class="btn-outline" onclick="navigateTo('post-job')">Post Job for $
{worker.profile.profession}</button>` : ''}
</div>
`;
navigateTo('worker-profile-view');
}
function renderChats() {
const user = getCurrentUser();
if (!user) return;
const container = document.getElementById('chats-list');
if (!container) return;
const usersList = getUsers();
const chatsWithDetails = user.chats.map(chat => {
const otherUser = usersList.find(u => u.id === chat.userId);
const lastMessage = getChatMessages(chat.userId, chat.jobId).pop();
const job = chat.jobId ? getJobs().find(j => j.id === chat.jobId) : null;
return {
...chat,
otherUser,
lastMessage,
job
};
}).sort((a, b) => new Date(b.lastMessageAt) - new Date(a.lastMessageAt));
container.innerHTML = `
<div class="chats-header">
<h3>Messages</h3>
</div>
<div class="chats-list-container">
${chatsWithDetails.map(chat => `
<div class="chat-item" onclick="openChat('${chat.userId}', '${chat.jobId || ''}')">
<img src="${chat.otherUser?.profile?.photo || 'https://via.placeholder.com/50'}"
alt="${chat.otherUser?.name}">
<div class="chat-info">
<div class="chat-name">${chat.otherUser?.name || 'Unknown User'}</div>
<div class="chat-preview">${chat.lastMessage?.message?.substring(0, 50) || 'No
messages yet'}</div>
${chat.job ? `<div class="chat-job">📋 ${chat.job.title}</div>` : ''}
</div>
<div class="chat-time">
${chat.lastMessage ? new Date(chat.lastMessage.createdAt).toLocaleTimeString([],
{hour:'2-digit', minute:'2-digit'}) : ''}
</div>
</div>
`).join('')}
${chatsWithDetails.length === 0 ? '<p class="no-chats">No conversations yet. Apply for
jobs or contact workers to start chatting!</p>' : ''}
</div>
`;
}
function openChat(userId, jobId = null) {
const currentUser = getCurrentUser();
if (!currentUser) return;
const otherUser = getUsers().find(u => u.id === userId);
if (!otherUser) return;
const job = jobId ? getJobs().find(j => j.id === jobId) : null;
markMessagesAsRead(userId);
renderChatMessages(userId, jobId);
const chatContainer = document.getElementById('chat-container');
if (chatContainer) {
chatContainer.classList.add('active');
chatContainer.dataset.userId = userId;
chatContainer.dataset.jobId = jobId || '';
 chatContainer.innerHTML = `
<div class="chat-header">
<button class="back-btn" onclick="closeChat()">←</button>
<img src="${otherUser.profile?.photo || 'https://via.placeholder.com/40'}" alt="$
{otherUser.name}">
<div class="chat-header-info">
<strong>${otherUser.name}</strong>
${job ? `<p class="chat-job-ref">Job: ${job.title}</p>` : ''}
</div>
</div>
<div class="chat-messages" id="chat-messages">
<!-- Messages will be loaded here -->
</div>
<div class="chat-input-area">
<textarea id="chat-input" placeholder="Type your message..." rows="2"></textarea>
<button class="btn-primary" onclick="sendChatMessage()">Send</button>
</div>
`;
renderChatMessages(userId, jobId);
}
}
function renderChatMessages(userId, jobId = null) {
const messagesContainer = document.getElementById('chat-messages');
if (!messagesContainer) return;
const messages = getChatMessages(userId, jobId);
const currentUser = getCurrentUser();
const otherUser = getUsers().find(u => u.id === userId);
messagesContainer.innerHTML = messages.map(msg => `
<div class="chat-message ${msg.senderId === currentUser.id ? 'sent' : 'received'}">
<div class="message-bubble">
<p>${escapeHtml(msg.message)}</p>
<small>${new Date(msg.createdAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-
digit'})}</small>
</div>
</div>
`).join('');
messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function sendChatMessage() {
const input = document.getElementById('chat-input');
const message = input.value.trim();
if (!message) return;
const chatContainer = document.getElementById('chat-container');
const userId = chatContainer?.dataset.userId;
const jobId = chatContainer?.dataset.jobId;
if (userId) {
sendMessage(userId, message, jobId || null);
input.value = '';
renderChatMessages(userId, jobId);
}
}
function closeChat() {
const chatContainer = document.getElementById('chat-container');
if (chatContainer) {
chatContainer.classList.remove('active');
}
}
function renderNotifications() {
const user = getCurrentUser();
if (!user) return;
const container = document.getElementById('notifications-list');
if (!container) return;
container.innerHTML = `
<div class="notifications-header">
<h3>Notifications</h3>
<button class="btn-text" onclick="clearAllNotifications()">Clear All</button>
</div>
<div class="notifications-container">
${user.notifications.map(notif => `
<div class="notification-item ${notif.read ? 'read' : 'unread'}"
onclick="markNotificationAsRead('${notif.id}')">
<div class="notification-icon ${notif.type}">
${notif.type === 'match' ? '🎯 ' : notif.type === 'success' ? '✓' : notif.type ===
'message' ? '💬 ' : '📢 '}
</div>
<div class="notification-content">
<p>${notif.message}</p>
<small>${formatTimeAgo(notif.createdAt)}</small>
</div>
</div>
`).join('')}
${user.notifications.length === 0 ? '<p class="no-notifications">No notifications yet</p>' :
</div>
''}
}
`;
function renderSearchResults() {
const query = document.getElementById('search-input')?.value || '';
const results = performSearch(query);
const user = getCurrentUser();
const container = document.getElementById('search-results');
if (!container) return;
if (user.userType === 'worker') {
container.innerHTML = `
<div class="search-header">
<h3>Search Results for "${query || 'all jobs'}"</h3>
<p>${results.length} jobs found</p>
</div>
<div class="jobs-grid">
${results.map(job => `
<div class="job-card" onclick="loadJobDetails('${job.id}')">
<h4>${job.title}</h4>
<p class="salary">₹${job.salary}/${job.salaryType}</p>
<p class="location">📍 ${job.location}</p>
<p class="hours">⏰ ${job.workingHours}</p>
<button class="btn-primary btn-small" onclick="event.stopPropagation();
applyForJob('${job.id}')">Apply Now</button>
</div>
`).join('')}
</div>
`;
} else {
container.innerHTML = `
<div class="search-header">
<h3>Search Results for "${query || 'all workers'}"</h3>
<p>${results.length} workers found</p>
</div>
<div class="workers-grid">
${results.map(worker => `
<div class="worker-card" onclick="viewWorkerProfile('${worker.id}')">
<img src="${worker.profile.photo}" alt="${worker.name}" class="worker-avatar">
<h4>${worker.name}</h4>
<p class="profession">${worker.profile.profession}</p>
<p class="rating">⭐ ${worker.averageRating.toFixed(1)}</p>
<p class="salary">Expected: ₹${worker.profile.expectedSalary}</p>
<button class="btn-primary btn-small" onclick="event.stopPropagation();
startChat('${worker.id}')">Contact</button>
</div>
`).join('')}
</div>
`;
}
}
function renderSubscriptionPage() {
const user = getCurrentUser();
if (!user) return;
const container = document.getElementById('subscription-content');
if (!container) return;
const isSubscribed = user.subscription?.active;
const daysLeft = isSubscribed ? Math.ceil((new Date(user.subscription.endDate) - new Date()) /
(1000 * 60 * 60 * 24)) : 0;
container.innerHTML = `
<div class="subscription-header">
<h2>QuickKaam Premium</h2>
<p>Get matched faster, apply to more jobs, and boost your profile visibility</p>
</div>
${isSubscribed ? `
<div class="subscription-status active">
<div class="status-badge">✓ Active Subscription</div>
<p>Your subscription is active until ${new
Date(user.subscription.endDate).toLocaleDateString()}</p>
<p>${daysLeft} days remaining</p>
<button class="btn-outline" onclick="cancelSubscription()">Cancel Subscription</
button>
</div>
` : `
<div class="subscription-plan">
<div class="plan-card featured">
<h3>3 Months Premium</h3>
<div class="price">₹100 <span>/ 3 months</span></div>
<ul class="benefits">
<li>✓ Unlimited job applications</li>
<li>✓ Priority in search results</li>
<li>✓ Instant match notifications</li>
<li>✓ Verified badge eligibility</li>
<li>✓ Advanced search filters</li>
<li>✓ Priority chat support</li>
</ul>
<button class="btn-primary btn-large" onclick="purchaseSubscription()">Subscribe
Now</button>
</div>
</div>
`}
<div class="subscription-features">
<h3>Why go Premium?</h3>
<div class="features-grid">
<div class="feature">
<span class="feature-icon">🎯 </span>
<h4>Better Matches</h4>
<p>Get priority in matching algorithm</p>
</div>
<div class="feature">
<span class="feature-icon">⚡ </span>
<h4>Instant Alerts</h4>
<p>Real-time notifications for matching jobs</p>
</div>
<div class="feature">
<span class="feature-icon">🏆 </span>
<h4>Verification Badge</h4>
<p>Build trust with verified status</p>
</div>
<div class="feature">
<span class="feature-icon">💬 </span>
<h4>Priority Support</h4>
<p>Fast response from support team</p>
</div>
</div>
</div>
`;
}
function renderSettingsPage() {
const user = getCurrentUser();
if (!user) return;
const container = document.getElementById('settings-content');
if (!container) return;
container.innerHTML = `
<div class="settings-section">
<h3>Account Information</h3>
<form id="account-settings-form" class="settings-form">
<div class="form-group">
<label>Name</label>
<input type="text" id="settings-name" value="${user.name}">
</div>
<div class="form-group">
<label>Email</label>
<input type="email" id="settings-email" value="${user.email}" disabled>
</div>
<div class="form-group">
<label>Phone</label>
<input type="tel" id="settings-phone" value="${user.phone}">
</div>
<div class="form-group">
<label>Profile Photo URL</label>
<input type="text" id="settings-photo" value="${user.profile.photo}">
</div>
<button type="submit" class="btn-primary">Save Changes</button>
</form>
</div>
<div class="settings-section">
<h3>Notification Preferences</h3>
<div class="toggle-group">
<label>
</label>
<label>
</label>
<label>
</label>
</div>
</div>
<input type="checkbox" id="notify-matches" checked> Job Match Alerts
<input type="checkbox" id="notify-messages" checked> New Message Alerts
<input type="checkbox" id="notify-applications" checked> Application Updates
<div class="settings-section">
<h3>Privacy & Security</h3>
<form id="password-form" class="settings-form">
<div class="form-group">
<label>New Password</label>
<input type="password" id="new-password" placeholder="Enter new password">
</div>
<div class="form-group">
<label>Confirm Password</label>
<input type="password" id="confirm-password" placeholder="Confirm new
password">
</div>
</form>
</div>
<button type="submit" class="btn-outline">Update Password</button>
<div class="settings-section">
<h3>App Preferences</h3>
<div class="form-group">
<label>Language</label>
<select id="app-language">
<option value="en">English</option>
<option value="hi">िह ं दी (Hindi)</option>
</select>
</div>
<div class="form-group">
<label>Location Access</label>
<select id="location-access">
<option value="always">Always Allow</option>
<option value="while-using">While Using the App</option>
<option value="never">Never</option>
</select>
</div>
</div>
<div class="settings-section">
<h3>Support</h3>
<button class="btn-outline" onclick="showHelp()">Help Center</button>
<button class="btn-outline" onclick="reportProblem()">Report a Problem</button>
<button class="btn-danger" onclick="logout()">Logout</button>
</div>
`;
document.getElementById('account-settings-form').addEventListener('submit', (e) => {
e.preventDefault();
user.name = document.getElementById('settings-name').value;
user.phone = document.getElementById('settings-phone').value;
user.profile.photo = document.getElementById('settings-photo').value;
saveUser(user);
showToast('Settings saved!', 'success');
});
document.getElementById('password-form').addEventListener('submit', (e) => {
e.preventDefault();
const newPass = document.getElementById('new-password').value;
const confirmPass = document.getElementById('confirm-password').value;
if (newPass && newPass === confirmPass) {
user.password = newPass;
saveUser(user);
showToast('Password updated!', 'success');
document.getElementById('password-form').reset();
} else if (newPass) {
showToast('Passwords do not match', 'error');
}
});
}
// ==================== UTILITY FUNCTIONS ====================
function escapeHtml(text) {
const div = document.createElement('div');
div.textContent = text;
return div.innerHTML;
}
function formatTimeAgo(dateString) {
const date = new Date(dateString);
const now = new Date();
const seconds = Math.floor((now - date) / 1000);
if (seconds < 60) return 'just now';
const minutes = Math.floor(seconds / 60);
if (minutes < 60) return `${minutes}m ago`;
const hours = Math.floor(minutes / 60);
if (hours < 24) return `${hours}h ago`;
const days = Math.floor(hours / 24);
if (days < 7) return `${days}d ago`;
return date.toLocaleDateString();
}
function startChat(userId, jobId = null) {
openChat(userId, jobId);
navigateTo('messages');
}
function showUnavailabilityModal() {
const reason = prompt('Why are you unavailable? (e.g., Personal Work, Traveling, Medical
Leave)');
if (reason) {
const hours = prompt('How many hours/days will you be unavailable? (e.g., 2 days, 3
hours)');
updateWorkerStatus('unavailable', { reason, duration: hours });
}
}
function navigateTo(pageId) {
document.querySelectorAll('.page').forEach(page => {
page.classList.remove('active');
});
const targetPage = document.getElementById(pageId);
if (targetPage) {
targetPage.classList.add('active');
}
// Load page-specific content
if (pageId === 'worker-dashboard' || pageId === 'employer-dashboard') {
loadDashboard();
} else if (pageId === 'search') {
renderSearchResults();
} else if (pageId === 'messages') {
renderChats();
} else if (pageId === 'notifications') {
renderNotifications();
} else if (pageId === 'subscription') {
renderSubscriptionPage();
} else if (pageId === 'settings') {
renderSettingsPage();
}
}
// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
const currentUser = getCurrentUser();
if (currentUser) {
if (currentUser.userType === 'worker') {
navigateTo('worker-dashboard');
} else {
navigateTo('employer-dashboard');
}
} else {
navigateTo('welcome');
}
// Setup search input listener
const searchInput = document.getElementById('search-input');
if (searchInput) {
searchInput.addEventListener('input', debounce(() => {
if (document.getElementById('search').classList.contains('active')) {
renderSearchResults();
}
}, 300));
}
// Setup mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
menuToggle.addEventListener('click', () => {
document.querySelector('.bottom-nav').classList.toggle('expanded');
});
}
});
function debounce(func, wait) {
let timeout;
return function executedFunction(...args) {
const later = () => {
clearTimeout(timeout);
func(...args);
};
clearTimeout(timeout);
timeout = setTimeout(later, wait);
};
}
// ==================== EXPOSE FUNCTIONS TO GLOBAL SCOPE
====================
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.logout = logout;
window.completeWorkerProfile = completeWorkerProfile;
window.completeEmployerProfile = completeEmployerProfile;
window.postJob = postJob;
window.applyForJob = applyForJob;
window.hireWorker = hireWorker;
window.loadJobDetails = loadJobDetails;
window.viewWorkerProfile = viewWorkerProfile;
window.startChat = startChat;
window.openChat = openChat;
window.closeChat = closeChat;
window.sendChatMessage = sendChatMessage;
window.purchaseSubscription = purchaseSubscription;
window.updateWorkerStatus = updateWorkerStatus;
window.showUnavailabilityModal = showUnavailabilityModal;
window.navigateTo = navigateTo;
window.markNotificationAsRead = markNotificationAsRead;
window.clearAllNotifications = clearAllNotifications;
window.renderSearchResults = renderSearchResults;
window.showHelp = () => showToast('Help Center: Contact support@quickkaam.com', 'info');
window.reportProblem = () => showToast('Report submitted. Our team will review it.', 'info');
window.cancelSubscription = () => showToast('Subscription cancellation is not available yet.
Contact support.', 'warning');
window.deleteJob = (jobId) => {
if (confirm('Are you sure you want to delete this job?')) {
const jobs = getJobs();
const filteredJobs = jobs.filter(j => j.id !== jobId);
saveJobs(filteredJobs);
showToast('Job deleted successfully', 'success');
loadDashboard();
navigateTo('employer-dashboard');
}
};
window.editJob = (jobId) => {
showToast('Edit feature coming soon', 'info');
};
// Add CSS for all dynamic elements
const style = document.createElement('style');
style.textContent = `
.toast { background: white; border-radius: 8px; padding: 12px 16px; margin-bottom: 8px; box-
shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: space-
between; min-width: 250px; animation: slideIn 0.3s ease; }
.toast-success { border-left: 4px solid #28a745; }
.toast-error { border-left: 4px solid #dc3545; }
.toast-info { border-left: 4px solid #17a2b8; }
.toast-warning { border-left: 4px solid #ﬀc107; }
.toast-close { background: none; border: none; font-size: 20px; cursor: pointer; color: #999; }
@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform:
translateX(0); opacity: 1; } }
.status-badge { display: inline-block; padding: 4px 8px; border-radius: 20px; font-size: 12px;
font-weight: 500; margin-left: 8px; }
.verified-badge { display: inline-block; background: #28a745; color: white; padding: 2px 8px;
border-radius: 20px; font-size: 11px; margin-left: 8px; }
.job-card, .worker-card { background: white; border-radius: 12px; padding: 16px; box-shadow:
0 2px 8px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
.job-card:hover, .worker-card:hover { transform: translateY(-2px); box-shadow: 0 4px 12px
rgba(0,0,0,0.15); }
.match-score { background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 20px;
font-size: 12px; display: inline-block; margin-top: 8px; }
.applicant-card { display: flex; gap: 16px; padding: 16px; background: #f8f9fa; border-radius:
12px; margin-bottom: 12px; align-items: center; flex-wrap: wrap; }
.applicant-avatar { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
.chat-container { position: fixed; bottom: 0; right: 0; width: 350px; height: 500px; background:
white; border-radius: 12px 12px 0 0; box-shadow: 0 -2px 20px rgba(0,0,0,0.1); display: none; flex-
direction: column; z-index: 1000; }
.chat-container.active { display: flex; }
.chat-header { display: flex; align-items: center; gap: 12px; padding: 12px; border-bottom: 1px
solid #e9ecef; background: #f8f9fa; border-radius: 12px 12px 0 0; }
.chat-messages { flex: 1; overflow-y: auto; padding: 16px; display: flex; flex-direction: column;
gap: 12px; }
.chat-message { display: flex; }
.chat-message.sent { justify-content: flex-end; }
.chat-message.received { justify-content: flex-start; }
.message-bubble { max-width: 80%; padding: 10px 14px; border-radius: 18px; background:
#f1f3f5; }
.chat-message.sent .message-bubble { background: #007bﬀ; color: white; }
.chat-input-area { display: flex; gap: 8px; padding: 12px; border-top: 1px solid #e9ecef; }
.chat-input-area textarea { flex: 1; border: 1px solid #ddd; border-radius: 20px; padding: 8px
16px; resize: none; font-family: inherit; }
.notification-item { display: flex; gap: 12px; padding: 12px; border-bottom: 1px solid #e9ecef;
cursor: pointer; transition: background 0.2s; }
.notification-item:hover { background: #f8f9fa; }
.notification-item.unread { background: #e3f2fd; }
.notification-icon { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items:
center; justify-content: center; font-size: 20px; }
.workers-grid, .jobs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px,
1fr)); gap: 16px; margin-top: 16px; }
.settings-section { background: white; border-radius: 12px; padding: 20px; margin-bottom:
20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
.settings-form .form-group { margin-bottom: 16px; }
.toggle-group label { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; cursor:
pointer; }
.plan-card { background: white; border-radius: 16px; padding: 24px; text-align: center; box-
shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 400px; margin: 0 auto; }
.plan-card .price { font-size: 36px; font-weight: bold; color: #007bﬀ; margin: 16px 0; }
.plan-card .price span { font-size: 14px; color: #6c757d; }
.benefits { text-align: left; margin: 20px 0; list-style: none; padding: 0; }
.benefits li { padding: 8px 0; border-bottom: 1px solid #e9ecef; }
.features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:
20px; margin-top: 20px; }
.feature { text-align: center; padding: 20px; background: #f8f9fa; border-radius: 12px; }
.feature-icon { font-size: 32px; display: block; margin-bottom: 10px; }
@media (max-width: 768px) { .chat-container { width: 100%; right: 0; height: 80vh; } .workers-
grid, .jobs-grid { grid-template-columns: 1fr; } }
`;
document.head.appendChild(style);
