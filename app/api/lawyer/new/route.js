import Lawyer from "@models/lawyer";
import { connectionDB } from "@utils/db";
export const POST = async (request) => {
  const {
    userId,
    lawyerName,
    age,
    nic,
    university,
    experienceYears,
    certificate,
    prevExperiences,
    experience,
    profilePic,
    contactNo,
  } = await request.json();

  try {
    await connectionDB();
    const newLawyer = new Lawyer({
      creator: lawyerName,
      age,
      nic,
      university,
      experienceYears,
      certificate,
      prevExperiences,
      experience,
      profilePic,
      contactNo,
    });

    await newLawyer.save();
    return new Response(JSON.newLawyer.stringify(newLawyer), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new lawyer profile", {
      status: 500,
    });
  }
};
