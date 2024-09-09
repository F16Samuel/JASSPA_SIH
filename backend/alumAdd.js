const mongoose = require('mongoose');
const Alumni = require('./models/alumniModel');  // Adjust the path as needed

mongoose.connect('mongodb://localhost:27017/alumniDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample data for generating random names, departments, jobs, and companies
const firstNames = ["John", "Emily", "Michael", "Sarah", "David", "Jessica", "Chris", "Amanda", "James", "Ashley", "Brian", "Megan", "William", "Lauren", "Daniel", "Rachel", "Ryan", "Emma", "Joshua", "Olivia"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"];

const departments = [
    "Computer Science Engineering", 
    "Mechanical Engineering", 
    "Artificial Intelligence and Machine Learning", 
    "Electrical Engineering", 
    "Civil Engineering", 
    "Biotechnology", 
    "Chemical Engineering", 
    "Information Technology"
];

const jobs = {
    "Computer Science Engineering": ["Software Engineer", "Data Scientist", "Backend Developer", "Frontend Developer", "DevOps Engineer"],
    "Mechanical Engineering": ["Mechanical Engineer", "Design Engineer", "Automotive Engineer", "Manufacturing Engineer"],
    "Artificial Intelligence and Machine Learning": ["AI Engineer", "Machine Learning Engineer", "Data Analyst", "Deep Learning Specialist"],
    "Electrical Engineering": ["Electrical Engineer", "Power Systems Engineer", "Control Systems Engineer", "Electronics Engineer"],
    "Civil Engineering": ["Civil Engineer", "Structural Engineer", "Construction Manager", "Geotechnical Engineer"],
    "Biotechnology": ["Biotechnologist", "Biomedical Engineer", "Research Scientist", "Clinical Data Manager"],
    "Chemical Engineering": ["Chemical Engineer", "Process Engineer", "Environmental Engineer", "Quality Control Engineer"],
    "Information Technology": ["IT Consultant", "System Administrator", "Network Engineer", "Security Analyst"]
};

const companies = ["Google", "Microsoft", "Amazon", "Tesla", "SpaceX", "Infosys", "Tata Consultancy Services", "Wipro", "Accenture", "Capgemini", "IBM", "JASSPA Codes"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

async function addAlumniEntries() {
    for (let i = 1; i <= 100; i++) {
        const alum_id = `${i.toString().padStart(3, '0')}`;
        const alum_name = `${getRandomElement(firstNames)} ${getRandomElement(lastNames)}`;
        const alum_batch = (Math.floor(Math.random() * (2024 - 2014 + 1)) + 2014).toString();
        const alum_dep = getRandomElement(departments);
        const job = getRandomElement(jobs[alum_dep]);
        const company = getRandomElement(companies);
        const current_position = `${job} at ${company}`;
        
        const newAlumni = new Alumni({
            Alum_ID: alum_id,
            Alum_Name: alum_name,
            Alum_Batch: alum_batch,
            Alum_Dep: alum_dep,
            Current_Position: current_position
        });

        try {
            await newAlumni.save();
            console.log(`Alumni ${alum_id} added successfully.`);
        } catch (error) {
            console.error('Error adding alumni:', error);
        }
    }
    mongoose.connection.close();
}

addAlumniEntries();
