"use client";

import React, { useState } from "react";
import { ResumeData } from "./type";

interface Props {
  initialData: ResumeData;
}

export default function EditableResume({ initialData }: Props) {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);
  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    education: false,
    workExperience: false,
    skills: false,
  });

  const handleEditToggle = (field: string) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (
    field: string,
    value: string | string[],
    index?: number
  ) => {
    setResumeData((prev) => {
      if (typeof value === "string" || index === undefined) {
        return { ...prev, [field]: value };
      }
      const updatedArray = [...prev[field as keyof ResumeData] as string[]];
      updatedArray[index] = value as string;
      return { ...prev, [field]: updatedArray };
    });
  };

  return (
    <div className="resume">
      {/* Personal Information */}
      <div>
        <h2>Personal Information</h2>
        <div>
          {editMode.name ? (
            <input
              type="text"
              value={resumeData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              onBlur={() => handleEditToggle("name")}
              autoFocus
            />
          ) : (
            <h3 onClick={() => handleEditToggle("name")}>{resumeData.name}</h3>
          )}
          {editMode.email ? (
            <input
              type="email"
              value={resumeData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              onBlur={() => handleEditToggle("email")}
              autoFocus
            />
          ) : (
            <p onClick={() => handleEditToggle("email")}>{resumeData.email}</p>
          )}
        </div>
      </div>

      {/* Education */}
      <div>
        <h2>Education</h2>
        <ul>
          {resumeData.education.map((edu, index) => (
            <li key={index}>
              {editMode.education ? (
                <input
                  type="text"
                  value={edu}
                  onChange={(e) =>
                    handleChange("education", e.target.value, index)
                  }
                  onBlur={() => handleEditToggle("education")}
                  autoFocus
                />
              ) : (
                <span onClick={() => handleEditToggle("education")}>{edu}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Work Experience */}
      <div>
        <h2>Work Experience</h2>
        <ul>
          {resumeData.workExperience.map((work, index) => (
            <li key={index}>
              {editMode.workExperience ? (
                <input
                  type="text"
                  value={work}
                  onChange={(e) =>
                    handleChange("workExperience", e.target.value, index)
                  }
                  onBlur={() => handleEditToggle("workExperience")}
                  autoFocus
                />
              ) : (
                <span onClick={() => handleEditToggle("workExperience")}>
                  {work}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h2>Skills</h2>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>
              {editMode.skills ? (
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleChange("skills", e.target.value, index)}
                  onBlur={() => handleEditToggle("skills")}
                  autoFocus
                />
              ) : (
                <span onClick={() => handleEditToggle("skills")}>{skill}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
