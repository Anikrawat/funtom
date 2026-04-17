import bcrypt from "bcryptjs";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/db";

async function seedAdmin() {
    try {
        await connectDB();

        const email = "admin@rps.com";
        const password = "admin123";

        const existingAdmin = await Admin.findOne({ email});

        if(existingAdmin) {
            console.log("Admin user already exists");
            process.exit(0);
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await Admin.create({
            email,
            password: hashedPassword,
        })
        console.log("Admin user created successfully");
         console.log("Email:", email);
    console.log("Password:", password);
    } catch (error) {
        console.error("Error seeding admin user:", error);
        process.exit(1);
    }
}

seedAdmin();
