import Lawyer from '../../../models/lawyer';
import { connectionDB } from '../../../utils/db';

export const POST = async (request) => {
    const {
        userId,
        lawyerName,
        age,
        nic,
        university,
        experienceYears,
        certificate,
        // prevExperiences,
        // experience,
        profilePic,
        contactNo,
    } = await request.json();

    try {
        await connectionDB();

        const newLawyer = new Lawyer({
            lawyerName,
            age,
            nic,
            university,
            experienceYears,
            certificate: {
                data: Buffer.from(certificate.data), 
                contentType: certificate.contentType,
            },
            // prevExperiences,
            // experience,
            profilePic: {
                data: Buffer.from(profilePic.data),
                contentType: profilePic.contentType,
            },
            contactNo,
        });

        await newLawyer.save();
        return new Response(JSON.stringify(newLawyer), { status: 201 });
    } catch (error) {
        console.error("Error creating new lawyer:", error);
        return new Response("Failed to create a new lawyer profile", {
            status: 500,
        });
    }
};
