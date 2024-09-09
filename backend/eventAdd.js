const mongoose = require('mongoose');
const Event = require('./models/eventModel');  // Adjust the path as needed

mongoose.connect('mongodb://localhost:27017/alumniDB', { useNewUrlParser: true, useUnifiedTopology: true });

const events = [
    {
        Event_ID: '001',
        Event_Name: "MUJ Alumni Meet 2024",
        Event_Date: new Date('2024-01-20'),
        Event_Venue: "Manipal University Jaipur Campus",
        Event_Summary: "Reconnect with fellow alumni, share experiences, and network with professionals from different fields. This grand event includes panel discussions, workshops, and a cultural evening to celebrate the bond we share as MUJ alumni."
    },
    {
        Event_ID: '002',
        Event_Name: "MUJ Cultural Fest - Oneiros 2024",
        Event_Date: new Date('2024-04-12'),
        Event_Venue: "Manipal University Jaipur Grounds",
        Event_Summary: "MUJ’s most anticipated cultural fest is back! Enjoy an array of cultural performances, art exhibitions, dance competitions, and musical shows. This fest is a great way for current students and alumni to unwind and celebrate the vibrant campus life at MUJ."
    },
    {
        Event_ID: '003',
        Event_Name: "Annual TechFest - TechArc 2024",
        Event_Date: new Date('2024-02-05'),
        Event_Venue: "Manipal University Jaipur",
        Event_Summary: "Join the largest student-organized tech fest in Rajasthan. The event features hackathons, coding challenges, robotic competitions, and seminars from leading tech experts. Students and alumni alike are invited to showcase their skills and learn from the best in the industry."
    },
    {
        Event_ID: '004',
        Event_Name: "MUJ International Conference on Innovation & Entrepreneurship",
        Event_Date: new Date('2024-03-18'),
        Event_Venue: "MUJ Convention Center",
        Event_Summary: "This conference brings together global innovators, entrepreneurs, and industry leaders to discuss emerging trends, share insights, and explore collaborations. Alumni and students are encouraged to attend and participate in networking sessions, keynote addresses, and workshops."
    },
    {
        Event_ID: '005',
        Event_Name: "Tech Innovations Expo 2024",
        Event_Date: new Date('2024-10-15'),
        Event_Venue: "Ramdas Pai Amphitheater",
        Event_Summary: "Explore the latest advancements in technology at the Tech Innovations Expo. Featuring exhibits from top tech companies, interactive demos, and talks by industry leaders, this event provides an excellent platform for networking and learning about cutting-edge technology."
    },
    {
        Event_ID: '006',
        Event_Name: "MUJ Annual Sports Meet 2024",
        Event_Date: new Date('2024-11-10'),
        Event_Venue: "Sharda Pai Auditorium",
        Event_Summary: "Join us for a day of athletic competitions and sportsmanship at the MUJ Annual Sports Meet. This event features various sports tournaments, fitness challenges, and opportunities to cheer for your favorite teams and athletes from MUJ."
    },
    {
        Event_ID: '007',
        Event_Name: "Global Startup Summit 2024",
        Event_Date: new Date('2024-12-05'),
        Event_Venue: "TMA Pai Auditorium",
        Event_Summary: "The Global Startup Summit is a premier event for entrepreneurs, investors, and startups. Attendees can engage in workshops, pitch their ideas, and network with influential figures in the startup ecosystem."
    },
    {
        Event_ID: '008',
        Event_Name: "MUJ Research Symposium 2024",
        Event_Date: new Date('2024-10-25'),
        Event_Venue: "Vasant Pai Auditorium",
        Event_Summary: "Discover groundbreaking research and innovations at the MUJ Research Symposium. The event features presentations by researchers, panel discussions, and opportunities to connect with academic and industry experts."
    },
    {
        Event_ID: '009',
        Event_Name: "Alumni Networking Night 2024",
        Event_Date: new Date('2024-11-20'),
        Event_Venue: "Manipal University Jaipur Campus",
        Event_Summary: "An evening dedicated to connecting alumni with each other and with current students. The event includes networking sessions, guest speeches, and a dinner to foster professional and personal relationships."
    },
    {
        Event_ID: '010',
        Event_Name: "MUJ Art & Music Festival 2024",
        Event_Date: new Date('2024-12-15'),
        Event_Venue: "Manipal University Jaipur Grounds",
        Event_Summary: "Celebrate the artistic and musical talents of MUJ students and alumni at the MUJ Art & Music Festival. Enjoy performances, art installations, and workshops that showcase the vibrant creative community at MUJ."
    },
    {
        Event_ID: '011',
        Event_Name: "Innovation Workshop Series 2024",
        Event_Date: new Date('2024-11-05'),
        Event_Venue: "Manipal University Jaipur Campus",
        Event_Summary: "Participate in a series of workshops designed to spark creativity and innovation. This series includes sessions on design thinking, problem-solving, and emerging technologies."
    },
    {
        Event_ID: '012',
        Event_Name: "Entrepreneurship Bootcamp 2024",
        Event_Date: new Date('2024-12-01'),
        Event_Venue: "Ramdas Pai Amphitheater",
        Event_Summary: "An intensive bootcamp for aspiring entrepreneurs, featuring mentorship from successful founders, business development workshops, and networking opportunities."
    },
    {
        Event_ID: '013',
        Event_Name: "MUJ Science Fair 2024",
        Event_Date: new Date('2024-10-30'),
        Event_Venue: "Sharda Pai Auditorium",
        Event_Summary: "Showcase your scientific projects and innovations at the MUJ Science Fair. The fair includes exhibitions, interactive demos, and awards for outstanding scientific contributions."
    },
    {
        Event_ID: '014',
        Event_Name: "Alumni Talent Show 2024",
        Event_Date: new Date('2024-11-25'),
        Event_Venue: "Vasant Pai Auditorium",
        Event_Summary: "A stage for alumni to display their talents in music, dance, drama, and more. This event is a celebration of the diverse skills and achievements of MUJ alumni."
    },
    {
        Event_ID: '015',
        Event_Name: "Global Tech Conference 2024",
        Event_Date: new Date('2024-12-10'),
        Event_Venue: "TMA Pai Auditorium",
        Event_Summary: "A major tech conference featuring keynotes from industry leaders, workshops on emerging technologies, and networking opportunities with tech professionals."
    },
    {
        Event_ID: '016',
        Event_Name: "Cultural Exchange Program 2024",
        Event_Date: new Date('2024-11-15'),
        Event_Venue: "MUJ Convention Center",
        Event_Summary: "Engage in a cultural exchange program that fosters understanding and collaboration between students from different countries. The program includes cultural performances, workshops, and networking sessions."
    }
];

async function addEventEntries() {
    for (const event of events) {
        const newEvent = new Event(event);
        try {
            await newEvent.save();
            console.log(`Event ${event.Event_ID} added successfully.`);
        } catch (error) {
            console.error('Error adding event:', error);
        }
    }
    mongoose.connection.close();
}

addEventEntries();
