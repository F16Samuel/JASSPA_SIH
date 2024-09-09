# SIH JASSPA Alumni Management System

The **SIH JASSPA Alumni Management System** is a web-based application designed to manage and facilitate interactions between alumni and Manipal University Jaipur (MUJ). This platform enables alumni to stay connected, participate in events, and learn about ongoing activities at the university. It also provides administrators with the tools to manage alumni data, queries, and events efficiently.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Alumni Directory**: Search and view the list of all alumni.
- **Event Management**: Display upcoming events organized by MUJ and allow administrators to manage them.
- **Contact Form**: Enable visitors to reach out to the university with their queries.
- **Admin Panel**: A secure area for administrators to manage alumni data, events, and user queries.
- **Dynamic Content**: Fetch dynamic content from the database to keep alumni information and events up-to-date.

## Project Structure

```plaintext
SIH_JASSPA_Alumni/
│
├── frontend/
│   ├── contact.html
│   ├── muj.html
│   ├── mujabout.html
│   ├── mujalumni.html
│   ├── mujevents.html
│   ├── mujlearn.html
│
├── backend/
│   ├── models/
│   │   ├── queryModel.js
│   │   ├── alumniModel.js
│   │   └── eventModel.js
│   │
│   ├── routes/
│   │   ├── eventRoutes.js
│   │   ├── alumniRoutes.js
│   │   └── queryRoutes.js
│   │
│   ├── package.json
│   └── server.js
│
└── README.md
```
