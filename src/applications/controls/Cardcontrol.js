import React from 'react'
import { FaAmazonPay } from "react-icons/fa";
import { MdMapsHomeWork } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiStudent } from "react-icons/pi";
import { MdAppRegistration } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";

 export const Mycardlist = [
      { 
        id:1,
        cardName: "Quick Fee Payment",
        applink: "/Usersignup",
        icon: <FaAmazonPay  size={60} />
      },
      { 
        id:2,
        cardName: "Student Hostel request page",
        applink: "",
        icon: <MdMapsHomeWork  size={60} />
      },
      { 
        id:3,
        cardName:"Student Progress report",
        applink:"/Progressreport",
        icon:<GiProgression size={60}/>
      },
      { 
        id:4,
        cardName:"Change my password",
        applink:"Changepassword",
        icon:<RiLockPasswordFill size={60}/>
      },
      { 
        id:5,
        cardName:"Student Center",
        applink:"Studentcenter",
        icon:<PiStudent size={60}/>
      },
      { 
        id:6,
        cardName:"Exam Registration Page",
        applink:"Registrationpage",
        icon:<MdAppRegistration size={60}/>
      },
      { 
        id:7,
        cardName:"Update Phone Number",
        applink:"/phone",
        icon:<RiContactsBook3Line size={60}/>
      },
      { 
        id:8,
        cardName:"Update Email Address",
        applink:"Email",
        icon:<AiTwotoneMail size={60}/>
      },
      { 
        id:9,
        cardName:"Upload Student Photo",
        applink:"navpage",
        icon:<MdOutlineAddPhotoAlternate size={60}/>
      },
      { 
        id:10,
        cardName:"mycard",
        applink:"Productlist",
        icon:<MdProductionQuantityLimits  size={60}/>
      }
];
