const mongoose = require('mongoose');
const Query = require('./models/queryModel');  // Adjust the path as needed

mongoose.connect('mongodb://localhost:27017/alumniDB', { useNewUrlParser: true, useUnifiedTopology: true });

const queries = [
    { Query_ID: '001', Query_senderName: 'Alice Johnson', Query_senderMail: 'alice.johnson@example.com', Query_Subj: 'Alumni Event Details', Query_Msg: 'Could you provide more details about the upcoming alumni event? I would like to know the schedule and location.' },
    { Query_ID: '002', Query_senderName: 'Bob Smith', Query_senderMail: 'bob.smith@example.com', Query_Subj: 'Updating Contact Information', Query_Msg: 'I need to update my contact information. How can I do that?' },
    { Query_ID: '003', Query_senderName: 'Charlie Davis', Query_senderMail: 'charlie.davis@example.com', Query_Subj: 'Lost Alumni ID', Query_Msg: 'I have lost my alumni ID. What is the procedure to get a replacement?' },
    { Query_ID: '004', Query_senderName: 'Dana Lee', Query_senderMail: 'dana.lee@example.com', Query_Subj: 'Career Guidance', Query_Msg: 'Can you provide career guidance or job placement assistance for alumni?' },
    { Query_ID: '005', Query_senderName: 'Evan Wilson', Query_senderMail: 'evan.wilson@example.com', Query_Subj: 'Feedback on Alumni Website', Query_Msg: 'I have some feedback regarding the alumni website. How can I submit my suggestions?' },
    { Query_ID: '006', Query_senderName: 'Fiona Martinez', Query_senderMail: 'fiona.martinez@example.com', Query_Subj: 'Request for Alumni Directory', Query_Msg: 'I would like to request a copy of the alumni directory. How can I obtain it?' },
    { Query_ID: '007', Query_senderName: 'George Brown', Query_senderMail: 'george.brown@example.com', Query_Subj: 'Alumni Reunion', Query_Msg: 'Is there an upcoming alumni reunion? If so, when and where will it take place?' },
    { Query_ID: '008', Query_senderName: 'Hannah Moore', Query_senderMail: 'hannah.moore@example.com', Query_Subj: 'Volunteer Opportunities', Query_Msg: 'Are there any volunteer opportunities available for alumni?' },
    { Query_ID: '009', Query_senderName: 'Ian Clark', Query_senderMail: 'ian.clark@example.com', Query_Subj: 'Technical Support', Query_Msg: 'I am having trouble accessing my alumni account. Can you assist with technical support?' },
    { Query_ID: '010', Query_senderName: 'Jessica Taylor', Query_senderMail: 'jessica.taylor@example.com', Query_Subj: 'Event Sponsorship', Query_Msg: 'I am interested in sponsoring an upcoming alumni event. How can I get involved?' },
    { Query_ID: '011', Query_senderName: 'Kevin Anderson', Query_senderMail: 'kevin.anderson@example.com', Query_Subj: 'Alumni Scholarship Information', Query_Msg: 'Could you provide information about scholarships available for alumni or their children?' },
    { Query_ID: '012', Query_senderName: 'Laura White', Query_senderMail: 'laura.white@example.com', Query_Subj: 'Network Expansion', Query_Msg: 'How can I expand my professional network through the alumni platform?' },
    { Query_ID: '013', Query_senderName: 'Mark Lewis', Query_senderMail: 'mark.lewis@example.com', Query_Subj: 'Class Reunion', Query_Msg: 'I would like to organize a class reunion. What support is available from the alumni office?' },
    { Query_ID: '014', Query_senderName: 'Nina Harris', Query_senderMail: 'nina.harris@example.com', Query_Subj: 'Guest Speaker Opportunities', Query_Msg: 'I am interested in being a guest speaker at an alumni event. How can I apply?' },
    { Query_ID: '015', Query_senderName: 'Oliver King', Query_senderMail: 'oliver.king@example.com', Query_Subj: 'Alumni Merchandise', Query_Msg: 'Is there any alumni merchandise available for purchase? If so, where can I find it?' },
    { Query_ID: '016', Query_senderName: 'Pamela Young', Query_senderMail: 'pamela.young@example.com', Query_Subj: 'Membership Renewal', Query_Msg: 'How do I renew my alumni membership, and what are the benefits of renewal?' },
    { Query_ID: '017', Query_senderName: 'Quentin Scott', Query_senderMail: 'quentin.scott@example.com', Query_Subj: 'Alumni Networking Events', Query_Msg: 'Are there any upcoming networking events specifically for alumni?' },
    { Query_ID: '018', Query_senderName: 'Rachel Adams', Query_senderMail: 'rachel.adams@example.com', Query_Subj: 'Update Alumni Profile', Query_Msg: 'How can I update my alumni profile with new achievements and experiences?' },
    { Query_ID: '019', Query_senderName: 'Steve Nelson', Query_senderMail: 'steve.nelson@example.com', Query_Subj: 'Alumni Benefits', Query_Msg: 'Can you provide a list of benefits and services available to alumni?' },
    { Query_ID: '020', Query_senderName: 'Tina Carter', Query_senderMail: 'tina.carter@example.com', Query_Subj: 'Alumni Newsletter Subscription', Query_Msg: 'I would like to subscribe to the alumni newsletter. How can I sign up?' },
    { Query_ID: '021', Query_senderName: 'Ursula Bell', Query_senderMail: 'ursula.bell@example.com', Query_Subj: 'Request for Alumni Mentorship', Query_Msg: 'I am looking for a mentor among the alumni. Is there a mentorship program available?' },
    { Query_ID: '022', Query_senderName: 'Victor Adams', Query_senderMail: 'victor.adams@example.com', Query_Subj: 'Alumni Advisory Board', Query_Msg: 'How can I get involved with the alumni advisory board?' },
    { Query_ID: '023', Query_senderName: 'Wendy Collins', Query_senderMail: 'wendy.collins@example.com', Query_Subj: 'Suggestions for Alumni Programs', Query_Msg: 'I have some suggestions for improving alumni programs. How can I submit them?' },
    { Query_ID: '024', Query_senderName: 'Xander Green', Query_senderMail: 'xander.green@example.com', Query_Subj: 'Alumni Directory Updates', Query_Msg: 'How often is the alumni directory updated, and can I request updates to my contact information?' },
    { Query_ID: '025',
      Query_senderName: 'Yara Mitchell',
      Query_senderMail: 'yara.mitchell@example.com',
      Query_Subj: 'Feedback on Recent Event',
      Query_Msg: 'I attended the recent alumni event and would like to provide feedback. Who should I contact?'
    },
    { Query_ID: '026',
      Query_senderName: 'Zachary Perez',
      Query_senderMail: 'zachary.perez@example.com',
      Query_Subj: 'Support for Alumni Startups',
      Query_Msg: 'I am starting a business and would like support from fellow alumni. Are there any resources or networking opportunities available?'
    },
    { Query_ID: '027',
      Query_senderName: 'Anna Walker',
      Query_senderMail: 'anna.walker@example.com',
      Query_Subj: 'Volunteer for Alumni Events',
      Query_Msg: 'I am interested in volunteering for upcoming alumni events. How can I get involved?'
    },
    { Query_ID: '028',
      Query_senderName: 'Brian Thompson',
      Query_senderMail: 'brian.thompson@example.com',
      Query_Subj: 'Request for Alumni Association Policies',
      Query_Msg: 'Can you provide a copy of the policies and guidelines of the alumni association?'
    },
    { Query_ID: '029',
      Query_senderName: 'Catherine Harris',
      Query_senderMail: 'catherine.harris@example.com',
      Query_Subj: 'Alumni Event Sponsorship',
      Query_Msg: 'I am interested in sponsoring an upcoming alumni event. What are the sponsorship options and benefits?'
    },
    { Query_ID: '030',
      Query_senderName: 'Daniel Murphy',
      Query_senderMail: 'daniel.murphy@example.com',
      Query_Subj: 'Request for Alumni Testimonials',
      Query_Msg: 'I would like to contribute a testimonial about my experience as an alumnus. How can I submit it?'
    }
];

async function addQueryEntries() {
    for (const query of queries) {
        const newQuery = new Query(query);
        try {
            await newQuery.save();
            console.log(`Query ${query.Query_ID} added successfully.`);
        } catch (error) {
            console.error('Error adding query:', error);
        }
    }
    mongoose.connection.close();
}

addQueryEntries();
