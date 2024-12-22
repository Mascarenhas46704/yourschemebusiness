const schemes = [
    // Central Government Schemes
    {
        name: "Unnati Scheme",
        description: "Provides financial support and a platform for SC/ST startups to develop tech-based solutions.",
        link: "https://unnati.dpiit.gov.in/",
        type: "central"
    },
    {
        name: "Pradhan Mantri MUDRA Yojana (PMMY)",
        description: "Offers micro-loans to promote entrepreneurship among small businesses.",
        link: "https://www.finline.in/resource/loan-schemes-available-for-msmes-in-karnataka/",
        type: "central"
    },
    {
        name: "Stand Up India Scheme",
        description: "Provides loans to SC/ST and women entrepreneurs to promote economic empowerment.",
        link: "https://www.standupmitra.in/",
        type: "central"
    },
    {
        name: "PM Employment Generation Programme (PMEGP)",
        description: "Generates employment by supporting the establishment of new micro-enterprises.",
        link: "https://www.kviconline.gov.in/pmegpeportal/",
        type: "central"
    },
    {
        name: "Atal Innovation Mission (AIM)",
        description: "Fosters a culture of innovation and entrepreneurship through startup incubators and mentorship.",
        link: "https://aim.gov.in/",
        type: "central"
    },
    {
        name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
        description: "Offers skill development training to enhance employability and promote entrepreneurship.",
        link: "https://www.nsdcindia.org/pmkvy",
        type: "central"
    },
    {
        name: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
        description: "Provides collateral-free loans to micro and small enterprises.",
        link: "https://www.cgtmse.in/",
        type: "central"
    },
    {
        name: "New Entrepreneur-cum-Enterprise Development Scheme (NEEDS)",
        description: "Supports first-generation entrepreneurs through financial assistance and training.",
        link: "https://wep.gov.in/resource-details?slug=new-entrepreneur-cum-enterprise-development-scheme",
        type: "central"
    },

    // Karnataka State Schemes
    {
        name: "MGNREGA Entrepreneurship Support Program",
        description: "Encourages rural entrepreneurship using MGNREGA resources and infrastructure.",
        link: "https://www.mgnrega.nic.in/",
        type: "state"
    },
    {
        name: "Karnataka Udyog Mitra",
        description: "Simplifies the process of establishing industries through single-window clearance.",
        link: "https://karnatakaudyogmitra.in/",
        type: "state"
    },
    {
        name: "Samrudhi Scheme",
        description: "Provides vocational training and financial support for self-employment.",
        link: "https://banjarathanda.karnataka.gov.in/27/samruddhi-scheme/en",
        type: "state"
    },
    {
        name: "Karnataka Startup Policy (2022-2027)",
        description: "Offers funding support, infrastructure, and mentorship to startups in Karnataka.",
        link: "https://startup.karnataka.gov.in/",
        type: "state"
    },
    {
        name: "ELEVATE Unnati",
        description: "Promotes SC/ST startups in Karnataka through grants and mentorship.",
        link: "https://www.missionstartupkarnataka.org/funding?en=",
        type: "state"
    },
    {
        name: "Udyogini Scheme",
        description: "Empowers women entrepreneurs by providing financial assistance for self-employment ventures.",
        link: "https://kswdc.karnataka.gov.in/21/udyogini/en",
        type: "state"
    }
];

function populateSchemes() {
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear existing content
    schemes.forEach(scheme => {
        const schemeItem = document.createElement('div');
        schemeItem.classList.add('scheme-item');
        schemeItem.innerHTML = `
            <h3>${scheme.name}</h3>
            <p>${scheme.description}</p>
            <a href="${scheme.link}" target="_blank">Learn More</a>
        `;
        schemesContainer.appendChild(schemeItem);
    });
}

function filterSchemes() {
    const filterValue = document.getElementById('schemeType').value;
    const schemesContainer = document.getElementById('schemes');
    schemesContainer.innerHTML = ""; // Clear content for filtering
    schemes
        .filter(scheme => filterValue === 'all' || scheme.type === filterValue)
        .forEach(scheme => {
            const schemeItem = document.createElement('div');
            schemeItem.classList.add('scheme-item');
            schemeItem.innerHTML = `
                <h3>${scheme.name}</h3>
                <p>${scheme.description}</p>
                <a href="${scheme.link}" target="_blank">Learn More</a>
            `;
            schemesContainer.appendChild(schemeItem);
        });
}

window.onload = populateSchemes;

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}
