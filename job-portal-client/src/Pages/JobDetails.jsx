import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const sect = localStorage.getItem('selectedSector');
  const notesIntial = [];

  const [notes, setnote] = useState(notesIntial);

  useEffect(() => {
    if(sect==='private'){
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
    }
    else if(sect==='governement'){
      fetch(`http://localhost:5000/all-gjobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
    }
  }, [id]);


  const handleApply = async () => {
    console.log("I am here")
    console.log(job);

    const response = await fetch(
      `http://localhost:5000/api/fetch/addJobPosting`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          _id,
          JobTitle,
          companyLogo,
          companyName,
          description,
          employmentType,
          experienceLevel,
          jobLocation,
          maxPrice,
          minPrice,
          postedBy,
          postingDate,
          salaryType,
          skills,
        }),
      }
    );
    console.log("I am here also");

    const json = await response.json();
    // console.log(json)
    // logic
    // console.log("Adding note")
    const note = json;
    setnote(notes.concat(note));
  };


      const {
    _id,
    companyName,
    companyLogo,
    JobTitle,
    minPrice,
    maxPrice,
    experienceLevel,
    salaryType,
    jobLocation,
    employmentType,
    postingDate,
    description,
    postedBy,
    skills,
  } = job;

  return (
    <section className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-10">
      <Link to={`/job-details/${_id}`} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="Company Logo" className="h-36 w-36 rounded" />
        <div>
          <h4 className="text-primary mb-1">{companyName}</h4>
          <h3 className="text-lg font-semibold mb-2">{JobTitle}</h3>
          <div className="text-primary text-3xl text-bold flex flex-wrap gap-2 mb-2">
            <ol className="list-decimal my-4">
              <li>job id : {_id}</li>
              <li>Company Name: {companyName}</li>
              <li>Designation: {JobTitle}</li>
            </ol>
          </div>
          <p className="text-base text-primary/70">{description}</p>
        </div>
      </Link>

      <button className="bg-green px-8 py-2 my-2 text-white rounded-full" onClick={handleApply}>
        Apply Now
      </button>
    </section>
  );
};

export default JobDetails;
