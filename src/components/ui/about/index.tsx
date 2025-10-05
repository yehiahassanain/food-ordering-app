import { Route } from "lucide-react";
import MainHeading from "../main-heading";
import { Routes } from "@/constants/enums";


async function About() {
    return(
        <section className="section-gap" id={Routes.ABOUT}>
            <div className="container text-center">
                <MainHeading title="AboutUs" subtitle="Our Story"/>
                <div className="opacity-30 max-w-md mx-auto mt-4 flex flex-col gap-4">
                    <p>Pizza is an Italian, specifically Neapolitan, dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.</p>
                    <p>Pizza is an oven-baked Italian dish featuring a flat, leavened bread-like crust topped with tomato sauce, cheese, and a variety of other ingredients like vegetables and meats, traditionally cooked in a wood-fired oven. Originating in Naples, it has become a globally popular and versatile food, adapted to countless local tastes and dietary needs. </p>
                    <p>an Italian, specifically Neapolitan, dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients</p>
                </div>
            </div>
        </section>
    )
}
export default About