import React from "react";
import MentorCard from "./MentorCard";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import m5 from "../images/m5.png";
import m6 from "../images/m6.png";
import m7 from "../images/m7.png";
import m8 from "../images/m8.png";
import m9 from "../images/m9.png";
import m10 from "../images/m10.png";
import m11 from "../images/m11.png";
import m12 from "../images/m12.png";
import m13 from "../images/m13.png";
import m14 from "../images/m14.png";
import m15 from "../images/m15.png";
import m16 from "../images/m16.png";
import m17 from "../images/m17.png";
import m18 from "../images/m18.png";
import m19 from "../images/m19.png";
import m20 from "../images/m20.png";
import m21 from "../images/m21.png";
import m22 from "../images/m22.png";
import m23 from "../images/m23.png";
import m24 from "../images/m24.png";
import m25 from "../images/m25.png";
import m26 from "../images/m26.png";
import m27 from "../images/m27.png";
import m28 from "../images/m28.png";
import m29 from "../images/m29.png";

const MentorGrid = () => {
  return (
    <div className="text-newblue">
      <div className="flex justify-center bg-newgray">
        <h2 className="py-6 text-3xl font-semibold 2xl:text-5xl 3xl:text-6xl lg:py-10">
          Meet the Mentors
        </h2>
      </div>
      <div className="grid grid-cols-2 px-4 py-6 pt-10 bg-repeat-y bg-cover bg-dots md:grid-cols-4 lg:grid-cols-4 gap-y-10 lg:pt-20 md:px-10 2xl:px-20">
        <MentorCard
          name="Daniel P."
          photo={m1}
          des="Change Today Consulting"
        />
        <MentorCard
          name="Claudio S."
          photo={m2}
          des="Sennhauser Consulting"
        />
        <MentorCard
          name="Dale T."
          photo={m3}
          des="MedRegis Inc"
        />
        <MentorCard
          name="Kristie C."
          photo={m4}
          des="Program Manager "
          place="Young Founders School"
        />
        <MentorCard
          name="Ley S."
          photo={m5}
          des="Community Empowerment and Development Team"
        />
        <MentorCard
          name="James"
          photo={m6}
          des="Speed Sourcing"
        />
        <MentorCard
          name="Tracy I."
          photo={m7}
          des="Texas Woman's University-Center for Women Entrepreneurs"
        />

        <MentorCard
          name="Jerry S."
          photo={m8}
          des="Lockheed Martin"
        />
        <MentorCard
          name="Shashank R."
          photo={m9}
          des="Founder VC "
          place="100X.VC"
        />
        <MentorCard
          name="Sivhuan L."
          photo={m10}
          des="Head of Operations & Logistics"
          place="FoodPanda"
        />
        <MentorCard
          name="Katherine"
          photo={m11}
          des="CEO & Founder"
          place="Edvanta Consulting/Xtraview"
        />
        <MentorCard
          name="Amit G."
          photo={m12}
          des="Managing Partner"
          place="Grover & Company Impact Venture"
        />
        <MentorCard
          name="Tuy Engly"
          photo={m13}
          des="Mentor"
          place="National University Management"
        />
        <MentorCard
          name="Pragya S."
          photo={m14}
          des="Cofounder & CEO"
          place="Aara Health"
        />
        <MentorCard
          name="Ish Anand"
          photo={m15}
          des="Founder & CEO"
          place="Business Doctors"
        />
        <MentorCard
          name="Joshua S."
          photo={m16}
          des="Founder & CEO"
          place="The Hobby Tribe"
        />
        <MentorCard
          name="Siddarth Razdan"
          photo={m17}
          des="Founder Firstbridge"
        />
        <MentorCard
          name="Sivgech T."
          photo={m18}
          des="Community Host"
          place="Impact Hub Phnom Penh"
        />
        <MentorCard
          name="Surashree R."
          photo={m19}
          des="Founder & CEO"
          place="Yearbook Canvas"
        />
        <MentorCard
          name="Anand V."
          photo={m20}
          des="Co Founder"
          place="Rakshati Botanicals Private Limited"
        />
        <MentorCard
          name="Preety G."
          photo={m21}
          des="Mentor & Facilitator"
          place="EngaZer's"
        />

        <MentorCard
          name="Srinath B."
          photo={m22}
          des="Chief Innovation Evangelist"
          place="Excelsoft technologies Ovt Ltd"
        />
        <MentorCard
          name="Ravinder P. S."
          photo={m23}
          des="CEO"
          place="Merkado RHA Technology"
        />
        <MentorCard
          name="Dayanidhi M G"
          photo={m24}
          des="Studio nCore Pvt Ltd"
        />
        <MentorCard
          name="Radhika B."
          photo={m25}
          des="Editor in Chief"
          place="The Representative"
        />
        <MentorCard
          name="Abhishek K."
          photo={m26}
          des="FlexiLoans"
        />
        <MentorCard
          name="Gaurav Misra"
          photo={m27}
          des="Life Skills Coach"
          place="School for Life, UPES"
        />
        <MentorCard
          name="Arpit B."
          photo={m28}
          des="Managing Director"
          place="LegalAI"
        />
      </div>
      <div className="bg-repeat-y bg-cover bg-dots">
        <MentorCard
          name="Talwinder S."
          photo={m29}
          des="General Manager"
          place="Lendela"
        />
      </div>
    </div>
  );
};

export default MentorGrid;
