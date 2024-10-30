import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./JobDetails.css";

const jobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    company: "Tech Innovators",
    location: "Pune, Maharashtra",
    description:
      "We are looking for a skilled frontend developer proficient in React and CSS.",
    requirements: "React, CSS, JavaScript",
    responsibilities: "Develop and maintain frontend features.",
  },
  {
    _id: "2",
    title: "Backend Developer",
    company: "Cloud Solutions",
    location: "New York, NY",
    description:
      "Experienced in Node.js, Express, and MongoDB with cloud deployment experience.",
    requirements: "Node.js, MongoDB, Express",
    responsibilities: "Backend development and cloud management.",
  },
  {
    _id: "3",
    title: "Full-Stack Developer",
    company: "Creative Apps",
    location: "Mumbai",
    description:
      "Seeking a full-stack developer with expertise in MERN stack and microservices.",
  },
  {
    _id: "4",
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote",
    description:
      "Looking for a creative UX/UI designer with a strong portfolio in web and mobile design.",
  },
  {
    _id: "5",
    title: "Data Scientist",
    company: "AI Ventures",
    location: "Chicago, IL",
    description:
      "Looking for a data scientist to work on advanced AI models and data analysis.",
  },
  {
    _id: "6",
    title: "DevOps Engineer",
    company: "InfraWorks",
    location: "Mumbai",
    description:
      "We need a DevOps engineer skilled in AWS, Docker, and Kubernetes.",
  },
  {
    _id: "7",
    title: "Mobile App Developer",
    company: "Appify",
    location: "Pune, Maharashtra",
    description:
      "Seeking a mobile app developer with experience in React Native and Flutter.",
  },
  {
    _id: "8",
    title: "Product Manager",
    company: "Visionary Inc.",
    location: "Banglore",
    description:
      "We are hiring a product manager to oversee the development of new digital products.",
  },
  {
    _id: "9",
    title: "Marketing Specialist",
    company: "GlobalTech",
    location: "Delhi",
    description:
      "Looking for a marketing specialist with experience in digital campaigns and SEO.",
  },
  {
    _id: "10",
    title: "Graphic Designer",
    company: "Creative Studio",
    location: "Delhi",
    description:
      "Hiring a graphic designer with skills in Adobe Suite and web design.",
  },
  {
    _id: "11",
    title: "Cloud Engineer",
    company: "CloudFactory",
    location: "Banglore",
    description:
      "Cloud engineer needed for AWS architecture and cloud infrastructure projects.",
  },
  {
    _id: "12",
    title: "Cybersecurity Analyst",
    company: "SecureTech",
    location: "Calcutta",
    description:
      "Hiring a cybersecurity analyst with experience in network security and penetration testing.",
  },
  {
    _id: "13",
    title: "AI Researcher",
    company: "DeepMind Labs",
    location: "San Francisco, CA",
    description:
      "Looking for an AI researcher with a focus on deep learning and neural networks.",
  },
  {
    _id: "14",
    title: "Technical Writer",
    company: "DocuWrite",
    location: "Remote",
    description:
      "We need a technical writer with experience in creating software documentation.",
  },
  {
    _id: "15",
    title: "HR Manager",
    company: "PeopleFirst",
    location: "New York, NY",
    description:
      "HR manager needed for managing recruitment and employee relations.",
  },
  {
    _id: "16",
    title: "Sales Executive",
    company: "SalesPro",
    location: "Chicago, IL",
    description:
      "Hiring a sales executive to manage B2B sales and client relationships.",
  },
  {
    _id: "17",
    title: "Blockchain Developer",
    company: "CryptoTech",
    location: "Austin, TX",
    description:
      "Looking for a blockchain developer with experience in Ethereum and smart contracts.",
  },
  {
    _id: "18",
    title: "Software Tester",
    company: "QualityWorks",
    location: "Los Angeles, CA",
    description:
      "We need a software tester proficient in manual and automated testing.",
  },
  {
    _id: "19",
    title: "Business Analyst",
    company: "BizConsult",
    location: "Washington, DC",
    description:
      "Hiring a business analyst to analyze business processes and improve workflows.",
  },
  {
    _id: "20",
    title: "Project Manager",
    company: "Tech Projects",
    location: "Phoenix, AZ",
    description:
      "Seeking a project manager to lead software development teams and ensure project success.",
  },
];

function JobDetails() {
  const { id } = useParams(); // Retrieve the job ID from URL parameters
  const [job, setJob] = useState(null); // Job details state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [isApplied, setIsApplied] = useState(false); // Applied state

  useEffect(() => {
    const fetchJobDetails = () => {
      try {
        setLoading(true); // Start loading
        const jobData = jobs.find((job) => job._id === id); // Find the job by ID

        if (jobData) {
          setJob(jobData); // Set the job data to the state
        } else {
          setError("Job not found."); // If no job found, show error
        }

        setLoading(false); // Stop loading
      } catch (error) {
        setError("Error fetching job details.");
        setLoading(false); // Stop loading on error
      }
    };

    fetchJobDetails();
  }, [id]); // Fetch job details when 'id' changes

  const handleApply = () => {
    // Handle job application logic here
    setIsApplied(true);
  };

  // Display loading message
  if (loading) return <p className="loading-text">Loading...</p>;

  // Display error message if an error occurs
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="job-details-page">
      <div className="jobdetails-card">
        <div className="jobdetails-card-header">
          <h1>{job.title}</h1>
          <p className="company-name">{job.company}</p>
        </div>
        <div className="jobdetails-card-body">
          <p>
            <strong>Location:</strong> {job.location}
          </p>
          <p>
            <strong>Description:</strong> {job.description}
          </p>
          <p>
            <strong>Requirements:</strong> {job.requirements}
          </p>
          <p>
            <strong>Responsibilities:</strong> {job.responsibilities}
          </p>
        </div>
        <div className="jobdetails-card-footer">
          {isApplied ? (
            <div className="success-message">
              <p style={{ color: "green" }}>
                You have successfully applied for this job!
              </p>
              <Link to="/jobs" className="back-button">
                Back to Jobs
              </Link>
            </div>
          ) : (
            <>
              <button onClick={handleApply} className="apply-button">
                Apply Now
              </button>
              <Link to="/jobs" className="back-button">
                Back to Jobs
              </Link>
            </>
          )}
          ;
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
