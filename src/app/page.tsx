
import EditableResume from "./components/EditableResume";
import { ResumeData } from "./type";

const initialData: ResumeData = {
  name: "yasir fehmi",
  email: "yasirfehmi@example.com",
  education: ["B.Sc in Computer Science, XYZ University (2020)"],
  workExperience: ["Software Engineer at ABC Corp (2021-Present)"],
  skills: ["JavaScript", "TypeScript", "React", "Next.js"],
};

export default function Home() {
  return (
    <div>
      <h1>Editable Resume</h1>
      <EditableResume initialData={initialData} />
    </div>
  );
}
