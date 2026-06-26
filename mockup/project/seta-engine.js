
/* ===== DATA (services / staffing model) ===== */
const DEPT_COLOR={Executive:"#181A2E",Delivery:"#4338CA",Engineering:"#6366F1",PMO:"#D98A1F",Design:"#E15B66",QA:"#2E9C9C","Business":"#2F7DC4"};
const LVL_NAME={1:"Beginner",2:"Intermediate",3:"Advanced",4:"Expert"};
const LVL_COLOR={1:"#D7DAE5",2:"#9FB0F0",3:"#5B6FE0",4:"#2E2A8F"};
function avColor(n){const c=["#4338CA","#2E9C9C","#E15B66","#D98A1F","#2F7DC4","#7C3AED","#2F9E76","#C2410C"];let h=0;for(const ch of n)h=ch.charCodeAt(0)+((h<<5)-h);return c[Math.abs(h)%c.length];}
function initials(n){return n.split(" ").filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase();}
const ACCOUNTS=[
 {id:"ACC-A",name:"Vinfast",industry:"Automotive",am:"FA-1001",projects:["PRJ-a1","PRJ-a2"]},
 {id:"ACC-B",name:"Maybank",industry:"Banking",am:"FA-1003",projects:["PRJ-b1"]},
 {id:"ACC-C",name:"Globex Retail",industry:"Retail",am:"FA-1007",projects:["PRJ-c1"]},
 {id:"ACC-D",name:"AVIA",industry:"Aviation",am:"FA-1017",projects:["PRJ-d1"]},
 {id:"ACC-E",name:"Aeris",industry:"Healthtech",am:"FA-1018",projects:["PRJ-e1","PRJ-e2"]},
 {id:"ACC-F",name:"AI R&D",industry:"Internal R&D",am:"FA-1019",projects:["PRJ-f1"]}
];
const PROJECTS=[
 {id:"PRJ-a1",name:"Connected Vehicle App",acc:"ACC-A",em:"FA-1002",start:"2025-09-01",end:"2026-12-31",stack:["React","TypeScript","Go","Kubernetes"]},
 {id:"PRJ-a2",name:"Dealer Portal",acc:"ACC-A",em:"FA-1005",start:"2026-01-15",end:"2026-09-30",stack:["Go","PostgreSQL","React"]},
 {id:"PRJ-b1",name:"Mobile Banking Revamp",acc:"ACC-B",em:"FA-1008",start:"2025-06-01",end:"2026-08-31",stack:["AWS","Kubernetes","Java","React"]},
 {id:"PRJ-c1",name:"POS Modernization",acc:"ACC-C",em:"FA-1014",start:"2026-03-01",end:"2027-02-28",stack:["SQL","Python","React"]},
 {id:"PRJ-d1",name:"AVIA Core Platform",acc:"ACC-D",em:"FA-1020",start:"2025-11-01",end:"2026-12-31",stack:["Java","Kafka","AWS"]},
 {id:"PRJ-e1",name:"AERIS",acc:"ACC-E",em:"FA-1021",start:"2026-01-01",end:"2026-12-31",stack:["React","Node.js","PostgreSQL"]},
 {id:"PRJ-e2",name:"AERIS-DA",acc:"ACC-E",em:"FA-1022",start:"2026-02-01",end:"2026-11-30",stack:["Python","Machine Learning","SQL"]},
 {id:"PRJ-f1",name:"AI R&D dept (PC0)",acc:"ACC-F",em:"FA-1019",start:"2026-01-01",end:"2026-12-31",stack:["Python","PyTorch","LLM"]}
];
const EMP=[
 {id:"FA-1000",name:"Tran Quang Huy",role:"Chief Executive (BoD)",dept:"Executive",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"E1",mgr:null,acc:null,prj:null,email:"huy.tran@futureapp.io",phone:"+84 90 100 0000",joined:"2019-01-02",off:null,salary:"Confidential",bank:"VCB \u2022\u2022\u2022 0001",tax:"VN-TAX-\u2022\u2022\u2022001",dob:"1978-04-10",tech:[],skills:[{n:"Leadership",c:"Soft Skills",l:4,e:20},{n:"Strategy",c:"Business",l:4,e:15}],docs:[{n:"Board Resolution",t:"Legal",exp:null,age:"5y ago"}],hist:[]},
 {id:"FA-1001",name:"Le Minh Anh",role:"Account Manager \u00b7 Vinfast",dept:"Delivery",loc:"Hanoi, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L7",mgr:"FA-1000",acc:"ACC-A",prj:null,email:"minhanh.le@futureapp.io",phone:"+84 90 123 4567",joined:"2021-03-15",off:null,salary:"$148,000 / yr",bank:"VCB \u2022\u2022\u2022 8842",tax:"VN-TAX-\u2022\u2022\u2022231",dob:"1985-07-22",tech:["Delivery","Stakeholder Mgmt"],skills:[{n:"Account Management",c:"Business",l:4,e:9},{n:"Leadership",c:"Soft Skills",l:4,e:14},{n:"Stakeholder Mgmt",c:"Soft Skills",l:4,e:7}],docs:[{n:"Labor Contract 2021",t:"Contract",exp:null,age:"3y ago"},{n:"NDA",t:"Legal",exp:null,age:"3y ago"}],hist:[{w:"2024-01-12 09:14 UTC",a:"Promoted to Account Manager",by:"Tran Bao (HR)",f:"Delivery Lead",t:"Account Manager"}]},
 {id:"FA-1003",name:"Sarah Whitman",role:"Account Manager \u00b7 Maybank",dept:"Delivery",loc:"Dubai, AE",type:"Full-Time",gender:"Female",status:"leave",grade:"L7",mgr:"FA-1000",acc:"ACC-B",prj:null,email:"sarah.w@futureapp.io",phone:"+971 50 998 1122",joined:"2022-01-09",off:null,salary:"$132,000 / yr",bank:"ENBD \u2022\u2022\u2022 4471",tax:"AE-TRN-\u2022\u2022\u2022009",dob:"1986-02-18",tech:["Delivery","Banking domain"],skills:[{n:"Account Management",c:"Business",l:4,e:11},{n:"Banking Domain",c:"Business",l:3,e:6}],docs:[{n:"Employment Contract",t:"Contract",exp:null,age:"2y ago"},{n:"UAE Visa",t:"Identity",exp:"2026-08-20",age:"6mo ago"}],hist:[{w:"2025-12-01 00:00 UTC",a:"Leave approved \u2014 Parental",by:"Tran Quang Huy",f:"Active",t:"On Leave"}]},
 {id:"FA-1007",name:"Marcus Chen",role:"Account Manager \u00b7 Globex",dept:"Delivery",loc:"Singapore, SG",type:"Full-Time",gender:"Male",status:"active",grade:"L7",mgr:"FA-1000",acc:"ACC-C",prj:null,email:"marcus.c@futureapp.io",phone:"+65 8233 9090",joined:"2022-02-14",off:null,salary:"$130,000 / yr",bank:"OCBC \u2022\u2022\u2022 5520",tax:"SG-TAX-\u2022\u2022\u2022441",dob:"1984-06-19",tech:["Delivery","Retail domain"],skills:[{n:"Account Management",c:"Business",l:4,e:7},{n:"Retail Domain",c:"Business",l:3,e:5}],docs:[{n:"Employment Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1006",name:"Nguyen Khanh Linh",role:"PMO Lead",dept:"PMO",loc:"Hanoi, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L6",mgr:"FA-1000",acc:null,prj:null,email:"linh.nguyen@futureapp.io",phone:"+84 90 444 1212",joined:"2021-08-02",off:null,salary:"$78,000 / yr",bank:"VCB \u2022\u2022\u2022 7741",tax:"VN-TAX-\u2022\u2022\u2022667",dob:"1989-04-14",tech:["PMO","Governance"],skills:[{n:"Project Governance",c:"PMO",l:4,e:10},{n:"Risk Management",c:"PMO",l:4,e:8},{n:"Reporting",c:"PMO",l:3,e:6}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"3y ago"}],hist:[]},
 {id:"FA-1012",name:"Tran Bao",role:"PMO \u00b7 Delivery Governance",dept:"PMO",loc:"Hanoi, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L5",mgr:"FA-1006",acc:null,prj:null,email:"bao.tran@futureapp.io",phone:"+84 91 303 0404",joined:"2022-01-10",off:null,salary:"$62,000 / yr",bank:"VCB \u2022\u2022\u2022 2231",tax:"VN-TAX-\u2022\u2022\u2022445",dob:"1990-12-22",tech:["PMO","Audit"],skills:[{n:"PMO Operations",c:"PMO",l:4,e:7},{n:"Quality Assurance",c:"PMO",l:3,e:5}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1002",name:"Pham Quoc Bao",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L6",mgr:"FA-1001",acc:"ACC-A",prj:"PRJ-a1",email:"bao.pham@futureapp.io",phone:"+84 91 222 3344",joined:"2022-06-01",off:null,salary:"$92,000 / yr",bank:"TCB \u2022\u2022\u2022 1290",tax:"VN-TAX-\u2022\u2022\u2022884",dob:"1990-11-03",tech:["Go","PostgreSQL","Kubernetes","gRPC"],skills:[{n:"Go",c:"Programming",l:4,e:8},{n:"System Architecture",c:"Engineering",l:4,e:6},{n:"PostgreSQL",c:"Databases",l:3,e:6},{n:"Kubernetes",c:"DevOps",l:3,e:4}],docs:[{n:"Labor Contract 2022",t:"Contract",exp:null,age:"2y ago"}],hist:[{w:"2024-04-01 02:30 UTC",a:"Salary review",by:"System \u00b7 effective-dated",f:"$78,000",t:"$92,000"}]},
 {id:"FA-1005",name:"Daniel Okafor",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Singapore, SG",type:"Full-Time",gender:"Male",status:"active",grade:"L6",mgr:"FA-1001",acc:"ACC-A",prj:"PRJ-a2",email:"daniel.o@futureapp.io",phone:"+65 8123 4455",joined:"2022-09-12",off:null,salary:"$108,000 / yr",bank:"DBS \u2022\u2022\u2022 0093",tax:"SG-TAX-\u2022\u2022\u2022118",dob:"1988-12-05",tech:["Go","React","Design Systems"],skills:[{n:"Go",c:"Programming",l:3,e:5},{n:"React",c:"Programming",l:3,e:4},{n:"Team Leadership",c:"Soft Skills",l:4,e:9}],docs:[{n:"Employment Contract",t:"Contract",exp:null,age:"3y ago"},{n:"Work Pass",t:"Identity",exp:"2027-01-10",age:"1y ago"}],hist:[]},
 {id:"FA-1008",name:"Vu Hoang Nam",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L6",mgr:"FA-1003",acc:"ACC-B",prj:"PRJ-b1",email:"nam.vu@futureapp.io",phone:"+84 98 777 6655",joined:"2022-11-01",off:null,salary:"$95,000 / yr",bank:"BIDV \u2022\u2022\u2022 3398",tax:"VN-TAX-\u2022\u2022\u2022772",dob:"1989-01-28",tech:["AWS","Terraform","Kubernetes","Java"],skills:[{n:"AWS",c:"DevOps",l:4,e:5},{n:"Kubernetes",c:"DevOps",l:3,e:3},{n:"Java",c:"Programming",l:3,e:4},{n:"Team Leadership",c:"Soft Skills",l:3,e:3}],docs:[{n:"Employment Contract",t:"Contract",exp:null,age:"3y ago"}],hist:[]},
 {id:"FA-1014",name:"Hoang Gia Bao",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L5",mgr:"FA-1007",acc:"ACC-C",prj:"PRJ-c1",email:"giabao.h@futureapp.io",phone:"+84 90 121 5656",joined:"2023-07-15",off:null,salary:"$72,000 / yr",bank:"MB \u2022\u2022\u2022 9012",tax:"VN-TAX-\u2022\u2022\u2022203",dob:"1992-05-25",tech:["SQL","Python","Tableau"],skills:[{n:"SQL",c:"Databases",l:4,e:4},{n:"Python",c:"Programming",l:3,e:3},{n:"Data Engineering",c:"Engineering",l:3,e:2}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1004",name:"Tran Thu Ha",role:"Senior Frontend Engineer",dept:"Engineering",loc:"Ho Chi Minh, VN",type:"Full-Time",gender:"Female",status:"probation",grade:"L4",mgr:"FA-1002",acc:"ACC-A",prj:"PRJ-a1",email:"ha.tran@futureapp.io",phone:"+84 93 555 7788",joined:"2026-04-21",off:null,salary:"$60,000 / yr",bank:"ACB \u2022\u2022\u2022 6620",tax:"VN-TAX-\u2022\u2022\u2022552",dob:"1994-09-30",tech:["React","TypeScript","CSS"],skills:[{n:"React",c:"Programming",l:3,e:5},{n:"TypeScript",c:"Programming",l:3,e:4},{n:"CSS",c:"Programming",l:4,e:4}],docs:[{n:"Probation Contract",t:"Contract",exp:"2026-07-21",age:"6w ago"}],hist:[{w:"2026-04-21 03:00 UTC",a:"Profile activated \u2014 onboarding started",by:"System",f:"\u2014",t:"Onboarding"}]},
 {id:"FA-1010",name:"Do Thi Mai",role:"QA Automation Engineer",dept:"QA",loc:"Ho Chi Minh, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L4",mgr:"FA-1002",acc:"ACC-A",prj:"PRJ-a1",email:"mai.do@futureapp.io",phone:"+84 90 818 2929",joined:"2023-10-03",off:null,salary:"$50,000 / yr",bank:"VPB \u2022\u2022\u2022 4419",tax:"VN-TAX-\u2022\u2022\u2022918",dob:"1995-03-08",tech:["Playwright","Python","Test Automation"],skills:[{n:"Test Automation",c:"QA",l:3,e:4},{n:"Playwright",c:"QA",l:3,e:2},{n:"Python",c:"Programming",l:2,e:3}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"1y ago"}],hist:[]},
 {id:"FA-1011",name:"James Carter",role:"Frontend Intern",dept:"Engineering",loc:"Singapore, SG",type:"Intern",gender:"Male",status:"onboard",grade:"L1",mgr:"FA-1004",acc:"ACC-A",prj:"PRJ-a1",email:"james.c@futureapp.io",phone:"+65 8455 7711",joined:"2026-06-01",off:null,salary:"Intern stipend",bank:"\u2014",tax:"\u2014",dob:"2002-08-15",tech:["JavaScript","React"],skills:[{n:"JavaScript",c:"Programming",l:2,e:0},{n:"React",c:"Programming",l:1,e:0}],docs:[{n:"Internship Agreement",t:"Contract",exp:"2026-12-01",age:"1w ago"}],hist:[{w:"2026-06-01 02:00 UTC",a:"Created from ATS (Greenhouse)",by:"System \u00b7 webhook",f:"\u2014",t:"Onboarding"}]},
 {id:"FA-1015",name:"Nguyen Trung Hieu",role:"Backend Engineer",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L4",mgr:"FA-1005",acc:"ACC-A",prj:"PRJ-a2",email:"hieu.nguyen@futureapp.io",phone:"+84 90 999 1234",joined:"2024-02-05",off:null,salary:"$58,000 / yr",bank:"VCB \u2022\u2022\u2022 1015",tax:"VN-TAX-\u2022\u2022\u2022015",dob:"1996-06-09",tech:["Go","PostgreSQL","React","TypeScript"],skills:[{n:"Go",c:"Programming",l:2,e:3},{n:"PostgreSQL",c:"Databases",l:3,e:3},{n:"React",c:"Programming",l:2,e:2},{n:"TypeScript",c:"Programming",l:2,e:2}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"},{n:"Citizen ID",t:"Identity",exp:"2030-05-01",age:"2y ago"}],hist:[{w:"2025-02-05 02:30 UTC",a:"Salary review",by:"System \u00b7 effective-dated",f:"$51,000",t:"$58,000"}],
   scorecards:[
     {m:"Jan 2026",overall:3.8,by:"Daniel Okafor (EM)",dims:{Delivery:3.5,"Code Quality":4.0,Collaboration:4.0,Proactiveness:3.5,Communication:4.0},note:"Solid ramp-up on the Dealer Portal API. Watch estimation accuracy on tickets."},
     {m:"Feb 2026",overall:4.0,by:"Daniel Okafor (EM)",dims:{Delivery:4.0,"Code Quality":4.0,Collaboration:4.0,Proactiveness:4.0,Communication:4.0},note:"Reliable delivery this sprint. Took ownership of the auth module."},
     {m:"Mar 2026",overall:4.1,by:"Daniel Okafor (EM)",dims:{Delivery:4.0,"Code Quality":4.5,Collaboration:4.0,Proactiveness:4.0,Communication:4.0},note:"Code quality noticeably improved \u2014 fewer review cycles."},
     {m:"Apr 2026",overall:3.9,by:"Daniel Okafor (EM)",dims:{Delivery:3.5,"Code Quality":4.0,Collaboration:4.0,Proactiveness:4.0,Communication:4.0},note:"A slip on the migration deadline; root-caused to unclear scope. No quality concerns."},
     {m:"May 2026",overall:4.3,by:"Daniel Okafor (EM)",dims:{Delivery:4.5,"Code Quality":4.0,Collaboration:4.5,Proactiveness:4.0,Communication:4.5},note:"Strong month. Mentored the intern and unblocked two teammates."},
     {m:"Jun 2026",overall:4.4,by:"Daniel Okafor (EM)",dims:{Delivery:4.5,"Code Quality":4.0,Collaboration:4.5,Proactiveness:4.0,Communication:4.5},note:"Consistently dependable. Ready to take on Advanced-level Go work next quarter."}
   ]},
 {id:"FA-1009",name:"Aisha Rahman",role:"Fullstack Engineer",dept:"Engineering",loc:"Dubai, AE",type:"Full-Time",gender:"Female",status:"active",grade:"L4",mgr:"FA-1008",acc:"ACC-B",prj:"PRJ-b1",email:"aisha.r@futureapp.io",phone:"+971 55 661 2233",joined:"2023-05-20",off:null,salary:"$66,000 / yr",bank:"ADCB \u2022\u2022\u2022 1180",tax:"AE-TRN-\u2022\u2022\u2022330",dob:"1993-10-11",tech:["React","Java","AWS"],skills:[{n:"React",c:"Programming",l:3,e:4},{n:"Java",c:"Programming",l:3,e:3},{n:"AWS",c:"DevOps",l:2,e:2}],docs:[{n:"Employment Contract",t:"Contract",exp:null,age:"1y ago"},{n:"UAE Visa",t:"Identity",exp:"2026-07-02",age:"1y ago"}],hist:[]},
 {id:"FA-1013",name:"Olivia Brooks",role:"Business Analyst",dept:"Business",loc:"Dubai, AE",type:"Part-Time",gender:"Female",status:"active",grade:"L4",mgr:"FA-1014",acc:"ACC-C",prj:"PRJ-c1",email:"olivia.b@futureapp.io",phone:"+971 52 220 8899",joined:"2024-03-18",off:null,salary:"$40,000 / yr (0.6 FTE)",bank:"FAB \u2022\u2022\u2022 7700",tax:"AE-TRN-\u2022\u2022\u2022661",dob:"1991-07-07",tech:["SQL","Requirements","Analytics"],skills:[{n:"Business Analysis",c:"Business",l:3,e:3},{n:"SQL",c:"Databases",l:1,e:1},{n:"Stakeholder Mgmt",c:"Soft Skills",l:3,e:2}],docs:[{n:"Employment Contract",t:"Contract",exp:null,age:"1y ago"}],hist:[]},
 {id:"FA-1016",name:"Dang Van Khoa",role:"DevOps Engineer",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"offboard",grade:"L4",mgr:"FA-1008",acc:"ACC-B",prj:"PRJ-b1",email:"khoa.dang@futureapp.io",phone:"+84 90 707 0707",joined:"2023-03-01",off:"2026-06-30",salary:"$64,000 / yr",bank:"BIDV \u2022\u2022\u2022 7788",tax:"VN-TAX-\u2022\u2022\u2022788",dob:"1993-08-19",tech:["AWS","Kubernetes","Terraform"],skills:[{n:"AWS",c:"DevOps",l:3,e:4},{n:"Kubernetes",c:"DevOps",l:3,e:3},{n:"Terraform",c:"DevOps",l:3,e:2}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"3y ago"}],hist:[{w:"2026-06-02 04:00 UTC",a:"Resignation received \u2014 offboarding scheduled",by:"Vu Hoang Nam (EM)",f:"Active",t:"Offboarding"}]},
 {id:"FA-1017",name:"Tran Van Long",role:"Account Manager \u00b7 AVIA",dept:"Delivery",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L7",mgr:"FA-1000",acc:"ACC-D",prj:null,email:"long.tran@futureapp.io",phone:"+84 90 555 1212",joined:"2021-06-01",off:null,salary:"$140,000 / yr",bank:"VCB \u2022\u2022\u2022 3321",tax:"VN-TAX-\u2022\u2022\u2022317",dob:"1983-03-09",tech:["Delivery","Aviation Domain"],skills:[{n:"Account Management",c:"Business",l:4,e:10},{n:"Aviation Domain",c:"Business",l:3,e:5}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"4y ago"}],hist:[]},
 {id:"FA-1018",name:"Pham Thu Trang",role:"Account Manager \u00b7 Aeris",dept:"Delivery",loc:"Hanoi, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L7",mgr:"FA-1000",acc:"ACC-E",prj:null,email:"trang.pham@futureapp.io",phone:"+84 90 777 3434",joined:"2022-04-12",off:null,salary:"$134,000 / yr",bank:"TCB \u2022\u2022\u2022 8890",tax:"VN-TAX-\u2022\u2022\u2022392",dob:"1987-11-15",tech:["Delivery","Healthcare Domain"],skills:[{n:"Account Management",c:"Business",l:4,e:8},{n:"Healthcare Domain",c:"Business",l:3,e:4}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1019",name:"Le Quoc Hung",role:"R&D Lead (EM)",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L6",mgr:"FA-1000",acc:"ACC-F",prj:"PRJ-f1",email:"hung.le@futureapp.io",phone:"+84 91 909 1111",joined:"2021-09-20",off:null,salary:"$110,000 / yr",bank:"VCB \u2022\u2022\u2022 1190",tax:"VN-TAX-\u2022\u2022\u2022611",dob:"1986-08-02",tech:["Python","Machine Learning","LLM"],skills:[{n:"Python",c:"Programming",l:4,e:9},{n:"Machine Learning",c:"AI/ML",l:4,e:7},{n:"LLM",c:"AI/ML",l:3,e:4},{n:"System Architecture",c:"Engineering",l:3,e:5}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"4y ago"}],hist:[]},
 {id:"FA-1020",name:"Nguyen Anh Thai",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L6",mgr:"FA-1017",acc:"ACC-D",prj:"PRJ-d1",email:"thai.nguyen@futureapp.io",phone:"+84 98 121 0909",joined:"2022-03-01",off:null,salary:"$96,000 / yr",bank:"BIDV \u2022\u2022\u2022 4412",tax:"VN-TAX-\u2022\u2022\u2022820",dob:"1989-05-30",tech:["Java","Kafka","AWS"],skills:[{n:"Java",c:"Programming",l:4,e:7},{n:"Kafka",c:"Engineering",l:3,e:4},{n:"AWS",c:"DevOps",l:3,e:3},{n:"Team Leadership",c:"Soft Skills",l:3,e:4}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"3y ago"}],hist:[]},
 {id:"FA-1021",name:"Vo Thi Huong",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Ho Chi Minh, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L6",mgr:"FA-1018",acc:"ACC-E",prj:"PRJ-e1",email:"huong.vo@futureapp.io",phone:"+84 90 232 4545",joined:"2022-07-18",off:null,salary:"$94,000 / yr",bank:"ACB \u2022\u2022\u2022 7781",tax:"VN-TAX-\u2022\u2022\u2022744",dob:"1990-02-11",tech:["React","Node.js","PostgreSQL"],skills:[{n:"React",c:"Programming",l:4,e:6},{n:"Node.js",c:"Programming",l:3,e:4},{n:"PostgreSQL",c:"Databases",l:3,e:3}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1022",name:"Dang Quoc Tuan",role:"Engagement Manager (EM)",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L5",mgr:"FA-1018",acc:"ACC-E",prj:"PRJ-e2",email:"tuan.dang@futureapp.io",phone:"+84 91 656 2323",joined:"2023-02-06",off:null,salary:"$80,000 / yr",bank:"MB \u2022\u2022\u2022 5510",tax:"VN-TAX-\u2022\u2022\u2022205",dob:"1991-09-19",tech:["Python","Machine Learning","SQL"],skills:[{n:"Python",c:"Programming",l:4,e:5},{n:"Machine Learning",c:"AI/ML",l:3,e:3},{n:"SQL",c:"Databases",l:3,e:3}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1023",name:"Nguyen Duy Dat",role:"Backend Engineer",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L4",mgr:"FA-1020",acc:"ACC-D",prj:"PRJ-d1",email:"dat.nguyen@futureapp.io",phone:"+84 90 818 7676",joined:"2023-08-14",off:null,salary:"$56,000 / yr",bank:"VCB \u2022\u2022\u2022 6612",tax:"VN-TAX-\u2022\u2022\u2022123",dob:"1995-12-03",tech:["Java","Kafka","AWS"],skills:[{n:"Java",c:"Programming",l:3,e:4},{n:"Kafka",c:"Engineering",l:2,e:2},{n:"AWS",c:"DevOps",l:2,e:1}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"1y ago"}],hist:[]},
 {id:"FA-1024",name:"Nguyen Huy Hieu",role:"Backend Engineer",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L4",mgr:"FA-1020",acc:"ACC-D",prj:"PRJ-d1",email:"huyhieu.nguyen@futureapp.io",phone:"+84 90 414 8282",joined:"2023-09-01",off:null,salary:"$54,000 / yr",bank:"TCB \u2022\u2022\u2022 3390",tax:"VN-TAX-\u2022\u2022\u2022448",dob:"1996-07-21",tech:["Java","PostgreSQL"],skills:[{n:"Java",c:"Programming",l:3,e:3},{n:"PostgreSQL",c:"Databases",l:2,e:2}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"1y ago"}],hist:[]},
 {id:"FA-1025",name:"Pham Tien Manh",role:"Frontend Engineer",dept:"Engineering",loc:"Ho Chi Minh, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L3",mgr:"FA-1020",acc:"ACC-D",prj:"PRJ-d1",email:"manh.pham@futureapp.io",phone:"+84 93 252 1313",joined:"2024-01-15",off:null,salary:"$44,000 / yr",bank:"ACB \u2022\u2022\u2022 2240",tax:"VN-TAX-\u2022\u2022\u2022551",dob:"1998-04-05",tech:["React","TypeScript"],skills:[{n:"React",c:"Programming",l:2,e:2},{n:"TypeScript",c:"Programming",l:2,e:1}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"1y ago"}],hist:[]},
 {id:"FA-1026",name:"Le Quang Tuan",role:"Fullstack Engineer",dept:"Engineering",loc:"Ho Chi Minh, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L4",mgr:"FA-1021",acc:"ACC-E",prj:"PRJ-e1",email:"quangtuan.le@futureapp.io",phone:"+84 90 717 9090",joined:"2023-05-22",off:null,salary:"$58,000 / yr",bank:"VPB \u2022\u2022\u2022 1120",tax:"VN-TAX-\u2022\u2022\u2022662",dob:"1994-10-18",tech:["React","Node.js","PostgreSQL"],skills:[{n:"React",c:"Programming",l:3,e:4},{n:"Node.js",c:"Programming",l:3,e:3},{n:"PostgreSQL",c:"Databases",l:2,e:2}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1027",name:"Cao Anh Thuy",role:"Data Scientist",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Female",status:"active",grade:"L4",mgr:"FA-1022",acc:"ACC-E",prj:"PRJ-e2",email:"thuy.cao@futureapp.io",phone:"+84 90 343 5656",joined:"2023-11-06",off:null,salary:"$60,000 / yr",bank:"MB \u2022\u2022\u2022 7712",tax:"VN-TAX-\u2022\u2022\u2022773",dob:"1995-06-28",tech:["Python","Machine Learning","SQL"],skills:[{n:"Python",c:"Programming",l:3,e:3},{n:"Machine Learning",c:"AI/ML",l:3,e:3},{n:"SQL",c:"Databases",l:2,e:2}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"1y ago"}],hist:[]},
 {id:"FA-1028",name:"Le Thanh Tung",role:"ML Engineer",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L4",mgr:"FA-1022",acc:"ACC-E",prj:"PRJ-e2",email:"thanhtung.le@futureapp.io",phone:"+84 90 929 1717",joined:"2023-06-19",off:null,salary:"$59,000 / yr",bank:"BIDV \u2022\u2022\u2022 5523",tax:"VN-TAX-\u2022\u2022\u2022884",dob:"1994-01-09",tech:["Python","Machine Learning","SQL"],skills:[{n:"Python",c:"Programming",l:3,e:3},{n:"Machine Learning",c:"AI/ML",l:2,e:2},{n:"SQL",c:"Databases",l:2,e:1}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2y ago"}],hist:[]},
 {id:"FA-1029",name:"Bui Nguyen Minh",role:"AI Researcher",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"onboard",grade:"L3",mgr:"FA-1019",acc:"ACC-F",prj:"PRJ-f1",email:"minh.bui@futureapp.io",phone:"+84 90 151 4242",joined:"2026-05-26",off:null,salary:"$52,000 / yr",bank:"VCB \u2022\u2022\u2022 9931",tax:"VN-TAX-\u2022\u2022\u2022991",dob:"1999-03-14",tech:["Python","LLM","PyTorch"],skills:[{n:"Python",c:"Programming",l:3,e:1},{n:"LLM",c:"AI/ML",l:2,e:0},{n:"PyTorch",c:"AI/ML",l:2,e:0}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"2w ago"}],hist:[{w:"2026-05-26 02:00 UTC",a:"Profile activated \u2014 onboarding started",by:"System",f:"\u2014",t:"Onboarding"}]},
 {id:"FA-1030",name:"Nguyen Viet Anh",role:"AI Researcher",dept:"Engineering",loc:"Hanoi, VN",type:"Full-Time",gender:"Male",status:"active",grade:"L4",mgr:"FA-1019",acc:"ACC-F",prj:"PRJ-f1",email:"vietanh.nguyen@futureapp.io",phone:"+84 90 626 3838",joined:"2022-10-10",off:null,salary:"$70,000 / yr",bank:"TCB \u2022\u2022\u2022 4419",tax:"VN-TAX-\u2022\u2022\u2022332",dob:"1993-12-25",tech:["Python","PyTorch","LLM"],skills:[{n:"Python",c:"Programming",l:4,e:6},{n:"PyTorch",c:"AI/ML",l:3,e:4},{n:"LLM",c:"AI/ML",l:3,e:3}],docs:[{n:"Labor Contract",t:"Contract",exp:null,age:"3y ago"}],hist:[]}
];
const ALLOC=[
 {emp:"FA-1002",prj:"PRJ-a1",from:"2025-09-01",to:"2026-12-31",pct:100,mm:16},
 {emp:"FA-1004",prj:"PRJ-a1",from:"2026-04-21",to:"2026-12-31",pct:100,mm:8},
 {emp:"FA-1010",prj:"PRJ-a1",from:"2025-10-01",to:"2026-12-31",pct:60,mm:9},
 {emp:"FA-1010",prj:"PRJ-a2",from:"2026-02-01",to:"2026-09-30",pct:40,mm:3},
 {emp:"FA-1011",prj:"PRJ-a1",from:"2026-06-01",to:"2026-12-01",pct:100,mm:6},
 {emp:"FA-1005",prj:"PRJ-a2",from:"2026-01-15",to:"2026-09-30",pct:100,mm:8.5},
 {emp:"FA-1015",prj:"PRJ-a2",from:"2026-01-15",to:"2026-09-30",pct:80,mm:7},
 {emp:"FA-1008",prj:"PRJ-b1",from:"2025-06-01",to:"2026-08-31",pct:100,mm:15},
 {emp:"FA-1009",prj:"PRJ-b1",from:"2025-07-01",to:"2026-08-31",pct:100,mm:14},
 {emp:"FA-1016",prj:"PRJ-b1",from:"2025-06-01",to:"2026-06-30",pct:100,mm:13},
 {emp:"FA-1014",prj:"PRJ-c1",from:"2026-03-01",to:"2027-02-28",pct:100,mm:12},
 {emp:"FA-1013",prj:"PRJ-c1",from:"2026-03-01",to:"2027-02-28",pct:60,mm:7},
 {emp:"FA-1020",prj:"PRJ-d1",from:"2025-11-01",to:"2026-12-31",pct:100,mm:14},
 {emp:"FA-1023",prj:"PRJ-d1",from:"2025-12-01",to:"2026-12-31",pct:100,mm:13},
 {emp:"FA-1024",prj:"PRJ-d1",from:"2026-01-01",to:"2026-12-31",pct:100,mm:12},
 {emp:"FA-1025",prj:"PRJ-d1",from:"2026-01-01",to:"2026-12-31",pct:50,mm:6},
 {emp:"FA-1021",prj:"PRJ-e1",from:"2026-01-01",to:"2026-12-31",pct:100,mm:12},
 {emp:"FA-1026",prj:"PRJ-e1",from:"2026-01-01",to:"2026-12-31",pct:100,mm:12},
 {emp:"FA-1022",prj:"PRJ-e2",from:"2026-02-01",to:"2026-11-30",pct:100,mm:10},
 {emp:"FA-1027",prj:"PRJ-e2",from:"2026-02-01",to:"2026-11-30",pct:25,mm:2.5},
 {emp:"FA-1028",prj:"PRJ-e2",from:"2026-02-01",to:"2026-11-30",pct:100,mm:10},
 {emp:"FA-1019",prj:"PRJ-f1",from:"2026-01-01",to:"2026-12-31",pct:100,mm:12},
 {emp:"FA-1029",prj:"PRJ-f1",from:"2026-01-01",to:"2026-12-31",pct:0,mm:0},
 {emp:"FA-1030",prj:"PRJ-f1",from:"2026-01-01",to:"2026-12-31",pct:0,mm:0}
];
const REQS=[
 {id:"REQ-3001",title:"Senior React Engineer",acc:"ACC-A",prj:"PRJ-a1",grade:"L4",kind:"replacement",stage:3,status:"Open",start:"2026-05-22",due:"2026-07-20",stack:[["React","Advanced"],["TypeScript","Advanced"]],note:"Backfill \u2014 a senior FE rotates off in Aug."},
 {id:"REQ-3002",title:"Go Backend Engineer",acc:"ACC-A",prj:"PRJ-a2",grade:"L4",kind:"new",stage:1,status:"Open",start:"2026-05-31",due:"2026-08-15",stack:[["Go","Advanced"],["PostgreSQL","Intermediate"]],note:"New scope \u2014 Dealer Portal phase 2."},
 {id:"REQ-3003",title:"DevOps Engineer",acc:"ACC-B",prj:"PRJ-b1",grade:"L4",kind:"replacement",stage:2,status:"Open",start:"2026-06-04",due:"2026-06-30",stack:[["AWS","Advanced"],["Kubernetes","Advanced"]],note:"Critical \u2014 backfill for Dang Van Khoa (offboards 30 Jun)."},
 {id:"REQ-3004",title:"Business Analyst",acc:"ACC-C",prj:"PRJ-c1",grade:"L3",kind:"new",stage:4,status:"Open",start:"2026-05-15",due:"2026-06-20",stack:[["SQL","Intermediate"],["Stakeholder Mgmt","Advanced"]],note:"Offer extended \u2014 awaiting acceptance."},
 {id:"REQ-3005",title:"QA Automation Engineer",acc:"ACC-A",prj:"PRJ-a1",grade:"L3",kind:"new",stage:1,status:"Open",start:"2026-06-06",due:"2026-07-31",stack:[["Playwright","Advanced"],["Python","Intermediate"]],note:"Reduce QA bus-factor on PRJ-a1."},
 {id:"REQ-3006",title:"Senior ML Engineer",acc:"ACC-E",prj:"PRJ-e2",grade:"L4",kind:"new",stage:2,status:"Open",start:"2026-05-10",due:"2026-07-31",stack:[["Machine Learning","Advanced"],["Python","Advanced"]],note:"Scale up AERIS-DA model team."},
 {id:"REQ-3007",title:"Kafka Platform Engineer",acc:"ACC-D",prj:"PRJ-d1",grade:"L4",kind:"replacement",stage:3,status:"Open",start:"2026-04-22",due:"2026-06-30",stack:[["Kafka","Advanced"],["Java","Advanced"]],note:"Backfill on AVIA Core streaming layer."}
];
/* JD detail per requisition (shown only in detail view, not on the overview card) */
const REQ_JD={
 "REQ-3001":{summary:"Own the front-end of the Connected Vehicle App \u2014 a high-traffic React/TypeScript product for Vinfast. You'll lead component architecture and mentor 2 mid-level FE engineers.",resp:["Design and build reusable React components and design-system primitives","Own performance budgets and Core Web Vitals for the app","Review PRs and coach 2 mid-level engineers","Partner with the EM and product on scope and estimates"],req:["5+ years React, 3+ years TypeScript","Strong testing discipline (RTL / Playwright)","Experience with design systems and accessibility"],nice:["Automotive / IoT domain","Module federation / micro-frontends"]},
 "REQ-3002":{summary:"Build the Dealer Portal phase-2 back-end in Go \u2014 new APIs, event pipelines and PostgreSQL data model for Vinfast dealer operations.",resp:["Design and implement Go services and gRPC/REST APIs","Model and optimize PostgreSQL schemas","Write integration tests and own service reliability"],req:["4+ years Go in production","Solid PostgreSQL (indexing, query tuning)","Comfortable with containerized deploys"],nice:["Kafka / event-driven experience","Dealer / commerce domain"]},
 "REQ-3003":{summary:"Critical backfill for the Maybank Mobile Banking platform \u2014 own the AWS + Kubernetes delivery pipeline as the current senior DevOps offboards 30 Jun.",resp:["Own CI/CD, IaC (Terraform) and EKS clusters","Harden security & compliance for a banking workload","On-call rotation and incident response"],req:["4+ years AWS at scale, strong Kubernetes","Terraform / GitOps","Banking-grade security awareness"],nice:["Financial-services compliance (PCI-DSS)","Service mesh (Istio)"]},
 "REQ-3004":{summary:"Business Analyst for Globex Retail \u2014 bridge stakeholders and the delivery team, turning business needs into clear, testable requirements.",resp:["Run discovery and write user stories / acceptance criteria","Maintain the backlog with the PO","Build SQL reports for stakeholders"],req:["3+ years BA in software delivery","Strong SQL and stakeholder management","Excellent written English"],nice:["Retail / e-commerce domain","Agile certification"]},
 "REQ-3005":{summary:"Add QA automation depth on the Connected Vehicle App to reduce a bus-factor-of-1 on Playwright coverage.",resp:["Build and maintain Playwright E2E suites","Integrate tests into CI and own flake reduction","Define a test strategy with the QA lead"],req:["3+ years test automation","Playwright or Cypress, Python or TypeScript","CI/CD integration experience"],nice:["Performance testing (k6)","Automotive domain"]},
 "REQ-3006":{summary:"Senior ML Engineer to scale the AERIS-DA model team \u2014 productionize forecasting models with a modern MLOps stack.",resp:["Design, train and deploy ML models to production","Build feature stores and model registries","Mentor junior data scientists"],req:["5+ years ML in production, strong Python","Feature engineering and model serving","Cloud ML platforms (SageMaker / Vertex)"],nice:["Energy / forecasting domain","LLM / RAG experience"]},
 "REQ-3007":{summary:"Kafka Platform Engineer to own the AVIA Core streaming layer \u2014 backfill on a high-throughput Java + Kafka platform.",resp:["Own Kafka cluster operations and topics design","Build and maintain Java stream-processing services","Ensure exactly-once delivery and observability"],req:["4+ years Java, 2+ years Kafka in production","Stream processing (Kafka Streams / Flink)","Strong distributed-systems fundamentals"],nice:["Schema registry / Avro","AVIA or telecom domain"]}
};
function reqJD(id){return REQ_JD[id]||null;}
function jdHtml(r){const jd=reqJD(r.id);
 const stackLine='<div class="req-tags" style="margin:0 0 12px">'+r.stack.map(s=>'<span class="tag tag-tech">'+s[0]+' \u00b7 '+s[1]+'</span>').join("")+'</div>';
 if(!jd)return stackLine+'<div class="fb"><div class="fnote">'+(r.note||"No detailed JD provided for this requisition.")+'</div></div>';
 const list=(t,arr,color)=>'<div class="fm" style="margin-top:10px'+(color?';color:'+color:'')+'">'+t+'</div><ul style="margin:4px 0 0;padding-left:18px">'+arr.map(x=>'<li class="fnote" style="margin-bottom:3px">'+x+'</li>').join("")+'</ul>';
 return stackLine+'<div class="fb" style="background:var(--primary-soft)"><div class="fm">About the role</div><div class="fnote">'+jd.summary+'</div></div>'
  +list("Responsibilities",jd.resp)+list("Requirements",jd.req)+(jd.nice&&jd.nice.length?list("Nice to have",jd.nice,"var(--muted)"):"");
}
const STAGES=["Sourcing","Screening","Interview","Offer"];
let APP_SEQ=100;
let APPLICATIONS=[
 {id:"APP-1",req:"REQ-3001",emp:"FA-1025",date:"2026-06-03",note:"Keen to grow into a senior React role.",status:"PMO review",endorse:{rel:true,rec:true},hist:[
   {ts:"2026-06-03 03:10",actor:"Pham Tien Manh",action:"Submitted application",note:"Keen to grow into a senior React role."},
   {ts:"2026-06-03 11:00",actor:"EM \u00b7 Pham Quoc Bao (releasing)",action:"Releasing-EM endorsed",note:"Can spare ~20% from Connected Vehicle App."},
   {ts:"2026-06-04 04:30",actor:"EM \u00b7 Pham Quoc Bao (receiving)",action:"Receiving-EM endorsed",note:"Good fit for the React backfill."},
   {ts:"2026-06-04 08:20",actor:"PMO \u00b7 Nguyen Khanh Linh",action:"Started PMO review",note:"Checking capacity before final approval."}
 ]},
 {id:"APP-2",req:"REQ-3002",emp:"FA-1024",date:"2026-06-05",note:"Open to switching from backend to fullstack.",status:"Submitted",endorse:{rel:false,rec:false},hist:[
   {ts:"2026-06-05 02:00",actor:"Nguyen Huy Hieu",action:"Submitted application",note:"Open to switching from backend to fullstack."}
 ]},
 {id:"APP-3",req:"REQ-3006",emp:"FA-1028",date:"2026-06-05",note:"Strong ML interest, want more model ownership.",status:"Approved",endorse:{rel:true,rec:true},alloc:20,hist:[
   {ts:"2026-06-05 04:00",actor:"Le Thanh Tung",action:"Submitted application",note:"Strong ML interest, want more model ownership."},
   {ts:"2026-06-05 09:00",actor:"EM \u00b7 Nguyen Anh Thai (releasing)",action:"Releasing-EM endorsed",note:"20% spare on AVIA Core."},
   {ts:"2026-06-06 03:00",actor:"EM \u00b7 Engagement Manager (receiving)",action:"Receiving-EM endorsed",note:"Needs ML depth on AERIS-DA."},
   {ts:"2026-06-07 06:30",actor:"PMO \u00b7 Nguyen Khanh Linh",action:"Approved",note:"Approved at 20% \u2014 allocation created on AERIS-DA."}
 ]},
 {id:"APP-4",req:"REQ-3002",emp:"FA-1024",date:"2026-06-06",note:"Comfortable with Go and Postgres.",status:"Rejected",endorse:{rel:false,rec:false},hist:[
   {ts:"2026-06-06 02:30",actor:"Nguyen Huy Hieu",action:"Submitted application",note:"Comfortable with Go and Postgres."},
   {ts:"2026-06-07 07:00",actor:"EM \u00b7 Nguyen Anh Thai (releasing)",action:"Releasing-EM declined",note:"Fully allocated on AVIA Core until Dec \u2014 revisit in Q4."}
 ]}
];
let FOLLOWS=new Set();
/* ---- domain model: rates, billability, capacity, audit ---- */
const RATES={E1:[0,0],L1:[3200,1500],L2:[4200,2000],L3:[5200,2600],L4:[6500,3300],L5:[8000,4200],L6:[10000,5500],L7:[12000,7000]};
function empRate(e){return RATES[e.grade]||[5000,2800];}
function isBillableAlloc(a){const p=PROJECTS.find(x=>x.id===a.prj);return !!p&&p.acc!=='ACC-F';}
function empMonthTotals(empId){const arr=[0,0,0,0,0,0,0,0,0,0,0,0];ALLOC.filter(a=>a.emp===empId).forEach(a=>{const f=new Date(a.from),t=new Date(a.to);for(let m=0;m<12;m++){const ms=new Date(2026,m,1),meo=new Date(2026,m+1,0);if(f<=meo&&t>=ms)arr[m]+=a.pct;}});return arr;}
function isOverAllocated(empId){return empMonthTotals(empId).some(v=>v>100);}
function actualVar(a){let h=0;const s=a.emp+a.prj;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%17;return h-8;}
const AUDIT=[
 {ts:"2026-06-07 06:30",actor:"Nguyen Khanh Linh (Admin)",action:"Application approved + allocation created",target:"Le Thanh Tung \u2192 Senior ML Engineer",note:"20% on AERIS-DA"},
 {ts:"2026-06-07 07:00",actor:"Nguyen Anh Thai (Admin)",action:"Application declined by EM",target:"Nguyen Huy Hieu \u2192 Go Backend Engineer",note:"capacity"},
 {ts:"2026-06-05 09:00",actor:"Pham Quoc Bao (Admin)",action:"Releasing-EM endorsed",target:"Pham Tien Manh \u2192 Senior React Engineer",note:""},
 {ts:"2026-06-04 08:20",actor:"Nguyen Khanh Linh (Admin)",action:"Requisition status changed",target:"DevOps Engineer",note:"Screening"}
];
function audit(action,target,note){AUDIT.unshift({ts:nowTs(),actor:me().name+" ("+PERSONA_LABEL[persona]+")",action:action,target:target||"",note:note||""});}
function offType(e){return e.offType||"voluntary";}
const PROB_VERDICT={};
function confirmAction(title,msg,confirmLabel,onYes,danger){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  openModal('<div class="modal-h"><div><h3>'+title+'</h3></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
    +'<div class="modal-b"><p style="font-size:13.5px;color:var(--ink-2);line-height:1.5">'+msg+'</p></div>'
    +'<div class="modal-f"><button class="btn btn-ghost" id="cfNo">Cancel</button><button class="btn btn-primary" id="cfYes" style="'+(danger?'background:var(--accent)':'')+'">'+confirmLabel+'</button></div>');
  const w=document.getElementById('modalWrap');
  w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#cfNo').onclick=closeModal;
  w.querySelector('#cfYes').onclick=()=>{closeModal();onYes();};
}
/* ===== ACCESS / PERSONA \u2014 3-tier governance per People MoM (10/06) =====
   Strategic: BOD / Admin / PMO / HRM \u2192 see everything
   Management: AM \u2192 own account only (grant required for other accounts)
   Operation: EM/Team Lead \u2192 own projects + evaluate members; Member \u2192 own project only */
const PERSONA_LABEL={admin:"Admin",am:"Account Manager",manager:"EM / Team Lead",employee:"Member"};
const PERSONA_TIER={admin:"Strategic",am:"Management",manager:"Operation",employee:"Operation"};
let persona="admin";let drawerEmp=null;
const CURRENT={bod:"FA-1000",admin:"FA-1006",hrbp:"FA-1012",am:"FA-1001",manager:"FA-1002",employee:"FA-1015"};
let amGrants=new Set();/* extra accounts an AM has been granted to view */
function me(){return EMP.find(e=>e.id===CURRENT[persona]);}
function renderMe(){const e=me();if(!e)return;const r=document.querySelector(".me .rl");if(r)r.textContent=PERSONA_LABEL[persona]||e.role;const n=document.querySelector(".me .nm");if(n)n.textContent=e.name;const a=document.querySelector(".me .av");if(a){a.textContent=initials(e.name);a.style.background=avColor(e.name);}}
const fullAccess=()=>["bod","admin","hrbp"].includes(persona);
const isEmployee=()=>persona==="employee";
const isManager=()=>persona==="manager";
const isAM=()=>persona==="am";
function canSeeSensitive(empId){return persona==="admin"||empId===CURRENT[persona];}
function myAccount(){const e=me();return e?e.acc:null;}
function amAccounts(){const own=myAccount();return ACCOUNTS.filter(a=>a.id===own||amGrants.has(a.id));}
function myProjects(){const u=me();return PROJECTS.filter(p=>p.em===u.id);}
function hiringVisibleReqs(){if(fullAccess())return REQS;if(isAM()){const accs=amAccounts().map(a=>a.id);return REQS.filter(r=>accs.indexOf(r.acc)>=0);}if(isManager()){const prjs=myProjects().map(p=>p.id);return REQS.filter(r=>prjs.indexOf(r.prj)>=0);}return REQS;}
function hiringReqIds(){const s=new Set();hiringVisibleReqs().forEach(r=>s.add(r.id));return s;}
function candInScope(c){if(fullAccess())return true;return hiringReqIds().has(c.req);}
function intCandReq(i){const c=CANDIDATES.find(x=>x.id===i.cand||x.name===i.cand||x.id===i.candId);return c?c.req:i.req;}
function intInScope(i){if(fullAccess())return true;return hiringReqIds().has(intCandReq(i));}
function hiringScopeNote(){if(fullAccess())return null;if(isAM()){const a=amAccounts().map(x=>x.name);return 'Scoped to your account'+(a.length>1?'s':'')+' \u2014 '+(a.join(', ')||'assigned');}if(isManager()){const p=myProjects().map(x=>x.name||x.id);return 'Scoped to your project'+(p.length>1?'s':'')+' \u2014 '+(p.join(', ')||'your team');}return null;}
function visibleEmps(){
  if(fullAccess())return EMP;
  if(isAM()){const accs=amAccounts().map(a=>a.id);return EMP.filter(e=>accs.indexOf(e.acc)>=0);}
  if(isManager()){const prjs=myProjects().map(p=>p.id);const u=me();return EMP.filter(e=>e.id===u.id||prjs.indexOf(e.prj)>=0);}
  return EMP.filter(e=>e.id===CURRENT.employee);
}
function visibleAccounts(){if(fullAccess())return ACCOUNTS;if(isAM())return amAccounts();return ACCOUNTS.filter(a=>a.id===myAccount());}
/* field-level edit rights (MoM 1.4): Direct Manager / Account / Project + comp = admin-only; other personal fields = self-edit */
const ADMIN_ONLY_FIELDS=["mgr","acc","prj","grade","salary","bank","tax"];
function canEditField(empId,field){
  const isSelf=empId===CURRENT[persona];const isAdmin=fullAccess();
  if(ADMIN_ONLY_FIELDS.indexOf(field)>=0)return isAdmin;
  return isAdmin||isSelf;
}
/* ===== helpers ===== */
function av(name,extra){extra=extra||"";return '<div class="av" style="background:'+avColor(name)+';'+extra+'">'+initials(name)+'</div>';}
function statusPill(s){const m={active:["st-active","Active"],leave:["st-leave","On Leave"],probation:["st-probation","Probation"],onboard:["st-onboard","Onboarding"],offboard:["st-offboard","Offboarding"]};const a=m[s];return '<span class="pill-status '+a[0]+'"><span class="d"></span>'+a[1]+'</span>';}
function icon(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
const I={pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',check:'<polyline points="20 6 9 17 4 12"/>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',spark:'<path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5 19 19M19 5l-2.5 2.5M7.5 16.5 5 19"/><circle cx="12" cy="12" r="3"/>',brief:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',building:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'};
function maskField(val){return canSeeSensitive(drawerEmp)?'<span class="mono">'+val+'</span>':'<span class="masked">'+icon('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>')+'Restricted</span>';}
const accName=id=>{const a=ACCOUNTS.find(x=>x.id===id);return a?a.name:"\u2014";};
const prjName=id=>{const p=PROJECTS.find(x=>x.id===id);return p?p.name:"\u2014";};
const mgrName=id=>{const m=EMP.find(x=>x.id===id);return m?m.name:"\u2014";};
function spark(values,color,w,h){w=w||260;h=h||64;const max=Math.max.apply(0,values),min=Math.min.apply(0,values);const rng=max-min||1;const pts=values.map((v,i)=>(i/(values.length-1)*w).toFixed(1)+","+(h-6-((v-min)/rng)*(h-14)).toFixed(1));const line=pts.join(" ");return '<svg width="100%" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none" style="display:block"><defs><linearGradient id="g'+color.slice(1)+'" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="'+color+'" stop-opacity=".22"/><stop offset="1" stop-color="'+color+'" stop-opacity="0"/></linearGradient></defs><polygon points="0,'+h+' '+line+' '+w+','+h+'" fill="url(#g'+color.slice(1)+')"/><polyline points="'+line+'" fill="none" stroke="'+color+'" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';}
function donut(seg,size){size=size||110;const total=seg.reduce((a,b)=>a+b.v,0);const r=size/2-9,cx=size/2,cy=size/2,C=2*Math.PI*r;let off=0,arcs="";seg.forEach(s=>{const len=s.v/total*C;arcs+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+s.color+'" stroke-width="14" stroke-dasharray="'+len+' '+(C-len)+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 '+cx+' '+cy+')"/>';off+=len;});return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'">'+arcs+'<text x="'+cx+'" y="'+(cy-2)+'" text-anchor="middle" font-family="Geist" font-size="20" font-weight="600" fill="currentColor">'+total+'</text><text x="'+cx+'" y="'+(cy+15)+'" text-anchor="middle" font-size="9" fill="#71748A" letter-spacing=".05em">PEOPLE</text></svg>';}
/* ===== DASHBOARD ===== */
function viewDashboard(){return isEmployee()?dashEmployee():dashOrg();}
function dashScopeInfo(){
 if(isAM()){var accs=(typeof amAccounts==='function')?amAccounts():[];var names=accs.map(function(a){return a.name||a.id||a;});return {f:0.22,label:'Your accounts \u2014 '+(names.join(', ')||'assigned accounts')};}
 if(isManager()){var pr=(typeof PM_PERSONA!=='undefined'&&PM_PERSONA.manager)?PM_PERSONA.manager.projects:[];return {f:0.12,label:'Your projects \u2014 '+((pr&&pr.join(', '))||'your team')};}
 return {f:1,label:null};
}
function scopeNum(n,f){return Math.max(1,Math.round(n*f));}
function scopedWF(){
 var si=dashScopeInfo();var f=si.f;if(f>=1)return WF;
 var W=JSON.parse(JSON.stringify(WF));
 W.total=scopeNum(WF.total,f);W.active=scopeNum(WF.active,f);W.onLeave=Math.round(WF.onLeave*f);W.bench=Math.round(WF.bench*f);
 W.depts=WF.depts.map(function(d){return {d:d.d,n:scopeNum(d.n,f)};});
 W.alloc=WF.alloc.map(function(a){return {d:a.d,billable:Math.round(a.billable*f),internal:Math.round(a.internal*f),bench:Math.round(a.bench*f),leave:Math.round(a.leave*f)};});
 W.seniority=WF.seniority.map(function(s){return {l:s.l,n:scopeNum(s.n,f)};});
 W.stack=WF.stack.map(function(s){return {k:s.k,n:scopeNum(s.n,f)};});
 W.tenure=WF.tenure.map(function(t){return {b:t.b,n:scopeNum(t.n,f)};});
 W.attrVol=WF.attrVol.map(function(v){return Math.round(v*f);});W.attrInvol=WF.attrInvol.map(function(v){return Math.round(v*f);});
 W.exits=WF.exits.map(function(e){return {r:e.r,n:Math.max(1,Math.round(e.n*f))};});
 W.skillGap=WF.skillGap.map(function(s){return {s:s.s,cur:Math.round(s.cur*f),req:Math.round(s.req*f)};});
 W.critical=WF.critical.map(function(c){return {role:c.role,cur:Math.round(c.cur*f),req:Math.round(c.req*f)};});
 W.forecast=WF.forecast.map(function(x){return {m:x.m,attr:Math.round(x.attr*f),hire:Math.round(x.hire*f),fc:scopeNum(x.fc,f),demand:scopeNum(x.demand,f)};});
 W.spk={};Object.keys(WF.spk).forEach(function(k){W.spk[k]=(k==='util'||k==='attr'||k==='health')?WF.spk[k].slice():WF.spk[k].map(function(v){return scopeNum(v,f);});});
 return W;
}
var WF={
 total:185,totalDelta:8,active:180,onLeave:5,util:76,utilTarget:80,bench:12,attrition:8.2,health:82,
 spk:{total:[158,162,165,168,170,174,176,179,181,183,184,185],active:[150,154,157,160,163,166,169,171,174,176,177,178],util:[68,69,70,71,72,73,74,75,75,76,76,76],bench:[6,7,8,9,8,10,9,11,10,11,12,12],attr:[9.8,9.5,9.2,9,8.8,8.6,8.5,8.4,8.3,8.3,8.2,8.2],health:[74,75,76,77,78,79,80,81,81,82,82,82],joiners:[2,3,3,4,3,4,3,3,4,4,4,4],leavers:[1,1,1,1,1,1,1,1,1,1,2,2]},
 months:['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'],
 depts:[{d:'Engineering',n:118},{d:'QA',n:24},{d:'PM',n:14},{d:'BA',n:12},{d:'Design',n:8},{d:'HR',n:5},{d:'Sales',n:4}],
 alloc:[{d:'Engineering',billable:96,internal:12,bench:7,leave:3},{d:'QA',billable:17,internal:3,bench:3,leave:1},{d:'PM',billable:11,internal:3,bench:0,leave:0},{d:'BA',billable:8,internal:2,bench:1,leave:1},{d:'Design',billable:5,internal:2,bench:1,leave:0},{d:'HR',billable:0,internal:5,bench:0,leave:0},{d:'Sales',billable:0,internal:4,bench:0,leave:0}],
 seniority:[{l:'Intern',n:16},{l:'Junior',n:60},{l:'Middle',n:63},{l:'Senior',n:33},{l:'Lead',n:9},{l:'Manager',n:4}],
 stack:[{k:'Java',n:46},{k:'React',n:38},{k:'.NET',n:24},{k:'Python',n:22},{k:'Flutter',n:14},{k:'AI / ML',n:9}],
 tenure:[{b:'< 6 mo',n:34},{b:'6\u201312 mo',n:44},{b:'1\u20133 yr',n:62},{b:'3\u20135 yr',n:30},{b:'5+ yr',n:15}],
 attrVol:[1,0,1,1,1,1,1,0,1,1,2,2],attrInvol:[0,1,0,0,0,0,0,1,0,0,0,0],
 leaverTenure:[{b:'< 6 mo',n:3},{b:'6\u201312 mo',n:5},{b:'1\u20133 yr',n:5},{b:'3+ yr',n:2}],
 turnover:[{d:'Veritone',r:13.5,g:'Delivery'},{d:'Aeris',r:11.0,g:'Delivery'},{d:'Marketing',r:9.4,g:'Function'},{d:'Gridbeyond',r:7.6,g:'Delivery'},{d:'IT',r:6.2,g:'Function'},{d:'Backoffice',r:5.0,g:'Function'},{d:'L&D',r:4.2,g:'Function'},{d:'HR',r:3.0,g:'Function'}],
 exits:[{r:'Career growth',n:5},{r:'Salary',n:4},{r:'Better offer',n:3},{r:'Relocation',n:2},{r:'Performance',n:1}],
 skillGap:[{s:'Java',cur:18,req:30},{s:'React',cur:16,req:20},{s:'QA',cur:14,req:16},{s:'PM',cur:10,req:12},{s:'BA',cur:5,req:9},{s:'AI / ML',cur:4,req:14}],
 critical:[{role:'Senior Java',cur:4,req:10},{role:'AI Engineer',cur:2,req:7},{role:'Senior BA',cur:1,req:4},{role:'DevOps Lead',cur:2,req:4},{role:'Senior QA',cur:6,req:9}],
 forecast:[{m:'Jul',attr:3,hire:6,fc:188,demand:195},{m:'Aug',attr:4,hire:7,fc:191,demand:202},{m:'Sep',attr:3,hire:8,fc:196,demand:208},{m:'Oct',attr:4,hire:7,fc:199,demand:214},{m:'Nov',attr:3,hire:9,fc:205,demand:219},{m:'Dec',attr:4,hire:8,fc:209,demand:224}]
};
var dashScope={period:'Last 12 months',dept:'All',acc:'All',type:'All'};
function dSec(t,d){return '<div class="rep-sec"><span class="rep-sec-t">'+t+'</span>'+(d?'<span class="rep-sec-m">'+d+'</span>':'')+'</div>';}
function dIns(txt,tone){var bg=tone==='warn'?'background:var(--warning-soft);color:var(--warning-ink)':tone==='bad'?'background:var(--accent-soft);color:var(--accent-ink)':tone==='good'?'background:var(--positive-soft);color:var(--positive-ink)':'background:var(--info-soft);color:var(--ink-2)';return '<div class="rep-insight" style="'+bg+'"><span class="spark-dot"></span><span>'+txt+'</span></div>';}
function dBar(label,val,max,color,suffix,sub){return '<div class="lt-row"><div class="lt-label" style="width:120px"><div class="lt-stage">'+label+'</div>'+(sub?'<div class="small muted">'+sub+'</div>':'')+'</div><div class="lt-track"><div class="lt-fill" style="width:'+Math.max(3,Math.round(val/max*100))+'%;background:'+color+'"></div></div><div class="lt-days mono">'+val+(suffix||'')+'</div></div>';}
function dStack(label,segs,maxTot){var tot=segs.reduce(function(a,s){return a+s.v;},0);var tw=Math.round(tot/maxTot*100);return '<div class="stk-row"><div class="stk-label">'+label+'</div><div class="stk-outer"><div class="stk-track" style="width:'+tw+'%">'+segs.map(function(s){return '<div class="stk-seg" style="width:'+Math.round(s.v/tot*100)+'%;background:'+s.color+'" title="'+s.lbl+': '+s.v+'"></div>';}).join('')+'</div></div><div class="stk-tot mono">'+tot+'</div></div>';}
function dLegend(items){return '<div class="stk-legend">'+items.map(function(i){return '<span class="sl-i"><span class="sl-sw" style="background:'+i.color+'"></span>'+i.lbl+'</span>';}).join('')+'</div>';}

function dashOrg(){
 var W=scopedWF();var _scope=dashScopeInfo();
 var allocCat=[{key:'billable',lbl:'Billable',color:'var(--positive)'},{key:'internal',lbl:'Internal',color:'var(--info)'},{key:'bench',lbl:'Idle',color:'var(--warning)'},{key:'leave',lbl:'On leave',color:'var(--surface-4)'}];
 var billable=W.alloc.reduce(function(a,d){return a+d.billable;},0);
 var internal=W.alloc.reduce(function(a,d){return a+d.internal;},0);
 var benchT=W.alloc.reduce(function(a,d){return a+d.bench;},0);
 var maxDeptTot=Math.max.apply(0,W.alloc.map(function(d){return d.billable+d.internal+d.bench+d.leave;}));
 var maxDept=Math.max.apply(0,W.depts.map(function(d){return d.n;}));
 var engPct=Math.round(W.depts[0].n/W.total*100);
 var seniorPct=Math.round((W.seniority[3].n+W.seniority[4].n+W.seniority[5].n)/W.total*100);
 var newPct=Math.round((W.tenure[0].n+W.tenure[1].n)/W.total*100);
 var maxStack=Math.max.apply(0,W.stack.map(function(s){return s.n;}));
 var maxTen=Math.max.apply(0,W.tenure.map(function(t){return t.n;}));
 var maxTurn=Math.max.apply(0,W.turnover.map(function(t){return t.r;}));
 var senRamp=['#86abff','#5b8bff','#3b74ff','#1f5cff','#0047FF','#022DAD'];
 var exPal=['var(--primary)','var(--teal)','var(--warning)','var(--info)','var(--accent)'];
 var exitSeg=W.exits.map(function(e,i){return {label:e.r,v:e.n,color:exPal[i%exPal.length]};});
 var recentVol=W.attrVol.slice(-2).reduce(function(a,b){return a+b;},0),prevVol=W.attrVol.slice(-4,-2).reduce(function(a,b){return a+b;},0);
 var volRise=Math.round((recentVol-prevVol)/prevVol*100);
 var dec=W.forecast[W.forecast.length-1];var gapQ4=dec.demand-dec.fc;
 var jSum=W.spk.joiners.reduce(function(a,b){return a+b;},0);var lSum=W.spk.leavers.reduce(function(a,b){return a+b;},0);
 var leaveT=W.alloc.reduce(function(a,d){return a+d.leave;},0);
 var maxSen=Math.max.apply(0,W.seniority.map(function(s){return s.n;}));
 var jrMidPct=Math.round((W.seniority[1].n+W.seniority[2].n)/W.total*100);

 /* KPI cards — consolidated to say more per card */
 function kcard(l,v,d,dcls,spkArr,spkColor,extra){return '<div class="kx-card kx-spark"><div class="kx-l">'+l+'</div><div class="kx-v">'+v+'</div><div class="kx-d '+(dcls||'')+'">'+d+'</div><div class="kx-spk">'+spark(spkArr,spkColor,200,38)+'</div>'+(extra||'')+'</div>';}
 var activePct=Math.round(W.active/W.total*100);
 var kpis='<div class="kpi-exec kpi-4">'
  +kcard('Active workforce',W.active+'<span class="kx-u">/'+W.total+'</span>',activePct+'% active \u00b7 +'+W.totalDelta+'% vs last month \u00b7 '+W.onLeave+' on leave/notice','up',W.spk.active,'#0047FF')
  +kcard('Utilization',W.util+'%',W.bench+' idle \u00b7 target '+W.utilTarget+'% ('+(W.utilTarget-W.util)+' below)','down',W.spk.util,'#0047FF')
  +kcard('Attrition rate',W.attrition+'%','down from '+W.spk.attr[0]+'% \u00b7 mostly Middle QA','up',W.spk.attr,'#27a644')
  +kcard('Workforce health',W.health+'<span class="kx-u">/100</span>','Healthy \u00b7 up from '+W.spk.health[0],'up',W.spk.health,'#27a644')
  +'</div>';

 /* S2 workforce overview */
 var deptBars=W.depts.map(function(d){return dBar(d.d,d.n,maxDept,'var(--primary)','',Math.round(d.n/W.total*100)+'% of total');}).join('');
 var s2='<div class="grid cols-2" style="align-items:start">'
  +'<div class="card"><div class="card-head"><h3>Headcount movement</h3><span class="meta">onboarding vs offboarding \u00b7 12 months</span></div><div class="card-pad">'+repLineSVG([{name:'Joiners',color:'var(--positive)',values:W.spk.joiners},{name:'Leavers',color:'var(--accent)',values:W.spk.leavers}],W.months)+'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:var(--positive)"></span>New joiners (onboarding)</span><span class="tl-i"><span class="tl-sw" style="background:var(--accent)"></span>Leavers (offboarding)</span></div>'+dIns('<b>'+jSum+'</b> joined vs <b>'+lSum+'</b> left over 12 months \u2014 a net <b>+'+(jSum-lSum)+'</b>. Onboarding outpaces offboarding ~'+(Math.round(jSum/lSum*10)/10)+'\u00d7, but the recent rise in leavers is worth watching.','good')+'</div></div>'
  +'<div class="card"><div class="card-head"><h3>People by department</h3><span class="meta">'+W.total+' employees</span></div><div class="card-pad">'+deptBars+dIns('<b>Engineering</b> is <b>'+engPct+'%</b> of the company \u2014 the business is heavily delivery-weighted. Support functions (HR, Sales) stay lean.','plain')+'</div></div>'
  +'</div>';

 /* S3 utilization */
 var u1='<div class="kx-card"><div class="kx-l">Billable</div><div class="kx-v" style="color:var(--positive-ink)">'+billable+'</div><div class="kx-d">'+Math.round(billable/W.active*100)+'% of active \u2014 revenue-generating</div></div>';
 var u2='<div class="kx-card"><div class="kx-l">Internal / overhead</div><div class="kx-v">'+internal+'</div><div class="kx-d">non-billable roles &amp; support</div></div>';
 var u3='<div class="kx-card"><div class="kx-l">Idle</div><div class="kx-v" style="color:var(--warning-ink)">'+benchT+'</div><div class="kx-d">available, not yet staffed</div></div>';
 var allocRows=W.alloc.map(function(d){return dStack(d.d,allocCat.map(function(c){return {lbl:c.lbl,v:d[c.key],color:c.color};}),maxDeptTot);}).join('');
 var ovSegs=[{lbl:'Billable',v:billable,color:'var(--positive)'},{lbl:'Internal',v:internal,color:'var(--info)'},{lbl:'Idle',v:benchT,color:'var(--warning)'},{lbl:'On leave',v:leaveT,color:'var(--surface-4)'}];
 var ovTot=billable+internal+benchT+leaveT;
 var ovBar='<div class="util-overall">'+ovSegs.map(function(s){return '<div class="util-seg" style="flex:'+s.v+';background:'+s.color+'" title="'+s.lbl+': '+s.v+'"></div>';}).join('')+'</div>'
  +'<div class="util-keys">'+ovSegs.map(function(s){return '<div class="util-key"><span class="util-key-sw" style="background:'+s.color+'"></span><span class="util-key-n">'+s.v+'</span><span class="util-key-l">'+s.lbl+' \u00b7 '+Math.round(s.v/ovTot*100)+'%</span></div>';}).join('')+'</div>';
 var s3='<div class="card mb"><div class="card-head"><h3>Where the workforce is deployed</h3><span class="meta">all '+W.total+' people by status</span></div><div class="card-pad">'+ovBar+dIns('<b>'+billable+'</b> of '+W.total+' people are billable (<b>'+Math.round(billable/W.total*100)+'%</b>); utilization \u2014 billable share of <i>active</i> staff \u2014 is <b>'+W.util+'%</b> vs the <b>'+W.utilTarget+'%</b> target. <b>'+benchT+'</b> sit on the bench: staff them onto delivery before opening new hires.','warn')+'</div></div>'
  +'<div class="card"><div class="card-head"><h3>How each department is allocated</h3><span class="meta">billable vs non-billable per team</span></div><div class="card-pad">'+dLegend(allocCat)+'<div style="margin-top:12px">'+allocRows+'</div><div class="small muted mt">Bar length = team size; segments show how each team\u2019s people split across billable, internal, bench and leave.</div></div></div>';

 /* S4 distribution */
 var senSeg=W.seniority.map(function(s,i){return {lbl:s.l,v:s.n,color:senRamp[i]};});
 var stackBars=W.stack.map(function(s){return dBar(s.k,s.n,maxStack,'var(--teal)','',null);}).join('');
 var tenBars=W.tenure.map(function(t){return dBar(t.b,t.n,maxTen,'var(--primary)','',Math.round(t.n/W.total*100)+'%');}).join('');
 var senOrder=W.seniority.slice().reverse();
 var senBars=senOrder.map(function(s){var idx=W.seniority.indexOf(s);return dBar(s.l,s.n,maxSen,senRamp[idx],'',Math.round(s.n/W.total*100)+'% of staff');}).join('');
 var seniorCard='<div class="card"><div class="card-head"><h3>Seniority mix</h3><span class="meta">'+W.total+' employees \u00b7 senior \u2192 junior</span></div><div class="card-pad">'+senBars+dIns('A wide-base pyramid: <b>'+jrMidPct+'%</b> are Junior or Middle and only <b>'+seniorPct+'%</b> are Senior or above (Senior, Lead, Manager). A thin senior layer strains mentoring and code review \u2014 protect senior review capacity and accelerate Middle\u2192Senior promotions.','warn')+'</div></div>';
 var techCard='<div class="card"><div class="card-head"><h3>Tech stack coverage</h3><span class="meta">people skilled per technology</span></div><div class="card-pad">'+stackBars+dIns('<b>Java</b> and <b>React</b> are the deepest benches. <b>AI / ML</b> is the thinnest at just '+W.stack[5].n+' people \u2014 a risk given rising demand (see skill gaps below).','warn')+'</div></div>';
 var tenureCard='<div class="card"><div class="card-head"><h3>Tenure</h3><span class="meta">how long people have been here</span></div><div class="card-pad">'+tenBars+dIns('<b>'+newPct+'%</b> joined in the last 12 months. A large new cohort means onboarding quality and early retention are critical right now.','plain')+'</div></div>';
 var whyLeaveCard='<div class="card"><div class="card-head"><h3>Why people leave</h3><span class="meta">exit reasons, last 12 months</span></div><div class="card-pad flex center" style="gap:20px"><div style="color:var(--ink)">'+miniDonut(exitSeg,140,W.exits.reduce(function(a,e){return a+e.n;},0),'EXITS')+'</div><div style="flex:1">'+legendRow(exitSeg)+'</div></div>'+dIns('<b>Career growth</b> is the top reason people leave \u2014 a retention lever, not a pay problem. Publish clear promotion paths and internal mobility.','plain')+'</div></div>';
 var s4='<div class="grid cols-2 mb" style="align-items:start">'+seniorCard+techCard+'</div><div class="grid cols-2" style="align-items:start">'+tenureCard+whyLeaveCard+'</div>';

 /* S5 attrition */
 var ltv=W.leaverTenure;var ltTot=ltv.reduce(function(a,b){return a+b.n;},0);var earlyPct=Math.round((ltv[0].n+ltv[1].n)/ltTot*100);var maxLTv=Math.max.apply(0,ltv.map(function(x){return x.n;}));
 var earlyBars=ltv.map(function(t,i){return dBar(t.b,t.n,maxLTv,i<2?'var(--accent)':'var(--warning)','',Math.round(t.n/ltTot*100)+'%');}).join('');
 var turnBars=W.turnover.map(function(t){var hot=t.r>W.attrition*1.4;return dBar(t.d,t.r,maxTurn,hot?'var(--accent)':'var(--warning)','%',t.g);}).join('');
 var s5='<div class="grid cols-2 mb" style="align-items:start">'
  +'<div class="card"><div class="card-head"><h3>Attrition trend</h3><span class="meta">leavers per month</span></div><div class="card-pad">'+repLineSVG([{name:'Voluntary',color:'var(--accent)',values:W.attrVol},{name:'Involuntary',color:'var(--muted)',values:W.attrInvol}],W.months)+'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:var(--accent)"></span>Voluntary</span><span class="tl-i"><span class="tl-sw" style="background:var(--muted)"></span>Involuntary</span></div>'+dIns('Voluntary leavers rose <b>'+volRise+'%</b> over the last two months, concentrated in <b>Middle QA</b>. Run stay-interviews with that group this week.','bad')+'</div></div>'
  +'<div class="card"><div class="card-head"><h3>When people leave</h3><span class="meta">leavers by tenure \u00b7 last 12 months</span></div><div class="card-pad">'+earlyBars+dIns('<b>'+earlyPct+'%</b> of leavers go within their first year \u2014 early attrition, not long-tenure churn. With '+newPct+'% of staff new, onboarding and 90-day check-ins are the highest-leverage fix.','bad')+'</div></div>'
  +'</div>'
  +'<div class="card"><div class="card-head"><h3>Turnover by team &amp; account</h3><span class="meta">annualised % \u00b7 company average '+W.attrition+'%</span></div><div class="card-pad">'+turnBars+dIns('<b>Veritone</b> (delivery) has the highest churn at <b>'+W.turnover[0].r+'%</b> \u2014 about <b>1.6\u00d7</b> the company average, a client-side attrition risk. Among internal functions, <b>Marketing</b> leads at '+W.turnover[2].r+'%.','bad')+'</div></div>';

 /* S6 skill gap + critical roles */
 var covColor=function(c){return c>=0.9?'var(--positive)':c>=0.6?'var(--warning)':'var(--accent)';};
 var covInk=function(c){return c>=0.9?'var(--positive-ink)':c>=0.6?'var(--warning-ink)':'var(--accent-ink)';};
 var gapTable='<div class="ctrl-table"><table><thead><tr><th>Skill</th><th>Have</th><th>Need</th><th>Coverage</th><th>Gap</th></tr></thead><tbody>'
  +W.skillGap.map(function(s){var cov=s.cur/s.req;return '<tr><td style="font-weight:600">'+s.s+'</td><td class="mono small">'+s.cur+'</td><td class="mono small">'+s.req+'</td><td><div class="days-cell"><div class="days-bar" style="max-width:120px"><div class="days-fill" style="width:'+Math.round(cov*100)+'%;background:'+covColor(cov)+'"></div></div><span class="mono small" style="color:'+covInk(cov)+'">'+Math.round(cov*100)+'%</span></div></td><td class="mono small" style="color:var(--accent-ink);font-weight:700">'+(s.cur-s.req)+'</td></tr>';}).join('')
  +'</tbody></table></div>';
 var riskPill=function(c){var k=c<0.4?['Critical','cst-rejected']:c<0.7?['High','cst-interview']:['Medium','cst-hold'];return '<span class="status-pill '+k[1]+'">'+k[0]+'</span>';};
 var critTable='<div class="ctrl-table"><table><thead><tr><th>Critical role</th><th>Have</th><th>Need</th><th>Gap</th><th>Risk</th></tr></thead><tbody>'
  +W.critical.map(function(r){var cov=r.cur/r.req;return '<tr><td style="font-weight:600">'+r.role+'</td><td class="mono small">'+r.cur+'</td><td class="mono small">'+r.req+'</td><td class="mono small" style="color:var(--accent-ink);font-weight:700">'+(r.cur-r.req)+'</td><td>'+riskPill(cov)+'</td></tr>';}).join('')
  +'</tbody></table></div>';
 var aiGap=W.skillGap.find(function(s){return s.s==='AI / ML';});
 var s6='<div class="grid cols-2" style="align-items:start">'
  +'<div class="card"><div class="card-head"><h3>Skill gap matrix</h3><span class="meta">people you have vs people you need</span></div>'+gapTable+'<div class="card-pad" style="padding-top:14px">'+dIns('<b>AI / ML</b> covers only <b>'+Math.round(aiGap.cur/aiGap.req*100)+'%</b> of projected demand and <b>Java</b> is short <b>'+(30-18)+'</b> people. These two gaps will constrain delivery first.','bad')+'</div></div>'
  +'<div class="card"><div class="card-head"><h3>Critical roles without backup</h3><span class="meta">single points of failure</span></div>'+critTable+'<div class="card-pad" style="padding-top:14px">'+dIns('<b>Senior BA</b> has just <b>1</b> person against a need of <b>4</b>, and <b>AI Engineer</b> covers under a third of demand. Build backups before these roles block a project.','bad')+'</div></div>'
  +'</div>';

 /* S7 forecast */
 var fcTable='<div class="ctrl-table"><table><thead><tr><th>Month</th><th>Forecast headcount</th><th>Demand</th><th>Gap</th></tr></thead><tbody>'
  +W.forecast.map(function(f){var g=f.demand-f.fc;return '<tr><td style="font-weight:600">'+f.m+'</td><td class="mono small">'+f.fc+'</td><td class="mono small">'+f.demand+'</td><td class="mono small" style="color:var(--accent-ink);font-weight:700">\u2212'+g+'</td></tr>';}).join('')
  +'</tbody></table></div>';
 var s7='<div class="card"><div class="card-head"><h3>Workforce forecast vs demand</h3><span class="meta">next 6 months</span></div><div class="card-pad"><div class="grid cols-2" style="align-items:start;gap:20px"><div>'+repLineSVG([{name:'Demand',color:'var(--accent)',values:W.forecast.map(function(f){return f.demand;})},{name:'Forecast',color:'var(--primary)',dash:true,values:W.forecast.map(function(f){return f.fc;})}],W.forecast.map(function(f){return f.m;}))+'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:var(--accent)"></span>People needed</span><span class="tl-i"><span class="tl-sw" style="background:var(--primary)"></span>Forecast headcount</span></div></div><div>'+fcTable+'</div></div>'+dIns('At today\u2019s hiring pace we will be short <b>'+gapQ4+' people by Q4</b>. Hiring velocity needs to rise about <b>30%</b>, or push lower-priority scope into next year.','bad')+'</div></div>';

 /* S8 AI insights */
 var s8hero='<div class="ai-hero"><div class="ai-hero-h"><div class="ai-hero-title"><div class="agent-spark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"><path d="M12 3l1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2z"/></svg></div><div><div class="ai-hero-t">Seta signals</div><div class="ai-hero-s">What needs a decision this week \u2014 ranked by urgency</div></div></div>'+insPriBar()+'</div><div id="insList">'+aiInsights()+'</div></div>';

 /* filter bar */
 function fsel(id,opts){return '<select data-dashf="'+id+'">'+opts.map(function(o){return '<option'+(dashScope[id]===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';}
 var filters='<div class="dash-filters"><div class="df-left">'
  +'<span class="df-chip">Period '+fsel('period',['Last 12 months','Last 6 months','This quarter','Year to date'])+'</span>'
  +'<span class="df-chip">Department '+fsel('dept',['All','Engineering','QA','PM','BA','Design'])+'</span>'
  +'<span class="df-chip">Account '+fsel('acc',['All','Vinfast','Maybank','Globex','AVIA','Aeris'])+'</span>'
  +'<span class="df-chip">Type '+fsel('type',['All','Full-Time','Part-Time','Intern'])+'</span>'
  +'</div><span class="df-note">Showing '+dashScope.dept+' \u00b7 '+dashScope.period+'</span></div>';

 return '<div class="dash-wrap">'
  +'<div class="page-head"><div><div class="eyebrow">People Analytics \u00b7 Executive Dashboard'+(_scope.label?' \u00b7 scoped':'')+'</div><h1>Workforce Overview</h1><p>'+(_scope.label?_scope.label+' \u2014 the same executive read, scoped to your people.':'The 30-second read on your people \u2014 who you have, who is billable, where the risks are, and whether you can staff what is coming.')+'</p></div></div>'
  +s8hero
  +filters
  +kpis
  +dSec('Workforce overview','How the headcount is growing and where people sit')+s2
  +dSec('Utilization &amp; allocation','How many people are actually billable')+s3
  +dSec('Forecast &amp; planning','Can we staff the next six months?')+s7
  +dSec('Workforce distribution','Seniority, skills and tenure of the team')+s4
  +dSec('Attrition &amp; retention','Who is leaving, and why')+s5
  +dSec('Performance','Monthly review scores across your people')+dashPerfSection()
  +dSec('Skill gaps &amp; capacity risk','Where we are short for what is coming')+s6
  +dSec('Skill inventory &amp; capacity','Every skill we track \u2014 who holds it, at what level, and against open demand')+dashTalentSection()
  +'</div>';
}
function dashPerfScope(){
  if(fullAccess()){var leads=perfLeads();var all=[];leads.forEach(function(l){all=all.concat(perfMembersOf(l.id));});return all.concat(leads);}
  if(isAM()){var accs=amAccounts().map(function(a){return a.id;});return EMP.filter(function(e){return e.status!=='offboard'&&accs.indexOf(e.acc)>=0;});}
  if(isManager()){return perfMembersOf(me().id);}
  return [];
}
function dashPerfSection(){
  var people=dashPerfScope();
  var scored=people.map(function(p){var s=scGet(p.id);return s?{p:p,t:scTotal(s.scores)}:null;}).filter(Boolean);
  var total=people.length,done=scored.length;
  var avg=scored.length?scored.reduce(function(a,x){return a+x.t;},0)/scored.length:0;
  var buckets=[['Top','positive'],['Strong','positive'],['Solid','info'],['Meets','warning'],['Below','accent']];
  var dist={};buckets.forEach(function(b){dist[b[0]]=0;});scored.forEach(function(x){var v=scVerdict(x.t)[0];if(dist[v]!=null)dist[v]++;});
  var maxd=Math.max.apply(0,buckets.map(function(b){return dist[b[0]];}).concat([1]));
  var low=scored.filter(function(x){return x.t<3.5;}).sort(function(a,b){return a.t-b.t;});
  var distCard='<div class="card"><div class="card-head"><h3>Score distribution</h3><span class="meta">'+done+' of '+total+' reviewed \u00b7 '+scPeriod+'</span></div><div class="card-pad">'
    +(done?buckets.map(function(b){var n=dist[b[0]];return '<div class="lt-row"><div class="lt-label" style="width:80px"><div class="lt-stage">'+b[0]+'</div></div><div class="lt-track"><div class="lt-fill" style="width:'+Math.round(n/maxd*100)+'%;background:var(--'+b[1]+')"></div></div><div class="lt-days mono">'+n+'</div></div>';}).join('')
    +dIns('Average review score is <b>'+avg.toFixed(2)+'</b> ('+scVerdict(avg)[0]+'). '+(low.length?'<b>'+low.length+'</b> '+(low.length>1?'people are':'person is')+' below the 3.5 bar and need a focused action plan.':'No one is below the 3.5 bar this cycle.'),avg>=4?'good':low.length?'warn':'plain')
    :'<div class="lc-empty small muted" style="padding:14px">No reviews recorded for this scope yet.</div>')+'</div></div>';
  var compPct=total?Math.round(done/total*100):0;
  var flagCard='<div class="card"><div class="card-head"><h3>Review completion &amp; flags</h3><span class="meta">'+compPct+'% complete</span></div><div class="card-pad"><div class="flex center gap mb">'+lcProgress(compPct,compPct>=90?'positive':'warning')+'<span class="mono small">'+done+'/'+total+'</span></div>'
    +(low.length?'<div class="small" style="font-weight:600;margin-bottom:7px;color:var(--accent-ink)">Needs attention</div>'+low.slice(0,6).map(function(x){return '<div class="flex center gap" style="padding:6px 0;border-bottom:1px solid var(--line-2)">'+av(x.p.name,"width:24px;height:24px;font-size:9px")+'<span class="small" style="flex:1">'+x.p.name+'</span><span class="status-pill" style="background:var(--'+scVerdict(x.t)[1]+'-soft);color:var(--'+scVerdict(x.t)[1]+'-ink)">'+x.t.toFixed(2)+'</span></div>';}).join('')
    :'<div class="lc-empty small muted" style="padding:14px">'+(done?'No low performers \u2014 healthy team.':'Pending reviews.')+'</div>')+'</div></div>';
  return '<div class="grid cols-2" style="align-items:start">'+distCard+flagCard+'</div>';
}
function dashAM(){
  const accs=amAccounts();const u=me();
  const emps=visibleEmps();
  const myPrj=PROJECTS.filter(p=>accs.some(a=>a.id===p.acc));
  const active=emps.filter(e=>e.status==="active").length;
  const overReq=REQS.filter(r=>accs.some(a=>a.id===r.acc)&&r.status!=="Filled");
  const others=ACCOUNTS.filter(a=>a.id!==u.acc&&!amGrants.has(a.id));
  const kpis=[
    {lbl:"My accounts",val:accs.length,sub:accs.map(a=>a.name).join(", "),c:"--teal"},
    {lbl:"People in scope",val:emps.length,sub:active+" active",c:"--primary"},
    {lbl:"Projects",val:myPrj.length,sub:"across my accounts",c:"--positive"},
    {lbl:"Open requisitions",val:overReq.length,sub:"client-requested",c:"--warning"}
  ];
  const accCards=accs.map(a=>{const ppl=emps.filter(e=>e.acc===a.id);const prj=PROJECTS.filter(p=>p.acc===a.id);const am=EMP.find(e=>e.id===a.am);return '<div class="card"><div class="card-head"><h3>'+a.name+'</h3><span class="meta">'+a.industry+'</span></div><div class="card-pad"><div class="grid kpi-row" style="grid-template-columns:repeat(3,1fr);gap:10px"><div class="card kpi" style="box-shadow:none;border:1px solid var(--line-2)"><span class="lbl">People</span><div class="val" style="font-size:26px">'+ppl.length+'</div></div><div class="card kpi" style="box-shadow:none;border:1px solid var(--line-2)"><span class="lbl">Projects</span><div class="val" style="font-size:26px">'+prj.length+'</div></div><div class="card kpi" style="box-shadow:none;border:1px solid var(--line-2)"><span class="lbl">Open reqs</span><div class="val" style="font-size:26px;color:'+(REQS.filter(r=>r.acc===a.id&&r.status!=="Filled").length?"var(--warning)":"var(--positive)")+'">'+REQS.filter(r=>r.acc===a.id&&r.status!=="Filled").length+'</div></div></div><div class="small muted" style="margin-top:8px">AM '+(am?am.name:"\u2014")+'</div></div></div>';}).join("");
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Management \u00b7 Account Manager view</div><h1>My Accounts</h1><p>Scoped to the account(s) you manage. Request a grant from Admin/PMO to view another account.</p></div><span class="status-pill" style="background:var(--teal-soft);color:var(--teal)">'+PERSONA_TIER[persona]+' tier</span></div>'
  +'<div class="grid kpi-row mb">'+kpis.map(k=>'<div class="card kpi"><span class="lbl">'+k.lbl+'</span><div class="val" style="color:var('+k.c+')">'+k.val+'</div><span class="small muted">'+k.sub+'</span></div>').join("")+'</div>'
  +'<div class="grid cols-2 mb">'+accCards+'</div>'
  +(others.length?'<div class="card"><div class="card-head"><h3>Request access to another account</h3><span class="meta">grant required \u00b7 Admin/PMO approves</span></div><div class="card-pad"><div class="flex center gap" style="flex-wrap:wrap"><select class="inp" id="amGrantSel" style="max-width:240px">'+others.map(a=>'<option value="'+a.id+'">'+a.name+' \u00b7 '+a.industry+'</option>').join("")+'</select><button class="btn btn-primary" id="amGrantBtn" style="height:38px">Request grant</button>'+(amGrants.size?'<span class="small muted" style="margin-left:auto">Granted: '+[...amGrants].map(id=>accName(id)).join(", ")+'</span>':'')+'</div><div class="small muted mt">Demo: grant is applied immediately. In production this routes to Admin/PMO for approval and is logged.</div></div></div>':'<div class="card empty" style="padding:30px">You have access to all accounts.</div>');
}
let insPri="all", insPage=0;
function AI_INSIGHTS(){return [
  {sev:"crit",cat:"Skill Gap",t:"AI / ML capacity far below delivery demand",b:"Only <b>4</b> AI engineers against a projected need of <b>14</b> \u2014 supply covers just <b>29%</b> of demand.",why:"AERIS-DA and two ML workstreams cannot be staffed at current capacity \u2014 directly at risk of slipping or being declined.",act:"Delivery + HR: open 3 senior AI reqs now and start an internal Python\u2192ML upskilling track.",conf:88},
  {sev:"crit",cat:"Succession Risk",t:"Senior BA is a single point of failure",b:"Just <b>1</b> Senior BA remains against a need of <b>4</b>, and BA turnover runs at <b>16.5%</b> \u2014 over 2\u00d7 the company average.",why:"If this person leaves, three accounts lose requirements coverage with no backup \u2014 a direct delivery and revenue risk.",act:"Leadership: assign a backup BA and fast-track one Middle BA toward senior this quarter.",conf:92},
  {sev:"crit",cat:"Skill Gap",t:"Senior Java covers only 40% of demand",b:"<b>4 of 10</b> Senior Java seats are filled; two Vinfast workstreams depend on this role.",why:"Under-coverage on a core stack blocks staffing of the largest active account.",act:"PMO + HR: prioritise the Senior Java pipeline and bridge with a vetted contractor.",conf:84},
  {sev:"warn",cat:"Attrition Risk",t:"Voluntary attrition rising in Middle QA",b:"Voluntary leavers rose <b>14%</b> over two months, concentrated in <b>Middle QA</b>; career growth is the top exit reason.",why:"Losing mid-level QA erodes test coverage and raises onboarding cost right as QA demand grows.",act:"HR: run stay-interviews with Middle QA this week and publish a QA promotion ladder.",conf:81},
  {sev:"warn",cat:"Capacity Forecast",t:"Headcount will fall short by Q4",b:"At today\u2019s hiring pace the workforce is short <b>15 people by Q4</b> against forecast demand.",why:"Demand is outgrowing supply every month \u2014 unfilled roles will force scope deferral or overtime.",act:"PMO + HR: lift hiring velocity ~30% or stage lower-priority scope into next year.",conf:76},
  {sev:"warn",cat:"Workforce Health",t:"Org is junior-heavy",b:"Only <b>24%</b> of staff are Senior or above; <b>42%</b> joined in the last 12 months.",why:"A thin senior layer strains mentoring, code review and delivery quality across a large new cohort.",act:"Leadership: protect senior review capacity and accelerate Middle\u2192Senior promotions.",conf:79},
  {sev:"opp",cat:"Utilization",t:"Idle skills match an opening project",b:"<b>8 of 12</b> idle engineers have Java skills that fit the AVIA program starting next month.",why:"Pre-allocating idle billable capacity lifts utilization and avoids unnecessary external hires.",act:"Delivery: pre-allocate bench engineers to AVIA before opening new reqs.",conf:86},
  {sev:"pos",cat:"Utilization",t:"Utilization trending up",b:"Utilization rose from <b>68% to 76%</b> over the quarter as idle time fell.",why:"More of the workforce is revenue-generating \u2014 margin is improving without new hires.",act:"PMO: hold the gains; keep average bench time under two weeks.",conf:90}
];}
function aiInsights(){
  const ins=AI_INSIGHTS();
  const map={crit:"Critical",warn:"Warning",opp:"Opportunity",pos:"Positive"};
  const dot={crit:"var(--accent)",warn:"var(--warning)",opp:"var(--primary)",pos:"var(--positive)"};
  const f=ins.filter(i=>insPri==="all"||i.sev===insPri);
  if(!f.length)return '<div class="muted small" style="padding:14px">No signals at this level.</div>';
  const rows=f.map((i,ix)=>'<details class="sig sig-'+i.sev+'"'+(ix===0&&insPri==="all"?' open':'')+'>'
    +'<summary class="sig-sum"><span class="sig-dot" style="background:'+dot[i.sev]+'"></span>'
      +'<span class="sig-sev" style="color:'+dot[i.sev]+'">'+map[i.sev]+'</span>'
      +'<span class="sig-cat">'+i.cat+'</span>'
      +'<span class="sig-title">'+i.t+'</span>'
      +'<span class="sig-conf mono" title="confidence">'+i.conf+'%</span>'
      +'<span class="sig-chev">'+icon('<path d="M9 18l6-6-6-6"/>')+'</span></summary>'
    +'<div class="sig-body"><div class="sig-desc">'+i.b+'</div>'
      +'<div class="sig-why"><span class="ai-mini">Why it matters</span>'+i.why+'</div>'
      +'<div class="ai-act">'+icon('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>')+'<span>'+i.act+'</span></div></div>'
    +'</details>').join("");
  return '<div class="sig-list">'+rows+'</div>';
}
function refreshInsList(){var l=document.getElementById("insList");if(!l)return;l.innerHTML=aiInsights();l.querySelectorAll("[data-inspage]").forEach(function(b){if(!b.disabled)b.onclick=function(){insPage=parseInt(b.dataset.inspage);refreshInsList();};});}
function insPriBar(){
  const ins=AI_INSIGHTS();
  const n=s=>s==="all"?ins.length:ins.filter(i=>i.sev===s).length;
  const opts=[["all","All"],["crit","Critical"],["warn","Warning"],["opp","Opportunity"],["pos","Positive"]];
  return '<div class="flex center gap" style="flex-wrap:wrap">'+opts.map(o=>'<button class="seg-btn'+(insPri===o[0]?' on':'')+'" data-inspri="'+o[0]+'">'+o[1]+' <span class="seg-n">'+n(o[0])+'</span></button>').join("")+'</div>';
}
function demandSupply(){
  const items=[["React",1,1,"tight"],["Go",1,1,"tight"],["AWS",1,1,"short"],["Playwright",1,1,"short"],["SQL",1,2,"ok"]];
  const gl={short:["gap-short","Short"],tight:["gap-tight","Tight"],ok:["gap-ok","OK"]};
  return items.map(it=>{const g=gl[it[3]];const mx=Math.max(it[1],it[2],2);return '<div class="ds"><div class="dn">'+it[0]+'</div><div class="dbars"><div class="dbar"><span class="lab">Demand</span><div class="tr"><div class="fl" style="width:'+(it[1]/mx*100)+'%;background:var(--accent)"></div></div><span class="num">'+it[1]+'</span></div><div class="dbar"><span class="lab">Supply</span><div class="tr"><div class="fl" style="width:'+(it[2]/mx*100)+'%;background:var(--primary-2)"></div></div><span class="num">'+it[2]+'</span></div></div><span class="gap-pill '+g[0]+'">'+g[1]+'</span></div>';}).join("");
}
/* ===== SCORECARD ENGINE (Aeris Joint Evaluation model) ===== */
const SC_PERIODS=["Apr 2026","May 2026","Jun 2026"];
let scPeriod="Jun 2026";
const SC_PILLAR={AI:["AI Adaptation",0.30,"#4B49C9"],TECH:["Technical Excellence",0.25,"#2A8585"],COMM:["Communication",0.25,"#2C679C"],OWN:["Ownership & Professionalism",0.20,"#9A6516"],DELIV:["Delivery",0.20,"#1f6feb"],GROWTH:["Growth",0.12,"#7c3aed"]};
const SC_CRIT=[
 {k:"dvel",p:"DELIV",n:"Throughput & velocity",w:0.10,core:1},
 {k:"dcom",p:"DELIV",n:"Commitment reliability (on-time)",w:0.10,core:1},
 {k:"glearn",p:"GROWTH",n:"Skill expansion & learning",w:0.06},
 {k:"gment",p:"GROWTH",n:"Mentoring & knowledge sharing",w:0.06},
 {k:"aiw",p:"AI",n:"AI workflow integration",w:0.10,core:1},
 {k:"aij",p:"AI",n:"AI judgment & validation",w:0.10,core:1},
 {k:"ammi",p:"AI",n:"AMMI Level (auto-pull)",w:0.10,core:0,auto:1},
 {k:"hard",p:"TECH",n:"Hard skill for role",w:0.05,core:1},
 {k:"def",p:"TECH",n:"Defect prevention & verification",w:0.05,core:1},
 {k:"req",p:"TECH",n:"Requirement & impact analysis",w:0.05,core:0},
 {k:"sol",p:"TECH",n:"Solution design & maintainability",w:0.05,core:0},
 {k:"pr",p:"TECH",n:"PR quality & release safety",w:0.05,core:0},
 {k:"resp",p:"COMM",n:"Responsiveness / No surprises",w:0.09,core:1},
 {k:"daily",p:"COMM",n:"Daily report / standup",w:0.08,core:0},
 {k:"en",p:"COMM",n:"English / working language",w:0.08,core:0},
 {k:"ontime",p:"OWN",n:"On-time delivery (individual)",w:0.04,core:1},
 {k:"acct",p:"OWN",n:"Accountability",w:0.04,core:1},
 {k:"init",p:"OWN",n:"Active initiative",w:0.03,core:0},
 {k:"resil",p:"OWN",n:"Resilience / commitment",w:0.03,core:0},
 {k:"disc",p:"OWN",n:"Discipline",w:0.02,core:0},
 {k:"comp",p:"OWN",n:"Compliance",w:0.02,core:0},
 {k:"docu",p:"OWN",n:"Documentation",w:0.02,core:0}
];
const AMMI_W=[0.2,0.2,0.1,0.25,0.15,0.1];
const AMMI_DIM=["D1 Concept Knowledge","D2 Workflow Sophistication","D3 Prompt Maturity","D4 Tooling & Platform Breadth","D5 Team Governance","D6 AI\u2013Manual Balance"];
const AMMI_NAME=["No AI Involvement","Ad-Hoc / Ask Mode","Siloed Agent","Integrated AI Agent","Autonomous AI Agent"];
function ammiComp(d){return d.reduce((s,v,i)=>s+(+v||0)*AMMI_W[i],0);}
function ammiLevel(c){return c>=3.4?4:c>=2.6?3:c>=1.8?2:c>0?1:0;}
function scTotal(sc){let s=0,w=0;SC_CRIT.forEach(c=>{const v=sc[c.k];if(v!=null&&v!==""){s+=(+v)*c.w;w+=c.w;}});return w?s/w:0;}
function scPillar(sc,p){let s=0,w=0;SC_CRIT.filter(c=>c.p===p).forEach(c=>{const v=sc[c.k];if(v!=null&&v!==""){s+=(+v)*c.w;w+=c.w;}});return w?s/w:null;}
function scVerdict(v){return v>=4.5?["Top","positive"]:v>=4.0?["Strong","positive"]:v>=3.5?["Solid","info"]:v>=3.0?["Meets","warning"]:["Below","accent"];}
function scWeak(sc){let worst=null;SC_CRIT.forEach(c=>{const v=sc[c.k];if(v!=null&&v!==""&&(worst==null||+v<worst.v))worst={n:c.n,v:+v};});return worst;}
function scChip(v){if(v==null||v==="")return '<span class="muted small">\u2014</span>';v=+v;const bg=v<2.5?"var(--accent-soft)":v>=4.5?"var(--positive-soft)":v<4?"var(--warning-soft)":"var(--surface-2)";const fg=v<2.5?"var(--accent)":v>=4.5?"var(--positive)":v<4?"#7d520f":"var(--ink)";return '<span class="sc-chip" style="background:'+bg+';color:'+fg+'">'+v.toFixed(1).replace(/\.0$/,"")+'</span>';}
function scDelta(cur,prev,dec){if(prev==null||cur==null)return '';const d=cur-prev;if(Math.abs(d)<0.005)return '<span class="small mono" style="color:var(--faint)">=</span>';const up=d>0;return '<span class="small mono" style="font-weight:700;color:var(--'+(up?'positive':'accent')+')">'+(up?'\u25b2':'\u25bc')+' '+(up?'+':'')+d.toFixed(dec==null?2:dec)+'</span>';}
const SC_ACTION_LIB={aiw:"Mandate AI-usage section in PR template + weekly \u2018AI demo Friday\u2019",ammi:"AI Foundations training; build & deploy 1 personal agent (D4 \u2265 3.0)",aij:"AI rationale comment on every AI-suggested change; 100% reviewed",hard:"Pair with senior 2 sprints + assigned learning track",def:"Mandatory test plan section in PR; senior review on risky changes",req:"Document impacted components, dependencies & edge cases before dev",sol:"Propose 2 alternative approaches in PR description for non-trivial work",pr:"PR template: summary, ticket link, self-review checklist",resp:"Publish SLA matrix (urgent <30min); risk register per ticket",daily:"Enforce yesterday\u2013today\u2013blocker standup format",en:"Company-sponsored Business English; 30 min/day app practice",ontime:"Sprint commitment review; 3-point estimation for big tickets",acct:"Weekly 1-on-1 with PM \u00d7 4 weeks: review owned outcomes",docu:"Create doc template + monitor adoption"};
function scAdj(b,d){const s=Object.assign({},b);Object.keys(d).forEach(k=>{s[k]=Math.max(1,Math.min(5,Math.round((s[k]+d[k])*10)/10));});return s;}
const _S04={aiw:3.5,aij:4.2,ammi:4,hard:4.5,def:3.5,req:4,sol:4.5,pr:4.5,resp:4.7,daily:4.5,en:3.5,ontime:4.8,acct:4.3,init:4.1,resil:4.5,disc:4.5,comp:5,docu:4};
const _S05={aiw:3.5,aij:4,ammi:3,hard:4.2,def:3.3,req:3.8,sol:4.2,pr:4.2,resp:4.7,daily:4.6,en:3.7,ontime:4.8,acct:3.8,init:3.6,resil:4.3,disc:4.8,comp:5,docu:3.5};
const _S15={aiw:3.5,aij:4.2,ammi:4,hard:4.8,def:4.5,req:4,sol:4.5,pr:4.5,resp:4.8,daily:4.5,en:3.5,ontime:4.8,acct:4.5,init:4.2,resil:4.5,disc:4.8,comp:5,docu:4.5};
let SCORECARDS={
 "FA-1004":{
  "May 2026":{period:"May 2026",by:"Pham Quoc Bao (TL)",ts:"2026-05-05",scores:scAdj(_S04,{def:-0.5,aiw:-0.5,docu:-0.5,acct:-0.3}),ammi:[3,3,4,3,3,3],str:"Owned the design-system spike end to end.",imp:"Defect prevention \u2014 2 happy-case bugs leaked to QA.",act:"Action #21 (Defect prev): mandatory test plan in PR."},
  "Jun 2026":{period:"Jun 2026",by:"Pham Quoc Bao (TL)",ts:"2026-06-04",scores:_S04,ammi:[4,3,4,3,3,3],str:"Mentors junior FE weekly; led migration to the new design system with zero regression.",imp:"English fluency in client calls \u2014 target B2 \u2192 C1; AMMI still L3.",act:"Action #28 (English): 30 min/day Business English + lead 1 client demo per sprint."}},
 "FA-1005":{
  "May 2026":{period:"May 2026",by:"Pham Quoc Bao (TL)",ts:"2026-05-05",scores:scAdj(_S05,{resp:-0.4,ontime:-0.6,init:-0.3}),ammi:[3,2,3,2,2,2],str:"Solid sprint delivery under pressure.",imp:"Raised risks late twice; on-time rate dipped to 82%.",act:"Action #5 (Predictability): 3-point estimation for every ticket > 2 days."},
  "Jun 2026":{period:"Jun 2026",by:"Pham Quoc Bao (TL)",ts:"2026-06-04",scores:_S05,ammi:[3,2,3,2,2,2],str:"Reliable delivery \u2014 on-time rate 92%; documents handover well.",imp:"Tends to raise risks late (1 day before deadline); defect rate above tolerance last sprint.",act:"Action #5 (Predictability): 3-point estimation for every ticket > 2 days."}},
 "FA-1015":{
  "Apr 2026":{period:"Apr 2026",by:"Pham Quoc Bao (TL)",ts:"2026-04-04",scores:scAdj(_S15,{aiw:-0.7,aij:-0.5,ammi:-1,def:-0.5,en:-0.2,docu:-0.7}),ammi:[3,3,3,2,2,3],str:"Strong backend fundamentals; quick ramp-up on OTA stack.",imp:"AI workflow adoption still ad-hoc; docs thin for handover.",act:"AI Foundations training; doc template for owned modules."},
  "May 2026":{period:"May 2026",by:"Pham Quoc Bao (TL)",ts:"2026-05-05",scores:scAdj(_S15,{aiw:-0.3,def:-0.3,docu:-0.3}),ammi:[4,3,3,3,3,3],str:"Adopted AI-assisted code review; defect rate trending down.",imp:"Keep pushing AMMI D4 tooling breadth; English in client calls.",act:"Action #28 (English): 30 min/day Business English."},
  "Jun 2026":{period:"Jun 2026",by:"Pham Quoc Bao (TL)",ts:"2026-06-05",scores:_S15,ammi:[4,3,4,3,3,3],str:"Drives team architecture decisions; runs effective code reviews; mentors 2 juniors.",imp:"English fluency in client calls \u2014 target B2 \u2192 C1. Top performer \u2014 start succession planning.",act:"Action #28 (English): 30 min/day Business English; identify 1 backup for owned modules."}}
};
(function(){var h=function(s){var x=0;for(var i=0;i<s.length;i++)x=(x*31+s.charCodeAt(i))%1000;return x/1000;};Object.keys(SCORECARDS).forEach(function(pid){Object.keys(SCORECARDS[pid]).forEach(function(per){var card=SCORECARDS[pid][per];if(!card.scores)return;var vals=SC_CRIT.map(function(c){return card.scores[c.k];}).filter(function(v){return v!=null&&v!=="";});var avg=vals.length?vals.reduce(function(a,b){return a+(+b);},0)/vals.length:3.8;SC_CRIT.forEach(function(c){if(card.scores[c.k]==null||card.scores[c.k]===""){card.scores[c.k]=Math.max(1,Math.min(5,Math.round((avg+(h(pid+c.k)-0.5)*1.0)*2)/2));}});});});})();
function scGet(id,per){return SCORECARDS[id]&&SCORECARDS[id][per||scPeriod]||null;}
function scPrevPer(per){const i=SC_PERIODS.indexOf(per||scPeriod);return i>0?SC_PERIODS[i-1]:null;}
function scPerSel(){return '<span class="chip">Period <select id="scPer">'+SC_PERIODS.map(p=>'<option '+(p===scPeriod?'selected':'')+'>'+p+'</option>').join("")+'</select></span>';}
function tlTeam(){const u=me();const prjs=myProjects().map(p=>p.id);return EMP.filter(e=>e.id!==u.id&&e.status!=="offboard"&&prjs.indexOf(e.prj)>=0);}
function dashEmployee(){
  const e=me();const card=scGet(e.id);
  const prevP=scPrevPer();const prev=prevP?scGet(e.id,prevP):null;
  const proj=PROJECTS.find(p=>p.id===e.prj);const al=ALLOC.find(a=>a.emp===e.id);
  const head='<div class="page-head"><div><div class="eyebrow">Employee Self-Service \u00b7 '+scPeriod+'</div><h1>My Scorecard</h1><p>Your monthly evaluation at a glance \u2014 overall score, the 4 pillars, and what to focus on next. Visible to you, your TL/PM and HR only.</p></div><div class="flex center gap">'+scPerSel()+statusPill(e.status)+'</div></div>';
  if(!card)return head+'<div class="card empty" style="padding:46px">No evaluation for <b>'+scPeriod+'</b>'+(SCORECARDS[e.id]?' \u2014 switch period above to see your other scorecards.':' yet \u2014 your TL runs the scorecard at the end of each period.')+'</div>';
  const total=scTotal(card.scores);const vd=scVerdict(total);
  const prevTotal=prev?scTotal(prev.scores):null;
  const comp=ammiComp(card.ammi);const lvl=ammiLevel(comp);
  const hist=SC_PERIODS.map(p=>scGet(e.id,p)).filter(Boolean).map(c=>scTotal(c.scores));
  const pillCards=Object.keys(SC_PILLAR).map(p=>{const v=scPillar(card.scores,p);const pv=prev?scPillar(prev.scores,p):null;const m=SC_PILLAR[p];return '<div class="card kpi"><span class="lbl">'+m[0]+' \u00b7 '+(m[1]*100)+'%</span><div class="val" style="color:'+(v>=4?'var(--positive)':v>=3.5?'var(--ink)':'var(--warning)')+'">'+v.toFixed(2)+' <span style="font-size:12px">'+scDelta(v,pv)+'</span></div><div class="track" style="margin-top:8px"><div class="fill" style="width:'+(v/5*100)+'%;background:'+m[2]+'"></div></div></div>';}).join("");
  // top 2 strengths + top 2 focus areas (lowest), concise
  const scored=SC_CRIT.filter(c=>card.scores[c.k]!=null&&card.scores[c.k]!=="").map(c=>({c:c,v:+card.scores[c.k],pv:prev?prev.scores[c.k]:null}));
  const tops=scored.slice().sort((a,b)=>b.v-a.v).slice(0,3);
  const focus=scored.slice().sort((a,b)=>a.v-b.v).slice(0,3);
  const chip=x=>'<div class="flex center gap" style="padding:6px 0;border-bottom:1px solid var(--line-2)"><span style="flex:1;font-size:12.5px;font-weight:500">'+x.c.n+'</span>'+(x.pv!=null?scDelta(x.v,x.pv,1):'')+scChip(x.v)+'</div>';
  const trendCard=hist.length>1?'<div class="card"><div class="card-head"><h3>Score trend</h3><span class="meta">'+hist.length+' periods</span></div><div class="card-pad">'+spark(hist,"#4B49C9",260,56)+'<div class="flex between small muted" style="margin-top:6px">'+SC_PERIODS.filter(p=>scGet(e.id,p)).map(p=>'<span>'+p.split(" ")[0]+'</span>').join("")+'</div></div></div>':'';
  const critRows=Object.keys(SC_PILLAR).map(p=>{const m=SC_PILLAR[p];
    return '<tr><td colspan="4" style="background:var(--surface-2);font-weight:700;font-size:11px;letter-spacing:.05em;color:'+m[2]+'">'+m[0].toUpperCase()+' \u2014 '+(m[1]*100)+'%</td></tr>'
    +SC_CRIT.filter(c=>c.p===p).map(c=>'<tr><td><span style="font-weight:500;font-size:12.5px">'+c.n+'</span>'+(c.core?' <span class="tag-core">CORE</span>':'')+'</td><td class="mono small" style="text-align:center">'+(c.w*100)+'%</td><td style="text-align:center">'+scChip(card.scores[c.k])+'</td><td style="text-align:center">'+(prev?scDelta(card.scores[c.k],prev.scores[c.k],1):'')+'</td></tr>').join("");}).join("");
  return head
  +'<div class="grid mb" style="grid-template-columns:minmax(240px,28%) 1fr;gap:16px;align-items:stretch">'
    +'<div class="card kpi" style="display:flex;flex-direction:column;justify-content:center"><span class="lbl">Overall \u00b7 '+scPeriod+'</span><div style="display:flex;align-items:baseline;gap:10px"><div class="val" style="font-size:46px;color:var(--'+vd[1]+')">'+total.toFixed(2)+'</div><span class="status-pill" style="background:var(--'+vd[1]+'-soft);color:var(--'+vd[1]+')">'+vd[0]+'</span></div><span class="small" style="margin-top:2px">'+(prevTotal!=null?scDelta(total,prevTotal)+' <span class="muted">vs '+prevP+'</span>':'<span class="muted">first evaluated period</span>')+'</span><span class="small muted" style="margin-top:4px">AMMI L'+lvl+' \u00b7 '+AMMI_NAME[lvl]+'</span><span class="small muted">Rated by '+card.by+' \u00b7 '+card.ts+'</span></div>'
    +'<div class="grid" style="grid-template-columns:repeat(4,1fr);gap:14px">'+pillCards+'</div>'
  +'</div>'
  +'<div class="grid cols-3 mb">'
    +'<div class="card"><div class="card-head"><h3 style="color:var(--positive)">\u2713 Top strengths</h3></div><div class="card-pad" style="padding-top:4px">'+tops.map(chip).join("")+'</div></div>'
    +'<div class="card"><div class="card-head"><h3 style="color:var(--warning)">\u25b3 Focus areas</h3></div><div class="card-pad" style="padding-top:4px">'+focus.map(chip).join("")+'</div></div>'
    +'<div class="card"><div class="card-head"><h3>\u2192 This period\u2019s action</h3></div><div class="card-pad"><div class="fb" style="border:none;padding:0"><div class="fnote" style="font-size:13px">'+card.act+'</div></div></div></div>'
  +'</div>'
  +'<div class="grid cols-1-2 mb">'
    +'<div class="card"><div class="card-head"><h3>Feedback from your TL/PM</h3><span class="meta">'+card.by+'</span></div><div class="card-pad"><div class="fb"><div class="fm" style="color:var(--positive)">\u2713 What went well</div><div class="fnote">'+card.str+'</div></div><div class="fb"><div class="fm" style="color:var(--accent)">\u2717 What to improve</div><div class="fnote">'+card.imp+'</div></div></div></div>'
    +'<div>'+trendCard+'<div class="card" style="margin-top:16px"><div class="card-pad small" style="color:var(--ink-2)"><b>'+(proj?proj.name:'\u2014')+'</b> \u00b7 EM '+(proj?mgrName(proj.em):'\u2014')+(al?' \u00b7 allocation '+al.pct+'%':'')+'</div></div></div>'
  +'</div>'
  +'<details class="card detail-card"><summary style="cursor:pointer;padding:16px 18px;font-weight:600;font-size:14px;display:flex;align-items:center;gap:8px;list-style:none">'+icon('<polyline points="6 9 12 15 18 9"/>')+'See full 18-criteria breakdown</summary><div class="tbl-wrap" style="padding:0 4px 8px"><table><thead><tr><th>Criterion</th><th style="text-align:center">Weight</th><th style="text-align:center">Score</th><th style="text-align:center">\u0394 vs '+(prevP||"\u2014")+'</th></tr></thead><tbody>'+critRows+'</tbody></table></div></details>';
}
function dashTL(){
  const u=me();const team=tlTeam();
  const prevP=scPrevPer();
  const evald=team.filter(t=>scGet(t.id));
  const teamAvg=evald.length?evald.reduce((s,t)=>s+scTotal(scGet(t.id).scores),0)/evald.length:0;
  const prevEval=team.filter(t=>prevP&&scGet(t.id,prevP));
  const prevAvg=prevEval.length?prevEval.reduce((s,t)=>s+scTotal(scGet(t.id,prevP).scores),0)/prevEval.length:null;
  const tvd=scVerdict(teamAvg);
  const critAvg=SC_CRIT.map(c=>{const vs=evald.map(t=>scGet(t.id).scores[c.k]).filter(v=>v!=null&&v!=="");return {c:c,avg:vs.length?vs.reduce((a,b)=>a+(+b),0)/vs.length:null};});
  const weak=critAvg.filter(x=>x.avg!=null&&x.avg<4).sort((a,b)=>a.avg-b.avg);
  const rows=team.map(t=>{const sc=scGet(t.id);
    if(!sc)return '<tr><td><div class="cellname">'+av(t.name,"width:30px;height:30px;font-size:11px")+'<div><div class="t1">'+t.name+'</div><div class="t2">'+t.role+(t.type==="Intern"?' \u00b7 Intern':'')+'</div></div></div></td><td colspan="6" class="small muted">Not evaluated for '+scPeriod+(t.type==="Intern"||t.status==="onboard"?' \u00b7 junior &lt;3 months \u2192 CORE criteria only':'')+'</td><td></td><td><button class="btn btn-primary" style="height:30px;font-size:12px" data-eval="'+t.id+'">Evaluate</button></td></tr>';
    const tot=scTotal(sc.scores);const vd=scVerdict(tot);const wk=scWeak(sc.scores);
    const pc=prevP?scGet(t.id,prevP):null;const pTot=pc?scTotal(pc.scores):null;
    return '<tr><td><div class="cellname">'+av(t.name,"width:30px;height:30px;font-size:11px")+'<div><div class="t1">'+t.name+'</div><div class="t2">'+t.role+'</div></div></div></td>'
    +Object.keys(SC_PILLAR).map(p=>'<td style="text-align:center">'+scChip(scPillar(sc.scores,p).toFixed(2))+'</td>').join("")
    +'<td style="text-align:center;font-weight:700" class="mono">'+tot.toFixed(2)+'</td><td style="text-align:center">'+(pTot!=null?scDelta(tot,pTot):'<span class="small muted">\u2014</span>')+'</td><td><span class="status-pill" style="background:var(--'+vd[1]+'-soft);color:var(--'+vd[1]+')">'+vd[0]+'</span></td><td class="small muted">'+(wk?wk.n.split(" ").slice(0,2).join(" ")+' ('+wk.v+')':'\u2014')+'</td><td><button class="btn btn-ghost" style="height:30px;font-size:12px" data-eval="'+t.id+'">Update</button></td></tr>';}).join("");
  const weakHtml=weak.length?weak.slice(0,6).map(x=>'<div class="flex center gap" style="padding:8px 0;border-bottom:1px solid var(--line-2)"><span class="sc-chip" style="background:var(--warning-soft);color:#7d520f;flex-shrink:0">'+x.avg.toFixed(2)+'</span><div style="flex:1;min-width:0"><div style="font-weight:600;font-size:12.5px">'+x.c.n+'</div><div class="small muted">'+(SC_ACTION_LIB[x.c.k]||"Coaching plan with TL; review in 4 weeks")+'</div></div><span class="small mono muted" style="flex-shrink:0">due 30/06</span></div>').join(""):'<div class="empty" style="padding:16px">No team-average criterion below 4.0.</div>';
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Team Lead \u00b7 '+accName(u.acc)+' \u00b7 '+scPeriod+'</div><h1>Team Evaluation</h1><p>Joint evaluation scorecard \u2014 score each member on 18 weighted criteria across 4 pillars; criteria &lt; 4.0 auto-feed the action plan. Scores of 1 or 5 require evidence.</p></div>'+scPerSel()+'</div>'
  +'<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Team members</span><div class="val">'+team.length+'</div><span class="small muted">'+accName(u.acc)+' \u00b7 Engineering</span></div><div class="card kpi"><span class="lbl">Evaluated</span><div class="val" style="color:'+(evald.length===team.length?'var(--positive)':'var(--warning)')+'">'+evald.length+' / '+team.length+'</div><span class="small muted">'+scPeriod+'</span></div><div class="card kpi"><span class="lbl">Team average</span><div class="val" style="color:var(--'+tvd[1]+')">'+(evald.length?teamAvg.toFixed(2):'\u2014')+' <span style="font-size:12px">'+(prevAvg!=null&&evald.length?scDelta(teamAvg,prevAvg):'')+'</span></div><span class="small muted">'+(evald.length?tvd[0]+(prevAvg!=null?' \u00b7 vs '+prevP:''):'no data')+'</span></div><div class="card kpi"><span class="lbl">Criteria needing action</span><div class="val" style="color:'+(weak.length?'var(--warning)':'var(--positive)')+'">'+weak.length+'</div><span class="small muted">team avg &lt; 4.0</span></div></div>'
  +'<div class="card mb"><div class="card-head"><h3>Team roster \u00b7 '+scPeriod+'</h3><span class="meta">tap Evaluate to score \u00b7 weighted total /5 \u00b7 \u0394 vs '+(prevP||'\u2014')+'</span></div><div class="tbl-wrap"><table><thead><tr><th>Member</th><th style="text-align:center">AI 30%</th><th style="text-align:center">Tech 25%</th><th style="text-align:center">Comm 25%</th><th style="text-align:center">Own 20%</th><th style="text-align:center">Total</th><th style="text-align:center">\u0394</th><th>Verdict</th><th>Top weak</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div>'
  +'<div class="card"><div class="card-head"><h3>Action plan (auto) \u00b7 '+scPeriod+'</h3><span class="meta">any criterion &lt; 4.0 \u2192 action \u00b7 from Action Library</span></div><div class="card-pad">'+weakHtml+'</div></div>';
}
function openEval(id){
  const t=EMP.find(x=>x.id===id);if(!t)return;
  const cur=scGet(id);const prevP=scPrevPer();const prevC=prevP?scGet(id,prevP):null;
  const ex=cur||prevC;const fromPrev=!cur&&!!prevC;
  const sc=ex?Object.assign({},ex.scores):{};const dims=ex?ex.ammi.slice():[2,2,2,2,2,2];
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const junior=t.type==="Intern"||t.status==="onboard"||t.status==="probation";
  const rows=Object.keys(SC_PILLAR).map(p=>{const m=SC_PILLAR[p];
    return '<div class="ev-ph" style="color:'+m[2]+'">'+m[0]+' <span class="muted" style="font-weight:500">'+(m[1]*100)+'%</span></div>'
    +SC_CRIT.filter(c=>c.p===p).map(c=>'<div class="ev-row"><span class="evn">'+c.n+(c.core?' <span class="tag-core">CORE</span>':'')+'</span>'+(prevC?'<span class="small mono muted" title="'+prevP+'">prev '+(prevC.scores[c.k]!=null?prevC.scores[c.k]:'\u2014')+'</span>':'')+'<span class="small mono muted">'+(c.w*100)+'%</span><input class="inp" type="number" min="1" max="5" step="0.5" data-ev="'+c.k+'" value="'+(sc[c.k]!=null?sc[c.k]:'')+'" '+(c.auto?'readonly style="background:var(--surface-2)" title="Auto from AMMI"':'')+'></div>').join("");}).join("");
  const ammiRows=AMMI_DIM.map((d,i)=>'<div class="ev-row"><span class="evn small">'+d+'</span><span class="small mono muted">'+(AMMI_W[i]*100)+'%</span><input class="inp" type="number" min="0" max="4" step="1" data-ammi="'+i+'" value="'+dims[i]+'"></div>').join("");
  openModal('<div class="modal-h"><div><h3>Evaluate \u00b7 '+t.name+'</h3><div class="small muted" style="margin-top:3px">'+t.role+' \u00b7 <b>'+scPeriod+'</b>'+(fromPrev?' \u00b7 prefilled from '+prevP:'')+(junior?' \u00b7 <b>junior: CORE criteria mandatory, EXT optional</b>':'')+'</div></div><div style="display:flex;align-items:center;gap:8px"><span id="evTotal" class="sc-chip" style="background:var(--surface-2);font-size:14px">\u2014</span><span id="evVerdict"></span><button class="drawer-close" id="modalClose">'+x+'</button></div></div>'
   +'<div class="modal-b" id="evalForm">'+rows
   +'<div class="ev-ph" style="color:var(--primary)">AMMI Quick Assessment <span class="muted" style="font-weight:500">0\u20134 \u00b7 auto-fills criterion #3</span></div>'+ammiRows
   +'<div class="small mono" id="evAmmi" style="margin:6px 0 2px;color:var(--ink-2)"></div>'
   +'<div class="audit-note" style="margin-top:10px">'+icon('<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>')+'<span>Score <b>1</b> or <b>5</b> requires specific evidence (Evidence Rule). Avoid clustering at 3.</span></div>'
   +'<label class="field-k" style="margin-top:12px;color:var(--positive)">\u2713 Strengths</label><textarea class="inp" id="evStr">'+(ex?ex.str:'')+'</textarea>'
   +'<label class="field-k" style="margin-top:10px;color:var(--accent)">\u2717 Improve</label><textarea class="inp" id="evImp">'+(ex?ex.imp:'')+'</textarea>'
   +'<label class="field-k" style="margin-top:10px">\u2192 Top action (required if any score &lt; 4)</label><textarea class="inp" id="evAct">'+(ex?ex.act:'')+'</textarea></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="evCancel">Cancel</button><button class="btn btn-primary" id="evSave">Save \u00b7 '+scPeriod+'</button></div>');
  const w=document.getElementById('modalWrap');
  const recompute=()=>{
    const d2=[...w.querySelectorAll('[data-ammi]')].map(i=>+i.value||0);
    const comp=ammiComp(d2);const lvl=ammiLevel(comp);
    const ammiInput=w.querySelector('[data-ev="ammi"]');ammiInput.value=lvl+1;
    w.querySelector('#evAmmi').textContent="Composite "+comp.toFixed(1)+" \u2192 L"+lvl+" ("+AMMI_NAME[lvl]+") \u2192 criterion score "+(lvl+1);
    const cur2={};[...w.querySelectorAll('[data-ev]')].forEach(i=>{if(i.value!=="")cur2[i.dataset.ev]=+i.value;});
    const tot=scTotal(cur2);const vd=scVerdict(tot);
    w.querySelector('#evTotal').textContent=tot?tot.toFixed(2):"\u2014";
    w.querySelector('#evVerdict').innerHTML=tot?'<span class="status-pill" style="background:var(--'+vd[1]+'-soft);color:var(--'+vd[1]+')">'+vd[0]+'</span>':'';
    return cur2;};
  w.querySelectorAll('[data-ev],[data-ammi]').forEach(i=>i.addEventListener('input',recompute));
  recompute();
  w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#evCancel').onclick=closeModal;
  w.querySelector('#evSave').onclick=()=>{
    const cur2=recompute();const tot=scTotal(cur2);
    if(!Object.keys(cur2).length){toast("Enter at least the CORE criteria","warn");return;}
    const missCore=SC_CRIT.filter(c=>c.core&&cur2[c.k]==null);
    if(missCore.length){toast("CORE criteria missing: "+missCore.map(c=>c.n.split(" ")[0]).join(", "),"warn");return;}
    const hasWeak=SC_CRIT.some(c=>cur2[c.k]!=null&&cur2[c.k]<4);
    if(hasWeak&&!w.querySelector('#evAct').value.trim()){toast("Score < 4 needs a Top action (Action Plan rule)","warn");return;}
    const d2=[...w.querySelectorAll('[data-ammi]')].map(i=>+i.value||0);
    if(!SCORECARDS[id])SCORECARDS[id]={};
    var _exist=SCORECARDS[id]&&SCORECARDS[id][scPeriod];SCORECARDS[id][scPeriod]={period:scPeriod,by:me().name+" ("+(fullAccess()?"PMO":"TL")+")",ts:"2026-06-09",scores:cur2,ammi:d2,str:w.querySelector('#evStr').value,imp:w.querySelector('#evImp').value,act:w.querySelector('#evAct').value,ack:_exist?_exist.ack:false};
    audit("Scorecard evaluation saved",t.name,scPeriod+" \u00b7 total "+tot.toFixed(2)+" \u00b7 "+scVerdict(tot)[0]);
    closeModal();renderContent();toast("Evaluation saved \u2014 "+t.name+" \u00b7 "+scPeriod+" \u00b7 "+tot.toFixed(2)+" ("+scVerdict(tot)[0]+")");};
}
/* ===== EMPLOYEES ===== */
let empView="list",empQ="",empStatus="all",empAcc="all";
function viewEmployees(){
  const restricted=!fullAccess();
  return ''
  +'<div class="page-head"><div><div class="eyebrow">E-01/E-05 \u00b7 Employee Hub &amp; Directory</div><h1>Employees</h1><p>'+(restricted?(isEmployee()?"You can view your own record. Other profiles are restricted by RBAC.":isAM()?"As an Account Manager you can view people in your account(s).":"As an EM you can view members of the projects you run."):"Full roster across all accounts. Sensitive fields are masked unless you are HR Admin or the record owner.")+'</p></div>'+(fullAccess()?'<div class="flex center gap"><button class="btn btn-ghost" data-importxlsx="1">'+icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')+'Import Excel</button><button class="btn btn-primary" data-addemp="1">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'Add employee</button></div>':'')+'</div>'
  +'<div class="toolbar"><div class="seg"><button class="'+(empView==='list'?'on':'')+'" id="vList">Table</button><button class="'+(empView==='grid'?'on':'')+'" id="vGrid">Cards</button></div>'+(fullAccess()?'<span class="chip">Status <select id="empStatus">'+["all","active","probation","onboard","offboard","leave"].map(s=>'<option value="'+s+'" '+(s===empStatus?'selected':'')+'>'+(s==="all"?"All":s)+'</option>').join("")+'</select></span><span class="chip">Account <select id="empAcc"><option value="all" '+(empAcc==="all"?"selected":"")+'>All</option>'+ACCOUNTS.map(a=>'<option value="'+a.id+'" '+(a.id===empAcc?'selected':'')+'>'+a.name+'</option>').join("")+'</select></span>':'')+(restricted?'<span class="chip" style="background:var(--warning-soft);border-color:transparent;color:#7d520f">'+icon('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>')+' Scoped view \u00b7 '+PERSONA_LABEL[persona]+'</span>':'<span class="small muted" style="margin-left:auto">'+visibleEmps().filter(e=>(empStatus==="all"||e.status===empStatus)&&(empAcc==="all"||e.acc===empAcc)).length+' people</span>')+'</div>'
  +'<div id="empBody"></div>';
}
function renderEmp(){
  let list=visibleEmps();
  if(empStatus!=="all")list=list.filter(e=>e.status===empStatus);
  if(empAcc!=="all")list=list.filter(e=>e.acc===empAcc);
  if(empQ)list=list.filter(e=>(e.name+e.role+accName(e.acc)+e.email+e.tech.join()).toLowerCase().indexOf(empQ.toLowerCase())>=0);
  const body=document.getElementById("empBody");if(!body)return;
  if(!list.length){body.innerHTML='<div class="card empty">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<div style="font-weight:600;color:var(--ink)">No matching people</div></div>';return;}
  if(empView==="list"){
    body.innerHTML='<div class="card tbl-wrap"><table><thead><tr><th>Name</th><th>Account</th><th>Email</th><th>Direct manager</th><th>Status</th><th>Onboarding</th><th>Offboarding</th><th>Phone</th><th>Gender</th><th>Techstack</th></tr></thead><tbody>'+list.map(e=>'<tr class="clk" data-emp="'+e.id+'"><td><div class="cellname">'+av(e.name,"width:32px;height:32px;font-size:12px")+'<div><div class="t1">'+e.name+'</div><div class="t2">'+e.role+'</div></div></div></td><td>'+(e.acc?accName(e.acc):'<span class="muted">\u2014</span>')+'</td><td class="small">'+e.email+'</td><td>'+(e.mgr?mgrName(e.mgr):'<span class="muted">\u2014</span>')+'</td><td>'+statusPill(e.status)+'</td><td class="mono small">'+e.joined+'</td><td class="mono small '+(e.off?'':'muted')+'">'+(e.off||'\u2014')+'</td><td class="mono small" style="white-space:nowrap">'+e.phone+'</td><td>'+e.gender+'</td><td><div class="techcell">'+(e.tech.length?e.tech.slice(0,3).map(t=>'<span class="tag">'+t+'</span>').join("")+(e.tech.length>3?'<span class="tag">+'+(e.tech.length-3)+'</span>':''):'<span class="muted small">\u2014</span>')+'</div></td></tr>').join("")+'</tbody></table></div>';
  }else{
    body.innerHTML='<div class="grid people-grid">'+list.map(e=>'<div class="card pcard" data-emp="'+e.id+'"><div class="corner">'+statusPill(e.status)+'</div><div class="ph">'+av(e.name)+'<div><div class="nm">'+e.name+'</div><div class="rl">'+e.role+'</div></div></div><div class="meta"><div class="mr">'+icon(I.building)+(e.acc?accName(e.acc):e.dept)+'</div><div class="mr">'+icon(I.mail)+e.email+'</div><div class="mr">'+icon(I.phone)+e.phone+'</div></div><div class="skills">'+(e.tech.slice(0,3).map(t=>'<span class="tag">'+t+'</span>').join("")||'<span class="tag muted">No techstack</span>')+'</div></div>').join("")+'</div>';
  }
  body.querySelectorAll("[data-emp]").forEach(el=>el.onclick=()=>openProfile(el.dataset.emp));
}
/* ===== ORG CHART ===== */
let orgLevel="company";let orgAccSel=null,orgPrjSel=null;
const ORG_OPS=[{k:'BO',n:'Back Office'},{k:'HR',n:'Human Resources'},{k:'L&D',n:'Learning & Development'},{k:'IC',n:'Internal Communication'},{k:'IT',n:'Information Technology'},{k:'BID',n:'Sales (BID)'}];
const ORG_DELIVERY=[
 {am:'Le Quang Tuan',accounts:[
   {id:'Aeris',name:'Aeris',ind:'Automotive AI',projects:[{id:'AERIS-PGE',n:'PGE Automotive'},{id:'AERIS-SA',n:'Security Automotive'},{id:'AERIS-WT',n:'Watchtower'},{id:'AERIS-DA',n:'Data & Analytics'}]},
   {id:'CCanal',name:'Commerce Canal',ind:'eCommerce',projects:[{id:'CC-CC',n:'Commerce Canal'}]},
   {id:'MG',name:'MG',ind:'Retail',projects:[{id:'MG-CORE',n:'MG Platform'}]}]},
 {am:'Tien Dang',accounts:[
   {id:'GB',name:'GridBeyond',ind:'Energy',projects:[{id:'GB-DS',n:'Data Science'},{id:'GB-EMS',n:'EMS'}]}]},
 {am:'Minh Hoang',accounts:[
   {id:'Veritone',name:'Veritone',ind:'Enterprise AI',projects:[{id:'VERI-AID',n:'aiWARE Integration'}]},
   {id:'Sunwest',name:'SunWest Bank',ind:'Banking',projects:[{id:'SB-MB',n:'Mobile Banking'}]}]},
 {am:'Dat Nguyen',accounts:[
   {id:'AVIA',name:'AVIA',ind:'Aviation',projects:[{id:'AVIA-CORE',n:'AVIA Platform'}]}]},
 {am:'Manh Nguyen',accounts:[
   {id:'RSP',name:'RSP',ind:'F&B',projects:[{id:'RSP-RSP',n:'Restaurant System Pro'}]}]},
 {am:'Canh Ta',accounts:[
   {id:'TZ',name:'Teacher Zone',ind:'EdTech',projects:[{id:'TZ-TZ',n:'Teacher Zone'}]},
   {id:'FutureApp',name:'FutureApp',ind:'Consumer',projects:[{id:'FA-CORE',n:'FutureApp'}]}]}
];
function orgAllAccounts(){const out=[];ORG_DELIVERY.forEach(g=>g.accounts.forEach(a=>out.push(Object.assign({am:g.am},a))));return out;}
function orgAccScope(){ if(fullAccess())return null; if(isAM())return ['Aeris','CCanal','MG']; if(isManager())return ['Aeris']; return ['Aeris']; }
function orgVisibleAccounts(){const sc=orgAccScope();const all=orgAllAccounts();return sc?all.filter(a=>sc.indexOf(a.id)>=0):all;}
function orgAllProjects(){const out=[];orgAllAccounts().forEach(a=>a.projects.forEach(p=>out.push(Object.assign({acc:a.name,accId:a.id,am:a.am},p))));return out;}
function orgVisibleProjects(){const accs=orgVisibleAccounts().map(a=>a.id);return orgAllProjects().filter(p=>accs.indexOf(p.accId)>=0);}
const _ORG_NAMES=['Tran Hoang Nam','Le Thi Mai','Pham Quoc Bao','Nguyen Van Son','Vo Thi Huong','Bui Minh Tri','Dang Thu Ha','Hoang Van Long','Ngo Bao Chau','Phan Thanh Tung','Do Quang Hai','Vu Thi Lan','Ly Hoang Phuc','Trinh Van Khoa','Ta Thi Ngoc'];
const _ORG_ROLES=['Tech Lead','Senior Engineer','Engineer','QA Engineer','Business Analyst','Designer'];
function orgHash(s){let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%9973;return h;}
function orgProjMembers(projId,projName){
 const ra=RA_PEOPLE.filter(p=>p[2]===projId);
 if(ra.length)return ra.map(p=>({id:null,name:p[0],role:p[4]==='Manager'?'Engagement Manager':(p[3]||p[4])}));
 const h=orgHash(projId+projName);const n=3+(h%3);const out=[];
 for(let i=0;i<n;i++){const nm=_ORG_NAMES[(h+i*7)%_ORG_NAMES.length];const rl=i===0?'Engagement Manager':_ORG_ROLES[(h+i*3)%_ORG_ROLES.length];out.push({id:null,name:nm,role:rl});}
 return out;
}
function viewOrg(){
  return ''
  +'<div class="page-head"><div><div class="eyebrow">E-02 \u00b7 Organizational Dynamics</div><h1>Org Chart</h1><p>Company structure under the Board / CEO \u2014 PMO governance, Operation functions, and Delivery accounts. Admins can browse any account or project; AM / EM / Members see only their own.</p></div>'
  +'<div class="seg"><button class="'+(orgLevel==='company'?'on':'')+'" data-lvl="company">Company</button><button class="'+(orgLevel==='account'?'on':'')+'" data-lvl="account">Account</button><button class="'+(orgLevel==='project'?'on':'')+'" data-lvl="project">Project</button></div></div>'
  +'<div id="orgBody"></div>';
}
function orgNode(e,cls){cls=cls||"";return '<div class="org-node '+cls+'" data-emp="'+e.id+'">'+av(e.name,"width:36px;height:36px;font-size:13px")+'<div><div class="on1">'+e.name+'</div><div class="on2">'+e.role+'</div></div></div>';}
function orgPerson(name,role,cls){const e=EMP.find(x=>x.name===name);if(e)return orgNode(e,cls);return '<div class="org-node '+(cls||'')+'" style="cursor:default">'+av(name,"width:36px;height:36px;font-size:13px")+'<div><div class="on1">'+name+'</div><div class="on2">'+role+'</div></div></div>';}
function orgMember(m){const e=m.id?null:EMP.find(x=>x.name===m.name);const id=e?e.id:null;return '<div class="org-node'+(id?'':' org-static')+'"'+(id?' data-emp="'+id+'"':' style="cursor:default"')+'>'+av(m.name,"width:32px;height:32px;font-size:11px")+'<div><div class="on1">'+m.name+'</div><div class="on2">'+m.role+'</div></div></div>';}
function deptNode(label,sub,cls){return '<div class="org-node dept '+(cls||'')+'" style="cursor:default"><div class="ic-sq" style="background:rgba(255,255,255,.12)">'+icon(I.building)+'</div><div><div class="on1">'+label+'</div><div class="on2">'+sub+'</div></div></div>';}
function orgAcctBox(a,clickable){return '<div class="org-node acct'+(clickable?' clk':'')+'"'+(clickable?' data-orgacc="'+a.id+'"':' style="cursor:default"')+'><div class="av" style="background:'+avColor(a.name)+'">'+initials(a.name)+'</div><div><div class="on1">'+a.name+'</div><div class="on2">'+a.projects.length+' project'+(a.projects.length>1?'s':'')+' \u00b7 '+a.ind+'</div></div></div>';}
function orgProjBox(p,clickable){return '<div class="org-node proj'+(clickable?' clk':'')+'"'+(clickable?' data-orgprj="'+p.id+'"':' style="cursor:default"')+'><div class="av" style="background:'+avColor(p.n)+'">'+initials(p.n)+'</div><div><div class="on1">'+p.n+'</div><div class="on2 mono">'+p.id+'</div></div></div>';}
let orgZoom=0.8;
function orgZoomWrap(inner){
  return '<div class="card"><div class="org-toolbar"><span class="small muted" style="margin-right:2px">Zoom</span>'
   +'<button class="org-zbtn" data-orgzoom="out" title="Zoom out">'+icon('<line x1="5" y1="12" x2="19" y2="12"/>')+'</button>'
   +'<span class="org-zval mono" id="orgZval">'+Math.round(orgZoom*100)+'%</span>'
   +'<button class="org-zbtn" data-orgzoom="in" title="Zoom in">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'</button>'
   +'<button class="org-zbtn org-zbtn-txt" data-orgzoom="reset">Fit</button>'
   +'<span class="small muted" style="margin-left:auto">Drag horizontally to pan</span></div>'
   +'<div class="org-scroll"><div class="org-zoom" id="orgZoomInner" style="transform:scale('+orgZoom+')">'+inner+'</div></div></div>';
}
function renderOrg(){
  const body=document.getElementById("orgBody");if(!body)return;
  if(orgLevel==="company"){
    const ceo=EMP.find(e=>e.id==="FA-1000");const pmo=EMP.filter(e=>e.dept==='PMO');
    const delivery=ORG_DELIVERY.map(g=>'<div class="org-branch">'+orgPerson(g.am,"Account Manager","acct")
      +'<div class="org-children '+(g.accounts.length>1?'lined':'single')+'">'+g.accounts.map(a=>'<div class="org-branch">'+orgAcctBox(a,false)+'</div>').join('')+'</div></div>').join('');
    const ops='<div class="org-children lined">'+ORG_OPS.map(u=>'<div class="org-branch">'+deptNode(u.k,u.n,'op')+'</div>').join('')+'</div>';
    const inner='<div class="org org-company">'
      +(ceo?orgNode(ceo,'ceo'):deptNode('Board / CEO','Executive'))
      +'<div class="org-spine"><span class="org-spine-line"></span><span class="org-spine-dot"></span>'
        +'<div class="org-pmo-aside">'+deptNode('PMO','Governance & quality'+(pmo.length?' \u00b7 '+pmo.length:''),'pmo')+'<span class="org-pmo-elbow"></span></div>'
      +'</div>'
      +'<div class="org-children lined org-two">'
        +'<div class="org-branch">'+deptNode('Operation','Internal functions','branch-op')+ops+'</div>'
        +'<div class="org-branch">'+deptNode('Delivery','Client accounts','branch-del')+'<div class="org-children lined">'+delivery+'</div></div>'
      +'</div></div>';
    body.innerHTML=orgZoomWrap(inner)
      +'<div class="small muted mt">Board / CEO \u2192 down the spine to <b>Operation</b> &amp; <b>Delivery</b>; <b>PMO</b> branches off the spine (governance). Switch to <b>Account</b> or <b>Project</b> to drill in.</div>';
  } else if(orgLevel==="account"){
    const accts=orgVisibleAccounts();
    if(!accts.some(a=>a.id===orgAccSel))orgAccSel=accts.length?accts[0].id:null;
    const acc=accts.find(a=>a.id===orgAccSel);
    const canPick=fullAccess()||accts.length>1;
    const sel=canPick?'<div class="toolbar"><span class="chip">'+icon(I.building)+' Account <select id="orgSelAcc">'+accts.map(a=>'<option value="'+a.id+'" '+(a.id===orgAccSel?'selected':'')+'>'+a.name+'</option>').join("")+'</select></span></div>':'';
    let chart='';
    if(acc){const branches=acc.projects.map(p=>{const mem=orgProjMembers(p.id,p.n);const memCh=mem.length?'<div class="org-children '+(mem.length>1?'lined':'single')+'">'+mem.map(m=>'<div class="org-branch">'+orgMember(m)+'</div>').join("")+'</div>':'';return '<div class="org-branch">'+orgProjBox(p,true)+memCh+'</div>';}).join("");
      chart='<div class="card-head" style="padding:0 0 12px"><h3>'+icon(I.building)+' '+acc.name+' <span class="tag tag-tech">'+acc.ind+'</span></h3><span class="meta">AM '+acc.am+' \u00b7 '+acc.projects.length+' projects</span></div>'+orgZoomWrap('<div class="org">'+orgPerson(acc.am,"Account Manager","acct")+'<div class="connector"></div><div class="org-children '+(acc.projects.length>1?'lined':'single')+'">'+branches+'</div></div>');}
    else chart='<div class="card empty" style="padding:46px">No account in your scope.</div>';
    body.innerHTML=sel+chart;
  } else {
    const prjs=orgVisibleProjects();
    if(!prjs.some(p=>p.id===orgPrjSel))orgPrjSel=prjs.length?prjs[0].id:null;
    const p=prjs.find(x=>x.id===orgPrjSel);
    const canPick=fullAccess()||prjs.length>1;
    const sel=canPick?'<div class="toolbar"><span class="chip">'+icon(I.brief)+' Project <select id="orgSelPrj">'+prjs.map(x=>'<option value="'+x.id+'" '+(x.id===orgPrjSel?'selected':'')+'>'+x.n+' \u00b7 '+x.acc+'</option>').join("")+'</select></span></div>':'';
    let chart='';
    if(p){const mem=orgProjMembers(p.id,p.n);const memCh=mem.length?'<div class="connector"></div><div class="org-children '+(mem.length>1?'lined':'single')+'">'+mem.map(m=>'<div class="org-branch">'+orgMember(m)+'</div>').join("")+'</div>':'';
      chart='<div class="card-head" style="padding:0 0 12px"><h3>'+p.n+'</h3><span class="meta">'+p.acc+' \u00b7 AM '+p.am+' \u00b7 <span class="mono">'+p.id+'</span></span></div>'+orgZoomWrap('<div class="org">'+orgProjBox(p,false)+memCh+'</div>'+(mem.length?'':'<div class="muted small" style="text-align:center;margin-top:10px">No members allocated.</div>'));}
    else chart='<div class="card empty" style="padding:46px">No project in your scope.</div>';
    body.innerHTML=sel+chart;
  }
  body.querySelectorAll("[data-emp]").forEach(el=>el.onclick=()=>openProfile(el.dataset.emp));
  body.querySelectorAll("[data-orgacc]").forEach(el=>el.onclick=()=>{orgLevel="account";orgAccSel=el.dataset.orgacc;render('org');});
  body.querySelectorAll("[data-orgprj]").forEach(el=>el.onclick=()=>{orgLevel="project";orgPrjSel=el.dataset.orgprj;render('org');});
  const sa=document.getElementById("orgSelAcc");if(sa)sa.onchange=()=>{orgAccSel=sa.value;renderOrg();};
  const spx=document.getElementById("orgSelPrj");if(spx)spx.onchange=()=>{orgPrjSel=spx.value;renderOrg();};
  orgWireZoom(body);
}
function orgWireZoom(body){
  const inner=body.querySelector('#orgZoomInner');const val=body.querySelector('#orgZval');if(!inner)return;
  const apply=()=>{orgZoom=Math.max(0.4,Math.min(1.3,Math.round(orgZoom*100)/100));inner.style.transform='scale('+orgZoom+')';if(val)val.textContent=Math.round(orgZoom*100)+'%';};
  body.querySelectorAll('[data-orgzoom]').forEach(b=>b.onclick=()=>{const a=b.dataset.orgzoom;if(a==='in')orgZoom+=0.1;else if(a==='out')orgZoom-=0.1;else orgZoom=0.8;apply();});
  // drag to pan
  const scroll=body.querySelector('.org-scroll');if(scroll){let down=false,sx=0,sl=0;scroll.addEventListener('mousedown',e=>{if(e.target.closest('.org-node'))return;down=true;sx=e.pageX;sl=scroll.scrollLeft;scroll.classList.add('grabbing');});window.addEventListener('mouseup',()=>{down=false;scroll.classList.remove('grabbing');});scroll.addEventListener('mousemove',e=>{if(!down)return;scroll.scrollLeft=sl-(e.pageX-sx);});}
}
function renderOrgFull(){render('org');}
/* ===== RESOURCE ALLOCATION ===== */
let allocPage=1,allocQ="";const ALLOC_PP=8,CUR_M=5;
let utilPage=1,utilQ="";const UTIL_PP=10;
const MAB=["J","F","M","A","M","J","J","A","S","O","N","D"];
const MFULL=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const PALETTE=["#4338CA","#2E9C9C","#2F7DC4","#7C3AED","#E15B66","#2F9E76","#D98A1F","#0EA5A5","#9333EA"];
function prjColor(id){const i=PROJECTS.findIndex(p=>p.id===id);return PALETTE[(i<0?0:i)%PALETTE.length];}
function monthlyVals(a){const f=new Date(a.from),t=new Date(a.to);const arr=[];for(let m=0;m<12;m++){const ms=new Date(2026,m,1),me=new Date(2026,m+1,0);arr.push((f<=me&&t>=ms)?a.pct:null);}return arr;}
function mClass(v){if(v===null)return "";if(v>=100)return "m100";if(v>=75)return "m75";if(v>=50)return "m50";if(v>0)return "m25";return "m0";}
function allocRows(){
  let rows=ALLOC.filter(a=>visibleEmps().some(e=>e.id===a.emp)).map(a=>{const e=EMP.find(x=>x.id===a.emp);const p=PROJECTS.find(x=>x.id===a.prj);const mv=monthlyVals(a);const yArr=mv.slice(0,CUR_M+1).filter(x=>x!==null);const fArr=mv.filter(x=>x!==null);return {e:e,p:p,a:a,mv:mv,ytdAvg:yArr.length?yArr.reduce((s,x)=>s+x,0)/yArr.length:0,fyAvg:fArr.length?fArr.reduce((s,x)=>s+x,0)/fArr.length:0,ytdMM:mv.slice(0,CUR_M+1).reduce((s,x)=>s+(x||0),0)/100};});
  if(allocQ){const q=allocQ.toLowerCase();rows=rows.filter(r=>r.e.name.toLowerCase().indexOf(q)>=0||r.e.id.toLowerCase().indexOf(q)>=0);}
  return rows;
}
function viewAllocation(){
  const scopeAlloc=ALLOC.filter(a=>visibleEmps().some(e=>e.id===a.emp));
  const allocatable=visibleEmps().filter(e=>["Executive","PMO"].indexOf(e.dept)<0);
  const overCount=allocatable.filter(e=>isOverAllocated(e.id)).length;
  const util=Math.round(allocatable.reduce((s,e)=>{const t=Math.min(100,ALLOC.filter(a=>a.emp===e.id).reduce((x,a)=>x+a.pct,0));return s+t;},0)/Math.max(1,allocatable.length));
  const byAcc={};scopeAlloc.forEach(a=>{const p=PROJECTS.find(x=>x.id===a.prj);byAcc[p.acc]=(byAcc[p.acc]||0)+a.mm;});
  const accSeg=Object.entries(byAcc).sort((a,b)=>b[1]-a[1]).map(a=>({label:accName(a[0]),v:Math.round(a[1]),color:avColor(accName(a[0]))}));
  const totMM=accSeg.reduce((s,a)=>s+a.v,0);
  const pie=pieChart(accSeg,118);
  const legend=accSeg.map(s=>'<div class="flex center gap" style="padding:2px 0;font-size:11.5px"><span style="width:9px;height:9px;border-radius:3px;background:'+s.color+';flex-shrink:0"></span><span style="flex:1;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+s.label+'</span><span class="mono" style="font-weight:600">'+s.v+'</span></div>').join("");
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Group Resource Allocation</div><h1>Resource Allocation</h1><p>Monthly staffing grid \u2014 planned % vs actual utilization across the portfolio. '+(!fullAccess()?"Scoped to your "+(isEmployee()?"own allocation.":"account."):"")+'</p></div><button class="btn btn-ghost">'+icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>')+'Export RA</button></div>'
  +'<div class="grid mb" style="grid-template-columns:minmax(300px,38%) 1fr;gap:14px;align-items:stretch">'
    +'<div class="card"><div class="card-pad" style="display:flex;align-items:center;gap:16px;padding:14px 16px"><div style="flex-shrink:0">'+pie+'</div><div style="flex:1;min-width:0"><div class="small muted" style="font-weight:600;margin-bottom:6px">Effort by account \u00b7 '+totMM+' MM</div>'+legend+'</div></div></div>'
    +'<div class="grid kpi-row" style="grid-template-columns:repeat(3,1fr);gap:14px">'
      +'<div class="card kpi"><span class="lbl">Avg. utilization</span><div class="val" style="color:'+(util>=85?'var(--positive)':'var(--warning)')+'">'+util+'%</div><span class="small muted">target \u2265 85%</span></div>'
      +'<div class="card kpi"><span class="lbl">Total over-allocated</span><div class="val" style="color:'+(overCount?'var(--accent)':'var(--positive)')+'">'+overCount+'</div><span class="small muted">&gt;100% some month</span></div>'
      +'<div class="card kpi"><span class="lbl">Total members</span><div class="val">'+allocatable.length+'</div><span class="small muted">'+new Set(scopeAlloc.map(a=>a.prj)).size+' projects</span></div>'
    +'</div>'
  +'</div>'
  +'<div class="card mb"><div class="card-head"><h3>Allocation by month \u00b7 2026</h3><div class="searchbox">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input class="inp" id="allocSearch" placeholder="Search name or employee ID\u2026" value="'+allocQ+'"></div></div><div id="allocBody"></div><div class="small muted" style="padding:0 16px 14px">Red outline = that person is over 100% allocated in that month.</div></div>'
  +'<div class="card"><div class="card-head"><h3>Utilization by person</h3><div class="searchbox">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input class="inp" id="utilSearch" placeholder="Search name or employee ID\u2026" value="'+utilQ+'"></div></div><div id="utilBody"></div><div class="card-pad" style="padding-top:0"><div class="legend">'+PROJECTS.map(p=>'<div class="it"><span class="sw" style="background:'+prjColor(p.id)+'"></span>'+p.name+'</div>').join("")+'</div></div></div>';
}
function pieChart(seg,size){size=size||150;const total=seg.reduce((a,b)=>a+b.v,0)||1;const r=size/2-6,cx=size/2,cy=size/2,C=2*Math.PI*r;let off=0,arcs="";seg.forEach(s=>{const len=s.v/total*C;arcs+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+s.color+'" stroke-width="11" stroke-dasharray="'+len+' '+(C-len)+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 '+cx+' '+cy+')"/>';off+=len;});return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'">'+arcs+'<text x="'+cx+'" y="'+(cy-1)+'" text-anchor="middle" font-family="Geist" font-size="22" font-weight="600" fill="currentColor">'+total+'</text><text x="'+cx+'" y="'+(cy+14)+'" text-anchor="middle" font-size="8" fill="#71748A" letter-spacing=".06em">TOTAL MM</text></svg>';}
function utilRows(){
  const allocatable=visibleEmps().filter(e=>["Executive","PMO"].indexOf(e.dept)<0);
  const q=utilQ.trim().toLowerCase();
  return allocatable.filter(e=>!q||e.name.toLowerCase().indexOf(q)>=0||e.id.toLowerCase().indexOf(q)>=0);
}
function renderUtilTable(){
  const body=document.getElementById("utilBody");if(!body)return;
  const rows=utilRows();const pages=Math.max(1,Math.ceil(rows.length/UTIL_PP));if(utilPage>pages)utilPage=pages;
  const slice=rows.slice((utilPage-1)*UTIL_PP,utilPage*UTIL_PP);
  const html=slice.map(e=>{const als=ALLOC.filter(a=>a.emp===e.id);const tot=als.reduce((s,a)=>s+a.pct,0);const over=tot>100;
    const segs=als.map(a=>'<div class="useg" style="width:'+Math.min(a.pct,100)+'%;background:'+prjColor(a.prj)+'" title="'+prjName(a.prj)+' '+a.pct+'%">'+(a.pct>=14?a.pct+'%':'')+'</div>').join("");
    const free=tot<100?'<div class="useg" style="width:'+(100-tot)+'%;background:var(--surface-2)"></div>':'';
    const split=als.filter(a=>a.pct>0).map(a=>prjName(a.prj)+' '+a.pct+'%').join(' \u00b7 ')||'Idle';
    const variance=als.length?Math.round(als.reduce((s,a)=>s+actualVar(a),0)/als.length):0;const actual=Math.max(0,tot+variance);
    return '<div style="margin-bottom:13px"><div class="util-row"><span class="un" title="'+e.name+'">'+e.name+' <span class="mono muted" style="font-size:10px">'+e.id+'</span></span><div class="ubar">'+segs+free+'</div><span class="utot" style="color:'+(over?'var(--accent)':tot>=70?'var(--positive)':'var(--warning)')+'">'+tot+'%'+(over?' \u26a0':'')+'</span></div><div class="util-split">'+split+' \u00b7 <span style="color:var(--faint)">actual '+actual+'% ('+(variance>=0?'+':'')+variance+')</span></div></div>';}).join("")||'<div class="empty" style="padding:24px">No matching people.</div>';
  body.innerHTML='<div class="card-pad" style="padding-bottom:6px">'+html+'</div>'+pagerHtml2(pages,rows.length,utilPage);
  body.querySelectorAll("[data-upg]").forEach(b=>b.onclick=()=>{utilPage=parseInt(b.dataset.upg);renderUtilTable();});
}
function pagerHtml2(pages,total,cur){let btns="";for(let i=1;i<=pages;i++)btns+='<button data-upg="'+i+'" class="'+(i===cur?'cur':'')+'">'+i+'</button>';return '<div class="pager"><span class="pinfo">'+total+' people \u00b7 page '+cur+' of '+pages+'</span><button data-upg="'+Math.max(1,cur-1)+'" '+(cur===1?'disabled':'')+'>Prev</button>'+btns+'<button data-upg="'+Math.min(pages,cur+1)+'" '+(cur===pages?'disabled':'')+'>Next</button></div>';}
function pagerHtml(pages,total){let btns="";for(let i=1;i<=pages;i++)btns+='<button data-pg="'+i+'" class="'+(i===allocPage?'cur':'')+'">'+i+'</button>';return '<div class="pager"><span class="pinfo">'+total+' allocation rows \u00b7 page '+allocPage+' of '+pages+'</span><button data-pg="'+Math.max(1,allocPage-1)+'" '+(allocPage===1?'disabled':'')+'>Prev</button>'+btns+'<button data-pg="'+Math.min(pages,allocPage+1)+'" '+(allocPage===pages?'disabled':'')+'>Next</button></div>';}
function renderAllocTable(){
  const body=document.getElementById("allocBody");if(!body)return;
  const rows=allocRows();
  const pages=Math.max(1,Math.ceil(rows.length/ALLOC_PP));
  if(allocPage>pages)allocPage=pages;
  const slice=rows.slice((allocPage-1)*ALLOC_PP,allocPage*ALLOC_PP);
  const head='<tr><th>Employee ID</th><th>Name</th><th>Account</th><th>Sub-project</th>'+MAB.map((m,i)=>'<th class="mh" title="'+MFULL[i]+'">'+m+'</th>').join("")+'<th class="mh">YTD%</th><th class="mh">FY%</th><th class="mh">Total</th></tr>';
  const tb=slice.map(r=>{const tot=empMonthTotals(r.e.id);return '<tr class="clk" data-emp="'+r.e.id+'"><td class="mono small">'+r.e.id+'</td><td><div class="cellname">'+av(r.e.name,"width:28px;height:28px;font-size:10px")+'<div class="t1">'+r.e.name+'</div></div></td><td class="small">'+accName(r.p.acc)+'</td><td class="small">'+r.p.name+'</td>'+r.mv.map((v,mi)=>'<td class="mcell '+mClass(v)+(v!==null&&tot[mi]>100?' mover':'')+'" title="'+(tot[mi]>100?'Total '+tot[mi]+'% this month':'')+'">'+(v===null?'':v)+'</td>').join("")+'<td class="summ">'+r.ytdAvg.toFixed(0)+'</td><td class="summ">'+r.fyAvg.toFixed(0)+'</td><td class="summ">'+r.ytdMM.toFixed(2)+'</td></tr>';}).join("");
  body.innerHTML='<div class="tbl-wrap"><table class="mtbl"><thead>'+head+'</thead><tbody>'+(tb||'<tr><td colspan="19" class="empty" style="padding:30px">No matching allocations</td></tr>')+'</tbody></table></div>'+pagerHtml(pages,rows.length);
  body.querySelectorAll("[data-pg]").forEach(b=>b.onclick=()=>{allocPage=parseInt(b.dataset.pg);renderAllocTable();});
  body.querySelectorAll("[data-emp]").forEach(el=>el.onclick=()=>openProfile(el.dataset.emp));
}
/* ===== RECRUITMENT (internal job board + endorsement chain + PMO approval) ===== */
const APP_FLOW=["Submitted","Receiving EM","PMO review","Approved"];
function reqStageName(r){return r.status==='Open'?STAGES[r.stage-1]:r.status;}
function appStatusPill(s){const m={"Submitted":"sp-open","Receiving EM":"sp-review","PMO review":"sp-review","Approved":"sp-filled","Rejected":"sp-rej","Withdrawn":"sp-hold"};return '<span class="status-pill '+(m[s]||'sp-open')+'">'+s+'</span>';}
function nowTs(){const d=new Date();const p=n=>(""+n).length<2?"0"+n:""+n;return "2026-06-09 "+p(d.getHours())+":"+p(d.getMinutes());}
function appTimeline(app){return '<div class="timeline">'+app.hist.map(h=>'<div class="tl"><div class="when mono">'+h.ts+'</div><div class="what">'+h.action+'</div><div class="who">'+h.actor+'</div>'+(h.note?'<div class="small" style="margin-top:4px;color:var(--ink-2)">\u201c'+h.note+'\u201d</div>':'')+'</div>').join("")+'</div>';}
function openModal(html){const w=document.getElementById('modalWrap');w.querySelector('#modalBox').innerHTML=html;w.classList.add('show');}
function closeModal(){document.getElementById('modalWrap').classList.remove('show');}
function toast(msg,kind){const w=document.getElementById('toastWrap');if(!w)return;const t=document.createElement('div');t.className='toast '+(kind||'ok');t.innerHTML='<span class="ti">'+icon(kind==='info'?'<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>':kind==='warn'?'<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>':'<path d="M20 6 9 17l-5-5"/>')+'</span>'+msg;w.appendChild(t);requestAnimationFrame(()=>t.classList.add('show'));setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),250);},2600);}
function relEmName(e){const p=PROJECTS.find(x=>x.id===e.prj);if(p){const em=EMP.find(z=>z.id===p.em);if(em)return em.name;}const m=EMP.find(z=>z.id===e.mgr);return m?m.name:"Current manager";}
function recEmName(r){const p=PROJECTS.find(x=>x.id===r.prj);if(p){const em=EMP.find(z=>z.id===p.em);if(em)return em.name;}return "Engagement Manager";}
function notifCount(){if(!isEmployee())return 0;return APPLICATIONS.filter(a=>a.emp===me().id&&(a.status==="Approved"||a.status==="Rejected")).length;}
function updateBell(){const c=notifCount();const ping=document.getElementById('bellPing');const badge=document.getElementById('bellCount');if(!badge)return;if(c>0){badge.textContent=c;badge.style.display='grid';if(ping)ping.style.display='none';}else{badge.style.display='none';if(ping)ping.style.display='';}}
function applyOpen(reqId){
  const r=REQS.find(x=>x.id===reqId);const u=me();
  openModal('<div class="modal-h"><div><h3>Apply \u00b7 '+r.title+'</h3><div class="small muted" style="margin-top:3px">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+' \u00b7 Grade '+r.grade+'</div></div><button class="drawer-close" id="modalClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div>'
    +'<div class="modal-b"><div class="req-tags">'+r.stack.map(s=>'<span class="tag tag-tech">'+s[0]+' \u00b7 '+s[1]+'</span>').join("")+'</div><div class="small muted mb">'+r.note+'</div>'
    +'<div class="audit-note" style="color:var(--ink-2);background:var(--info-soft)">'+icon('<circle cx="12" cy="12" r="9"/><line x1="12" y1="16" x2="12.01" y2="16"/><line x1="12" y1="8" x2="12" y2="12"/>')+'<span>Stretch assignment \u2014 extra % on top of your current work. Goes to your <b>releasing EM</b> \u2192 <b>receiving EM</b> \u2192 <b>PMO</b> before it\u2019s approved.</span></div>'
    +'<label class="field-k" style="margin-top:12px">Upload your CV <span class="muted" style="font-weight:400">\u2014 required, sent to recruitment</span></label><div class="cv-drop" id="applyCvDrop"><input type="file" id="applyCvFile" accept=".pdf,.doc,.docx" style="display:none"><div class="cv-drop-inner">'+icon(I.doc)+'<div><div class="cv-drop-t" id="applyCvName">Drop your CV or click to browse</div><div class="small muted">PDF or Word \u2014 goes straight to the recruitment team</div></div></div></div>'+'<label class="field-k" style="margin-top:12px">Why are you a fit? (optional)</label><textarea class="inp" id="applyNote" placeholder="A line or two about your interest and relevant experience\u2026"></textarea>'
    +'<div class="small muted mt">Applying as <b>'+u.name+'</b> \u00b7 '+u.role+' \u00b7 current utilization '+Math.max.apply(0,empMonthTotals(u.id))+'%.</div></div>'
    +'<div class="modal-f"><button class="btn btn-ghost" id="applyCancel">Cancel</button><button class="btn btn-primary" id="applySubmit">Submit application</button></div>');
  const w=document.getElementById('modalWrap');
  w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#applyCancel').onclick=closeModal;
  var _cv={name:''};var _drop=w.querySelector('#applyCvDrop'),_file=w.querySelector('#applyCvFile');
  if(_drop)_drop.onclick=function(){_file.click();};
  if(_file)_file.onchange=function(){if(_file.files&&_file.files[0]){_cv.name=_file.files[0].name;w.querySelector('#applyCvName').textContent=_cv.name;_drop.classList.add('filled');}};
  w.querySelector('#applySubmit').onclick=()=>{if(!_cv.name){toast('Please upload your CV first','warn');return;}const n=w.querySelector('#applyNote').value;APPLICATIONS.push({id:"APP-"+(++APP_SEQ),req:reqId,emp:u.id,date:"2026-06-09",note:n,cv:_cv.name,status:"Submitted",endorse:{rel:false,rec:false},hist:[{ts:nowTs(),actor:u.name,action:"Submitted application + CV",note:_cv.name}]});
  CANDIDATES.unshift({id:"CAND-"+(++CAND_SEQ),name:u.name,email:(u.name.toLowerCase().replace(/[^a-z]+/g,'.'))+"@seta-intl.com",phone:"\u2014",dob:"",gender:u.gender||"",seniority:gradeSeniority(r.grade),req:reqId,source:"Internal application",status:"New",cv:_cv.name,skills:(u.skills||[]).map(function(s){return s.n;}).slice(0,6),rating:0,note:"Internal applicant via Open Roles."+(n?' '+n:''),createdAt:"2026-06-09",decidedAt:null,hist:[{ts:nowTs(),actor:u.name,action:"Applied via Open Roles (CV uploaded)",note:_cv.name}]});
  audit("Internal application + CV submitted",r.title,u.name);closeModal();renderRecruitment();toast("Applied \u2014 CV sent to recruitment & routed to your EM");};
}
function appLog(app,actor,action,note){app.hist.push({ts:nowTs(),actor:actor,action:action,note:note||""});}
function emEndorse(appId,which){const app=APPLICATIONS.find(a=>a.id===appId);const e=EMP.find(x=>x.id===app.emp);const r=REQS.find(x=>x.id===app.req);
  if(which==='rel'){app.endorse.rel=true;app.status="Receiving EM";appLog(app,"EM \u00b7 "+relEmName(e)+" (releasing)","Releasing-EM endorsed","");toast("Releasing-EM endorsed \u2014 routed to receiving EM");}
  else{app.endorse.rec=true;app.status="PMO review";appLog(app,"EM \u00b7 "+recEmName(r)+" (receiving)","Receiving-EM endorsed","");toast("Receiving-EM endorsed \u2014 routed to PMO");}
  audit("Endorsement recorded",e.name+" \u2192 "+r.title,which==='rel'?"releasing EM":"receiving EM");renderRecruitment();openReview(appId);}
function emDecline(appId,which){const app=APPLICATIONS.find(a=>a.id===appId);const e=EMP.find(x=>x.id===app.emp);const r=REQS.find(x=>x.id===app.req);
  confirmAction("Decline endorsement?","This ends the application. The applicant will see the decision and reason in their history.","Decline",()=>{app.status="Rejected";appLog(app,"EM \u00b7 "+(which==='rel'?relEmName(e)+" (releasing)":recEmName(r)+" (receiving)"),(which==='rel'?"Releasing":"Receiving")+"-EM declined","");audit("Application declined by EM",e.name+" \u2192 "+r.title,which);renderRecruitment();openReview(appId);toast("Endorsement declined");},true);}
function pmoReject(appId){const app=APPLICATIONS.find(a=>a.id===appId);const e=EMP.find(x=>x.id===app.emp);const r=REQS.find(x=>x.id===app.req);
  const note=(document.getElementById('reviewNote')||{}).value||"";
  confirmAction("Reject application?","PMO will reject this application. This is logged and cannot be undone.","Reject",()=>{app.status="Rejected";appLog(app,"PMO \u00b7 "+me().name,"Rejected",note);audit("Application rejected",e.name+" \u2192 "+r.title,note);renderRecruitment();openReview(appId);toast("Application rejected");},true);}
function pmoApprove(appId){const app=APPLICATIONS.find(a=>a.id===appId);const e=EMP.find(x=>x.id===app.emp);const r=REQS.find(x=>x.id===app.req);
  const pct=Math.max(5,Math.min(100,parseInt((document.getElementById('allocPct')||{}).value||"20")));
  const note=(document.getElementById('reviewNote')||{}).value||"";
  const totals=empMonthTotals(e.id);const projected=Math.max.apply(0,totals)+pct;
  const override=(document.getElementById('ovrOk')||{}).checked;
  if(projected>100&&!override){toast("Would over-allocate to "+projected+"% \u2014 tick override to proceed","warn");return;}
  ALLOC.push({emp:e.id,prj:r.prj,from:"2026-06-09",to:r.due,pct:pct,mm:+(pct/100*6).toFixed(1),source:"internal-move"});
  app.status="Approved";app.alloc=pct;
  appLog(app,"PMO \u00b7 "+me().name,"Approved",(note?note+" \u2014 ":"")+"Allocated "+pct+"% on "+prjName(r.prj)+(projected>100?" (over-allocation overridden \u2192 "+projected+"%)":""));
  audit("Application approved + allocation created",e.name+" \u2192 "+r.title,pct+"% on "+prjName(r.prj));
  renderRecruitment();openReview(appId);toast("Approved \u2014 "+pct+"% allocation created on "+prjName(r.prj));}
function openReview(appId){
  const app=APPLICATIONS.find(a=>a.id===appId);if(!app)return;
  const e=EMP.find(x=>x.id===app.emp)||{name:app.emp,role:"",prj:null,mgr:null};
  const r=REQS.find(x=>x.id===app.req);
  const curUtil=Math.max.apply(0,empMonthTotals(e.id));
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const steps=["Releasing EM","Receiving EM","PMO review","Decision"];
  const stepState=i=>{if(app.status==="Rejected")return i===0&&!app.endorse.rel?"cur":(app.endorse.rel&&i<=1?"done":"");if(app.status==="Approved")return"done";if(i===0)return app.endorse.rel?"done":"cur";if(i===1)return app.endorse.rec?"done":(app.endorse.rel?"cur":"");if(i===2)return app.status==="PMO review"?"cur":(app.endorse.rec?"":"");return"";};
  const track='<div class="stage-track" style="margin:12px 0">'+steps.map((s,i)=>'<div class="stg '+stepState(i)+'">'+s+'</div>').join("")+'</div>';
  let actions="";
  if(app.status==="Submitted")actions='<div class="small muted mb">Releasing EM: <b>'+relEmName(e)+'</b> \u2014 confirm '+e.name.split(" ").slice(-1)[0]+' has spare capacity.</div><div class="act-btns"><button class="btn btn-ghost" id="aDecline">Decline</button><button class="btn btn-primary" id="aEndorse" style="background:var(--positive)">Record releasing-EM endorsement</button></div>';
  else if(app.status==="Receiving EM")actions='<div class="small muted mb">Receiving EM: <b>'+recEmName(r)+'</b> \u2014 confirm the role wants this person.</div><div class="act-btns"><button class="btn btn-ghost" id="aDecline2">Decline</button><button class="btn btn-primary" id="aEndorse2" style="background:var(--positive)">Record receiving-EM endorsement</button></div>';
  else if(app.status==="PMO review"){const proj=curUtil+20;actions='<label class="field-k" style="margin-top:6px">Allocation % (stretch, additive)</label><input class="inp" id="allocPct" type="number" min="5" max="100" value="20" style="max-width:120px"> <span class="small muted">current '+curUtil+'% \u00b7 approving adds on top</span>'
    +'<div id="ovrWrap" class="audit-note" style="'+(proj>100?'':'display:none')+'">'+icon('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>')+'<span>Approving may push utilization over 100%. <label style="display:inline-flex;gap:5px;align-items:center;margin-top:4px"><input type="checkbox" id="ovrOk"> Override (intentional over-allocation)</label></span></div>'
    +'<label class="field-k" style="margin-top:10px">PMO note</label><textarea class="inp" id="reviewNote" placeholder="Decision rationale / conditions\u2026"></textarea>'
    +'<div class="act-btns" style="margin-top:12px"><button class="btn btn-primary" id="aReject" style="background:var(--accent)">Reject</button><button class="btn btn-primary" id="aApprove" style="background:var(--positive)">Approve & create allocation</button></div>';}
  openModal('<div class="modal-h"><div><h3>Review application</h3><div class="small muted" style="margin-top:3px">'+e.name+' \u2192 '+r.title+'</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
    +'<div class="modal-b"><div class="flex center gap mb">'+av(e.name,"width:42px;height:42px;font-size:15px")+'<div><div style="font-weight:600">'+e.name+'</div><div class="small muted">'+e.role+(e.acc?' \u00b7 '+accName(e.acc):'')+' \u00b7 util '+curUtil+'%'+(curUtil>100?' \u26a0':'')+'</div></div><div style="margin-left:auto">'+appStatusPill(app.status)+'</div></div>'
    +track
    +'<div class="fb"><div class="fm" style="margin-bottom:4px">Applicant note</div><div class="fnote">'+(app.note||'\u2014')+'</div></div>'
    +'<div class="subhead">Audit trail</div>'+appTimeline(app)+actions+'</div>');
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;
  if(w.querySelector('#aEndorse'))w.querySelector('#aEndorse').onclick=()=>emEndorse(appId,'rel');
  if(w.querySelector('#aDecline'))w.querySelector('#aDecline').onclick=()=>emDecline(appId,'rel');
  if(w.querySelector('#aEndorse2'))w.querySelector('#aEndorse2').onclick=()=>emEndorse(appId,'rec');
  if(w.querySelector('#aDecline2'))w.querySelector('#aDecline2').onclick=()=>emDecline(appId,'rec');
  if(w.querySelector('#aApprove'))w.querySelector('#aApprove').onclick=()=>pmoApprove(appId);
  if(w.querySelector('#aReject'))w.querySelector('#aReject').onclick=()=>pmoReject(appId);
  const ap=w.querySelector('#allocPct');if(ap)ap.oninput=()=>{const proj=curUtil+(parseInt(ap.value||"0"));const ow=w.querySelector('#ovrWrap');if(ow)ow.style.display=proj>100?'flex':'none';};
}
function openAppDetail(appId){
  const app=APPLICATIONS.find(a=>a.id===appId);if(!app)return;
  const r=REQS.find(x=>x.id===app.req);
  const canWithdraw=["Submitted","Receiving EM","PMO review"].indexOf(app.status)>=0;
  openModal('<div class="modal-h"><div><h3>'+r.title+'</h3><div class="small muted" style="margin-top:3px">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+'</div></div><button class="drawer-close" id="modalClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div>'
    +'<div class="modal-b"><div class="flex center mb">'+appStatusPill(app.status)+'<span class="small muted" style="margin-left:auto">Applied '+app.date+'</span></div><div class="subhead" style="margin-top:0">Job description</div>'+jdHtml(r)+'<div class="subhead">Status history</div>'+appTimeline(app)+'</div>'
    +(canWithdraw?'<div class="modal-f"><button class="btn btn-ghost" id="withdrawBtn">Withdraw application</button></div>':''));
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;
  if(w.querySelector('#withdrawBtn'))w.querySelector('#withdrawBtn').onclick=()=>confirmAction("Withdraw application?","You can re-apply later while the role is open.","Withdraw",()=>{app.status="Withdrawn";appLog(app,me().name,"Withdrew application","");audit("Application withdrawn",r.title,me().name);closeModal();renderRecruitment();toast("Application withdrawn");},true);
}
function openReqForm(){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  openModal('<div class="modal-h"><div><h3>New requisition</h3><div class="small muted" style="margin-top:3px">Position request \u2014 overview + full JD detail</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="evalForm"><div class="field-grid mb"><div><label class="field-k">Job title</label><input class="inp" id="rfTitle" placeholder="e.g. Senior Backend Engineer"></div><div><label class="field-k">Account</label><select class="inp" id="rfAcc">'+ACCOUNTS.map(a=>'<option value="'+a.id+'">'+a.name+'</option>').join("")+'</select></div><div><label class="field-k">Grade</label><select class="inp" id="rfGrade"><option>L3</option><option selected>L4</option><option>L5</option></select></div><div><label class="field-k">Type</label><select class="inp" id="rfKind"><option value="new">new</option><option value="replacement">replacement</option></select></div><div><label class="field-k">Interview mode <span class="muted" style="font-weight:400">— required</span></label><select class="inp" id="rfIntMode"><option value="Online">Online (Teams)</option><option value="Onsite">Onsite</option><option value="Either">Either</option></select></div><div><label class="field-k">Due date</label><input type="date" class="inp" id="rfDue" value="2026-08-01"></div></div>'
   +'<label class="field-k">Tech stack <span class="muted" style="font-weight:400">\u2014 comma-separated, shown on the overview card</span></label><input class="inp" id="rfStack" placeholder="React \u00b7 Advanced, TypeScript \u00b7 Advanced">'
   +'<div class="subhead">JD Detail</div><div class="small muted" style="margin:-2px 0 8px">Required \u2014 employees see this full description when they open the role.</div>'
   +'<label class="field-k">About the role</label><textarea class="inp" id="rfSummary" placeholder="One short paragraph on the role and its context\u2026"></textarea>'
   +'<label class="field-k" style="margin-top:10px">Responsibilities <span class="muted" style="font-weight:400">\u2014 one per line</span></label><textarea class="inp" id="rfResp" style="min-height:78px" placeholder="Design and build\u2026\nReview PRs\u2026"></textarea>'
   +'<label class="field-k" style="margin-top:10px">Requirements <span class="muted" style="font-weight:400">\u2014 one per line</span></label><textarea class="inp" id="rfReq" style="min-height:78px" placeholder="5+ years\u2026\nStrong\u2026"></textarea>'
   +'<label class="field-k" style="margin-top:10px">Nice to have <span class="muted" style="font-weight:400">\u2014 one per line, optional</span></label><textarea class="inp" id="rfNice" placeholder="Domain experience\u2026"></textarea></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="rfCancel">Cancel</button><button class="btn btn-primary" id="rfGo">Create requisition</button></div>');
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#rfCancel').onclick=closeModal;
  w.querySelector('#rfGo').onclick=()=>{
    const title=w.querySelector('#rfTitle').value.trim();if(!title){toast("Job title is required","warn");return;}
    const summary=w.querySelector('#rfSummary').value.trim();if(!summary){toast("JD Detail (About the role) is required","warn");return;}
    const lines=t=>w.querySelector(t).value.split("\n").map(s=>s.trim()).filter(Boolean);
    const stack=w.querySelector('#rfStack').value.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{const p=s.split(/\s*\u00b7\s*|\s*\|\s*/);return [p[0],p[1]||"Intermediate"];});
    const acc=w.querySelector('#rfAcc').value;
    const id="REQ-"+(3008+REQ_SEQ++);
    REQS.unshift({id:id,title:title,acc:acc,prj:null,grade:w.querySelector('#rfGrade').value,kind:w.querySelector('#rfKind').value,intMode:w.querySelector('#rfIntMode').value,stage:1,status:"Open",start:"2026-06-10",due:w.querySelector('#rfDue').value||"2026-08-01",stack:stack.length?stack:[["General","Intermediate"]],note:summary.slice(0,70)+(summary.length>70?"\u2026":"")});
    REQ_JD[id]={summary:summary,resp:lines('#rfResp'),req:lines('#rfReq'),nice:lines('#rfNice')};
    audit("Requisition created",title,id);closeModal();renderModTabs();renderRecruitment();toast("Requisition "+id+" created \u2014 JD saved");};
}
let REQ_SEQ=0;
function openJD(reqId){
  const r=REQS.find(x=>x.id===reqId);if(!r)return;
  const emp=isEmployee();const myApp=emp?APPLICATIONS.find(a=>a.req===r.id&&a.emp===me().id&&a.status!=="Withdrawn"):null;
  const foot=emp&&!myApp&&r.status!=="On hold"?'<div class="modal-f"><button class="btn btn-ghost" id="jdClose2">Close</button><button class="btn btn-primary" id="jdApply">Apply for this role</button></div>':'<div class="modal-f"><button class="btn btn-ghost" id="jdClose2">Close</button></div>';
  openModal('<div class="modal-h"><div><h3>'+r.title+'</h3><div class="small muted" style="margin-top:3px">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+' \u00b7 Grade '+r.grade+' \u00b7 '+r.kind+'</div></div><button class="drawer-close" id="modalClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div>'
    +'<div class="modal-b">'+jdHtml(r)+'<div class="small muted" style="margin-top:12px">Posted '+r.start+' \u00b7 closes '+r.due+'</div></div>'+foot);
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#jdClose2').onclick=closeModal;
  if(w.querySelector('#jdApply'))w.querySelector('#jdApply').onclick=()=>{closeModal();applyOpen(r.id);};
}
function viewRecruitment(){
  const emp=isEmployee();
  return ''
  +'<div class="page-head"><div><div class="eyebrow">'+(emp?'Internal Mobility \u00b7 Job Board':'E-06 \u00b7 Position Management & Approval')+' \u00b7 Phase 2</div><h1>'+(emp?'Open Roles':'Recruitment')+'</h1><p>'+(emp?'Open positions across the company \u2014 follow roles, then apply for stretch work. Each application is endorsed by EMs and approved by PMO. Internal posts don\u2019t publish effort requirements (human approval gate handles fit).':'Open positions, internal applications, and the endorsement \u2192 PMO approval chain \u2014 every action is logged and approval creates the allocation. Phase-2 module: rolls out after hiring fully moves into People.')+'</p></div>'+'</div>'
  +'<div id="recView"></div>';
}
function renderRecruitment(){
  if(curMod==='hiring')renderHiringTab(curTab);
}
let reqView="board";
function renderReqList(box){
  const VIS=hiringVisibleReqs();
  const open=VIS.filter(r=>r.status!=='Filled');
  const today=new Date("2026-06-09");const opts=STAGES.concat(["Filled","On hold"]);
  const _scopeNote=hiringScopeNote();
  const pending=APPLICATIONS.filter(a=>["Approved","Rejected","Withdrawn"].indexOf(a.status)<0).length;
  const approved=APPLICATIONS.filter(a=>a.status==="Approved").length;
  const cards=VIS.map(r=>{
    const days=Math.max(0,Math.round((today-new Date(r.start))/864e5));const overdue=r.status!=='Filled'&&new Date(r.due)<today;
    const sp=r.status==='Filled'?'<span class="status-pill sp-filled">Filled</span>':r.status==='On hold'?'<span class="status-pill sp-hold">On hold</span>':'<span class="status-pill sp-open">'+reqStageName(r)+'</span>';
    const track='<div class="stage-track">'+STAGES.map((s,i)=>{var cls="";if(r.status==='Filled')cls="done";else if(r.status==='On hold')cls="";else cls=(i+1<r.stage?'done':i+1===r.stage?'cur':'');return '<div class="stg '+cls+'">'+s+'</div>';}).join("")+'</div>';
    const cur=reqStageName(r);const apps=APPLICATIONS.filter(a=>a.req===r.id);
    const applicants='<div class="subhead" style="margin:14px 0 6px">Internal applicants \u00b7 '+apps.length+' <span style="margin-left:auto;font-weight:500;text-transform:none;letter-spacing:0;color:var(--faint);font-size:11px">tap to review</span></div>'+(apps.length?apps.map(a=>{const e=EMP.find(z=>z.id===a.emp)||{name:a.emp,role:""};return '<div class="flex center gap app-row" data-review="'+a.id+'" style="padding:7px 8px">'+av(e.name,"width:26px;height:26px;font-size:10px")+'<div style="flex:1;min-width:0"><div style="font-weight:600;font-size:12.5px">'+e.name+'</div><div class="small muted">'+e.role+' \u00b7 applied '+a.date+'</div></div>'+appStatusPill(a.status)+'</div>';}).join(""):'<div class="empty" style="padding:10px">No internal applicants yet.</div>');
    return '<div class="req-card"><div class="rtop"><div><div class="rt rt-click" data-jd="'+r.id+'">'+r.title+'</div><div class="rm">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+' \u00b7 Grade '+r.grade+'</div></div><span class="tag '+(r.kind==='replacement'?'tag-rep':'tag-new')+'">'+r.kind+'</span></div>'
    +'<div class="req-tags">'+r.stack.map(s=>'<span class="tag tag-tech">'+s[0]+' \u00b7 '+s[1]+'</span>').join("")+'</div><div class="flex center gap"><div class="small muted" style="flex:1">'+r.note+'</div><button class="btn btn-ghost" style="height:26px;font-size:11px" data-jd="'+r.id+'">View JD</button></div>'+track
    +'<div class="req-edit"><div class="fld"><label>Status</label><select class="inp" data-req-status="'+r.id+'">'+opts.map(o=>'<option '+(o===cur?'selected':'')+'>'+o+'</option>').join("")+'</select></div>'
    +'<div class="fld"><label>Start date</label><input type="date" class="inp" data-req-start="'+r.id+'" value="'+r.start+'"></div>'
    +'<div class="fld"><label>Due date</label><input type="date" class="inp" data-req-due="'+r.id+'" value="'+r.due+'"></div>'
    +'<div class="fld" style="margin-left:auto;align-items:flex-end"><label>&nbsp;</label><div>'+sp+' <span class="small" style="'+(overdue?'color:var(--accent);font-weight:600':'color:var(--muted)')+'">'+(overdue?'Overdue':'Open '+days+'d')+'</span></div></div></div>'
    +applicants+'<div class="flex between center" style="margin-top:10px"><span class="small muted mono">'+r.id+'</span><span class="small muted">Due '+r.due+'</span></div></div>';
  }).join("");
  var reqListTbl='<div class="card"><div class="ctrl-table"><table><thead><tr><th>Position</th><th>Account / Project</th><th>Grade</th><th>Type</th><th>Stage</th><th style="text-align:center">Applicants</th><th>Status</th><th>Due</th></tr></thead><tbody>'+VIS.map(function(r){var apps=APPLICATIONS.filter(function(a){return a.req===r.id;});var sp=r.status==='Filled'?'<span class="status-pill sp-filled">Filled</span>':r.status==='On hold'?'<span class="status-pill sp-hold">On hold</span>':'<span class="status-pill sp-open">'+reqStageName(r)+'</span>';return '<tr class="clk" data-jd="'+r.id+'"><td><div style="font-weight:600;font-size:12.5px">'+r.title+'</div><div class="small mono muted">'+r.id+'</div></td><td class="small">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+'</td><td class="small">'+r.grade+'</td><td><span class="tag '+(r.kind==='replacement'?'tag-rep':'tag-new')+'">'+r.kind+'</span></td><td class="small">'+reqStageName(r)+'</td><td class="mono small" style="text-align:center">'+apps.length+'</td><td>'+sp+'</td><td class="mono small">'+r.due+'</td></tr>';}).join('')+'</tbody></table></div></div>';
  box.innerHTML=recStrip([{l:'Open positions',v:open.length},{l:'Internal applicants',v:APPLICATIONS.length},{l:'Pending review',v:pending,color:'var(--warning-ink)'},{l:'Approved',v:approved,color:'var(--positive-ink)'}])+'<div class="rec-toolbar"><div class="rt-title">Browse &amp; manage open positions'+(_scopeNote?' <span class="small muted" style="font-weight:400;text-transform:none;letter-spacing:0">\u00b7 '+_scopeNote+'</span>':'')+'</div><div class="flex center gap"><div class="seg lc-seg">'+[['board','Board'],['list','List']].map(function(v){return '<button class="'+(reqView===v[0]?'on':'')+'" data-reqview="'+v[0]+'">'+v[1]+'</button>';}).join('')+'</div><button class="btn btn-primary" id="newReqBtn2">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'New requisition</button></div></div>'+(reqView==='list'?reqListTbl:'<div class="grid cols-2">'+cards+'</div>');
  box.querySelectorAll("[data-reqview]").forEach(function(b){b.onclick=function(){reqView=b.dataset.reqview;renderRecruitment();};});
  box.querySelectorAll("[data-req-status]").forEach(sel=>sel.onchange=()=>{const r=REQS.find(x=>x.id===sel.dataset.reqStatus);const v=sel.value;const idx=STAGES.indexOf(v);if(idx>=0){r.stage=idx+1;r.status='Open';}else{r.status=v;}audit("Requisition status changed",r.title,v);renderRecruitment();toast("Requisition updated");});
  box.querySelectorAll("[data-req-start]").forEach(inp=>inp.onchange=()=>{REQS.find(x=>x.id===inp.dataset.reqStart).start=inp.value;renderRecruitment();});
  box.querySelectorAll("[data-req-due]").forEach(inp=>inp.onchange=()=>{REQS.find(x=>x.id===inp.dataset.reqDue).due=inp.value;renderRecruitment();});
  const _nrb=box.querySelector("#newReqBtn2");if(_nrb)_nrb.onclick=openReqForm;
  box.querySelectorAll("[data-review]").forEach(el=>el.onclick=()=>openReview(el.dataset.review));
  box.querySelectorAll("[data-jd]").forEach(b=>b.onclick=()=>openJD(b.dataset.jd));
}
let jobView='board',jobQ='';
function gradeSeniority(g){return {L3:'Mid',L4:'Senior',L5:'Lead'}[g]||'Mid';}
function recForMember(u){
  var sk=(u.skills||[]).map(function(s){return (s.n||'').toLowerCase();});
  return REQS.filter(function(r){return r.status!=='Filled'&&r.status!=='On hold';}).map(function(r){
    var tech=(r.stack||[]).map(function(t){return (t[0]||'').toLowerCase();});
    var m=tech.filter(function(t){return sk.some(function(s){return s&&t.indexOf(s.split(' ')[0])>=0;});}).length;
    if(r.grade==='L'+(u.grade||'').replace(/[^0-9]/g,''))m++;
    return {r:r,m:m};
  }).filter(function(x){return x.m>0;}).sort(function(a,b){return b.m-a.m;}).slice(0,3);
}
function jobCardHtml(r,u,matchN){
  var myApp=APPLICATIONS.find(function(a){return a.req===r.id&&a.emp===u.id&&a.status!=='Withdrawn';});
  var onhold=r.status==='On hold';var following=FOLLOWS.has(r.id);
  var action=onhold?'<span class="status-pill sp-hold">Paused</span>':myApp?'<button class="btn btn-ghost" style="height:32px" data-appdetail="'+myApp.id+'">'+appStatusPill(myApp.status)+'</button>':'<button class="btn btn-primary" style="height:32px" data-apply="'+r.id+'">Apply</button>';
  return '<div class="req-card'+(matchN?' rec-card':'')+'">'+(matchN?'<div class="rec-badge">'+icon('<path d="M12 3l1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2z"/>')+matchN+' skill match'+(matchN>1?'es':'')+'</div>':'')
   +'<div class="rtop"><div><div class="rt rt-click" data-jd="'+r.id+'">'+r.title+'</div><div class="rm">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+' \u00b7 Grade '+r.grade+'</div></div><button class="follow-btn'+(following?' on':'')+'" data-follow="'+r.id+'" title="Follow">'+icon(I.star)+'</button></div>'
   +'<div class="req-tags"><span class="tag '+(r.kind==='replacement'?'tag-rep':'tag-new')+'">'+r.kind+'</span>'+r.stack.map(function(s){return '<span class="tag tag-tech">'+s[0]+' \u00b7 '+s[1]+'</span>';}).join('')+'</div>'
   +'<div class="flex between center" style="margin-top:14px"><button class="btn btn-ghost" style="height:32px;font-size:12px" data-jd="'+r.id+'">View JD</button>'+action+'</div></div>';
}
function jobRowHtml(r,u){
  var myApp=APPLICATIONS.find(function(a){return a.req===r.id&&a.emp===u.id&&a.status!=='Withdrawn';});
  var action=r.status==='On hold'?'<span class="status-pill sp-hold">Paused</span>':myApp?'<button class="btn btn-ghost" style="height:28px;font-size:11px" data-appdetail="'+myApp.id+'">'+appStatusPill(myApp.status)+'</button>':'<button class="btn btn-primary" style="height:28px;font-size:11px" data-apply="'+r.id+'">Apply</button>';
  return '<tr><td><div style="font-weight:600;font-size:12.5px;cursor:pointer" data-jd="'+r.id+'">'+r.title+'</div><div class="small muted mono">'+r.id+'</div></td><td class="small">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+'</td><td class="small">'+r.grade+'</td><td><span class="tag '+(r.kind==='replacement'?'tag-rep':'tag-new')+'">'+r.kind+'</span></td><td class="small muted">'+r.stack.slice(0,2).map(function(s){return s[0];}).join(', ')+'</td><td style="text-align:right">'+action+'</td></tr>';
}
function renderJobBoard(box){
  var u=me();var jobs=REQS.filter(function(r){return r.status!=='Filled';});var myApps=APPLICATIONS.filter(function(a){return a.emp===u.id;});
  var decided=myApps.filter(function(a){return a.status==='Approved'||a.status==='Rejected';});
  var recs=recForMember(u);
  var q=jobQ.toLowerCase();
  var filtered=jobs.filter(function(r){return !q||(r.title+' '+accName(r.acc)+' '+prjName(r.prj)+' '+r.stack.map(function(s){return s[0];}).join(' ')).toLowerCase().indexOf(q)>=0;});
  var banner=decided.length?'<div class="audit-note" style="background:var(--info-soft);color:var(--ink-2);margin-bottom:16px">'+icon('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>')+'<span>You have '+decided.length+' application decision'+(decided.length>1?'s':'')+' \u2014 tap a row below to see the outcome.</span></div>':'';
  var kpis='<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Open roles</span><div class="val">'+jobs.length+'</div><span class="small muted">company-wide</span></div><div class="card kpi"><span class="lbl">Recommended for you</span><div class="val" style="color:var(--primary)">'+recs.length+'</div><span class="small muted">AI skill match</span></div><div class="card kpi"><span class="lbl">My applications</span><div class="val">'+myApps.length+'</div></div><div class="card kpi"><span class="lbl">Approved</span><div class="val" style="color:var(--positive)">'+myApps.filter(function(a){return a.status==='Approved';}).length+'</div></div></div>';
  var myAppsCard=myApps.length?'<div class="card mb"><div class="card-head"><h3>My applications</h3><span class="meta">tap for status history</span></div><div class="card-pad">'+myApps.map(function(a){var r=REQS.find(function(x){return x.id===a.req;});return '<div class="flex center gap app-row" data-appdetail="'+a.id+'" style="padding:9px 8px;border-bottom:1px solid var(--line-2)"><div style="flex:1"><div style="font-weight:600;font-size:13px">'+r.title+'</div><div class="small muted">'+accName(r.acc)+' \u00b7 '+prjName(r.prj)+' \u00b7 applied '+a.date+'</div></div>'+appStatusPill(a.status)+'</div>';}).join('')+'</div></div>':'';
  var recSection=recs.length?'<div class="rec-band"><div class="rec-band-h"><div class="rec-band-spark">'+icon('<path d="M12 3l1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2z"/>')+'</div><div><div class="rec-band-t">Recommended for you</div><div class="rec-band-s">Matched to your skills and grade \u2014 the best stretch fits first</div></div></div><div class="grid jobgrid">'+recs.map(function(x){return jobCardHtml(x.r,u,x.m);}).join('')+'</div></div>':'';
  var toggle='<div class="seg lc-seg">'+[['board','Board'],['list','List']].map(function(v){return '<button class="'+(jobView===v[0]?'on':'')+'" data-jobview="'+v[0]+'">'+v[1]+'</button>';}).join('')+'</div>';
  var search='<div class="srch-mini" style="flex:1;max-width:340px">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input id="jobSearch" placeholder="Search open roles by title, account, skill\u2026" value="'+jobQ.replace(/"/g,'&quot;')+'"></div>';
  var allBody=jobView==='list'
   ?'<div class="ctrl-table"><table><thead><tr><th>Role</th><th>Account / Project</th><th>Grade</th><th>Type</th><th>Skills</th><th></th></tr></thead><tbody>'+(filtered.length?filtered.map(function(r){return jobRowHtml(r,u);}).join(''):'<tr><td colspan="6" class="empty" style="padding:24px">No roles match \u201c'+jobQ+'\u201d.</td></tr>')+'</tbody></table></div>'
   :'<div class="grid jobgrid">'+(filtered.length?filtered.map(function(r){return jobCardHtml(r,u,0);}).join(''):'<div class="card empty" style="padding:40px;grid-column:1/-1">No roles match \u201c'+jobQ+'\u201d.</div>')+'</div>';
  var allSection='<div class="rec-toolbar" style="margin-top:6px">'+search+'<div class="flex center gap">'+toggle+'</div></div>'+allBody;
  box.innerHTML=kpis+banner+myAppsCard+recSection+'<div class="section-title mb" style="margin-top:18px">All open positions <span class="pill">'+filtered.length+' of '+jobs.length+'</span></div>'+allSection;
  box.querySelectorAll('[data-apply]').forEach(function(b){b.onclick=function(){applyOpen(b.dataset.apply);};});
  box.querySelectorAll('[data-jd]').forEach(function(b){b.onclick=function(){openJD(b.dataset.jd);};});
  box.querySelectorAll('[data-appdetail]').forEach(function(b){b.onclick=function(){openAppDetail(b.dataset.appdetail);};});
  box.querySelectorAll('[data-jobview]').forEach(function(b){b.onclick=function(){jobView=b.dataset.jobview;renderRecruitment();};});
  var js2=box.querySelector('#jobSearch');if(js2)js2.oninput=function(){jobQ=js2.value;var p=js2.selectionStart;renderRecruitment();var n=document.getElementById('jobSearch');if(n){n.focus();n.setSelectionRange(p,p);}};
  box.querySelectorAll('[data-follow]').forEach(function(b){b.onclick=function(){var id=b.dataset.follow;var was=FOLLOWS.has(id);if(was)FOLLOWS.delete(id);else FOLLOWS.add(id);renderRecruitment();toast(was?'Removed from following':'Following this role');};});
}
/* ===== TALENT & SKILLS ===== */
let talentCat="all",talentPage=1,talentQ="";const TALENT_PP=8;
const BAND_NAME=["Fresher","Junior","Middle","Senior"];const BAND_COLOR=["#D7DAE5","#9FB0F0","#5B6FE0","#2E2A8F"];
function talentSkills(){
  // aggregate every skill: counts per proficiency band (l1..l4), demand from open reqs, category
  const cov={};
  EMP.filter(e=>e.status!=="offboard").forEach(e=>e.skills.forEach(s=>{
    cov[s.n]=cov[s.n]||{n:s.n,cat:s.c||"Other",b:[0,0,0,0],total:0,senior:0};
    cov[s.n].b[Math.max(1,Math.min(4,s.l))-1]++;cov[s.n].total++;if(s.l>=3)cov[s.n].senior++;}));
  const demand={};REQS.filter(r=>r.status!=="Filled").forEach(r=>(r.stack||[]).forEach(s=>{demand[s[0]]=(demand[s[0]]||0)+1;}));
  Object.values(cov).forEach(c=>{c.dem=demand[c.n]||0;
    if(c.dem>0&&c.senior<c.dem)c.st=["gap-short","Gap"];
    else if(c.dem>0&&c.senior===c.dem)c.st=["gap-tight","Tight"];
    else if(c.senior<=1&&c.total>0)c.st=["gap-tight","Thin"];
    else c.st=["gap-ok","Healthy"];});
  return Object.values(cov);
}
function talentCats(){return [...new Set(talentSkills().map(c=>c.cat))].sort();}
function dashTalentSection(){
  const all=talentSkills();
  const cats=talentCats();
  const demandTotal=all.reduce((s,c)=>s+c.dem,0);
  const gaps=all.filter(c=>c.st[1]==="Gap").length;
  const strip=recStrip([{l:'Skills tracked',v:all.length},{l:'Open skill demand',v:demandTotal,s:'from open reqs'},{l:'Skill gaps',v:gaps,color:'var(--accent-ink)',s:'supply below demand'}]);
  const capMax=Math.max.apply(0,cats.map(ct=>all.filter(c=>c.cat===ct).reduce((s,c)=>s+c.total,0)).concat([1]));
  const capBars=cats.map(cat=>{const tot=all.filter(c=>c.cat===cat).reduce((s,c)=>s+c.total,0);return '<div class="barrow"><span class="nm" title="'+cat+'">'+cat+'</span><div class="track"><div class="fill" style="width:'+(tot/capMax*100)+'%;background:var(--primary)"></div></div><span class="ct">'+tot+'</span></div>';}).join("");
  const merged='<div class="card"><div class="card-head"><h3>Skill inventory</h3><div class="flex center gap"><span class="chip">Category <select id="talentCat"><option value="all" '+(talentCat==="all"?"selected":"")+'>All ('+all.length+')</option>'+cats.map(c=>'<option '+(c===talentCat?"selected":"")+'>'+c+'</option>').join("")+'</select></span><div class="searchbox">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input class="inp" id="talentSearch" placeholder="Search skill\u2026" value="'+talentQ+'"></div></div></div>'
    +'<div class="card-pad" style="padding-bottom:6px"><div class="subhead" style="margin-bottom:9px">Capacity by category <span class="small muted" style="font-weight:400">\u2014 total people holding skills in each area</span></div><div class="cap-grid">'+capBars+'</div></div>'
    +'<div id="talentBody"></div></div>';
  const insTxt=gaps?'<b>'+gaps+'</b> skill'+(gaps===1?'':'s')+' have demand above supply \u2014 cross-train existing holders or hire to close them before they constrain delivery.':'Supply currently meets demand across all tracked skills.';
  const insight='<div class="rep-insight" style="background:var(--warning-soft);color:var(--warning-ink)"><span class="spark-dot"></span><span>'+insTxt+'</span></div>';
  return strip+merged+insight;
}
function viewTalent(){
  const all=talentSkills();
  const cats=talentCats();
  const demandTotal=all.reduce((s,c)=>s+c.dem,0);
  const risks=all.filter(c=>c.senior===1).map(c=>{const h=EMP.find(e=>e.skills.some(s=>s.n===c.n&&s.l>=3));return {skill:c.n,holder:h?h.name:"\u2014"};});
  const gaps=all.filter(c=>c.st[1]==="Gap").length;
  const lead=EMP.map(e=>({n:e.name,e:e.skills.reduce((s,x)=>s+x.e,0)})).sort((a,b)=>b.e-a.e).slice(0,6);
  const leadMax=Math.max.apply(0,lead.map(x=>x.e).concat([1]));
  const kpis=[{lbl:"Skills tracked",val:all.length,c:"--primary"},{lbl:"Open skill demand",val:demandTotal,c:"--teal",sub:"from open reqs"},{lbl:"Skill gaps",val:gaps,c:"--accent",sub:"supply &lt; demand"},{lbl:"Key-person risks",val:risks.length,c:"--warning",sub:"single senior holder"}];
  return ''
  +'<div class="page-head"><div><div class="eyebrow">E-04 \u00b7 Talent &amp; Skills</div><h1>Talent &amp; Skills</h1><p>Skill inventory by category \u2014 how many people hold each skill at Fresher / Junior / Middle / Senior level, the open demand, and the supply-vs-demand status. Pick a category to drill in.</p></div></div>'
  +'<div class="grid kpi-row mb">'+kpis.map(k=>'<div class="card kpi"><span class="lbl">'+k.lbl+'</span><div class="val" style="color:var('+k.c+')">'+k.val+'</div>'+(k.sub?'<span class="small muted">'+k.sub+'</span>':'')+'</div>').join("")+'</div>'
  +'<div class="card mb"><div class="card-head"><h3>Skill inventory</h3><div class="flex center gap"><span class="chip">Category <select id="talentCat"><option value="all" '+(talentCat==="all"?"selected":"")+'>All ('+all.length+')</option>'+cats.map(c=>'<option '+(c===talentCat?"selected":"")+'>'+c+'</option>').join("")+'</select></span><div class="searchbox">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input class="inp" id="talentSearch" placeholder="Search skill\u2026" value="'+talentQ+'"></div></div></div><div id="talentBody"></div></div>'
  +'<div class="grid cols-2-1">'
    +'<div class="card"><div class="card-head"><h3>Capacity by category</h3><span class="meta">people holding skills</span></div><div class="card-pad">'+cats.map(cat=>{const list=all.filter(c=>c.cat===cat);const tot=list.reduce((s,c)=>s+c.total,0);const sen=list.reduce((s,c)=>s+c.senior,0);const max=Math.max.apply(0,talentCats().map(ct=>all.filter(c=>c.cat===ct).reduce((s,c)=>s+c.total,0)).concat([1]));return '<div class="barrow"><span class="nm" title="'+cat+'">'+cat+'</span><div class="track"><div class="fill" style="width:'+(tot/max*100)+'%;background:var(--primary)"></div></div><span class="ct">'+tot+'</span></div>';}).join("")+'<div class="small muted mt">Bar = total skill holdings in that category.</div></div></div>'
    +'<div class="card"><div class="card-head"><h3>Key-person risk</h3><span class="meta">single senior holder</span></div><div class="card-pad">'+(risks.length?risks.slice(0,7).map(r=>'<div class="flex center gap" style="padding:7px 0;border-bottom:1px solid var(--line-2)"><span style="color:var(--accent);flex-shrink:0">'+icon('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>')+'</span><div style="flex:1;min-width:0"><div style="font-weight:600;font-size:12.5px">'+r.skill+'</div><div class="small muted">Only senior: '+r.holder+'</div></div></div>').join("")+'<div class="small muted mt">Bus factor = 1 \u2014 cross-train or hire to de-risk.</div>':'<div class="muted small">No single-point skills in scope.</div>')+'</div></div>'
  +'</div>';
}
function talentRows(){
  const q=talentQ.trim().toLowerCase();
  return talentSkills().filter(c=>(talentCat==="all"||c.cat===talentCat)&&(!q||c.n.toLowerCase().indexOf(q)>=0)).sort((a,b)=>b.total-a.total);
}
function renderTalentTable(){
  const body=document.getElementById("talentBody");if(!body)return;
  const rows=talentRows();const pages=Math.max(1,Math.ceil(rows.length/TALENT_PP));if(talentPage>pages)talentPage=pages;
  const slice=rows.slice((talentPage-1)*TALENT_PP,talentPage*TALENT_PP);
  const cell=(v,bi)=>'<td style="text-align:center"><span class="mono" style="font-weight:'+(bi>=2?'700':'400')+';color:'+(v?(bi>=2?'var(--ink)':'var(--ink-2)'):'var(--faint)')+'">'+(v||'\u00b7')+'</span></td>';
  const tb=slice.map(c=>{
    const bar='<div class="track" style="width:88px;height:8px">'+[0,1,2,3].map(i=>c.b[i]?'<div class="fill" style="width:'+(c.b[i]/c.total*100)+'%;background:'+BAND_COLOR[i]+'"></div>':"").join("")+'</div>';
    return '<tr><td><div style="font-weight:600;font-size:12.5px">'+c.n+'</div><div class="small muted">'+c.cat+'</div></td>'
      +cell(c.b[0],0)+cell(c.b[1],1)+cell(c.b[2],2)+cell(c.b[3],3)
      +'<td>'+bar+'</td>'
      +'<td style="text-align:center"><span class="mono" style="font-weight:600;color:'+(c.dem?'var(--teal)':'var(--faint)')+'">'+(c.dem||'\u00b7')+'</span></td>'
      +'<td><span class="gap-pill '+c.st[0]+'">'+c.st[1]+'</span></td></tr>';}).join("")||'<tr><td colspan="8" class="empty" style="padding:26px">No skills match.</td></tr>';
  body.innerHTML='<div class="tbl-wrap"><table><thead><tr><th>Skill</th><th style="text-align:center">Fresher</th><th style="text-align:center">Junior</th><th style="text-align:center">Middle</th><th style="text-align:center">Senior</th><th>Mix</th><th style="text-align:center">Demand</th><th>Status</th></tr></thead><tbody>'+tb+'</tbody></table></div>'
    +'<div class="flex center gap" style="padding:8px 16px;flex-wrap:wrap">'+BAND_NAME.map((n,i)=>'<div class="it" style="font-size:11px;display:flex;align-items:center;gap:5px"><span style="width:12px;height:12px;border-radius:4px;background:'+BAND_COLOR[i]+'"></span>'+n+'</div>').join("")+'</div>'
    +pagerHtml3(pages,rows.length,talentPage);
  body.querySelectorAll("[data-tpg]").forEach(b=>b.onclick=()=>{talentPage=parseInt(b.dataset.tpg);renderTalentTable();});
}
function pagerHtml3(pages,total,cur){let btns="";for(let i=1;i<=pages;i++)btns+='<button data-tpg="'+i+'" class="'+(i===cur?'cur':'')+'">'+i+'</button>';return '<div class="pager"><span class="pinfo">'+total+' skills \u00b7 page '+cur+' of '+pages+'</span><button data-tpg="'+Math.max(1,cur-1)+'" '+(cur===1?'disabled':'')+'>Prev</button>'+btns+'<button data-tpg="'+Math.min(pages,cur+1)+'" '+(cur===pages?'disabled':'')+'>Next</button></div>';}
/* ===== SMART LIFECYCLE WORKFLOWS ===== */
let lcTab="onboarding",lcOnbSel=null,lcOffSel=null;
const lcDone=new Set();const lcDoneOff=new Set();
const ONB_STEPS=[
 {n:1,phase:"PRE-ONBOARD",step:"Th\u00f4ng b\u00e1o nh\u00e2n s\u1ef1 onboard",pic:"Tuy\u1ec3n d\u1ee5ng",picc:"ow-hr",proc:["G\u1eedi form chu\u1ea9n (template) qua email t\u1edbi [IT email], CC [HR Manager]","IT confirm \u0111\u00e3 nh\u1eadn th\u00f4ng tin"],audit:"",it:true,itlabel:"G\u1eedi form sang IT Portal"},
 {n:2,phase:"PRE-ONBOARD",step:"Chu\u1ea9n b\u1ecb m\u00e1y m\u00f3c",pic:"IT",picc:"ow-it",proc:["Chu\u1ea9n b\u1ecb m\u00e1y + t\u1ea1o t\u00e0i kho\u1ea3n email, Teams","Add v\u00e0o group mail [SETA users]","Th\u00f4ng b\u00e1o x\u00e1c nh\u1eadn ho\u00e0n th\u00e0nh cho HR"],audit:"HR ki\u1ec3m tra: Checklist IT \u0111\u00e3 c\u00e0i m\u00e1y ph\u00f9 h\u1ee3p v\u00e0 \u0111\u1ee7 group mail?",it:true,itlabel:"M\u1edf ticket IT (request m\u00e1y)"},
 {n:3,phase:"PRE-ONBOARD",step:"Chu\u1ea9n b\u1ecb t\u00e0i kho\u1ea3n l\u00e0m vi\u1ec7c",pic:"Tuy\u1ec3n d\u1ee5ng",picc:"ow-hr",proc:["T\u1ea1o profile tr\u00ean Timesheet, Audit Tool, Review Tool","G\u1eedi th\u00f4ng tin t\u00e0i kho\u1ea3n cho Team Leader"],audit:"PMO ki\u1ec3m tra: Profile active tr\u01b0\u1edbc ng\u00e0y D?",it:false},
 {n:4,phase:"PRE-ONBOARD",step:"Chu\u1ea9n b\u1ecb t\u00e0i li\u1ec7u chuy\u00ean m\u00f4n & k\u1ebf ho\u1ea1ch",pic:"Team Leader",picc:"ow-mgr",proc:["Sheet m\u1ee5c ti\u00eau th\u1eed vi\u1ec7c","T\u00e0i li\u1ec7u/link l\u00e0m quen c\u00f4ng vi\u1ec7c","Ph\u00e2n c\u00f4ng buddy/mentor","G\u1eedi x\u00e1c nh\u1eadn s\u1eb5n s\u00e0ng cho HR"],audit:"PMO ki\u1ec3m tra: TL \u0111\u00e3 confirm D-1?",it:false},
 {n:5,phase:"NG\u00c0Y ONBOARD (D)",step:"Onboard v\u1edbi HR",pic:"Tuy\u1ec3n d\u1ee5ng",picc:"ow-hr",proc:["\u0110\u00f3n NV, trao welcome kit","H\u01b0\u1edbng d\u1eabn Timesheet & c\u00e1c tool n\u1ed9i b\u1ed9","Tour gi\u1edbi thi\u1ec7u v\u0103n ph\u00f2ng"],audit:"",it:false},
 {n:6,phase:"NG\u00c0Y ONBOARD (D)",step:"Onboard v\u1edbi team",pic:"Team Leader",picc:"ow-mgr",proc:["Gi\u1edbi thi\u1ec7u team, buddy","Walkthrough c\u00f4ng vi\u1ec7c & tools","G\u1eedi sheet m\u1ee5c ti\u00eau th\u1eed vi\u1ec7c","H\u1ecfi & gi\u1ea3i \u0111\u00e1p"],audit:"",it:false},
 {n:7,phase:"POST-ONBOARD",step:"K\u00fd h\u1ee3p \u0111\u1ed3ng",pic:"HR / C&B",picc:"ow-fin",proc:["G\u1eedi H\u0110TV \u0111\u1ec3 NV k\u00fd","Deadline c\u1ee9ng: D+7","L\u01b0u b\u1ea3n k\u00fd v\u00e0o h\u1ed3 s\u01a1 trong ng\u00e0y"],audit:"",it:false},
 {n:8,phase:"POST-ONBOARD",step:"Thu gi\u1ea5y t\u1edd & th\u00f4ng tin c\u00e1 nh\u00e2n",pic:"HR",picc:"ow-hr",proc:["G\u1eedi form CBNV thu th\u1eadp th\u00f4ng tin c\u01a1 b\u1ea3n ph\u1ee5c v\u1ee5 qu\u1ea3n l\u00fd"],audit:"",it:false},
 {n:9,phase:"POST-ONBOARD",step:"Review th\u1eed vi\u1ec7c",pic:"Team Leader & HR",picc:"ow-mgr",proc:["HR g\u1eedi form \u0111\u00e1nh gi\u00e1 th\u1eed vi\u1ec7c sau 1 v\u00e0 2 th\u00e1ng"],audit:"PMO follow up performance NV m\u1edbi sau 1 & 2 th\u00e1ng",it:false},
 {n:10,phase:"POST-ONBOARD",step:"Th\u00f4ng b\u00e1o pass/fail th\u1eed vi\u1ec7c",pic:"HR",picc:"ow-hr",proc:["G\u1eedi email th\u00f4ng b\u00e1o pass/fail","N\u1ebfu pass: k\u00e8m th\u00f4ng tin \u0111\u0103ng k\u00fd b\u1ea3o hi\u1ec3m"],audit:"",it:false}
];
const OFB_STAGES=["1. Nh\u1eadn th\u00f4ng tin","2. Chu\u1ea9n b\u1ecb","3. Th\u1ef1c hi\u1ec7n","4. Ho\u00e0n t\u1ea5t"];
const ROLE_IC={"ow-hr":'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>',"ow-mgr":'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>',"ow-it":'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',"ow-fin":'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/>'};
const OFB_LANES=[
 {role:"HR",sub:"Nh\u00e2n s\u1ef1",rc:"ow-hr",stages:[["Ti\u1ebfp nh\u1eadn th\u00f4ng tin ngh\u1ec9 vi\u1ec7c (t\u1eeb NV/QL)","X\u00e1c nh\u1eadn ng\u00e0y ngh\u1ec9, l\u00fd do, lo\u1ea1i offboarding"],["Chu\u1ea9n b\u1ecb quy\u1ebft \u0111\u1ecbnh ngh\u1ec9 vi\u1ec7c, thanh l\u00fd H\u0110","Checklist b\u00e0n giao cho NV"],["Ch\u1ed1t c\u00f4ng l\u01b0\u01a1ng & ngh\u0129a v\u1ee5 t\u00e0i ch\u00ednh","In & l\u01b0u h\u1ed3 s\u01a1 nh\u00e2n s\u1ef1"],["X\u00e1c nh\u1eadn ho\u00e0n t\u1ea5t offboarding","L\u01b0u tr\u1eef h\u1ed3 s\u01a1 theo quy \u0111\u1ecbnh"]]},
 {role:"PM / Leader",sub:"Qu\u1ea3n l\u00fd d\u1ef1 \u00e1n",rc:"ow-mgr",stages:[["Nh\u1eadn th\u00f4ng tin & n\u1eafm k\u1ebf ho\u1ea1ch b\u00e0n giao"],["L\u1eadp k\u1ebf ho\u1ea1ch b\u00e0n giao (n\u1ed9i dung, t\u00e0i li\u1ec7u, ng\u01b0\u1eddi nh\u1eadn)","Th\u00f4ng b\u00e1o team & chu\u1ea9n b\u1ecb ng\u01b0\u1eddi nh\u1eadn"],["B\u00e0n giao c\u00f4ng vi\u1ec7c, t\u00e0i li\u1ec7u, t\u00e0i kho\u1ea3n","PM/Leader x\u00e1c nh\u1eadn NV \u0111\u00e3 b\u00e0n giao \u0111\u1ee7"],["X\u00e1c nh\u1eadn ho\u00e0n t\u1ea5t b\u00e0n giao tr\u00ean checklist"]]},
 {role:"IT Helpdesk",sub:"IT",rc:"ow-it",stages:[["Nh\u1eadn th\u00f4ng tin offboarding t\u1eeb HR"],["Chu\u1ea9n b\u1ecb thu h\u1ed3i & v\u00f4 hi\u1ec7u h\u00f3a (x\u00f3a t\u00e0i kho\u1ea3n, quy\u1ec1n truy c\u1eadp)","H\u01b0\u1edbng d\u1eabn NV b\u00e0n giao thi\u1ebft b\u1ecb"],["Thu h\u1ed3i truy c\u1eadp & thi\u1ebft b\u1ecb (h\u1ec7 th\u1ed1ng, email, cloud, VPN)","Nh\u1eadn b\u00e0n giao thi\u1ebft b\u1ecb, license"],["X\u00e1c nh\u1eadn \u0111\u00e3 x\u00f3a t\u00e0i kho\u1ea3n & nh\u1eadn \u0111\u1ee7 thi\u1ebft b\u1ecb"]],it:2},
 {role:"K\u1ebf to\u00e1n",sub:"T\u00e0i ch\u00ednh",rc:"ow-fin",stages:[["Nh\u1eadn th\u00f4ng tin ngh\u1ec9 vi\u1ec7c t\u1eeb HR"],["Chu\u1ea9n b\u1ecb ki\u1ec3m tra t\u00e0i s\u1ea3n (\u0111\u1ed1i chi\u1ebfu danh m\u1ee5c)"],["Audit t\u00e0i s\u1ea3n: ki\u1ec3m tra, \u0111\u1ed1i chi\u1ebfu, x\u00e1c nh\u1eadn \u0111\u00e3 thu h\u1ed3i \u0111\u1ee7"],["X\u00e1c nh\u1eadn ho\u00e0n t\u1ea5t audit t\u00e0i s\u1ea3n"]]}
];
[1,2,3,4,5,6].forEach(n=>lcDone.add("FA-1011|"+n));[1,2,3].forEach(n=>lcDone.add("FA-1029|"+n));
["FA-1016|0|0|0","FA-1016|0|0|1","FA-1016|1|0|0","FA-1016|2|0|0","FA-1016|3|0|0","FA-1016|0|1|0","FA-1016|0|1|1","FA-1016|1|1|0"].forEach(k=>lcDoneOff.add(k));
function addDays(d,n){const x=new Date(d);x.setDate(x.getDate()+n);return x;}
function fmtD(d){return d.toISOString().slice(0,10);}
function daysFromToday(d){return Math.round((new Date(d)-new Date("2026-06-09"))/864e5);}
function milestones(){
  const out=[];const today=new Date("2026-06-09");
  EMP.filter(e=>e.status!=="offboard").forEach(e=>{
    const j=new Date(e.joined);let an=new Date(2026,j.getMonth(),j.getDate());if(an<today)an=new Date(2027,j.getMonth(),j.getDate());
    const yrs=an.getFullYear()-j.getFullYear();
    if(daysFromToday(fmtD(an))<=120&&yrs>0)out.push({type:"Anniversary",tag:"mt-anniv",ic:I.star,person:e,date:fmtD(an),detail:yrs+"-year work anniversary"});
    (e.docs||[]).forEach(d=>{if(d.exp){const dd=daysFromToday(d.exp);if(dd<=120&&dd>=-30)out.push({type:"Doc expiry",tag:"mt-doc",ic:I.doc,person:e,date:d.exp,detail:d.n+" expires"});}});
  });
  EMP.filter(e=>e.status==="probation").forEach(e=>{out.push({type:"Probation end",tag:"mt-prob",ic:I.check,person:e,date:fmtD(addDays(e.joined,90)),detail:"Probation review due"});});
  EMP.filter(e=>e.status==="offboard"&&e.off).forEach(e=>out.push({type:"Offboarding",tag:"mt-off",ic:I.brief,person:e,date:e.off,detail:"Last working day"}));
  return out.sort((a,b)=>new Date(a.date)-new Date(b.date));
}
function openItHandoff(kind,e){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const items=kind==='offboard'?["Disable accounts (email, SSO, Teams)","Revoke access: systems, cloud, VPN","Collect laptop, peripherals, access card","Reclaim software licenses","Archive & wipe data per policy"]:["Provision laptop + peripherals","Create email & Teams account","Add to group mail [SETA users]","VPN & SSO access","Install standard toolset"];
  const title=kind==='offboard'?"IT recovery request":"IT setup request";
  openModal('<div class="modal-h"><div><h3>'+title+'</h3><div class="small muted" style="margin-top:3px">Hand off to IT Service Desk</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b"><div class="field-grid mb"><div class="field"><div class="k">Employee</div><div class="v">'+e.name+'</div></div><div class="field"><div class="k">Role</div><div class="v">'+e.role+'</div></div><div class="field"><div class="k">'+(kind==='offboard'?'Last day':'Start date')+'</div><div class="v mono">'+(kind==='offboard'?(e.off||'\u2014'):e.joined)+'</div></div><div class="field"><div class="k">Requested by</div><div class="v">'+me().name+'</div></div></div>'
   +'<label class="field-k">Items</label><div>'+items.map(it=>'<div class="ctask"><span class="ck done">'+icon(I.check)+'</span><span class="ctt">'+it+'</span></div>').join("")+'</div>'
   +'<div class="small muted mt">Prototype \u2014 in production this opens the IT team\u2019s tool (e.g. IT Service Desk / Jira) with fields pre-filled and links the ticket back to this workflow.</div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="itCancel">Cancel</button><button class="btn btn-primary" id="itGo">Open IT Service Desk \u2197</button></div>');
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#itCancel').onclick=closeModal;w.querySelector('#itGo').onclick=()=>{closeModal();toast("Handed off to IT Service Desk (prototype)","info");};
}
function viewLifecycle(){
  const onb=EMP.filter(e=>e.status==="onboard");const prob=EMP.filter(e=>e.status==="probation");const off=EMP.filter(e=>e.status==="offboard");
  const ms=milestones();
  const kpis=[["In onboarding",onb.length,"--primary"],["On probation",prob.length,"--warning"],["Offboarding",off.length,"--accent"],["Milestones (90d)",ms.filter(m=>daysFromToday(m.date)<=90).length,"--teal"]];
  return ''
  +'<div class="page-head"><div><div class="eyebrow">E-03 \u00b7 Smart Lifecycle Workflows</div><h1>Lifecycle</h1><p>Onboarding, probation, offboarding and milestones \u2014 each step has a PIC, an audit gate, and IT steps hand off to the IT team\u2019s tool.</p></div></div>'
  +'<div class="grid kpi-row mb">'+kpis.map(k=>'<div class="card kpi"><span class="lbl">'+k[0]+'</span><div class="val" style="color:var('+k[2]+')">'+k[1]+'</div></div>').join("")+'</div>'
  +'<div class="seg mb">'+[["onboarding","Onboarding"],["probation","Probation"],["offboarding","Offboarding"],["milestones","Milestones"]].map(t=>'<button class="'+(lcTab===t[0]?'on':'')+'" data-lctab="'+t[0]+'">'+t[1]+'</button>').join("")+'</div>'
  +'<div id="lcBody"></div>';
}
function renderLC(){
  const body=document.getElementById("lcBody");if(!body)return;
  if(lcTab==="onboarding"){
    const onb=EMP.filter(e=>e.status==="onboard");
    if(!onb.some(e=>e.id===lcOnbSel))lcOnbSel=onb.length?onb[0].id:null;
    const e=onb.find(x=>x.id===lcOnbSel);
    if(!e){body.innerHTML='<div class="card empty">No one is currently onboarding.</div>';return;}
    const doneN=ONB_STEPS.filter(s=>lcDone.has(e.id+"|"+s.n)).length;const pct=Math.round(doneN/ONB_STEPS.length*100);
    const phases=["PRE-ONBOARD","NG\u00c0Y ONBOARD (D)","POST-ONBOARD"];
    const sel='<div class="toolbar"><span class="chip">'+icon('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>')+' New joiner <select id="lcOnbSel">'+onb.map(o=>'<option value="'+o.id+'" '+(o.id===lcOnbSel?'selected':'')+'>'+o.name+'</option>').join("")+'</select></span><span class="chip">Joined '+e.joined+'</span><span class="chip">'+(e.acc?accName(e.acc):e.dept)+'</span></div>';
    const steps=phases.map(ph=>{const ps=ONB_STEPS.filter(s=>s.phase===ph);return '<div class="phase-head">'+ph+'</div>'+ps.map(s=>{const key=e.id+"|"+s.n;const done=lcDone.has(key);return '<div class="step-card '+(done?'done':'')+'"><div class="step-num">'+s.n+'</div><div class="step-main"><div class="step-top"><span class="step-title">'+s.step+'</span><span class="owner-pill '+s.picc+'">PIC \u00b7 '+s.pic+'</span><label style="margin-left:auto;display:flex;align-items:center;gap:7px;cursor:pointer;font-size:11.5px;color:var(--muted)"><span class="ck '+(done?'done':'')+'" data-onb="'+key+'">'+icon(I.check)+'</span>'+(done?'Done':'Mark done')+'</label></div><ul class="proc">'+s.proc.map(p=>'<li>'+p+'</li>').join("")+'</ul>'+(s.audit?'<div class="audit-note">'+icon('<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>')+'<span><b>Audit</b> \u00b7 '+s.audit+'</span></div>':'')+(s.it?'<div><button class="it-btn" data-itonb="'+s.n+'">'+icon('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>')+' '+s.itlabel+' \u2197</button></div>':'')+'</div></div>';}).join("");}).join("");
    const phaseProg=phases.map(ph=>{const ps=ONB_STEPS.filter(s=>s.phase===ph);const d=ps.filter(s=>lcDone.has(e.id+"|"+s.n)).length;return '<div class="barrow"><span class="nm" style="width:140px">'+ph+'</span><div class="track"><div class="fill" style="width:'+(d/ps.length*100)+'%;background:var(--primary)"></div></div><span class="ct">'+d+'/'+ps.length+'</span></div>';}).join("");
    body.innerHTML='<div class="grid cols-2-1"><div class="card"><div class="card-head"><h3>Onboarding \u00b7 '+e.name+'</h3><span class="meta">'+doneN+' / '+ONB_STEPS.length+' steps</span></div><div class="card-pad">'+sel+steps+'</div></div>'
      +'<div><div class="card mb"><div class="card-head"><h3>Completion</h3></div><div class="card-pad"><div class="progress-ring mb"><svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="#23252a" stroke-width="3.4"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#2F9E76" stroke-width="3.4" stroke-dasharray="'+pct+' 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg><div><div style="font-family:\'Geist\';font-size:24px;font-weight:600">'+pct+'%</div><div class="small muted">'+doneN+' of '+ONB_STEPS.length+' steps</div></div></div>'+phaseProg+'</div></div>'
      +'<div class="card"><div class="card-pad"><div class="subhead" style="margin-top:0">IT integration</div><div class="small muted">Steps 1\u20132 hand off to the IT team\u2019s tool for machine & account provisioning. Tap the blue button on those steps.</div></div></div></div></div>';
    body.querySelectorAll("[data-onb]").forEach(ck=>ck.onclick=()=>{const k=ck.dataset.onb;if(lcDone.has(k))lcDone.delete(k);else lcDone.add(k);renderLC();});
    body.querySelectorAll("[data-itonb]").forEach(b=>b.onclick=()=>openItHandoff('onboard',e));
    const s=document.getElementById("lcOnbSel");if(s)s.onchange=()=>{lcOnbSel=s.value;renderLC();};
  } else if(lcTab==="probation"){
    const prob=EMP.filter(e=>e.status==="probation");
    const vp={Pass:"st-active",Extend:"st-onboard",Fail:"st-leave"};
    body.innerHTML='<div class="card tbl-wrap"><div class="card-head"><h3>Probation tracking</h3><span class="meta">30 / 60 / 90-day checkpoints \u00b7 record the outcome</span></div><table><thead><tr><th>Employee</th><th>Reviewer (EM)</th><th>Start</th><th>Review due</th><th>30d</th><th>60d</th><th>90d</th><th>Outcome</th></tr></thead><tbody>'
      +(prob.length?prob.map(e=>{const end=fmtD(addDays(e.joined,90));const cp=n=>{const d=fmtD(addDays(e.joined,n));return daysFromToday(d)<0?'<span class="pill-status st-active"><span class="d"></span>Done</span>':'<span class="pill-status st-onboard"><span class="d"></span>'+d.slice(5)+'</span>';};const v=PROB_VERDICT[e.id];const outcome=v?'<span class="pill-status '+(vp[v.verdict]||'st-active')+'"><span class="d"></span>'+v.verdict+'</span><div class="small muted" style="margin-top:3px">'+v.by+' \u00b7 '+v.ts.slice(0,10)+'</div>':'<div class="act-btns"><button class="btn btn-ghost" style="height:28px;font-size:11.5px" data-prob="'+e.id+'|Pass">Pass</button><button class="btn btn-ghost" style="height:28px;font-size:11.5px" data-prob="'+e.id+'|Extend">Extend</button><button class="btn btn-ghost" style="height:28px;font-size:11.5px;color:var(--accent)" data-prob="'+e.id+'|Fail">Fail</button></div>';return '<tr><td><div class="cellname">'+av(e.name,"width:30px;height:30px;font-size:11px")+'<div><div class="t1">'+e.name+'</div><div class="t2">'+e.role+'</div></div></div></td><td>'+mgrName(e.mgr)+'</td><td class="mono small">'+e.joined+'</td><td class="mono small">'+end+'</td><td>'+cp(30)+'</td><td>'+cp(60)+'</td><td>'+cp(90)+'</td><td>'+outcome+'</td></tr>';}).join(""):'<tr><td colspan="8" class="empty" style="padding:30px">No one on probation.</td></tr>')
      +'</tbody></table></div><div class="small muted mt">Recording a probation outcome updates the employee record and is written to the audit log. This is the single source of truth for the onboarding "Review thử việc" step.</div>';
    body.querySelectorAll("[data-prob]").forEach(b=>b.onclick=()=>{const[id,verdict]=b.dataset.prob.split("|");const e=EMP.find(x=>x.id===id);confirmAction("Record probation outcome?","Mark "+e.name+" as <b>"+verdict+"</b>. This updates their status and is logged.",verdict,()=>{PROB_VERDICT[id]={verdict:verdict,by:me().name,ts:nowTs()};if(verdict==="Pass")e.status="active";audit("Probation outcome recorded",e.name,verdict);renderLC();toast("Probation: "+verdict+" recorded");},verdict==="Fail");});
  } else if(lcTab==="offboarding"){
    const off=EMP.filter(e=>e.status==="offboard");
    if(!off.length){body.innerHTML='<div class="card empty">No active offboarding.</div>';return;}
    if(!off.some(e=>e.id===lcOffSel))lcOffSel=off[0].id;
    const e=off.find(x=>x.id===lcOffSel);
    let total=0,doneT=0;
    OFB_LANES.forEach((ln,li)=>ln.stages.forEach((st,si)=>st.forEach((t,ti)=>{total++;if(lcDoneOff.has(e.id+"|"+li+"|"+si+"|"+ti))doneT++;})));
    const ot=offType(e);
    const sel='<div class="toolbar"><span class="chip">'+icon(I.brief)+' Leaver <select id="lcOffSel">'+off.map(o=>'<option value="'+o.id+'" '+(o.id===lcOffSel?'selected':'')+'>'+o.name+'</option>').join("")+'</select></span><span class="chip">Last day '+e.off+'</span><span class="chip">'+doneT+'/'+total+' tasks</span><span class="seg" style="margin-left:auto"><button class="'+(ot==="voluntary"?"on":"")+'" data-offtype="voluntary">Voluntary</button><button class="'+(ot==="involuntary"?"on":"")+'" data-offtype="involuntary">Involuntary</button></span></div>';
    const invBanner=ot==="involuntary"?'<div class="audit-note" style="background:var(--accent-soft);color:#9c3340;margin:0 0 12px">'+icon('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>')+'<span><b>Involuntary exit.</b> IT access is revoked immediately (not on the last day); IT recovery and the PMO audit are expedited.</span></div>':'';
    let grid='<div class="swim"><div class="sh" style="background:transparent"></div>'+OFB_STAGES.map(s=>'<div class="sh">'+s+'</div>').join("");
    OFB_LANES.forEach((ln,li)=>{grid+='<div class="lane-h"><div class="role-dot '+ln.rc+'">'+icon(ROLE_IC[ln.rc])+'</div><div><div>'+ln.role+'</div><div class="small muted" style="font-weight:400">'+ln.sub+'</div></div></div>';
      ln.stages.forEach((st,si)=>{grid+='<div class="cell">'+st.map((t,ti)=>{const k=e.id+"|"+li+"|"+si+"|"+ti;const dn=lcDoneOff.has(k);return '<div class="ctask '+(dn?'cdone':'')+'"><span class="ck '+(dn?'done':'')+'" data-off="'+k+'">'+icon(I.check)+'</span><span class="ctt">'+t+'</span></div>';}).join("")+(ln.it===si?'<button class="it-btn" data-itoff="1" style="margin-top:6px">'+icon('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>')+' Thu h\u1ed3i qua IT tool \u2197</button>':'')+'</div>';});});
    grid+='</div>';
    const audits=[['1. PM/Leader x\u00e1c nh\u1eadn b\u00e0n giao','ow-mgr',['NV \u0111\u00e3 b\u00e0n giao \u0111\u1ee7 c\u00f4ng vi\u1ec7c, t\u00e0i li\u1ec7u, d\u1ef1 \u00e1n, t\u00e0i kho\u1ea3n'],'PMO AUDIT'],['2. IT Helpdesk & b\u00e0n giao thi\u1ebft b\u1ecb','ow-it',['\u0110\u00e3 x\u00f3a t\u1ea5t c\u1ea3 t\u00e0i kho\u1ea3n & quy\u1ec1n truy c\u1eadp','\u0110\u00e3 thu h\u1ed3i \u0111\u1ee7 thi\u1ebft b\u1ecb, ph\u1ee5 ki\u1ec7n, license','D\u1eef li\u1ec7u nh\u1ea1y c\u1ea3m \u0111\u00e3 x\u1eed l\u00fd'],'PMO AUDIT'],['3. K\u1ebf to\u00e1n audit t\u00e0i s\u1ea3n','ow-fin',['Thi\u1ebft b\u1ecb, t\u00e0i s\u1ea3n \u0111\u00e3 thu h\u1ed3i \u0111\u1ee7','Kh\u00f4ng c\u00f2n t\u00e0i s\u1ea3n \u0111ang n\u1ee3','Ho\u00e0n t\u1ea5t ngh\u0129a v\u1ee5 t\u00e0i ch\u00ednh'],'K\u1ebe TO\u00c1N AUDIT']];
    const auditHtml='<div class="grid cols-3 mt">'+audits.map(a=>'<div class="audit-box"><div class="ah"><div class="role-dot '+a[1]+'" style="width:24px;height:24px">'+icon(ROLE_IC[a[1]])+'</div>'+a[0]+'</div><ul>'+a[2].map(x=>'<li>'+x+'</li>').join("")+'</ul><span class="pmo">'+a[3]+'</span></div>').join("")+'</div>';
    const banner=doneT===total?'<div class="done-banner">'+icon(I.check)+' OFFBOARDING HO\u00c0N T\u1ea4T \u2014 t\u1ea5t c\u1ea3 c\u00e1c b\u00ean x\u00e1c nh\u1eadn ho\u00e0n t\u1ea5t \u00b7 l\u01b0u tr\u1eef h\u1ed3 s\u01a1 \u00b7 quy tr\u00ecnh k\u1ebft th\u00fac</div>':'<div class="small muted mt" style="text-align:center">'+(total-doneT)+' task c\u00f2n l\u1ea1i tr\u01b0\u1edbc khi offboarding ho\u00e0n t\u1ea5t</div>';
    body.innerHTML='<div class="card"><div class="card-head"><h3>Offboarding \u00b7 '+e.name+'</h3><span class="meta">'+e.role+' \u00b7 last day '+e.off+'</span></div><div class="card-pad">'+sel+invBanner+'<div class="swim-wrap">'+grid+'</div>'+auditHtml+banner+'<div class="small muted mt">Records retained until '+fmtD(addDays(e.off,365*3))+' (3-year retention), then scheduled for deletion per data policy.</div></div></div>';
    body.querySelectorAll("[data-off]").forEach(ck=>ck.onclick=()=>{const k=ck.dataset.off;if(lcDoneOff.has(k))lcDoneOff.delete(k);else lcDoneOff.add(k);renderLC();});
    body.querySelectorAll("[data-itoff]").forEach(b=>b.onclick=()=>openItHandoff('offboard',e));
    body.querySelectorAll("[data-offtype]").forEach(b=>b.onclick=()=>{e.offType=b.dataset.offtype;audit("Offboarding type set",e.name,b.dataset.offtype);renderLC();toast("Offboarding marked "+b.dataset.offtype);});
    const s=document.getElementById("lcOffSel");if(s)s.onchange=()=>{lcOffSel=s.value;renderLC();};
  } else {
    const ms=milestones();
    const msOwner=m=>m.tag==="mt-prob"?mgrName(m.person.mgr):m.tag==="mt-off"?"IT Helpdesk + HR":"HR";
    const rows=ms.length?ms.map((m,i)=>{const dd=daysFromToday(m.date);const od=dd<0;const crit=(/visa|permit|contract/i).test(m.detail);return '<div class="ms-row"><div class="ms-ic '+m.tag+'">'+icon(m.ic)+'</div>'+av(m.person.name,"width:30px;height:30px;font-size:11px")+'<div style="min-width:0"><div style="font-weight:600;font-size:13px">'+m.person.name+(crit?' <span class="ms-tag mt-doc">compliance</span>':'')+'</div><div class="small muted">'+m.detail+' \u00b7 owner: '+msOwner(m)+'</div></div><div class="ms-when"><span class="ms-tag '+m.tag+'">'+m.type+'</span><div class="small mono" style="margin-top:4px;'+(od?'color:var(--accent);font-weight:600':'color:var(--muted)')+'">'+m.date+' \u00b7 '+(od?Math.abs(dd)+'d ago':'in '+dd+'d')+'</div></div><button class="btn btn-ghost" style="height:30px;font-size:11.5px;margin-left:10px" data-remind="'+i+'">Remind</button></div>';}).join(""):'<div class="muted small">No upcoming milestones.</div>';
    // owner workload (task routing)
    const load={HR:0,IT:0,Finance:0,EM:0};
    EMP.filter(e=>e.status==="onboard").forEach(e=>ONB_STEPS.forEach(s=>{if(!lcDone.has(e.id+"|"+s.n)){const b=s.pic.indexOf("IT")>=0?"IT":s.pic.indexOf("C&B")>=0?"Finance":(s.pic.indexOf("Team Leader")>=0||s.pic.indexOf("EM")>=0)?"EM":"HR";load[b]++;}}));
    EMP.filter(e=>e.status==="offboard").forEach(e=>OFB_LANES.forEach((ln,li)=>ln.stages.forEach((st,si)=>st.forEach((t,ti)=>{if(!lcDoneOff.has(e.id+"|"+li+"|"+si+"|"+ti)){const b=ln.rc==="ow-it"?"IT":ln.rc==="ow-fin"?"Finance":ln.rc==="ow-mgr"?"EM":"HR";load[b]++;}}))));
    const loadCard='<div class="card"><div class="card-head"><h3>Open tasks by owner</h3><span class="meta">across active workflows</span></div><div class="card-pad">'+Object.keys(load).map(o=>'<div class="flex between center" style="padding:9px 0;border-bottom:1px solid var(--line-2)"><span class="owner-pill '+({HR:"ow-hr",IT:"ow-it",Finance:"ow-fin",EM:"ow-mgr"}[o])+'">'+o+'</span><span style="font-weight:600;font-size:13px">'+load[o]+' open</span><button class="btn btn-ghost" style="height:28px;font-size:11.5px" data-remindowner="'+o+'">Nudge</button></div>').join("")+'<div class="small muted mt">In production each task is assigned to the named PIC with due-date reminders; this is the consolidated queue.</div></div></div>';
    body.innerHTML='<div class="grid cols-2-1"><div class="card"><div class="card-head"><h3>Upcoming milestones</h3><span class="meta">next 120 days</span></div><div class="card-pad">'+rows+'</div></div>'+loadCard+'</div>';
    body.querySelectorAll("[data-remind]").forEach(b=>b.onclick=()=>{const m=ms[+b.dataset.remind];audit("Milestone reminder sent",m.person.name,m.type);toast("Reminder sent to "+msOwner(m),"info");});
    body.querySelectorAll("[data-remindowner]").forEach(b=>b.onclick=()=>{toast("Nudge sent to "+b.dataset.remindowner+" team","info");});
  }
}
/* ===== PROFILE DRAWER ===== */
function openProfile(id){
  return; /* personal profile view disabled — contains sensitive PII (salary, bank, tax) */
  const e=EMP.find(x=>x.id===id);if(!e)return;drawerEmp=id;
  const d=document.getElementById("drawer");
  const mgr=EMP.find(x=>x.id===e.mgr);
  const hasScore=e.scorecards&&e.scorecards.length;
  const dobShown=canSeeSensitive(id)?e.dob:'<span class="masked">'+icon('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>')+'Restricted</span>';
  d.innerHTML=''
  +'<div class="drawer-head"><div class="drawer-top"><div class="drawer-id">'+av(e.name,"width:62px;height:62px;font-size:22px")+'<div><h2>'+e.name+'</h2><div class="rl">'+e.role+'</div>'+statusPill(e.status)+'</div></div><div class="flex center gap">'+((fullAccess()||id===CURRENT[persona])?'<button class="btn btn-ghost" id="editProfileBtn" style="height:32px;font-size:12px">'+icon('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"/>')+'Edit profile</button>':'')+'<button class="drawer-close" id="drawerClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div></div><div class="flex gap wrap small muted"><span class="mono">'+e.id+'</span><span>\u00b7</span><span>'+(e.acc?accName(e.acc):e.dept)+(e.prj?' \u00b7 '+prjName(e.prj):'')+'</span><span>\u00b7</span><span>Grade '+e.grade+'</span><span>\u00b7</span><span>Joined '+e.joined+'</span></div></div>'
  +'<div class="tabs"><button class="tab on" data-tab="overview">Overview</button><button class="tab" data-tab="docs">Documents</button><button class="tab" data-tab="skills">Skills</button>'+(hasScore?'<button class="tab" data-tab="score">Scorecard</button>':'')+'<button class="tab" data-tab="history">History</button></div>'
  +'<div class="drawer-body">'
    +'<div class="tabpane on" data-pane="overview">'
      +'<div class="subhead">Contact</div><div class="field-grid"><div class="field"><div class="k">Work email</div><div class="v">'+e.email+'</div></div><div class="field"><div class="k">Phone</div><div class="v">'+e.phone+'</div></div><div class="field"><div class="k">Location</div><div class="v">'+e.loc+'</div></div><div class="field"><div class="k">Gender</div><div class="v">'+e.gender+'</div></div></div>'
      +'<div class="subhead">Engagement</div><div class="field-grid"><div class="field"><div class="k">Account</div><div class="v">'+(e.acc?accName(e.acc):'\u2014')+'</div></div><div class="field"><div class="k">Project</div><div class="v">'+(e.prj?prjName(e.prj):'\u2014')+'</div></div><div class="field"><div class="k">Direct manager</div><div class="v">'+(mgr?mgr.name:'\u2014')+'</div></div><div class="field"><div class="k">Employment type</div><div class="v">'+e.type+'</div></div></div>'
      +'<div class="subhead">Lifecycle</div><div class="field-grid"><div class="field"><div class="k">Onboarding date</div><div class="v mono">'+e.joined+'</div></div><div class="field"><div class="k">Offboarding date</div><div class="v '+(e.off?'mono':'')+'">'+(e.off||'\u2014')+'</div></div><div class="field"><div class="k">Job grade</div><div class="v mono">'+e.grade+'</div></div><div class="field"><div class="k">Date of birth</div><div class="v">'+dobShown+'</div></div></div>'
      +'<div class="subhead">Compensation &amp; banking <span style="margin-left:auto;font-weight:500;text-transform:none;letter-spacing:0;color:var(--faint);font-size:11px">'+(canSeeSensitive(id)?'Visible':'Masked for '+PERSONA_LABEL[persona])+'</span></div><div class="field-grid"><div class="field"><div class="k">Salary</div><div class="v">'+maskField(e.salary)+'</div></div><div class="field"><div class="k">Bank account</div><div class="v">'+maskField(e.bank)+'</div></div><div class="field"><div class="k">Tax ID</div><div class="v">'+maskField(e.tax)+'</div></div><div class="field"><div class="k">RBAC note</div><div class="v small muted" style="font-weight:400">Enforced at API level</div></div></div>'
    +'</div>'
    +'<div class="tabpane" data-pane="docs"><div class="subhead">Document vault <span style="margin-left:auto;font-weight:500;text-transform:none;letter-spacing:0;color:var(--faint);font-size:11px">AES-256 \u00b7 access-controlled</span></div>'+e.docs.map(doc=>{let warn="";if(doc.exp){const days=Math.round((new Date(doc.exp)-new Date("2026-06-09"))/864e5);if(days<30)warn='<span class="mono small" style="color:var(--accent);font-weight:600">Expires in '+days+'d</span>';else if(days<90)warn='<span class="mono small" style="color:var(--warning);font-weight:600">Expires in '+days+'d</span>';else warn='<span class="small muted">Valid to '+doc.exp+'</span>';}else warn='<span class="small muted">No expiry</span>';return '<div class="doc"><div class="di">'+icon(I.doc)+'</div><div><div class="dn">'+doc.n+'</div><div class="dm">'+doc.t+' \u00b7 uploaded '+doc.age+'</div></div><div class="dr">'+warn+'</div></div>';}).join("")+'<div class="small muted mt">Uploading a new version archives the previous one \u2014 nothing is permanently deleted until the retention policy applies.</div></div>'
    +'<div class="tabpane" data-pane="skills"><div class="subhead">Skills &amp; endorsements</div>'+(e.skills.length?e.skills.map(s=>'<div class="skill-row"><div class="sn">'+s.n+' <span class="cat">\u00b7 '+s.c+'</span></div><div class="lvl">'+[1,2,3,4].map(i=>'<span class="seg2 '+(i<=s.l?'on':'')+'"></span>').join("")+'</div><div class="endorse">'+icon(I.star)+' '+s.e+'</div></div>').join(""):'<div class="muted small">No skills recorded.</div>')+'<div class="small muted mt">Proficiency: Beginner / Intermediate / Advanced / Expert \u00b7 '+icon(I.star)+' = peer + manager endorsements</div></div>'
    +(hasScore?'<div class="tabpane" data-pane="score"><div class="subhead">Monthly scorecards</div>'+e.scorecards.slice().reverse().map(s=>'<div class="fb"><div class="fh"><span class="fm">'+s.m+' \u00b7 '+s.overall.toFixed(1)+'/5</span><span class="small muted">'+s.by+'</span></div><div class="fnote">'+s.note+'</div></div>').join("")+'</div>':'')
    +'<div class="tabpane" data-pane="history"><div class="subhead">Field-level version history</div>'+(e.hist.length?'<div class="timeline">'+e.hist.map(h=>'<div class="tl"><div class="when mono">'+h.w+'</div><div class="what">'+h.a+'</div><div class="who">'+h.by+'</div>'+(h.f&&h.t?'<div class="chg"><span class="old">'+h.f+'</span>'+icon('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>')+'<span class="new">'+h.t+'</span></div>':'')+'</div>').join("")+'</div>':'<div class="muted small">No changes recorded.</div>')+'<div class="small muted mt">Immutable audit log \u00b7 every write records actor, timestamp (UTC), and before/after state.</div></div>'
  +'</div>';
  d.querySelector("#drawerClose").onclick=closeProfile;
  const epb=d.querySelector("#editProfileBtn");if(epb)epb.onclick=()=>openProfileEdit(id);
  d.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{d.querySelectorAll(".tab").forEach(x=>x.classList.remove("on"));d.querySelectorAll(".tabpane").forEach(x=>x.classList.remove("on"));t.classList.add("on");d.querySelector('[data-pane="'+t.dataset.tab+'"]').classList.add("on");});
  document.getElementById("scrim").classList.add("show");d.classList.add("show");
}
let EMP_SEQ=1031;
function openOnboardForm(){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  openModal('<div class="modal-h"><div><h3>Onboard new member</h3><div class="small muted" style="margin-top:3px">HR creates the account &amp; uploads CV \u2192 member logs in and completes their own profile.</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="evalForm"><div class="audit-note" style="margin-bottom:12px">'+icon('<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>')+'<span>HR fills the essentials here. The member self-updates personal details on first login (MoM 1.3).</span></div>'
   +'<div class="field-grid"><div><label class="field-k">Full name</label><input class="inp" id="obName" placeholder="e.g. Nguyen Van A"></div><div><label class="field-k">Work email</label><input class="inp" id="obEmail" placeholder="a.nguyen@futureapp.io"></div><div><label class="field-k">Role title</label><input class="inp" id="obRole" placeholder="e.g. Backend Engineer"></div><div><label class="field-k">Department</label><select class="inp" id="obDept"><option>Engineering</option><option>QA</option><option>Business</option><option>Delivery</option><option>PMO</option></select></div><div><label class="field-k">Job grade</label><select class="inp" id="obGrade"><option>L1</option><option>L3</option><option selected>L4</option><option>L5</option></select></div><div><label class="field-k">Employment type</label><select class="inp" id="obType"><option>Full-Time</option><option>Intern</option><option>Contractor</option></select></div></div>'
   +'<div class="subhead">Account / Project &amp; Manager <span style="margin-left:auto;font-weight:500;text-transform:none;letter-spacing:0;color:var(--faint);font-size:11px">admin-only fields</span></div>'
   +'<div class="field-grid"><div><label class="field-k">Account</label><select class="inp" id="obAcc"><option value="">\u2014 unassigned</option>'+ACCOUNTS.map(a=>'<option value="'+a.id+'">'+a.name+'</option>').join("")+'</select></div><div><label class="field-k">Project</label><select class="inp" id="obPrj"><option value="">\u2014 unassigned</option>'+PROJECTS.map(p=>'<option value="'+p.id+'">'+p.name+'</option>').join("")+'</select></div><div><label class="field-k">Direct manager</label><select class="inp" id="obMgr"><option value="">\u2014 set later (triggers Org Chart)</option>'+EMP.filter(z=>z.dept!=="Executive").map(z=>'<option value="'+z.id+'">'+z.name+'</option>').join("")+'</select></div></div>'
   +'<div class="subhead">CV upload</div><label class="upload-zone" id="obCvZone" style="display:flex;align-items:center;gap:10px;border:1.5px dashed var(--line);border-radius:10px;padding:14px;cursor:pointer">'+icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')+'<span id="obCvLabel" class="small muted">Click to upload CV (PDF/DOCX) \u2014 stored in the document vault</span><input type="file" id="obCv" accept=".pdf,.doc,.docx" style="display:none"></label>'
   +'<div class="audit-note" style="margin-top:12px;background:var(--info-soft);color:var(--ink-2)">'+icon('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>')+'<span><b>MS365 sync:</b> on save, a request is sent to provision the Teams/MS365 user. Once Direct Manager is set, the Org Chart auto-updates (MoM 2.2).</span></div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="obCancel">Cancel</button><button class="btn btn-primary" id="obSave">Create account &amp; send invite</button></div>');
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#obCancel').onclick=closeModal;
  const cv=w.querySelector('#obCv');w.querySelector('#obCvZone').onclick=()=>cv.click();
  cv.onchange=()=>{if(cv.files[0])w.querySelector('#obCvLabel').innerHTML='<span style="color:var(--positive);font-weight:600">'+cv.files[0].name+'</span> \u2014 ready to attach';};
  w.querySelector('#obSave').onclick=()=>{
    const name=w.querySelector('#obName').value.trim();if(!name){toast("Full name is required","warn");return;}
    const email=w.querySelector('#obEmail').value.trim()||name.toLowerCase().replace(/[^a-z ]/g,"").split(" ").reverse().join(".")+"@futureapp.io";
    const id="FA-"+(EMP_SEQ++);const acc=w.querySelector('#obAcc').value||null;const prj=w.querySelector('#obPrj').value||null;const mgr=w.querySelector('#obMgr').value||null;
    const cvName=cv.files[0]?cv.files[0].name:null;
    const ne={id:id,name:name,role:w.querySelector('#obRole').value||"New joiner",dept:w.querySelector('#obDept').value,loc:"Hanoi, VN",type:w.querySelector('#obType').value,gender:"\u2014",status:"onboard",grade:w.querySelector('#obGrade').value,mgr:mgr,acc:acc,prj:prj,email:email,phone:"\u2014",joined:"2026-06-11",off:null,salary:"\u2014",bank:"\u2014",tax:"\u2014",dob:"\u2014",tech:[],skills:[],docs:cvName?[{n:cvName,t:"CV",exp:null,age:"just now"}]:[],hist:[{w:nowTs()+" UTC",a:"Account created by HR \u2014 onboarding started",by:me().name+" (Admin)",f:"\u2014",t:"Onboarding"}]};
    EMP.push(ne);
    audit("Member account created",name,id+" \u00b7 MS365 user requested"+(mgr?" \u00b7 Org Chart updated":" \u00b7 awaiting Direct Manager"));
    closeModal();render("employees");
    toast("Account created \u2014 "+name+" \u00b7 MS365 invite sent"+(cvName?" \u00b7 CV attached":""),"ok");
    if(mgr)setTimeout(()=>toast("Direct Manager set \u2192 Org Chart updated","info"),900);
  };
}
function openImportForm(){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const cols=["Employee ID","Full name","Email","Role","Department","Grade","Account","Project","Direct manager","Join date"];
  openModal('<div class="modal-h"><div><h3>Import existing employees</h3><div class="small muted" style="margin-top:3px">Bulk-load pre-go-live staff from the standard Excel template (MoM 1.2).</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="evalForm"><div class="subhead" style="margin-top:0">Required columns</div><div class="flex gap" style="flex-wrap:wrap">'+cols.map(c=>'<span class="tag tag-tech">'+c+'</span>').join("")+'</div>'
   +'<label class="upload-zone" id="imZone" style="display:flex;align-items:center;gap:10px;border:1.5px dashed var(--line);border-radius:10px;padding:18px;cursor:pointer;margin-top:14px">'+icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')+'<span id="imLabel" class="small muted">Click to upload the filled Excel template (.xlsx / .csv)</span><input type="file" id="imFile" accept=".xlsx,.xls,.csv" style="display:none"></label>'
   +'<div class="audit-note" style="margin-top:12px">'+icon('<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>')+'<span>Fields map to the People schema. Rows with a missing required column are skipped and reported. Manager / account / project remain admin-controlled after import.</span></div>'
   +'<div id="imPreview"></div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="imCancel">Cancel</button><button class="btn btn-primary" id="imGo" disabled>Import</button></div>');
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#imCancel').onclick=closeModal;
  const f=w.querySelector('#imFile');w.querySelector('#imZone').onclick=()=>f.click();
  f.onchange=()=>{if(f.files[0]){w.querySelector('#imLabel').innerHTML='<span style="color:var(--positive);font-weight:600">'+f.files[0].name+'</span>';const n=8+Math.floor(Math.random()*10);w.querySelector('#imPreview').innerHTML='<div class="subhead">Preview</div><div class="small muted">Detected <b>'+n+'</b> valid rows ready to import \u00b7 0 errors.</div>';w.querySelector('#imGo').disabled=false;w.querySelector('#imGo').dataset.n=n;}};
  w.querySelector('#imGo').onclick=()=>{const n=+w.querySelector('#imGo').dataset.n||0;audit("Employees imported from Excel",f.files[0]?f.files[0].name:"template",n+" rows");closeModal();toast(n+" employees imported \u2014 review & assign managers","ok");};
}
function closeProfile(){document.getElementById("scrim").classList.remove("show");document.getElementById("drawer").classList.remove("show");}
function openProfileEdit(id){
  const e=EMP.find(x=>x.id===id);if(!e)return;
  const isAdmin=fullAccess();const isSelf=id===CURRENT[persona];
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const lock=icon('<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>');
  // self-editable personal fields
  const selfFields=[["email","Work email",e.email],["phone","Phone",e.phone],["loc","Location",e.loc],["dob","Date of birth",e.dob]];
  // admin-only fields (Direct Manager / Account / Project per MoM 1.4)
  const mgr=EMP.find(z=>z.id===e.mgr);
  const adminFields=[["mgr","Direct manager",mgr?mgr.name:"\u2014"],["acc","Account",e.acc?accName(e.acc):"\u2014"],["prj","Project",e.prj?prjName(e.prj):"\u2014"],["grade","Job grade",e.grade]];
  const selfRows=selfFields.map(f=>'<div class="field"><label class="field-k">'+f[1]+'</label><input class="inp" data-pf="'+f[0]+'" value="'+f[2]+'"></div>').join("");
  const adminRows=adminFields.map(f=>{
    const editable=isAdmin;
    if(f[0]==="mgr"&&editable){const opts=EMP.filter(z=>z.dept!=="Executive"&&z.id!==e.id).map(z=>'<option value="'+z.id+'" '+(z.id===e.mgr?"selected":"")+'>'+z.name+'</option>').join("");return '<div class="field"><label class="field-k">'+f[1]+'</label><select class="inp" data-pf="mgr"><option value="">\u2014</option>'+opts+'</select></div>';}
    if(f[0]==="acc"&&editable){const opts=ACCOUNTS.map(a=>'<option value="'+a.id+'" '+(a.id===e.acc?"selected":"")+'>'+a.name+'</option>').join("");return '<div class="field"><label class="field-k">'+f[1]+'</label><select class="inp" data-pf="acc"><option value="">\u2014</option>'+opts+'</select></div>';}
    if(f[0]==="prj"&&editable){const opts=PROJECTS.map(p=>'<option value="'+p.id+'" '+(p.id===e.prj?"selected":"")+'>'+p.name+'</option>').join("");return '<div class="field"><label class="field-k">'+f[1]+'</label><select class="inp" data-pf="prj"><option value="">\u2014</option>'+opts+'</select></div>';}
    if(editable)return '<div class="field"><label class="field-k">'+f[1]+'</label><input class="inp" data-pf="'+f[0]+'" value="'+f[2]+'"></div>';
    return '<div class="field"><label class="field-k" style="display:flex;align-items:center;gap:5px">'+f[1]+' <span style="color:var(--muted);display:inline-flex;width:13px">'+lock+'</span></label><div class="v" style="opacity:.7;padding:9px 0">'+f[2]+'</div></div>';
  }).join("");
  openModal('<div class="modal-h"><div><h3>Edit profile \u00b7 '+e.name+'</h3><div class="small muted" style="margin-top:3px">'+(isAdmin?"Admin \u2014 you can edit all fields.":"You can edit your own personal details. Manager / account / project are locked to Admin (BOD / C-Level / PMO / HRM).")+'</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="evalForm"><div class="subhead" style="margin-top:0">Personal details <span style="margin-left:auto;font-weight:500;text-transform:none;letter-spacing:0;color:var(--positive);font-size:11px">self-editable</span></div><div class="field-grid">'+selfRows+'</div>'
   +'<div class="subhead">Engagement &amp; grade <span style="margin-left:auto;font-weight:500;text-transform:none;letter-spacing:0;color:var(--faint);font-size:11px">'+(isAdmin?"admin can edit":"admin-only \u2014 locked")+'</span></div><div class="field-grid">'+adminRows+'</div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="pfCancel">Cancel</button><button class="btn btn-primary" id="pfSave">Save changes</button></div>');
  const w=document.getElementById('modalWrap');w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#pfCancel').onclick=closeModal;
  w.querySelector('#pfSave').onclick=()=>{
    const changes=[];
    w.querySelectorAll('[data-pf]').forEach(inp=>{const f=inp.dataset.pf;if(!canEditField(id,f))return;const nv=inp.value;
      let ov=e[f];if(f==="acc")ov=e.acc;if(f==="prj")ov=e.prj;if(f==="mgr")ov=e.mgr;
      if((nv||"")!==(ov||"")){const disp=f==="acc"?accName(nv)||"\u2014":f==="prj"?prjName(nv)||"\u2014":f==="mgr"?mgrName(nv)||"\u2014":nv;const odisp=f==="acc"?accName(ov)||"\u2014":f==="prj"?prjName(ov)||"\u2014":f==="mgr"?mgrName(ov)||"\u2014":(ov||"\u2014");changes.push({f:f,from:odisp,to:disp});e[f]=nv;}});
    if(!changes.length){toast("No changes to save","info");return;}
    changes.forEach(c=>{e.hist=e.hist||[];e.hist.unshift({w:nowTs()+" UTC",a:"Profile field updated \u00b7 "+c.f,by:me().name+" ("+PERSONA_LABEL[persona]+")",f:c.from,t:c.to});});
    audit("Profile updated",e.name,changes.map(c=>c.f).join(", ")+(changes.some(c=>["mgr","acc","prj"].indexOf(c.f)>=0)?" \u00b7 triggers Org Chart + MS365 sync":""));
    closeModal();openProfile(id);toast("Profile saved \u00b7 "+changes.length+" field"+(changes.length>1?"s":"")+" updated");};
}
/* ===== ROUTER ===== */
const VIEWS={dashboard:viewDashboard,employees:viewEmployees,org:viewOrg,allocation:viewAllocation,performance:viewPerformance,recruitment:viewRecruitment,lifecycle:viewLifecycle};
const MOD_TABS={
  people:[["dashboard","Dashboard"],["employees","Employees"],["org","Org Chart"],["allocation","Resource Allocation"],["performance","Performance"]],
  hiring:[["reports","Reports"],["requisitions","Requisitions"],["candidates","Candidates"],["interviews","Interviews"],["knowledge","Knowledge Base"]],
  project:[["portfolio","Portfolio"],["requests","Requests"],["weekly","Weekly Reports"],["resourcing","RA Monitoring"],["risks","Risks & Issues"],["metrics","KPI Metrics"]]
};
let curMod="people",curTab="dashboard";
/* ===== PROJECT MONITORING MODULE ===== */
const PM_WEEKS=["2026-W-19","2026-W-20","2026-W-21"];
const PM_WEEK="2026-W-21";const PM_ASOF=5;let PM_REQSEQ=0;let PM_PRQSEQ=0;
function ragCls(r){return r==="Green"?"positive":r==="Red"?"accent":"warning";}
function ragPill(r){const c=ragCls(r);return '<span class="status-pill" style="background:var(--'+c+'-soft);color:var(--'+c+')">'+(r||'\u2014')+'</span>';}
function ragDot(r){return '<span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:var(--'+ragCls(r)+')"></span>';}
const RAGV={Green:0,Yellow:1,Red:2};const VRAG=["Green","Yellow","Red"];
function worst(arr){return arr.filter(Boolean).reduce((a,b)=>RAGV[b]>RAGV[a]?b:a,"Green");}
function qcdpObj(code){return {Q:VRAG["GYR".indexOf(code[0])],C:VRAG["GYR".indexOf(code[1])],D:VRAG["GYR".indexOf(code[2])],P:VRAG["GYR".indexOf(code[3])]};}
const PM_NORM={
 project:{Delivery:{m:"OnTime",dir:"up",g:0.95,y:0.8},Quality:{m:"LR",dir:"down",g:0.1,y:0.3},Cost:{m:"EC",dir:"down",g:1.05,y:1.1},Process:{m:"PCV",dir:"up",g:0.9,y:0.7}},
 ticket:{Delivery:{m:"OnTime",dir:"up",g:0.95,y:0.85},Quality:{m:"DR",dir:"down",g:0.05,y:0.15},Cost:{m:"BR",dir:"up",g:0.95,y:0.85},Process:{m:"PCV",dir:"up",g:0.85,y:0.7}}
};
function deriveRAG(area,p){const n=(PM_NORM[p.type]||PM_NORM.project)[area];if(!n)return null;let v=p.m[n.m];if(v==null||v==="")return null;v=parseFloat(v);if(isNaN(v))return null;
 let base;if(n.dir==="up")base=v>=n.g?"Green":v>=n.y?"Yellow":"Red";else base=v<=n.g?"Green":v<=n.y?"Yellow":"Red";
 if(p.crit&&base==="Green"){if(n.dir==="up"&&v<n.y*1.1)base="Yellow";if(n.dir==="down"&&v>n.y*0.9)base="Yellow";}
 return base;}
function autoQCDP(p){const seed=qcdpObj(p.qcdp);return {Q:deriveRAG("Quality",p)||seed.Q,C:deriveRAG("Cost",p)||seed.C,D:deriveRAG("Delivery",p)||seed.D,P:deriveRAG("Process",p)||seed.P};}
const PM_PROJECTS=[
 {id:"AERIS-PGE",name:"PGE Automotive",acc:"Aeris",pm:"Giang Le Thanh",pmoBy:"Khanh Minh",type:"project",qcdp:"RGYY",m:{OnTime:1,LR:0.75,DR:0.17,PCV:1},plan:8,staff:7,util:96,key:[["Tech Lead","Giang Le Thanh",true]],summary:"May minor release pge26.02 deployed; ~3,400 vehicles hit OTA retry failures.",risk:"Leakage rate 75% (3 external bugs); release ph\u1ee5 thu\u1ed9c 1 c\u00e1 nh\u00e2n.",next:"Deploy May 28 hotfix; finalize release checklist.",pmoNote:"Release ph\u1ee5 thu\u1ed9c ho\u00e0n to\u00e0n 1 ng\u01b0\u1eddi \u2014 c\u1ea7n backup."},
 {id:"AERIS-SA",name:"Security Automotive",acc:"Aeris",pm:"Thanh Nguyen",pmoBy:"Thuy Pham",type:"project",qcdp:"RYRG",m:{OnTime:0.85,DR:3.5,LR:0.08},plan:7,staff:6,util:92,key:[["Backend Lead","Thanh Nguyen",true]],summary:"OTA c2 service crashes during load; Kafka connectivity issues.",risk:"Kafka connectivity issue g\u00e2y m\u1ea5t \u1ed5n \u0111\u1ecbnh.",next:"Debug & fix Kafka; th\u00eam integration test.",pmoNote:"B\u1ed5 sung 1 Senior Backend \u0111\u1ec3 gi\u1ea3m t\u1ea3i."},
 {id:"AERIS-WT",name:"Watchtower",acc:"Aeris",pm:"Anh Le",pmoBy:"Khanh Minh",type:"project",qcdp:"YYRR",m:{OnTime:1,DR:0,PCV:0},plan:6,staff:4,util:104,key:[["FE Lead","Anh Le",true]],summary:"T\u1eadp trung deploy; team kh\u00e1ch c\u00f3 1 member m\u1edbi out.",risk:"Kh\u00e1ch thi\u1ebfu ng\u01b0\u1eddi \u2014 mu\u1ed1n tuy\u1ec3n b\u00f9.",next:"Follow-up tuy\u1ec3n b\u00f9 ph\u00eda kh\u00e1ch + n\u1ed9i b\u1ed9.",pmoNote:"Theo d\u00f5i nguy c\u01a1 thi\u1ebfu ngu\u1ed3n l\u1ef1c."},
 {id:"AERIS-DA",name:"Dunnock / Anand",acc:"Aeris",pm:"Anh Nguyen Nhat",pmoBy:"Khanh Minh",type:"project",qcdp:"YGYY",m:{OnTime:1,DR:1,LR:0.33,PCV:1},plan:5,staff:5,util:98,key:[],summary:"Deployed 10 P1/P2 bug fixes; 3 new P1/P2 opened.",risk:"Kh\u00e1ch cho resource v\u1eeba \u0111\u1ee7 \u0111\u1ec3 v\u1eeba dev v\u1eeba fix.",next:"QA test t\u1eebng feature tr\u01b0\u1edbc khi \u0111\u1ea9y.",pmoNote:"Thu h\u1eb9p gap ch\u1ea5t l\u01b0\u1ee3ng."},
 {id:"GB-DSN",name:"Designer",acc:"GridBeyond",pm:"Minh Dang",pmoBy:"Thuy Pham",type:"ticket",qcdp:"RYRY",m:{EC:0.84,DR:0.22,LR:1,OnTime:1},plan:5,staff:4,util:108,key:[["DS Lead","Minh Dang",true],["BE","Oanh Nguyen",true]],summary:"Azure Batch integration; kh\u00e1ch ch\u01b0a ch\u1ed1t ki\u1ebfn tr\u00fac.",risk:"Minh Dang g\u00e1nh 2 d\u1ef1 \u00e1n; Oanh Nguyen overload.",next:"Y\u00eau c\u1ea7u team log work; c\u00e2n t\u1ea3i.",pmoNote:"Bus factor =1 \u2014 ph\u00e2n b\u1ed5 l\u1ea1i."},
 {id:"GB-BID",name:"Bid Optimizer",acc:"GridBeyond",pm:"Quang Nguyen",pmoBy:"Thuy Pham",type:"ticket",qcdp:"YGRY",m:{OnTime:1,DR:0.89,LR:0},plan:6,staff:5,util:95,key:[],summary:"CAISO EDAM feature; FE Dev g\u1eb7p kh\u00f3.",risk:"Deadline g\u1ea5p t\u1eeb kh\u00e1ch \u2014 nguy c\u01a1 nhi\u1ec1u bug.",next:"C\u1eed th\u00eam BE support.",pmoNote:"Tham gia audit self-test."},
 {id:"GB-DS",name:"Data Science",acc:"GridBeyond",pm:"Nhung Nguyen Hong",pmoBy:"Thuy Pham",type:"ticket",qcdp:"GGYR",m:{OnTime:0.9},plan:4,staff:3,util:90,key:[["DS","Nhung Nguyen Hong",true]],summary:"Forecast data pipeline \u1ed5n \u0111\u1ecbnh.",risk:"Ch\u01b0a tuy\u1ec3n \u0111\u01b0\u1ee3c DS \u2014 thi\u1ebfu 1 v\u1ecb tr\u00ed.",next:"\u0110\u1ea9y tuy\u1ec3n DS.",pmoNote:"K\u1ebf ho\u1ea1ch nh\u00e2n s\u1ef1 DS."},
 {id:"GB-EMS",name:"EMS",acc:"GridBeyond",pm:"Dat Bui",pmoBy:"Thuy Pham",type:"ticket",qcdp:"GGGY",m:{EC:0.69,DR:0,LR:1,OnTime:1},plan:5,staff:5,util:88,key:[],summary:"On track; Grafana iframe embed cho Aldustria.",risk:"Scope: 4 request m\u1edbi th\u00eam tu\u1ea7n n\u00e0y.",next:"Push Grafana embed; ch\u1ed1t scope.",pmoNote:"Ki\u1ec3m so\u00e1t scope creep."},
 {id:"TZ-TZ",name:"Teacher Zone",acc:"Teacher Zone",pm:"Thinh Tran",pmoBy:"Nhung Nguyen",type:"project",qcdp:"RYRR",m:{LR:0.89,DR:0.18,PCV:0.92},plan:7,staff:5,util:102,key:[["SM","Thinh Tran",true]],summary:"QCDP RED; leakage 67.6% (23 bug tr\u00ean prod).",risk:"Nh\u00e2n s\u1ef1 ngh\u1ec9 nhi\u1ec1u \u2192 team m\u1ecfng; bug leakage cao.",next:"SM g\u1eedi improvement plan; define workflow.",pmoNote:"B\u1ed5 sung ng\u01b0\u1eddi + 01 SM \u1ed5n \u0111\u1ecbnh."},
 {id:"RSP-RSP",name:"Restaurant System Pro",acc:"RSP",pm:"Manh Pham",pmoBy:"Nhung Nguyen",type:"project",qcdp:"GGGY",m:{EC:1,DR:0,LR:0,OnTime:1},plan:6,staff:6,util:93,key:[],summary:"Finish 1 POC AI Invoice Upload cho kh\u00e1ch.",risk:"Member c\u00f3 nhu c\u1ea7u \u0111\u00e0o t\u1ea1o DevOps.",next:"EM g\u1eedi report retro + improvement plan.",pmoNote:"Confirm k\u1ebf ho\u1ea1ch training."},
 {id:"CC-CC",name:"Commerce Canal",acc:"Commerce Canal",pm:"Linh Dien",pmoBy:"Nhung Nguyen",type:"project",qcdp:"RYGR",m:{LR:1,DR:0,PCV:0.803},plan:5,staff:4,util:97,key:[],summary:"Thi\u1ebfu unit/regression test; takeover ph\u1ea7n m\u1edbi.",risk:"2 nh\u00e2n s\u1ef1, thi\u1ebfu test depth; c\u1ea7n SM.",next:"B\u1eaft bu\u1ed9c unit test; define self-test level.",pmoNote:"B\u1ed5 sung 01 Scrum Master."},
 {id:"VERI-PS",name:"PS (GLC)",acc:"Veritone",pm:"Trieu Duong",pmoBy:"Thuy Pham",type:"ticket",qcdp:"GGGG",m:{EC:0.77,DR:0,LR:0,OnTime:1},plan:5,staff:5,util:90,key:[],summary:"S10 Q2 Y26 on track; delivery & quality stable.",risk:"N/A.",next:"Ti\u1ebfp t\u1ee5c sprint cadence.",pmoNote:"Gi\u1eef nh\u1ecbp."},
 {id:"VERI-AID",name:"Aiware Data",acc:"Veritone",pm:"Nam Nguyen",pmoBy:"Thuy Pham",type:"ticket",qcdp:"YGGY",m:{EC:0.92,DR:0.7,OnTime:0.98},plan:5,staff:4,util:121,key:[["Dev","Nam Nguyen",true]],summary:"Sprint S10 \u0111ang ch\u1ea1y; t\u1ea3i cao.",risk:"Busy 121% \u2014 nguy c\u01a1 burnout.",next:"C\u00e2n t\u1ea3i, xem x\u00e9t b\u1ed5 sung.",pmoNote:"Over-utilization."},
 {id:"MG-BOSS",name:"BOSS",acc:"Motion Global",pm:"Duy Nguyen",pmoBy:"Nhung Nguyen",type:"project",qcdp:"GGGG",m:{OnTime:1},plan:5,staff:5,util:86,key:[],summary:"Th\u1ed1ng nh\u1ea5t template & quy tr\u00ecnh; under control.",risk:"QA ngh\u1ec9 ph\u00e9p c\u00f3 k\u1ebf ho\u1ea1ch \u2014 \u0111\u00e3 cover.",next:"Ho\u00e0n thi\u1ec7n proposal.",pmoNote:"OK."},
 {id:"SB-SB",name:"SunWest Bank",acc:"SunWest Bank",pm:"Minh Hoang",pmoBy:"Thuy Pham",type:"project",qcdp:"GGGG",m:{EC:1,DR:2,LR:0.0125,OnTime:1},plan:6,staff:6,util:91,key:[],summary:"QCDP Green; BFA released; \u0111\u1ee7 ch\u1ec9 s\u1ed1.",risk:"N/A.",next:"Follow-up.",pmoNote:"D\u1ef1 \u00e1n m\u1eabu."},
 {id:"AVIA-AV",name:"Avia",acc:"Avia",pm:"Thai Nguyen",pmoBy:"Nhung Nguyen",type:"project",qcdp:"YGGG",m:{DR:2,OnTime:1},plan:5,staff:5,util:89,key:[],summary:"Working on reskin; ch\u1edd kh\u00e1ch ch\u1ed1t scope.",risk:"2/3 bug production c\u00f2n m\u1edf.",next:"\u0110\u00f3ng bug production.",pmoNote:"Theo d\u00f5i scope reskin."}
];
function pmFind(id){return PM_PROJECTS.find(p=>p.id===id);}
PM_PROJECTS.forEach(p=>{p.crit=false;p.reported=true;p.gw=0;p.predict=72;});
["SB-SB","AERIS-SA","TZ-TZ","AERIS-WT"].forEach(id=>{const p=pmFind(id);if(p)p.crit=true;});
["AERIS-DA","GB-DS"].forEach(id=>{const p=pmFind(id);if(p)p.reported=false;});
{const g={"VERI-PS":5,"MG-BOSS":4,"SB-SB":6};Object.keys(g).forEach(id=>{const p=pmFind(id);if(p)p.gw=g[id];});}
{const pr={"AERIS-PGE":58,"AERIS-SA":61,"TZ-TZ":40,"GB-DSN":55,"VERI-PS":94,"SB-SB":92,"MG-BOSS":88,"CC-CC":62,"AERIS-WT":50,"VERI-AID":66};Object.keys(pr).forEach(id=>{const p=pmFind(id);if(p)p.predict=pr[id];});}
function pmDerive(p){const q=autoQCDP(p);p.rag=worst([q.Q,q.C,q.D,q.P]);p.qauto=q;const hmap={Green:["G","G","Y","G","G"],Yellow:["Y","Y","G","Y","Y"],Red:["R","R","Y","R","R"]};p.hist=hmap[p.rag];}
PM_PROJECTS.forEach(pmDerive);
const PM_PHASE={"AERIS-SA":"Stabilize","TZ-TZ":"Stabilize","RSP-RSP":"UAT","MG-BOSS":"UAT","GB-DS":"Discovery"};
const ACC_AM={"Aeris":"Le Quang Tuan","GridBeyond":"Dang Viet Tien","Veritone":"Hoang Nhat Minh","Teacher Zone":"Ta Cao Canh","SunWest Bank":"Ngo Nhat Long","RSP":"Pham Duc Manh","Commerce Canal":"Dien Van Linh","Motion Global":"Nguyen Trong Duy","Avia":"Nguyen Anh Thai"};
const ACC_PREFIX={"Aeris":"AERIS","GridBeyond":"GB","Veritone":"VERI","Teacher Zone":"TZ","SunWest Bank":"SB","RSP":"RSP","Commerce Canal":"CC","Motion Global":"MG","Avia":"AVIA"};
PM_PROJECTS.forEach(p=>{p.phase=PM_PHASE[p.id]||"Execution";p.css=p.rag==="Green"?4.6:p.rag==="Yellow"?4.25:3.85;p.bmm=Math.round(p.staff*PM_ASOF*p.util/100);});
{const c={"SB-SB":4.72,"VERI-PS":4.65,"AERIS-PGE":3.7,"TZ-TZ":3.6,"GB-EMS":4.4,"MG-BOSS":4.55};Object.keys(c).forEach(id=>{const p=pmFind(id);if(p)p.css=c[id];});}
function pmNewProject(o){const p=Object.assign({type:"project",qcdp:"GGGG",m:{},plan:0,staff:0,util:0,key:[],summary:"Newly created from an approved project request.",risk:"N/A.",next:"Kick-off & staffing",pmoNote:"New project \u2014 charter approved."},o);p.crit=false;p.reported=true;p.gw=0;p.predict=80;pmDerive(p);p.phase=o.phase||"Initiation";p.css=o.css||4.5;p.bmm=o.bmm0||0;PM_PROJECTS.push(p);return p;}
pmNewProject({id:"SB-MB",name:"SunWest Mobile Banking",acc:"SunWest Bank",pm:"Minh Hoang",pmoBy:"Thuy Pham",plan:6,staff:2,util:90});
const ROLE_BAND={Manager:[55,85],Lead:[70,90],Senior:[75,92],Middle:[80,95],Junior:[70,92],"\u2014":[0,100]};
const RA_PEOPLE=[
 ["Le Quang Tuan","Aeris","AERIS","AM","Manager",false,100,95,false],["Nguyen Cong Thanh","Aeris","AERIS-SA","Lead","Lead",true,150,111,true],
 ["Nguyen Manh Hai","Aeris","AERIS-DD","Lead","Lead",true,150,90,true],["Phan Thanh Tung","Aeris","AERIS-DA","Dev","Middle",true,78,100,false],
 ["Ha Quoc Huy","Aeris","AERIS-GA","Dev","Senior",true,44,100,false],["Do Van Chung","Aeris","AERIS-DP","Lead","Lead",true,50,90,false],
 ["Cao Anh Thuy","Aeris","AERIS-DA","Dev","Senior",true,25,0,false],["Dao Thi Thanh Loan","Aeris","AERIS-PGE","QA","Senior",true,100,95,false],
 ["Dang Viet Tien","GridBeyond","GB","AM","Manager",false,75,60,false],["Bui Tien Dat","GridBeyond","GB-EMS","Lead","Lead",true,50,80,false],
 ["Dang Nhat Minh","GridBeyond","GB-DSN","Lead","Lead",true,100,120,true],["Nguyen Dinh Quy","GridBeyond","GB-VP","Dev","Middle",true,75,90,false],
 ["Nguyen Hong Nhung","GridBeyond","GB-DS","Lead","Lead",false,75,110,true],["Hoang Nhat Minh","Veritone","VERI","AM","Manager",false,50,50,true],
 ["Duong Quang Trieu","Veritone","VERI-PS","Lead","Senior",true,100,111,false],["Nguyen Van Nam","Veritone","VERI-AID","Dev","Senior",true,75,121,false],
 ["Doan Minh Hieu","Veritone","VERI-AIP","Dev","Middle",true,50,70,false],["Ngo Nhat Long","SunWest Bank","SB","Lead","Lead",true,100,100,false],
 ["Ta Cao Canh","Teacher Zone","TZ","AM","Manager",false,50,60,false],["Tran Duc Thinh","Teacher Zone","TZ-TZ","EM","Lead",true,100,130,false],
 ["Pham Duc Manh","RSP","RSP","EM","Lead",true,50,95,false],["Dien Van Linh","Commerce Canal","CC","Lead","Lead",true,100,110,false],
 ["Nguyen Trong Duy","Motion Global","MG","PM","Lead",true,100,85,false],["Nguyen Anh Thai","Avia","AVIA","EM","Senior",false,50,50,false],
 ["Nguyen Duy Dat","Avia","AVIA","Dev","Senior",true,100,100,false],["Nguyen Huy Hieu","Avia","AVIA","QA","Junior",false,100,100,false],
 ["Pham Tien Manh","Avia","AVIA","Dev","Middle",true,50,60,false],["Bui Nguyen Minh","AI R&D","AI R&D","Dev","\u2014",false,0,0,false],
 ["Vu Xuan Tung","EmergentAI","EmergentAI","EM","Lead",false,25,80,false]
].map(a=>({name:a[0],acc:a[1],sub:a[2],role:a[3],level:a[4],bill:a[5],ra:a[6],busy:a[7],multi:a[8]}));
RA_PEOPLE.forEach(p=>{let h=0;for(let i=0;i<p.name.length;i++)h=(h*31+p.name.charCodeAt(i))%100;p.real=p.bill?0.82+(h%15)/100:0;});
RA_PEOPLE.forEach(p=>{const stp=v=>[0,0.2,0.5,0.8,1].reduce((a,b)=>Math.abs(b-v)<Math.abs(a-v)?b:a);const base=Math.min(1,p.ra/100);p.eff=[];for(let m=0;m<6;m++){p.eff.push(stp(base));}});
function raBand(p){return ROLE_BAND[p.level]||[75,95];}
function raMM(p){return p.ra/100*PM_ASOF;}
function raBillMM(p){return p.bill?p.ra/100*PM_ASOF:0;}
function raShadowMM(p){return Math.max(0,(p.bill?(p.busy-p.ra):p.busy))/100*PM_ASOF;}
function raBilledMM(p){return raBillMM(p)*p.real;}
function raFlags(p){const f=[];const b=raBand(p);if(p.ra>110)f.push(["Over-allocated","accent"]);if(p.busy>b[1])f.push(["Over-utilized","accent"]);else if(p.busy<b[0]&&p.ra<60)f.push(["Idle","warning"]);if(!p.bill&&p.busy>0)f.push(["Shadow","info"]);if(p.multi)f.push(["Multi","muted"]);return f;}
function raAccts(){return [...new Set(RA_PEOPLE.map(p=>p.acc))];}
function raAcctRoll(acc){const ppl=RA_PEOPLE.filter(p=>p.acc===acc);const mm=ppl.reduce((s,p)=>s+raMM(p),0);const bmm=ppl.reduce((s,p)=>s+raBillMM(p),0);const smm=ppl.reduce((s,p)=>s+raShadowMM(p),0);const billed=ppl.reduce((s,p)=>s+raBilledMM(p),0);return {acc:acc,n:ppl.length,mm:mm,bmm:bmm,smm:smm,rate:mm>0?bmm/mm:0,real:bmm>0?billed/bmm:0,multi:ppl.filter(p=>p.multi).length};}
function raReallocs(){const out=[];raAccts().forEach(a=>{const ppl=RA_PEOPLE.filter(p=>p.acc===a);const over=ppl.filter(p=>p.busy>raBand(p)[1]).sort((x,y)=>y.busy-x.busy);const under=ppl.filter(p=>p.busy<raBand(p)[0]&&p.busy<70);over.forEach(o=>{const u=under[0];if(u)out.push({acc:a,from:o,to:u});});});return out.slice(0,5);}
const PM_RISKS=[
 {id:"ISS-001",project:"GB-EMS",title:"Kh\u00e1ch kh\u00f4ng h\u00e0i l\u00f2ng do Dev b\u00ean kh\u00e1c tr\u1ec5 deploy",type:"Customer",sev:"Important",pri:"P0",status:"Resolved",owner:"Dat Bui",due:"2026-05-05",action:"EM follow ch\u1eb7t, gi\u1ea3i tr\u00ecnh v\u1edbi kh\u00e1ch."},
 {id:"ISS-002",project:"GB-BID",title:"QA kh\u00f4ng tu\u00e2n th\u1ee7 quy tr\u00ecnh, thi\u1ebfu tech design",type:"Bug",sev:"Important",pri:"P0",status:"In Progress",owner:"Quang Nguyen",due:"2026-05-15",action:"Y\u00eau c\u1ea7u QA h\u1ecdc l\u1ea1i quy tr\u00ecnh; t\u0103ng review."},
 {id:"ISS-003",project:"GB-BID / GB-DS",title:"Nh\u00e2n s\u1ef1 overload nhi\u1ec1u tu\u1ea7n, \u0111\u00e3 request tuy\u1ec3n th\u00eam",type:"Resource",sev:"Important",pri:"P1",status:"In Progress",owner:"Tien Dang",due:"\u2014",action:"Check ti\u1ebfn \u0111\u1ed9 tuy\u1ec3n th\u00eam ng\u01b0\u1eddi."},
 {id:"ISS-000",project:"RSP-RSP",title:"Bug production \u2014 l\u1ed7i thanh to\u00e1n kh\u00f4ng ghi nh\u1eadn",type:"Bug",sev:"Critical",pri:"P0",status:"Resolved",owner:"An Dev",due:"2026-04-01",action:"Fix logic callback; add edge-case test."},
 {id:"RSK-000",project:"TZ-TZ",title:"Dev key c\u00f3 th\u1ec3 ngh\u1ec9 do workload cao",type:"Resource",sev:"High",pri:"P1",status:"Monitoring",owner:"Thinh Tran",due:"Weekly",action:"Reduce workload + 1-1; assign backup Dev."},
 {id:"ISS-004",project:"AERIS-SA",title:"Kafka connectivity issue tr\u00ean ota-server",type:"Stability",sev:"Important",pri:"P1",status:"In Progress",owner:"Thanh Nguyen",due:"2026-W-22",action:"Th\u00eam integration test t\u1ef1 ki\u1ec3m tra Kafka."},
 {id:"ISS-005",project:"GB-DS",title:"Ch\u01b0a tuy\u1ec3n \u0111\u01b0\u1ee3c Data Scientist \u2014 thi\u1ebfu n\u0103ng l\u1ef1c",type:"Resource",sev:"High",pri:"P1",status:"Open",owner:"Nhung Nguyen Hong",due:"\u2014",action:"\u0110\u1ea9y tuy\u1ec3n d\u1ee5ng; c\u00e2n nh\u1eafc internal move."}
];
let PM_RSEQ=0;let PM_REPORTS=[];
PM_PROJECTS.filter(p=>p.id!=="SB-MB").forEach(p=>{const r={id:"R"+(++PM_RSEQ),proj:p.id,week:PM_WEEK,by:"PM",author:p.pm,rag:p.rag,qcdp:p.qauto,summary:p.summary,risk:p.risk};if(p.rag!=="Green"){r.action=p.next;r.owner=p.pm;r.due="2026-W-22";}PM_REPORTS.push(r);});
["AERIS-PGE","TZ-TZ","GB-DSN","CC-CC","AERIS-SA","VERI-AID"].forEach(id=>{const p=pmFind(id);PM_REPORTS.push({id:"R"+(++PM_RSEQ),proj:id,week:PM_WEEK,by:"PMO",author:p.pmoBy,rag:p.rag,qcdp:p.qauto,summary:"PMO review: "+p.pmoNote,risk:p.risk,action:p.pmoNote,owner:p.pmoBy,due:"2026-W-22"});});
(function(){const prevRag={Green:"Yellow",Yellow:"Red",Red:"Red"};["2026-W-20","2026-W-19"].forEach((wk,wi)=>{PM_PROJECTS.filter(p=>p.id!=="SB-MB").forEach(p=>{const rag=wi===0?(p.rag==="Green"?"Green":prevRag[p.rag]):(p.rag==="Red"?"Yellow":"Green");PM_REPORTS.push({id:"R"+(++PM_RSEQ),proj:p.id,week:wk,by:"PM",author:p.pm,rag:rag,qcdp:p.qauto,summary:p.summary,risk:wi===0?p.risk:"Earlier week \u2014 baseline.",hist:true});});});})();
{const r=PM_REPORTS.find(x=>x.proj==="AERIS-PGE"&&x.by==="PM"&&x.week==="2026-W-21");if(r)r.comments=[{by:"Khanh Minh",role:"PMO",txt:"PMO noted \u2014 will track the release checklist closely.",ts:"2026-06-08"},{by:"Hung Vu",role:"BoD",txt:"Need a mitigation plan for the leakage by Friday.",ts:"2026-06-09"}];}
PM_REPORTS.push({id:"R"+(++PM_RSEQ),proj:"SB-MB",week:PM_WEEK,by:"PM",author:"Minh Hoang",rag:"Green",qcdp:(pmFind("SB-MB")||{}).qauto||autoQCDP(pmFind("SB-MB")),summary:"Kick-off complete; Sprint 1 underway on accounts & transfers. Biometric auth spike done and CI/CD pipeline stood up.",risk:"Team ramp \u2014 2 of 6 onboarded; backfill in progress with TA.",action:"Complete team ramp and lock Sprint 1 scope with the client.",owner:"Minh Hoang",due:"2026-W-22"});
{const _sb=pmFind("SB-MB");if(_sb)_sb.reported=true;}
let PM_PREQS=[
 {id:"PRQ-2026-014",name:"Aeris Telemetry Gateway",acc:"Aeris",pm:"Thanh Nguyen",bmm:42,team:7,meth:"Scrum",price:"Fixed-price",stage:1,sub:"2026-06-02",timeline:"Jul \u2013 Dec 2026",obj:"Build the OTA telemetry ingestion gateway for ~40k vehicles with device auth and replay protection.",scope:"Ingestion API, device auth, Kafka pipeline, retention policy, Grafana dashboards. Out of scope: mobile app changes."},
 {id:"PRQ-2026-013",name:"GridBeyond Forecast v2",acc:"GridBeyond",pm:"Nhung Nguyen Hong",bmm:30,team:5,meth:"Kanban",price:"T&M",stage:2,sub:"2026-05-28",timeline:"Jul \u2013 Oct 2026",obj:"Re-platform the energy forecast pipeline to cut training time 60% and add CAISO EDAM market support.",scope:"Feature store, model registry, EDAM connectors, backtesting harness."},
 {id:"PRQ-2026-012",name:"SunWest Mobile Banking",acc:"SunWest Bank",pm:"Minh Hoang",bmm:36,team:6,meth:"Scrum",price:"Fixed-price",stage:3,sub:"2026-05-12",timeline:"Jun \u2013 Dec 2026",obj:"Native mobile banking app (iOS/Android) on the BFA platform with biometric auth.",scope:"Accounts, transfers, bill pay, biometric login, push notifications.",prj:"SB-MB",alloc:[{name:"Minh Hoang",role:"PM",ra:100,access:"Owner"},{name:"Ngo Nhat Long",role:"Tech Lead",ra:80,access:"Edit"}]},
 {id:"PRQ-2026-011",name:"Avia Loyalty Revamp",acc:"Avia",pm:"Thai Nguyen",bmm:18,team:3,meth:"Scrum",price:"T&M",stage:-1,rejAt:2,reason:"Deferred to Q4 by BoD \u2014 budget window.",sub:"2026-05-02",timeline:"Q4 2026",obj:"Revamp loyalty program with tier-based rewards.",scope:"Tier engine, rewards catalog, CRM sync."}
];
const PRQ_STEPS=[["Submitted","Request created by PM"],["PMO Review","PMO sign-off"],["BoD Review","Board approval"],["Project created","Live in Portfolio"]];
function prqFind(id){return PM_PREQS.find(r=>r.id===id);}
function prqBadge(r){return r.stage===1?'<span class="tag" style="background:var(--warning-soft);color:#7d520f">Awaiting PMO review</span>':r.stage===2?'<span class="tag" style="background:var(--warning-soft);color:#7d520f">Awaiting BoD review</span>':r.stage===3?'<span class="tag" style="background:var(--positive-soft);color:var(--positive)">Approved \u00b7 created</span>':'<span class="tag" style="background:var(--accent-soft);color:var(--accent)">Rejected</span>';}
function prqStepper(r){return '<div class="prq-steps">'+PRQ_STEPS.map((s,i)=>{const done=r.stage===3?true:r.stage>0?i<r.stage:i<r.rejAt-0;const active=r.stage>0&&r.stage<3&&i===r.stage;const cls=done?'done':active?'active':'';return '<div class="prq-step '+cls+'"><span class="sd">'+(done?icon(I.check):(i+1))+'</span><div><div class="sl">'+s[0]+'</div><div class="ss">'+s[1]+'</div></div></div>'+(i<3?'<div class="prq-conn'+(done&&(r.stage===3||i<r.stage-1)?' on':'')+'"></div>':'');}).join("")+'</div>';}
const PM_RETRO={};
let pmAccSel="all",pmRiskSel="all",retroAcc="Aeris",pmWeekSel="2026-W-21",pmPrjSel="all",pmWkPage=0;let pmExp=new Set(["Aeris"]);
const PM_PERSONA={am:{role:"Account Manager",name:"Le Quang Tuan",accounts:["Aeris"]},manager:{role:"EM / Team Lead",name:"Giang Le Thanh",projects:["AERIS-PGE","AERIS-DA"]},employee:{role:"Member",name:"Phan Thanh Tung",projects:["AERIS-DA"]}};
function pmScope(){if(fullAccess())return null;const m=PM_PERSONA[persona];if(!m)return [];if(m.accounts)return PM_PROJECTS.filter(p=>m.accounts.indexOf(p.acc)>=0).map(p=>p.id);if(m.projects)return m.projects.slice();return [];}
function pmVisibleProjects(){const sc=pmScope();return sc===null?PM_PROJECTS:PM_PROJECTS.filter(p=>sc.indexOf(p.id)>=0);}
function pmAcctHealth(acc){const ps=PM_PROJECTS.filter(p=>p.acc===acc);if(!ps.length)return null;const g=ps.filter(p=>p.rag==="Green").length,y=ps.filter(p=>p.rag==="Yellow").length,r=ps.filter(p=>p.rag==="Red").length;const sc=Math.round((g*100+y*45+r*5)/ps.length);return {acc:acc,n:ps.length,g:g,y:y,r:r,sc:sc,rag:r>0?"Red":y>0?"Yellow":"Green"};}
function pmReported(){return PM_PROJECTS.filter(p=>p.reported).length;}
function pmStaleGreen(){return PM_PROJECTS.filter(p=>p.rag==="Green"&&p.gw>=3);}
function pmAccQ(acc){const ps=PM_PROJECTS.filter(p=>p.acc===acc);const o={};["Q","C","D","P"].forEach(k=>{o[k]=worst(ps.map(p=>p.qauto[k]));});return o;}
function pmAccts(){return [...new Set(PM_PROJECTS.map(p=>p.acc))];}
const METRIC_LABEL={EC:"Actual vs budget",BR:"Billable approved",DR:"Defect / re-open",LR:"Leakage rate",OnTime:"On-time rate",PCV:"Commitment / velocity"};
const PM_ACCMAP={"Aeris":"ACC-E","Avia":"ACC-D"};
function qchips(p){return '<span class="qcdp-row">'+["Q","C","D","P"].map(k=>{const auto=p.qauto[k];const rep=qcdpObj(p.qcdp)[k];return '<span class="qchip" title="'+k+' \u00b7 auto: '+auto+' \u00b7 reported: '+rep+(auto!==rep?' override':'')+'">'+ragDot(auto)+' '+k+'</span>';}).join("")+'</span>';}
function pmInsights(scope){
  const ps=PM_PROJECTS.filter(p=>scope==="all"||p.acc===scope);const out=[];
  ps.filter(p=>p.rag==="Red").forEach(p=>out.push({sev:"crit",t1:p.name+" \u00b7 "+p.acc,t2:p.risk}));
  pmStaleGreen().filter(p=>scope==="all"||p.acc===scope).forEach(p=>out.push({sev:"warn",t1:p.name+" \u2014 stale Green ("+p.gw+"w)",t2:"Green for "+p.gw+" weeks with no metric movement \u2014 PMO spot-check recommended."}));
  ps.filter(p=>!p.reported).forEach(p=>out.push({sev:"warn",t1:p.name+" \u2014 report missing",t2:"No weekly report for "+pmWeekSel+" \u2014 RAG is carried over, not confirmed."}));
  ps.filter(p=>p.util>105).forEach(p=>out.push({sev:"warn",t1:p.name+" \u2014 over-utilized "+p.util+"%",t2:"Sustained >100% \u2192 burnout & quality risk. Rebalance or backfill."}));
  ps.filter(p=>p.predict<55).forEach(p=>out.push({sev:"crit",t1:p.name+" \u2014 predictability "+p.predict+"%",t2:"Estimates unreliable; expect schedule surprises. Re-baseline with 3-point estimation."}));
  return out;
}
/* ---------- PORTFOLIO: Account Health + Insights/Exceptions first ---------- */
var pmExcView='overview', pmExcPage=0;
function pmHealthOf(ps){const r=ps.filter(p=>p.rag==="Red").length,y=ps.filter(p=>p.rag==="Yellow").length;return {n:ps.length,rag:r?"Red":y?"Yellow":"Green"};}
function pmQOf(ps){const o={};["Q","C","D","P"].forEach(k=>{o[k]=worst(ps.map(p=>p.qauto[k]));});return o;}
function pmPortfolioKPIs(vis){
  const accts=[...new Set(vis.map(p=>p.acc))];
  const hs=accts.map(a=>pmHealthOf(vis.filter(p=>p.acc===a)));
  const healthy=hs.filter(h=>h.rag==="Green").length,watch=hs.filter(h=>h.rag==="Yellow").length,critA=hs.filter(h=>h.rag==="Red").length;
  const accSet=new Set(accts);const rap=RA_PEOPLE.filter(p=>fullAccess()||accSet.has(p.acc));
  const mm=rap.reduce((s,p)=>s+raMM(p),0)||1,bmm=rap.reduce((s,p)=>s+raBillMM(p),0);const rate=Math.round(bmm/mm*100);
  const predict=Math.round(vis.reduce((s,p)=>s+p.predict,0)/(vis.length||1));
  const comp=Math.round(vis.filter(p=>p.reported).length/(vis.length||1)*100);
  return '<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Accounts</span><div class="val">'+healthy+'<span style="font-size:15px;color:var(--muted)">H</span> '+watch+'<span style="font-size:15px;color:var(--muted)">W</span> '+critA+'<span style="font-size:15px;color:var(--muted)">C</span></div><span class="small muted">healthy · watch · critical</span></div>'
  +'<div class="card kpi"><span class="lbl">Billable rate</span><div class="val" style="color:'+(rate>=80?'var(--positive)':'var(--warning)')+'">'+rate+'%</div><span class="small muted">target ≥ 80% · '+bmm.toFixed(1)+' / '+mm.toFixed(1)+' MM</span></div>'
  +'<div class="card kpi"><span class="lbl">Predictability</span><div class="val" style="color:'+(predict>=75?'var(--positive)':'var(--warning)')+'">'+predict+'%</div><span class="small muted">avg estimate reliability</span></div>'
  +'<div class="card kpi"><span class="lbl">Report compliance</span><div class="val" style="color:'+(comp>=90?'var(--positive)':'var(--warning)')+'">'+comp+'%</div><span class="small muted">'+vis.filter(p=>p.reported).length+' / '+vis.length+' reported</span></div></div>';
}
function pmExcData(vis){
  const exc=vis.filter(p=>p.rag!=="Green").sort((a,b)=>(a.rag==="Red"?0:1)-(b.rag==="Red"?0:1));
  const notRep=vis.filter(p=>!p.reported);const stale=vis.filter(p=>p.rag==="Green"&&p.gw>=3);
  return {exc:exc,notRep:notRep,stale:stale};
}
function pmPortfolio(){
  const hlabel={Green:["HEALTHY","positive"],Yellow:["WATCH","warning"],Red:["CRITICAL","accent"]};
  const VIS=pmVisibleProjects();
  const roleNote=fullAccess()?"Account-level health rolled up from project QCDP and RA. Insights and exceptions surface what needs attention this week.":(PM_PERSONA[persona]?"Scoped to your "+PM_PERSONA[persona].role+" view ("+PM_PERSONA[persona].name+") — "+VIS.length+" project"+(VIS.length===1?"":"s")+".":"No projects assigned to this persona.");
  const D=pmExcData(VIS);const exc=D.exc,notRep=D.notRep,stale=D.stale;
  const redN=exc.filter(p=>p.rag==="Red").length,yelN=exc.filter(p=>p.rag==="Yellow").length;
  const weekChip='<div class="flex center gap"><span class="chip">Week <select id="pmWeek">'+PM_WEEKS.slice().reverse().map(w=>'<option '+(w===pmWeekSel?"selected":"")+'>'+w+'</option>').join("")+'</select></span></div>';
  if(VIS.length===0)return '<div class="page-head"><div><div class="eyebrow">Project Monitoring</div><h1>Portfolio</h1><p>'+roleNote+'</p></div></div><div class="card empty" style="padding:46px">No projects visible for this persona.</div>';

  if(pmExcView==='detail'){
    const flag=(arr,label,tone)=>arr.length?'<div class="audit-note" style="'+(tone==='warn'?'background:var(--warning-soft);color:var(--warning-ink)':'')+'margin-bottom:8px"><span><b>'+label+':</b> '+arr.join(", ")+'</span></div>':'';
    const drows=exc.map(p=>{const hl=hlabel[p.rag];return '<tr class="clk" data-pmrow="'+p.id+'"><td><div style="font-weight:600;font-size:12.5px">'+p.name+'</div><div class="small mono muted">'+p.id+'</div></td>'
      +'<td class="small">'+p.acc+'</td><td><span class="status-pill" style="background:var(--'+hl[1]+'-soft);color:var(--'+hl[1]+')">'+hl[0]+'</span></td><td>'+qchips(p)+'</td>'
      +'<td class="small" style="max-width:340px">'+p.risk+'</td><td>'+(p.reported?'<span class="status-pill cst-hired">Reported</span>':'<span class="status-pill cst-interview">Not yet</span>')+'</td>'
      +'<td><div class="cellname">'+av(p.pm,"width:24px;height:24px;font-size:9px")+'<span class="small">'+p.pm+'</span></div></td></tr>';}).join("")||'<tr><td colspan="7" class="empty" style="padding:24px">All projects are green — no exceptions.</td></tr>';
    return ''
    +'<div class="page-head"><div><button class="btn btn-ghost" data-pmexcback="1" style="margin-bottom:10px;height:32px">'+icon('<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>')+'Back to portfolio</button><div class="eyebrow">Project Monitoring · Exceptions</div><h1>Insights &amp; exceptions</h1><p>Every non-green project this week, with health, QCDP, the open risk, and reporting status. Click a row to open its weekly report.</p></div>'+weekChip+'</div>'
    +'<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Critical</span><div class="val" style="color:var(--accent)">'+redN+'</div></div><div class="card kpi"><span class="lbl">Watch</span><div class="val" style="color:var(--warning)">'+yelN+'</div></div><div class="card kpi"><span class="lbl">Not reported</span><div class="val" style="color:'+(notRep.length?'var(--warning)':'var(--positive)')+'">'+notRep.length+'</div></div><div class="card kpi"><span class="lbl">Stale green</span><div class="val">'+stale.length+'</div></div></div>'
    +(notRep.length||stale.length?'<div class="card mb"><div class="card-pad">'+flag(notRep.map(p=>p.id),notRep.length+' not reported','warn')+flag(stale.map(p=>p.id+" ("+p.gw+"w)"),'Stale green')+'</div></div>':'')
    +'<div class="card"><div class="card-head"><h3>Non-green projects</h3><span class="meta">'+exc.length+' exception'+(exc.length===1?'':'s')+'</span></div><div class="tbl-wrap"><table><thead><tr><th>Project</th><th>Account</th><th>Health</th><th>QCDP</th><th>Open risk / issue</th><th>Reported</th><th>PM</th></tr></thead><tbody>'+drows+'</tbody></table></div></div>';
  }

  const PP=3;const pages=Math.max(1,Math.ceil(exc.length/PP));if(pmExcPage>=pages)pmExcPage=0;
  const shown=exc.slice(pmExcPage*PP,pmExcPage*PP+PP);
  const excItem=p=>'<div class="exc-item clk" data-pmrow="'+p.id+'"><span class="exc-dot">'+ragDot(p.rag)+'</span><div class="exc-main"><div class="exc-name">'+p.name+' <span class="small muted mono">'+p.id+' · '+p.acc+'</span></div><div class="exc-risk">'+p.risk+'</div></div><span class="status-pill '+(p.rag==="Red"?"cst-rejected":"cst-interview")+'">'+(p.rag==="Red"?"Critical":"Watch")+'</span><span class="exc-chev">'+icon('<path d="M9 18l6-6-6-6"/>')+'</span></div>';
  const statChip=(n,label,color)=>'<span class="exc-stat"><span class="exc-stat-n" style="color:'+color+'">'+n+'</span>'+label+'</span>';
  const pager=pages>1?'<div class="exc-pager"><button class="exc-pg" data-excpage="'+(pmExcPage-1)+'"'+(pmExcPage===0?' disabled':'')+'>'+icon('<path d="M15 18l-6-6 6-6"/>')+'</button><span class="exc-pgn mono">'+(pmExcPage+1)+' / '+pages+'</span><button class="exc-pg" data-excpage="'+(pmExcPage+1)+'"'+(pmExcPage>=pages-1?' disabled':'')+'>'+icon('<path d="M9 18l6-6-6-6"/>')+'</button></div>':'';
  const overview='<div class="card mb"><div class="card-head"><h3>Insights &amp; exceptions</h3><span class="meta">'+pmWeekSel+'</span><button class="btn btn-ghost" data-pmexcdetail="1" style="margin-left:auto;height:30px;font-size:12px">View all '+icon('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>')+'</button></div><div class="card-pad">'
    +'<div class="exc-stats">'+statChip(redN,'critical','var(--accent-ink)')+statChip(yelN,'watch','var(--warning-ink)')+statChip(notRep.length,'not reported','var(--warning-ink)')+statChip(stale.length,'stale green','var(--muted)')+'</div>'
    +'<div class="exc-list">'+(shown.length?shown.map(excItem).join(""):'<div class="empty" style="padding:20px">All projects are green this week.</div>')+'</div>'+pager+'</div></div>';

  const accts=[...new Set(VIS.map(p=>p.acc))];
  const rows=accts.map(a=>{
    const ps=VIS.filter(p=>p.acc===a);const h=pmHealthOf(ps);const q=pmQOf(ps);
    const team=ps.reduce((s,p)=>s+p.staff,0);const b=ps.reduce((s,p)=>s+p.bmm,0);const css=(ps.reduce((s,p)=>s+p.css,0)/ps.length);
    const am=ACC_AM[a]||"—";const open=pmExp.has(a);const hl=hlabel[h.rag];
    let html='<tr class="clk accrow" data-accrow="'+a+'"><td><div class="flex center gap"><span class="caret">'+(open?'▾':'▸')+'</span><div><div style="font-weight:700;font-size:13px">'+a+'</div><div class="small muted">'+h.n+' project'+(h.n>1?'s':'')+'</div></div></div></td>'
      +'<td><span class="status-pill" style="background:var(--'+hl[1]+'-soft);color:var(--'+hl[1]+')">'+hl[0]+'</span> <span class="tag" style="margin-left:4px">'+h.n+' projects</span></td>'
      +'<td><span class="qcdp-row">'+["Q","C","D","P"].map(k=>'<span class="qchip">'+ragDot(q[k])+' '+k+'</span>').join("")+'</span></td>'
      +'<td style="text-align:center;font-weight:700" class="mono">'+team+'</td><td style="text-align:center;font-weight:700" class="mono">'+b+'</td><td style="text-align:center;font-weight:700" class="mono">'+css.toFixed(2)+'</td>'
      +'<td><div class="cellname">'+av(am,"width:26px;height:26px;font-size:10px")+'<span class="small" style="font-weight:600">'+am+'</span></div></td></tr>';
    if(open)html+=ps.map(p=>'<tr class="clk" data-pmrow="'+p.id+'" style="background:var(--surface-2)"><td style="padding-left:42px"><div class="small mono muted">'+p.id+'</div><div style="font-weight:600;font-size:12.5px">'+p.name+'</div></td>'
      +'<td><span class="tag">'+p.phase+'</span></td><td>'+qchips(p)+'</td>'
      +'<td style="text-align:center" class="mono">'+p.staff+'</td><td style="text-align:center" class="mono">'+p.bmm+'</td><td style="text-align:center" class="mono">'+p.css.toFixed(2)+'</td>'
      +'<td><div class="cellname">'+av(p.pm,"width:26px;height:26px;font-size:10px")+'<span class="small">'+p.pm+'</span></div></td></tr>').join("");
    return html;}).join("");

  return ''
  +'<div class="page-head"><div><div class="eyebrow">Project Monitoring</div><h1>Portfolio</h1><p>'+roleNote+'</p></div>'+weekChip+'</div>'
  +pmPortfolioKPIs(VIS)+overview
  +'<div class="card"><div class="card-head"><h3>Account Health</h3><div class="flex center gap" style="margin-left:auto"><button class="btn btn-ghost" style="height:30px;font-size:12px" data-expall="1">Expand all</button><button class="btn btn-ghost" style="height:30px;font-size:12px" data-collall="1">Collapse all</button></div></div><div class="tbl-wrap"><table><thead><tr><th>Account / Project</th><th>Phase / Health</th><th>QCDP</th><th style="text-align:center">Team</th><th style="text-align:center">BMM</th><th style="text-align:center">CSS</th><th>Owner</th></tr></thead><tbody>'+rows+'</tbody></table></div><div class="small muted" style="padding:10px 16px">Owner = Account Manager (account rows) / PM (project rows). BMM = billable man-months. CSS = customer satisfaction /5. Account QCDP = worst across its projects.</div></div>';
}
/* ---------- PROJECT REQUESTS ---------- */
function pmRequests(){
  const t=PM_PREQS.length,s1=PM_PREQS.filter(r=>r.stage===1).length,s2=PM_PREQS.filter(r=>r.stage===2).length,s3=PM_PREQS.filter(r=>r.stage===3).length,rej=PM_PREQS.filter(r=>r.stage===-1).length;
  const cards=PM_PREQS.map(r=>'<div class="card clk mb" data-prq="'+r.id+'" style="cursor:pointer"><div class="card-pad" style="padding:16px 18px"><div class="flex gap" style="align-items:flex-start"><div style="min-width:150px"><div class="mono" style="font-weight:700;font-size:13px">'+r.id+'</div><div style="margin-top:6px">'+prqBadge(r)+'</div></div><div style="flex:1;min-width:0"><div style="font-weight:700;font-size:14.5px">'+r.name+'</div><div class="small muted" style="margin-top:3px">'+r.acc+' \u00b7 PM '+r.pm+' \u00b7 '+r.bmm+' BMM \u00b7 Team '+r.team+' \u00b7 '+r.meth+' \u00b7 '+r.price+'</div></div><div style="text-align:right;flex-shrink:0"><div class="small muted" style="letter-spacing:.05em;font-size:10px">SUBMITTED</div><div style="font-weight:700;font-size:13px" class="mono">'+r.sub.slice(5)+'</div></div></div>'+prqStepper(r)+(r.stage===-1?'<div class="audit-note" style="background:var(--accent-soft);color:#9c3340;margin-top:10px">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'<span>'+r.reason+'</span></div>':'')+'</div></div>').join("");
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Project Monitoring \u00b7 Governance</div><h1>Project Requests</h1><p>PM submits a project charter \u2192 PMO sign-off \u2192 BoD approval \u2192 project is created in the Portfolio \u2192 staffing &amp; access (R&amp;R) granted per person.</p></div><button class="btn btn-primary" data-prqnew="1">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'New project request</button></div>'
  +'<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Total requests</span><div class="val">'+t+'</div></div><div class="card kpi"><span class="lbl">Awaiting PMO</span><div class="val" style="color:var(--warning)">'+s1+'</div><span class="small muted">PMO sign-off required</span></div><div class="card kpi"><span class="lbl">Awaiting BoD</span><div class="val" style="color:var(--warning)">'+s2+'</div><span class="small muted">Board approval required</span></div><div class="card kpi"><span class="lbl">Approved \u00b7 Created</span><div class="val" style="color:var(--positive)">'+s3+'</div><span class="small muted">'+rej+' rejected</span></div></div>'
  +cards;
}
function openPrq(id){
  const r=prqFind(id);if(!r)return;
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const charter='<div class="field-grid mb"><div class="field"><div class="k">Account</div><div class="v">'+r.acc+'</div></div><div class="field"><div class="k">PM (requester)</div><div class="v">'+r.pm+'</div></div><div class="field"><div class="k">Budget</div><div class="v mono">'+r.bmm+' BMM</div></div><div class="field"><div class="k">Team size</div><div class="v mono">'+r.team+'</div></div><div class="field"><div class="k">Methodology</div><div class="v">'+r.meth+'</div></div><div class="field"><div class="k">Pricing</div><div class="v">'+r.price+'</div></div><div class="field"><div class="k">Timeline</div><div class="v">'+r.timeline+'</div></div><div class="field"><div class="k">Submitted</div><div class="v mono">'+r.sub+'</div></div></div>'
   +'<div class="fb"><div class="fm">Objective</div><div class="fnote">'+r.obj+'</div></div><div class="fb"><div class="fm">Scope</div><div class="fnote">'+r.scope+'</div></div>';
  let staffing='';
  if(r.stage===3){r.alloc=r.alloc||[];
    const acPill=a=>'<span class="tag" style="background:'+(a==="Owner"?'var(--primary-soft);color:var(--primary)':a==="Edit"?'var(--info-soft);color:var(--info)':'var(--surface-2);color:var(--muted)')+'">'+a+'</span>';
    const arows=r.alloc.map(al=>'<tr><td><div class="cellname">'+av(al.name,"width:26px;height:26px;font-size:10px")+'<span class="small" style="font-weight:600">'+al.name+'</span></div></td><td class="small">'+al.role+'</td><td class="mono small" style="text-align:center">'+al.ra+'%</td><td>'+acPill(al.access)+'</td></tr>').join("")||'<tr><td colspan="4" class="empty" style="padding:14px">No one staffed yet.</td></tr>';
    const emps=EMP.filter(e=>e.status==="active"&&e.dept==="Engineering").map(e=>'<option>'+e.name+'</option>').join("");
    staffing='<div class="subhead">Staffing &amp; Access (R&amp;R) \u00b7 '+(r.prj||'')+'</div><div class="small muted" style="margin:-2px 0 8px">RA people into the project and grant workspace access \u2014 Owner / Edit / View per Role &amp; Responsibility.</div>'
     +'<div class="tbl-wrap mb"><table><thead><tr><th>Name</th><th>Role</th><th style="text-align:center">RA %</th><th>Access</th></tr></thead><tbody>'+arows+'</tbody></table></div>'
     +'<div class="flex gap center" style="flex-wrap:wrap"><select class="inp" id="prqEmp" style="flex:2;min-width:140px">'+emps+'</select><select class="inp" id="prqRole" style="flex:1;min-width:100px"><option>Developer</option><option>Tech Lead</option><option>PM</option><option>QA</option><option>BA</option><option>PMO</option></select><input class="inp" id="prqRa" type="number" min="10" max="100" step="10" value="100" style="width:80px"><select class="inp" id="prqAcc" style="width:96px"><option>Edit</option><option>Owner</option><option>View</option></select><button class="btn btn-primary" id="prqAdd" style="height:36px">Add</button></div>';}
  const foot=r.stage===1?'<div class="modal-f"><button class="btn btn-ghost" id="prqRej" style="color:var(--accent)">Reject</button><button class="btn btn-primary" id="prqOk">Approve \u00b7 PMO sign-off</button></div>'
   :r.stage===2?'<div class="modal-f"><button class="btn btn-ghost" id="prqRej" style="color:var(--accent)">Reject</button><button class="btn btn-primary" id="prqOk">Approve \u00b7 BoD &amp; create project</button></div>'
   :'<div class="modal-f"><button class="btn btn-ghost" id="prqClose2">Close</button></div>';
  openModal('<div class="modal-h"><div><h3>'+r.name+'</h3><div class="small muted" style="margin-top:3px">'+r.id+' \u00b7 Project Charter</div></div><div class="flex center gap">'+prqBadge(r)+'<button class="drawer-close" id="modalClose">'+x+'</button></div></div>'
   +'<div class="modal-b" id="evalForm">'+charter+prqStepper(r)+(r.stage===-1?'<div class="audit-note" style="background:var(--accent-soft);color:#9c3340;margin-top:12px">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'<span>'+r.reason+'</span></div>':'')+(staffing?'<div style="margin-top:14px">'+staffing+'</div>':'')+'</div>'+foot);
  const m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;
  if(m.querySelector('#prqClose2'))m.querySelector('#prqClose2').onclick=closeModal;
  if(m.querySelector('#prqOk'))m.querySelector('#prqOk').onclick=()=>{
    if(r.stage===1){confirmAction("Approve project request?","<b>"+r.name+"</b> \u2014 PMO sign-off. The request moves to BoD review.","Approve",()=>{r.stage=2;audit("Project request PMO-approved",r.name,r.id);renderProject("requests");toast("PMO approved \u2014 sent to BoD");openPrq(r.id);});}
    else{confirmAction("BoD approval \u2014 create project?","<b>"+r.name+"</b> will be approved and created in the Portfolio. Staffing & access can be granted right after.","Approve & create",()=>{
      const base=ACC_PREFIX[r.acc]||r.acc.slice(0,3).toUpperCase();const suf=r.name.split(/\s+/).map(w=>w[0]).join("").toUpperCase().slice(0,3);
      let pid=base+"-"+suf;let n2=2;while(pmFind(pid)){pid=base+"-"+suf+n2++;}
      pmNewProject({id:pid,name:r.name,acc:r.acc,pm:r.pm,pmoBy:"Thuy Pham",plan:r.team,staff:0,util:0});
      r.prj=pid;r.stage=3;audit("Project created from request",r.name,r.id+" \u2192 "+pid);renderProject("requests");toast("Project created \u00b7 "+pid+" \u2014 live in Portfolio");openPrq(r.id);});}};
  if(m.querySelector('#prqRej'))m.querySelector('#prqRej').onclick=()=>{const at=r.stage;confirmAction("Reject this request?","<b>"+r.name+"</b> will be rejected at "+(at===1?"PMO":"BoD")+" review.","Reject",()=>{r.rejAt=at;r.stage=-1;r.reason="Rejected at "+(at===1?"PMO":"BoD")+" review by "+me().name+".";audit("Project request rejected",r.name,r.id);renderProject("requests");toast("Request rejected","warn");},true);};
  if(m.querySelector('#prqAdd'))m.querySelector('#prqAdd').onclick=()=>{
    const name=m.querySelector('#prqEmp').value,role=m.querySelector('#prqRole').value,ra=+m.querySelector('#prqRa').value||100,acc2=m.querySelector('#prqAcc').value;
    if(r.alloc.some(a2=>a2.name===name)){toast("Already staffed: "+name,"warn");return;}
    r.alloc.push({name:name,role:role,ra:ra,access:acc2});const p=pmFind(r.prj);if(p)p.staff++;
    audit("RA & access granted",r.name,name+" \u00b7 "+role+" \u00b7 "+ra+"% \u00b7 "+acc2);toast("RA & access granted \u2014 "+name+" ("+acc2+")");openPrq(r.id);};
}
function openPrqForm(){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  openModal('<div class="modal-h"><div><h3>New project request</h3><div class="small muted" style="margin-top:3px">Project Charter \u2014 PM submits, PMO then BoD approve</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="evalForm"><div class="field-grid mb"><div><label class="field-k">Project name</label><input class="inp" id="qfName" placeholder="e.g. Aeris Fleet Analytics"></div><div><label class="field-k">Account</label><select class="inp" id="qfAcc">'+Object.keys(ACC_PREFIX).map(a=>'<option>'+a+'</option>').join("")+'</select></div><div><label class="field-k">PM (requester)</label><input class="inp" id="qfPm" value="'+me().name+'"></div><div><label class="field-k">Budget (BMM)</label><input class="inp" id="qfBmm" type="number" value="24"></div><div><label class="field-k">Team size</label><input class="inp" id="qfTeam" type="number" value="5"></div><div><label class="field-k">Methodology</label><select class="inp" id="qfMeth"><option>Scrum</option><option>Kanban</option></select></div><div><label class="field-k">Pricing</label><select class="inp" id="qfPrice"><option>Fixed-price</option><option>T&amp;M</option></select></div><div><label class="field-k">Timeline</label><input class="inp" id="qfTl" placeholder="e.g. Jul \u2013 Dec 2026"></div></div>'
   +'<label class="field-k">Objective</label><textarea class="inp" id="qfObj" placeholder="Business objective & success criteria\u2026"></textarea>'
   +'<label class="field-k" style="margin-top:10px">Scope (in / out)</label><textarea class="inp" id="qfScope" placeholder="In scope\u2026 Out of scope\u2026"></textarea></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="qfCancel">Cancel</button><button class="btn btn-primary" id="qfGo">Submit request</button></div>');
  const m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#qfCancel').onclick=closeModal;
  m.querySelector('#qfGo').onclick=()=>{
    const name=m.querySelector('#qfName').value.trim();if(!name){toast("Project name is required","warn");return;}
    const r={id:"PRQ-2026-0"+(15+PM_PRQSEQ++),name:name,acc:m.querySelector('#qfAcc').value,pm:m.querySelector('#qfPm').value||me().name,bmm:+m.querySelector('#qfBmm').value||0,team:+m.querySelector('#qfTeam').value||0,meth:m.querySelector('#qfMeth').value,price:m.querySelector('#qfPrice').value,stage:1,sub:"2026-06-10",timeline:m.querySelector('#qfTl').value||"TBC",obj:m.querySelector('#qfObj').value||"\u2014",scope:m.querySelector('#qfScope').value||"\u2014"};
    PM_PREQS.unshift(r);audit("Project request submitted",name,r.id);closeModal();renderProject("requests");toast("Request "+r.id+" submitted \u2014 awaiting PMO");};
}
/* ---------- WEEKLY REPORTS: account\u2192project, RBAC, pagination ---------- */
function pmWeekly(){
  const scope=pmVisibleProjects();
  const myAccts=[...new Set(scope.map(p=>p.acc))];
  if(pmAccSel!=="all"&&myAccts.indexOf(pmAccSel)<0)pmAccSel="all";
  const inAcc=scope.filter(p=>pmAccSel==="all"||p.acc===pmAccSel);
  if(pmPrjSel!=="all"&&!inAcc.some(p=>p.id===pmPrjSel))pmPrjSel="all";
  const roleNote=fullAccess()?'You can see every account and project.':(PM_PERSONA[persona]?'Scoped to your '+PM_PERSONA[persona].role+' projects ('+PM_PERSONA[persona].name+').':'No delivery projects assigned to this persona.');
  const selProjects=inAcc.filter(p=>pmPrjSel==="all"||p.id===pmPrjSel);
  const PP=4;const pages=Math.max(1,Math.ceil(selProjects.length/PP));if(pmWkPage>=pages)pmWkPage=0;
  const shown=selProjects.slice(pmWkPage*PP,pmWkPage*PP+PP);
  const card=p=>{const reps=PM_REPORTS.filter(r=>r.proj===p.id&&r.week===pmWeekSel);const byw=reps.map(r=>'<span class="tag '+(r.by==="PMO"?"tag-rep":"tag-new")+'">'+r.by+' \u00b7 '+r.author+'</span>').join(" ");return '<div class="req-card clk" data-pmrow="'+p.id+'"><div class="rtop"><div><div class="rt">'+p.name+' <span class="small muted mono" style="font-weight:400">'+p.id+'</span></div><div class="rm">'+p.acc+' \u00b7 PM '+p.pm+' \u00b7 PMO '+p.pmoBy+'</div></div>'+ragPill(p.rag)+'</div>'+qchips(p)+'<div class="small" style="color:var(--ink-2);margin-top:6px">'+(reps[0]?reps[0].summary:p.summary)+'</div><div class="flex center" style="margin-top:9px;gap:6px;flex-wrap:wrap">'+(byw||'<span class="small muted">No report for '+pmWeekSel+'</span>')+'<span class="small muted" style="margin-left:auto">'+reps.length+' report'+(reps.length===1?'':'s')+'</span></div></div>';};
  const pager=pages>1?'<div class="flex center gap" style="justify-content:center;margin-top:14px"><button class="btn btn-ghost" data-wkpage="'+(pmWkPage-1)+'" '+(pmWkPage===0?'disabled':'')+'>\u2039 Prev</button><span class="small muted">Page '+(pmWkPage+1)+' / '+pages+'</span><button class="btn btn-ghost" data-wkpage="'+(pmWkPage+1)+'" '+(pmWkPage>=pages-1?'disabled':'')+'>Next \u203a</button></div>':'';
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Project Monitoring \u00b7 Weekly</div><h1>Weekly Reports</h1><p>Choose an account and project to open its weekly report. '+roleNote+'</p></div><button class="btn btn-primary" data-pmnew="1">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'New weekly report</button></div>'
  +'<div class="toolbar"><span class="chip">Week <select id="pmWeek">'+PM_WEEKS.slice().reverse().map(w=>'<option '+(w===pmWeekSel?"selected":"")+'>'+w+'</option>').join("")+'</select></span><span class="chip">Account <select id="pmAcc"><option value="all" '+(pmAccSel==="all"?"selected":"")+'>All ('+myAccts.length+')</option>'+myAccts.map(a=>'<option '+(a===pmAccSel?"selected":"")+'>'+a+'</option>').join("")+'</select></span><span class="chip">Project <select id="pmPrj"><option value="all" '+(pmPrjSel==="all"?"selected":"")+'>All ('+inAcc.length+')</option>'+inAcc.map(p=>'<option value="'+p.id+'" '+(p.id===pmPrjSel?"selected":"")+'>'+p.name+'</option>').join("")+'</select></span><span class="small muted" style="margin-left:auto">'+selProjects.length+' project'+(selProjects.length===1?'':'s')+' \u00b7 '+pmWeekSel+'</span></div>'
  +(scope.length===0?'<div class="card empty" style="padding:46px">No projects visible for this persona.</div>':'<div class="grid cols-2">'+shown.map(card).join("")+'</div>'+pager);
}
/* ---------- RA CONTROL ---------- */
const RA_MONTHS=['Jan','Feb','Mar','Apr','May','Jun'];
const RA_STEPS=[0,0.2,0.5,0.8,1];
function raEffCls(v){return v>=1?'e100':v>=0.8?'e80':v>=0.5?'e50':v>0?'e20':'e0';}
function raEffTxt(v){return v>0?(v.toFixed(1).replace(/\.0$/,'')):'\u00b7';}
function raRowMM(p){return (p.eff||[]).reduce((a,b)=>a+b,0);}
function raEditAll(){return fullAccess();}
function raEditProjSet(){return isManager()?new Set(PM_PERSONA.manager.projects||[]):new Set();}
function raRowEdit(p){return raEditAll()||raEditProjSet().has(p.sub);}
function raCanAssign(){return raEditAll()||isManager();}
function raAssignProjects(){return raEditAll()?PM_PROJECTS.slice():PM_PROJECTS.filter(p=>raEditProjSet().has(p.id));}
function raCycle(idx,m){const p=RA_PEOPLE[idx];if(!p||!raRowEdit(p))return;let i=RA_STEPS.indexOf(p.eff[m]);if(i<0)i=0;p.eff[m]=RA_STEPS[(i+1)%RA_STEPS.length];p.ra=Math.round(raRowMM(p)/6*100);audit("RA effort updated",p.name,p.sub+" "+RA_MONTHS[m]+" \u2192 "+raEffTxt(p.eff[m]));renderProject("resourcing");}
function raAssignOpen(){
  const projs=raAssignProjects();if(!projs.length){toast("No project you can staff","warn");return;}
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const pool=EMP.filter(e=>e.status==='active').map(e=>e.name);
  openModal('<div class="modal-h"><div><h3>Assign person to project</h3><div class="small muted" style="margin-top:3px">Add a resource and set their monthly effort</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b"><div class="field-grid" style="grid-template-columns:1fr 1fr;gap:12px">'
   +'<div class="field" style="grid-column:1/-1"><div class="k">Person</div><input class="inp" id="raPerson" list="raPool" placeholder="Name\u2026"><datalist id="raPool">'+pool.map(n=>'<option value="'+n+'">').join('')+'</datalist></div>'
   +'<div class="field"><div class="k">Project</div><select class="inp" id="raProj">'+projs.map(p=>'<option value="'+p.id+'">'+p.name+' \u00b7 '+p.acc+'</option>').join('')+'</select></div>'
   +'<div class="field"><div class="k">Role</div><select class="inp" id="raRole"><option>Engineer</option><option>Senior Engineer</option><option>Tech Lead</option><option>QA Engineer</option><option>Business Analyst</option><option>Designer</option></select></div>'
   +'<div class="field"><div class="k">Level</div><select class="inp" id="raLevel"><option>Junior</option><option selected>Middle</option><option>Senior</option><option>Lead</option></select></div>'
   +'<div class="field"><div class="k">Monthly effort (MM)</div><select class="inp" id="raEff"><option>0.2</option><option>0.5</option><option>0.8</option><option selected>1</option></select></div>'
   +'</div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="raCancel">Cancel</button><button class="btn btn-primary" id="raSave">Assign</button></div>');
  const m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#raCancel').onclick=closeModal;
  m.querySelector('#raSave').onclick=()=>{
    const nm=m.querySelector('#raPerson').value.trim();if(!nm){toast("Enter a person","warn");return;}
    const pid=m.querySelector('#raProj').value;const pr=PM_PROJECTS.find(p=>p.id===pid);
    const eff=+m.querySelector('#raEff').value;
    const row={name:nm,acc:pr.acc,sub:pid,role:m.querySelector('#raRole').value,level:m.querySelector('#raLevel').value,bill:true,ra:Math.round(eff*100),busy:Math.round(eff*100),multi:false,real:0.82,eff:[eff,eff,eff,eff,eff,eff]};
    RA_PEOPLE.push(row);audit("Resource assigned",nm,pr.name+" \u00b7 "+eff+" MM/mo");closeModal();renderProject("resourcing");toast(nm+" assigned to "+pr.name,"ok");
  };
}
var RA_SENIORITY=['Intern','Junior','Middle','Senior','Lead','Manager'];
var RA_PLANNED=[0.2,0.5,0.8,1];
let raEditRow=-1;
let raPrjSel="all";
function raEsc(s){return (s||'').replace(/"/g,'&quot;');}
function raMonthsSpan(s,e){if(!s||!e)return 0;var a=new Date(s),b=new Date(e);if(isNaN(a)||isNaN(b)||b<a)return 0;return (b.getFullYear()-a.getFullYear())*12+(b.getMonth()-a.getMonth())+1;}
function raCalEffort(p){return Math.round(raMonthsSpan(p.start,p.end)*(+p.planned||0)*10)/10;}
function raSeed(p){if(p.planned===undefined){p.planned=Math.round((p.ra/100)*10)/10||0.5;if(!RA_PLANNED.indexOf)p.planned=0.5;p.start='2026-01-01';p.end='2026-06-30';p.note='';}}
function raSenSel(idx,val){return '<select class="ra-inp" data-raf="'+idx+'_level">'+RA_SENIORITY.map(function(s){return '<option'+(s===val?' selected':'')+'>'+s+'</option>';}).join('')+'</select>';}
function raPlannedSel(idx,val){return '<select class="ra-inp" data-raf="'+idx+'_planned">'+RA_PLANNED.map(function(v){return '<option'+(+val===v?' selected':'')+'>'+v+'</option>';}).join('')+'</select>';}
function raSetField(idx,field,val){var p=RA_PEOPLE[idx];if(!p||!raRowEdit(p))return;if(field==='planned'){val=+val;p.ra=Math.round(val*100);}p[field]=val;audit('RA record updated',p.name,field+' \u2192 '+val);renderProject('resourcing');}
function raDelete(idx){var p=RA_PEOPLE[idx];if(!p)return;confirmAction('Delete record?','Remove '+p.name+' from this allocation?','Delete',function(){RA_PEOPLE.splice(idx,1);audit('RA record deleted',p.name,p.sub);renderProject('resourcing');toast('Removed '+p.name,'warn');},true);}
function raAddInline(){
  var nmEl=document.getElementById('raNewName');var nm=nmEl?nmEl.value.trim():'';if(!nm){toast('Enter a name','warn');return;}
  if(raPrjSel==='all'){toast('Pick a project above first, then add','warn');return;}
  var pmp=PM_PROJECTS.find(function(x){return x.id===raPrjSel;});
  var sib=RA_PEOPLE.find(function(x){return x.sub===raPrjSel;});
  var acc=pmp?pmp.acc:(sib?sib.acc:(pmAccSel!=='all'?pmAccSel:'\\u2014'));
  var label=pmp?pmp.name:raPrjSel;
  var rec={name:nm,acc:acc,sub:raPrjSel,role:'Member',level:(document.getElementById('raNewSen')||{}).value||'Middle',bill:true,multi:false,real:0.82,
    planned:+((document.getElementById('raNewPlanned')||{}).value||0.5),start:(document.getElementById('raNewStart')||{}).value||'2026-01-01',end:(document.getElementById('raNewEnd')||{}).value||'2026-06-30',note:(document.getElementById('raNewNote')||{}).value||'',eff:[]};
  rec.ra=Math.round(rec.planned*100);
  RA_PEOPLE.push(rec);audit('RA record added',nm,label);renderProject('resourcing');toast(nm+' added to '+label,'ok');
}
function pmResourcing(){
  RA_PEOPLE.forEach(raSeed);
  const editAll=raEditAll();
  let ppl=RA_PEOPLE.slice();
  if(!editAll){const accs=new Set(pmVisibleProjects().map(p=>p.acc));ppl=ppl.filter(p=>accs.has(p.acc));}
  const accOpts=[...new Set(ppl.map(p=>p.acc))];
  if(pmAccSel!=='all'&&accOpts.indexOf(pmAccSel)<0)pmAccSel='all';
  let shown=pmAccSel==='all'?ppl:ppl.filter(p=>p.acc===pmAccSel);
  const prjOpts=[...new Set(shown.map(p=>p.sub))];
  if(raPrjSel!=='all'&&prjOpts.indexOf(raPrjSel)<0)raPrjSel='all';
  if(raPrjSel!=='all')shown=shown.filter(p=>p.sub===raPrjSel);
  shown.sort((a,b)=>(a.acc+a.sub).localeCompare(b.acc+b.sub));
  const totEff=shown.reduce((s,p)=>s+raCalEffort(p),0);
  const billEff=shown.filter(p=>p.bill).reduce((s,p)=>s+raCalEffort(p),0);
  const editable=shown.filter(raRowEdit).length;
  const selProj=raPrjSel!=='all'?(PM_PROJECTS.find(x=>x.id===raPrjSel)||{}).name:null;
  const roleNote=editAll?'Add, edit and remove allocations directly in the table. The top row is blank \u2014 fill it and press Add. Calendar effort is computed from the dates \u00d7 planned effort.':(isManager()?'Edit your own project allocations inline. Pick a project, then use the top row to add people.':'Read-only view of resource allocation for your '+(isAM()?'accounts':'project')+'.');
  const canEdit=raCanAssign();

  const addRow=canEdit?'<tr class="ra-addrow"><td><input class="ra-inp" id="raNewName" placeholder="Add name\u2026"></td>'
    +'<td><select class="ra-inp" id="raNewSen">'+RA_SENIORITY.map(s=>'<option'+(s==='Middle'?' selected':'')+'>'+s+'</option>').join('')+'</select></td>'
    +'<td><select class="ra-inp" id="raNewPlanned">'+RA_PLANNED.map(v=>'<option'+(v===1?' selected':'')+'>'+v+'</option>').join('')+'</select></td>'
    +'<td><input class="ra-inp" type="date" id="raNewStart" value="2026-01-01"></td>'
    +'<td><input class="ra-inp" type="date" id="raNewEnd" value="2026-06-30"></td>'
    +'<td class="mono small" style="text-align:center;color:var(--muted)">auto</td>'
    +'<td><input class="ra-inp" id="raNewNote" placeholder="Note\u2026"></td>'
    +'<td style="text-align:center"><button class="btn btn-primary" id="raAddBtn" style="height:28px;font-size:11px;padding:0 12px">Add</button></td></tr>':'';

  const rows=shown.map(p=>{const idx=RA_PEOPLE.indexOf(p);const ed=raRowEdit(p);const cal=raCalEffort(p);
    if(ed&&raEditRow===idx){return '<tr class="ra-editing">'
      +'<td><input class="ra-inp" value="'+raEsc(p.name)+'" data-raf="'+idx+'_name"></td>'
      +'<td>'+raSenSel(idx,p.level)+'</td>'
      +'<td>'+raPlannedSel(idx,p.planned)+'</td>'
      +'<td><input class="ra-inp" type="date" value="'+(p.start||'')+'" data-raf="'+idx+'_start"></td>'
      +'<td><input class="ra-inp" type="date" value="'+(p.end||'')+'" data-raf="'+idx+'_end"></td>'
      +'<td class="mono small" style="text-align:center;font-weight:700">'+cal.toFixed(1)+'</td>'
      +'<td><input class="ra-inp" value="'+raEsc(p.note||'')+'" placeholder="\u2014" data-raf="'+idx+'_note"></td>'
      +'<td style="text-align:center"><div class="flex center gap" style="justify-content:center"><button class="ra-act ra-save" data-rasave="'+idx+'" title="Done">'+icon('<polyline points="20 6 9 17 4 12"/>')+'</button><button class="ra-act ra-del" data-radel="'+idx+'" title="Delete">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div></td></tr>';}
    if(ed){return '<tr><td style="font-weight:600;font-size:12.5px">'+p.name+'</td><td class="small">'+p.level+'</td><td class="mono small">'+(+p.planned||0)+'</td><td class="mono small">'+(p.start||'\u2014')+'</td><td class="mono small">'+(p.end||'\u2014')+'</td><td class="mono small" style="text-align:center;font-weight:700">'+cal.toFixed(1)+'</td><td class="small">'+(p.note||'\u2014')+'</td><td style="text-align:center"><div class="flex center gap" style="justify-content:center"><button class="ra-act ra-edit" data-raedit="'+idx+'" title="Edit">'+icon('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>')+'</button><button class="ra-act ra-del" data-radel="'+idx+'" title="Delete">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div></td></tr>';}
    return '<tr><td style="font-weight:600;font-size:12.5px">'+p.name+'</td><td class="small">'+p.level+'</td><td class="mono small">'+(+p.planned||0)+'</td><td class="mono small">'+(p.start||'\u2014')+'</td><td class="mono small">'+(p.end||'\u2014')+'</td><td class="mono small" style="text-align:center;font-weight:700">'+cal.toFixed(1)+'</td><td class="small">'+(p.note||'\u2014')+'</td><td></td></tr>';}).join('');

  return ''
  +'<div class="page-head"><div><div class="eyebrow">Project Monitoring \u00b7 Resource Allocation</div><h1>RA Monitoring</h1><p>'+roleNote+'</p></div></div>'
  +'<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Calendar effort</span><div class="val">'+totEff.toFixed(1)+'<span style="font-size:14px;color:var(--muted)"> MM</span></div><span class="small muted">total across records</span></div>'
  +'<div class="card kpi"><span class="lbl">Billable</span><div class="val" style="color:var(--positive)">'+billEff.toFixed(1)+'<span style="font-size:14px;color:var(--muted)"> MM</span></div><span class="small muted">'+(totEff?Math.round(billEff/totEff*100):0)+'% of effort</span></div>'
  +'<div class="card kpi"><span class="lbl">People allocated</span><div class="val">'+shown.length+'</div><span class="small muted">'+editable+' editable</span></div>'
  +'<div class="card kpi"><span class="lbl">Scope</span><div class="val" style="font-size:18px">'+(selProj||'All projects')+'</div><span class="small muted">'+(selProj?'1 project':prjOpts.length+' projects')+'</span></div></div>'
  +'<div class="card"><div class="card-head"><h3>Resource allocation</h3><div class="flex center gap" style="margin-left:auto"><span class="chip">Account <select id="pmAcc"><option value="all" '+(pmAccSel==="all"?"selected":"")+'>All ('+accOpts.length+')</option>'+accOpts.map(a=>'<option '+(a===pmAccSel?"selected":"")+'>'+a+'</option>').join("")+'</select></span><span class="chip">Project <select id="raPrj"><option value="all"'+(raPrjSel==="all"?" selected":"")+'>All ('+prjOpts.length+')</option>'+prjOpts.map(function(pid){var pp=PM_PROJECTS.find(function(x){return x.id===pid;});return '<option value="'+pid+'"'+(pid===raPrjSel?" selected":"")+'>'+(pp?pp.name:pid)+'</option>';}).join("")+'</select></span></div></div>'
  +'<div class="tbl-wrap"><table class="ra-grid ra-tbl"><thead><tr><th>Name</th><th>Seniority</th><th>Planned effort</th><th>Start date</th><th>End date</th><th style="text-align:center">Calendar effort</th><th>Note</th><th style="text-align:center"></th></tr></thead><tbody>'+addRow+rows+'</tbody></table></div>'
  +'<div class="small muted" style="padding:10px 16px">Calendar effort = months from start to end (inclusive) \u00d7 planned effort. '+(canEdit?'Edit any cell directly; changes save on blur.':'')+'</div></div>';
}
/* ---------- RISKS ---------- */
function pmRisks(){
  const _vis=pmVisibleProjects().map(p=>p.id);
  const _scoped=fullAccess()?PM_RISKS:PM_RISKS.filter(r=>_vis.some(id=>(r.project||'').indexOf(id)>=0));
  const list=_scoped.filter(r=>pmRiskSel==="all"||r.type===pmRiskSel);
  const types=[...new Set(_scoped.map(r=>r.type))];
  const sevCls=s=>s==="Critical"?"accent":s==="High"||s==="Important"?"warning":"info";
  const stCls=s=>/resolved|done/i.test(s)?"st-active":/progress/i.test(s)?"st-onboard":/monitor/i.test(s)?"st-probation":"st-leave";
  const rows=list.map(r=>'<tr><td class="mono small">'+r.id+'</td><td class="mono small">'+r.project+'</td><td><div style="font-weight:600;font-size:12.5px">'+r.title+'</div><div class="small muted">'+r.action+'</div></td><td><span class="tag"'+(r.type==="Recovery"?' style="background:var(--primary-soft);color:var(--primary)"':'')+'>'+r.type+'</span></td><td><span class="status-pill" style="background:var(--'+sevCls(r.sev)+'-soft);color:var(--'+sevCls(r.sev)+')">'+r.sev+'</span></td><td class="small">'+r.pri+'</td><td><span class="pill-status '+stCls(r.status)+'"><span class="d"></span>'+r.status+'</span></td><td class="small">'+r.owner+'</td><td class="mono small">'+r.due+'</td></tr>').join("");
  const open=_scoped.filter(r=>!/resolved|done/i.test(r.status)).length;
  const rec=_scoped.filter(r=>r.type==="Recovery").length;
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Project Monitoring \u00b7 RAID</div><h1>Risks & Issues</h1><p>Consolidated log \u2014 including <b>Recovery</b> actions auto-created by non-Green weekly reports (road-to-green).</p></div></div>'
  +'<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Total logged</span><div class="val">'+_scoped.length+'</div></div><div class="card kpi"><span class="lbl">Open</span><div class="val" style="color:var(--warning)">'+open+'</div></div><div class="card kpi"><span class="lbl">Recovery actions</span><div class="val" style="color:var(--primary)">'+rec+'</div><span class="small muted">from road-to-green</span></div><div class="card kpi"><span class="lbl">Critical / P0</span><div class="val" style="color:var(--accent)">'+_scoped.filter(r=>r.pri==="P0").length+'</div></div></div>'
  +'<div class="card"><div class="card-head"><h3>Risk & issue log</h3><span class="chip">Type <select id="pmRiskType"><option value="all" '+(pmRiskSel==="all"?"selected":"")+'>All</option>'+types.map(t=>'<option '+(t===pmRiskSel?"selected":"")+'>'+t+'</option>').join("")+'</select></span></div><div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Project</th><th>Title / action</th><th>Type</th><th>Severity</th><th>Priority</th><th>Status</th><th>Owner</th><th>Due</th></tr></thead><tbody>'+(rows||'<tr><td colspan="9" class="empty" style="padding:24px">No items.</td></tr>')+'</tbody></table></div></div>';
}
/* ---------- RETRO (no AI labels) ---------- */
function pmRetroSeed(acc){
  if(PM_RETRO[acc])return PM_RETRO[acc];
  const ps=PM_PROJECTS.filter(p=>p.acc===acc);const keep=[],prob=[],tr=[];
  ps.filter(p=>p.rag==="Green").forEach(p=>keep.push({txt:p.name+": delivery stable, QCDP green \u2014 keep cadence.",owner:p.pm}));
  ps.filter(p=>p.predict>=85).forEach(p=>keep.push({txt:p.name+": estimates reliable ("+p.predict+"%).",owner:p.pm}));
  ps.filter(p=>p.rag!=="Green").forEach(p=>prob.push({txt:p.name+": "+p.risk,owner:p.pm}));
  PM_RISKS.filter(r=>ps.some(p=>r.project.indexOf(p.id)>=0)&&!/resolved/i.test(r.status)).slice(0,2).forEach(r=>prob.push({txt:r.title,owner:r.owner}));
  ps.filter(p=>p.rag!=="Green").slice(0,3).forEach(p=>tr.push({txt:p.next,owner:p.pm}));
  if(!keep.length)keep.push({txt:"Weekly reporting discipline maintained.",owner:"PMO"});
  PM_RETRO[acc]={keep:keep.slice(0,4),prob:prob.slice(0,4),tr:tr.slice(0,4)};return PM_RETRO[acc];
}
function pmRetro(){
  const data=pmRetroSeed(retroAcc);
  const col=(title,key,color,promote)=>'<div class="card"><div class="card-head"><h3 style="color:'+color+'">'+title+'</h3><span class="meta">'+data[key].length+'</span></div><div class="card-pad">'
    +data[key].map((it,i)=>'<div class="fb" style="position:relative"><div class="fnote">'+it.txt+'</div><div class="flex center gap" style="margin-top:6px"><span class="tag">@'+it.owner+'</span>'+(promote?'<button class="btn btn-ghost" style="height:24px;font-size:11px;margin-left:auto" data-task="'+i+'">\u2192 task</button>':'')+'</div></div>').join("")
    +'<input class="inp" data-retroadd="'+key+'" placeholder="Add\u2026 use @Name for owner" style="margin-top:8px;font-size:12px"></div></div>';
  return ''
  +'<div class="page-head"><div><div class="eyebrow">Project Monitoring \u00b7 Continuous improvement</div><h1>Retro</h1><p>Account-level retrospective seeded from this week\u2019s reports, risks and metrics. Add items with @owner; promote a Try item into a tracked task.</p></div><span class="chip">Account <select id="retroAcc">'+pmAccts().map(a=>'<option '+(a===retroAcc?"selected":"")+'>'+a+'</option>').join("")+'</select></span></div>'
  +'<div class="grid cols-3">'+col("Keep doing","keep","var(--positive)")+col("Problems","prob","var(--accent)")+col("Try next","tr","var(--primary)",true)+'</div>';
}
/* ---------- REPORT DETAIL ---------- */
function openPmReport(id){
  const p=pmFind(id);if(!p)return;
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const reps=PM_REPORTS.filter(r=>r.proj===id&&r.week===pmWeekSel);
  const trend='<div class="flex center gap"><span class="small muted">trend</span>'+p.hist.map(h=>'<span style="width:18px;height:18px;border-radius:5px;background:var(--'+(h==="G"?"positive":h==="R"?"accent":"warning")+');opacity:.85"></span>').join("")+'</div>';
  const norm=PM_NORM[p.type]||PM_NORM.project;
  const mets=Object.keys(norm).map(a=>{const n=norm[a];const v=p.m[n.m];const rg=deriveRAG(a,p);return '<div class="field"><div class="k">'+a+' \u00b7 '+(METRIC_LABEL[n.m]||n.m)+'</div><div class="v mono">'+(v!=null?v:'\u2014')+' '+(rg?ragDot(rg):'')+'</div></div>';}).join("");
  const repBlocks=reps.map(r=>'<div class="fb"><div class="flex center mb"><span class="tag '+(r.by==="PMO"?"tag-rep":"tag-new")+'">'+r.by+'</span><span class="small muted" style="margin-left:6px">'+r.author+'</span><span style="margin-left:auto">'+ragPill(r.rag)+'</span></div><div class="fm">Summary</div><div class="fnote">'+r.summary+'</div>'+(r.risk&&r.risk!=="N/A."?'<div class="fm" style="margin-top:6px">Risk / Issue</div><div class="fnote">'+r.risk+'</div>':'')+(r.action?'<div class="audit-note" style="margin-top:8px">'+icon('<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>')+'<span><b>Road to Green:</b> '+r.action+' \u00b7 <b>'+r.owner+'</b> \u00b7 due '+r.due+'</span></div>':'')
    +'<div class="fm" style="margin-top:8px">Comments ('+((r.comments||[]).length)+')</div>'+(r.comments||[]).map(c=>'<div class="flex gap" style="padding:6px 0;border-bottom:1px solid var(--line-2)">'+av(c.by,"width:24px;height:24px;font-size:9px")+'<div style="flex:1;min-width:0"><div class="small"><b>'+c.by+'</b> <span class="tag" style="font-size:9px;padding:1px 5px">'+c.role+'</span> <span class="muted mono" style="font-size:10px">'+c.ts+'</span></div><div class="small" style="color:var(--ink-2)">'+c.txt+'</div></div></div>').join("")
    +'<input class="inp" data-cmt="'+r.id+'" placeholder="Write a comment \u2014 Enter to send" style="margin-top:8px;font-size:12px"></div>').join("")||'<div class="empty" style="padding:16px">No report submitted for '+pmWeekSel+'.</div>';
  openModal('<div class="modal-h"><div><h3>'+p.name+' \u00b7 '+pmWeekSel+'</h3><div class="small muted" style="margin-top:3px">'+p.acc+' \u00b7 PM '+p.pm+' \u00b7 PMO '+p.pmoBy+' \u00b7 '+p.phase+'</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="evalForm"><div class="flex center gap mb" style="flex-wrap:wrap">'+ragPill(p.rag)+qchips(p)+'<span class="tag">'+(p.type==="ticket"?"T&M":"Fixed-price")+'</span><span style="margin-left:auto">'+trend+'</span></div>'
   +'<div class="flex center gap small mb" style="color:var(--muted);flex-wrap:wrap"><span>Staffed <b>'+p.staff+'/'+p.plan+'</b></span><span>\u00b7 util <b style="color:'+(p.util>100?'var(--accent)':'inherit')+'">'+p.util+'%</b></span><span>\u00b7 predictability <b>'+p.predict+'%</b></span><span>\u00b7 CSS <b>'+p.css.toFixed(2)+'</b></span>'+(p.reported?'':'<span class="tag" style="background:var(--warning-soft);color:#7d520f">NOT REPORTED</span>')+'</div>'
   +repBlocks+'</div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="pmClose2">Close</button>'+(p.plan>p.staff?'<button class="btn btn-primary" id="pmBf">Raise backfill ('+(p.plan-p.staff)+' seat)</button>':'')+'</div>');
  const m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#pmClose2').onclick=closeModal;
  if(m.querySelector('#pmBf'))m.querySelector('#pmBf').onclick=()=>{closeModal();pmBackfill(p.id);};
  m.querySelectorAll('[data-cmt]').forEach(inp=>inp.addEventListener('keydown',e=>{
    if(e.key!=="Enter")return;const v=inp.value.trim();if(!v)return;
    const r=PM_REPORTS.find(x2=>x2.id===inp.dataset.cmt);if(!r)return;
    (r.comments=r.comments||[]).push({by:me().name,role:PERSONA_LABEL[persona],txt:v,ts:"2026-06-10"});
    audit("Report comment added",p.name,r.by+" report");openPmReport(id);}));
}
/* ---------- WEEKLY REPORT FORM (NORM gate) ---------- */
function openPmForm(){
  const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  const projOpts=PM_PROJECTS.map(p=>'<option value="'+p.id+'">'+p.name+' ('+p.id+')</option>').join("");
  const qcell=(id,nm)=>'<div><label class="field-k">'+nm+'</label><select class="inp qcdp-sel" id="pmf'+id+'"><option>Green</option><option>Yellow</option><option>Red</option></select></div>';
  openModal('<div class="modal-h"><div><h3>Submit weekly report</h3><div class="small muted" style="margin-top:3px">'+pmWeekSel+' · Set QCDP per criterion · overall = worst · non-Green needs a road-to-green</div></div><div class="flex center gap"><span id="pmfPrev"></span><button class="drawer-close" id="modalClose">'+x+'</button></div></div>'
   +'<div class="modal-b" id="evalForm"><div class="field-grid mb"><div style="grid-column:1/-1"><label class="field-k">Project</label><select class="inp" id="pmfProj">'+projOpts+'</select></div>'
   +qcell('Q','Quality')+qcell('C','Cost')+qcell('D','Delivery')+qcell('P','Process')
   +'<div style="grid-column:1/-1"><label class="field-k">Overall status · auto from QCDP (worst)</label><div id="pmfOverall" style="margin-top:4px"></div><input type="hidden" id="pmfRag" value="Green"></div></div>'
   +'<label class="field-k">Executive summary</label><textarea class="inp" id="pmfSum" placeholder="Overall health + key deviation…"></textarea>'
   +'<label class="field-k" style="margin-top:10px">Risk / Issue</label><textarea class="inp" id="pmfRisk" placeholder="Issue (đã xảy ra) / Risk (chưa xảy ra)…"></textarea>'
   +'<div id="pmfRtg" style="display:none;margin-top:12px"><div class="audit-note" style="background:var(--warning-soft);color:#7d520f">'+icon('<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>')+'<span><b>Non-Green</b> — road-to-green is mandatory and becomes a tracked Recovery action.</span></div><label class="field-k" style="margin-top:8px">Road-to-green action</label><input class="inp" id="pmfAct" placeholder="What will bring it back to Green"><div class="field-grid" style="margin-top:8px"><div><label class="field-k">Owner</label><input class="inp" id="pmfOwner" placeholder="Name"></div><div><label class="field-k">Due</label><input class="inp" id="pmfDue" value="2026-W-23"></div></div></div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="pmfCancel">Cancel</button><button class="btn btn-primary" id="pmfSubmit">Submit report</button></div>');
  const m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#pmfCancel').onclick=closeModal;
  const qcdpVals=()=>({Q:m.querySelector('#pmfQ').value,C:m.querySelector('#pmfC').value,D:m.querySelector('#pmfD').value,P:m.querySelector('#pmfP').value});
  const preview=()=>{const q=qcdpVals();const rag=worst([q.Q,q.C,q.D,q.P]);m.querySelector('#pmfRag').value=rag;['Q','C','D','P'].forEach(function(k){var el=m.querySelector('#pmf'+k);if(el)el.dataset.v=el.value;});
    m.querySelector('#pmfPrev').innerHTML=ragPill(rag);
    m.querySelector('#pmfOverall').innerHTML=ragPill(rag)+' <span class="small muted">= worst of the four</span>';
    m.querySelector('#pmfRtg').style.display=rag==="Green"?"none":"block";
    return {rag:rag,q:q};};
  const loadProj=()=>{const p=pmFind(m.querySelector('#pmfProj').value);const qa=(p&&p.qauto)||{};['Q','C','D','P'].forEach(k=>{const el=m.querySelector('#pmf'+k);if(el&&['Green','Yellow','Red'].indexOf(qa[k])>=0)el.value=qa[k];});preview();};
  m.querySelector('#pmfProj').onchange=loadProj;
  m.querySelectorAll('.qcdp-sel').forEach(s=>s.onchange=preview);
  loadProj();
  m.querySelector('#pmfSubmit').onclick=()=>{
    const pid=m.querySelector('#pmfProj').value;const p=pmFind(pid);const by=fullAccess()?"PMO":"PM";
    const pv=preview();
    if(pv.rag!=="Green"&&(!m.querySelector('#pmfAct').value.trim()||!m.querySelector('#pmfOwner').value.trim())){toast("Non-Green report needs road-to-green action + owner","warn");return;}
    p.rag=pv.rag;p.qauto=pv.q;p.reported=true;p.gw=0;
    const r={id:"R"+(++PM_RSEQ),proj:pid,week:pmWeekSel,by:by,author:me().name,rag:p.rag,qcdp:pv.q,summary:m.querySelector('#pmfSum').value||p.summary,risk:m.querySelector('#pmfRisk').value||p.risk};
    if(p.rag!=="Green"){r.action=m.querySelector('#pmfAct').value;r.owner=m.querySelector('#pmfOwner').value;r.due=m.querySelector('#pmfDue').value||"2026-W-23";
      PM_RISKS.unshift({id:"REC-"+(100+PM_RISKS.length),project:pid,title:"Road to Green: "+r.action,type:"Recovery",sev:"Important",pri:"P1",status:"Open",owner:r.owner,due:r.due,action:"From "+by+" weekly report "+pmWeekSel});}
    const old=PM_REPORTS.findIndex(x2=>x2.proj===pid&&x2.by===by&&x2.week===pmWeekSel);if(old>=0)PM_REPORTS[old]=r;else PM_REPORTS.push(r);
    audit("Weekly report submitted",p.name,by+" · "+p.rag);closeModal();renderProject(curTab);toast("Report submitted — "+p.name+" · "+p.rag+(p.rag!=="Green"?" · Recovery action created":""));};
}

function pmBackfill(id){
  const p=pmFind(id);if(!p)return;
  const req={id:"REQ-PM"+(3100+(++PM_REQSEQ)),title:"Backfill \u00b7 "+p.name+" ("+p.acc+")",acc:PM_ACCMAP[p.acc]||null,prj:null,grade:"L4",kind:"replacement",stage:1,status:"Open",start:"2026-06-10",due:"2026-08-01",stack:[["per project stack","Advanced"]],note:"Raised from Project Monitoring \u00b7 "+p.id+" \u00b7 gap "+(Math.max(1,p.plan-p.staff))+" seat(s)."};
  REQS.unshift(req);audit("Backfill requisition raised",p.name,req.id);
  toast("Backfill "+req.id+" created in People \u00b7 Recruitment","info");
}
/* ---------- ROUTER ---------- */
const PM_VIEWS={portfolio:pmPortfolio,requests:pmRequests,weekly:pmWeekly,resourcing:pmResourcing,risks:pmRisks,metrics:pmMetrics,retro:pmRetro};
function renderProject(tab){
 if(!PM_VIEWS[tab])tab="portfolio";
 if(tab==="requests"&&!fullAccess()&&!isManager())tab="portfolio";
 if(tab!=="portfolio")pmExcView="overview";
 var _c=document.getElementById('content'); if(_c)_c.classList.remove('rep-mode');
 document.getElementById("content").innerHTML='<section class="view active">'+PM_VIEWS[tab]()+'</section>';
 if(typeof updateBell==="function")updateBell();
 document.querySelectorAll("[data-pmrow]").forEach(el=>el.onclick=(e)=>{e.stopPropagation();openPmReport(el.dataset.pmrow);});
 document.querySelectorAll("[data-accrow]").forEach(el=>el.onclick=()=>{const a=el.dataset.accrow;if(pmExp.has(a))pmExp.delete(a);else pmExp.add(a);renderProject("portfolio");});
 const ea=document.querySelector("[data-expall]");if(ea)ea.onclick=()=>{pmExp=new Set(pmAccts());renderProject("portfolio");};
 const ca=document.querySelector("[data-collall]");if(ca)ca.onclick=()=>{pmExp=new Set();renderProject("portfolio");};
 const vd=document.querySelector("[data-pmexcdetail]");if(vd)vd.onclick=()=>{pmExcView="detail";renderProject("portfolio");};
 const vb=document.querySelector("[data-pmexcback]");if(vb)vb.onclick=()=>{pmExcView="overview";renderProject("portfolio");};
 document.querySelectorAll("[data-excpage]").forEach(b=>{if(!b.disabled)b.onclick=()=>{pmExcPage=parseInt(b.dataset.excpage);renderProject("portfolio");};});
 document.querySelectorAll("[data-prq]").forEach(el=>el.onclick=()=>openPrq(el.dataset.prq));
 document.querySelectorAll("[data-prqnew]").forEach(el=>el.onclick=()=>openPrqForm());
 document.querySelectorAll("[data-pmnew]").forEach(el=>el.onclick=()=>openPmForm());
 document.querySelectorAll("[data-pmbackfill]").forEach(el=>el.onclick=(e)=>{e.stopPropagation();pmBackfill(el.dataset.pmbackfill);});
 const gr=document.querySelector("[data-gotoretro]");if(gr)gr.onclick=()=>{curTab="retro";renderModTabs();renderProject("retro");};
 const wk=document.getElementById("pmWeek");if(wk)wk.onchange=()=>{pmWeekSel=wk.value;renderProject(tab);};
 const ac=document.getElementById("pmAcc");if(ac)ac.onchange=()=>{pmAccSel=ac.value;pmPrjSel="all";raPrjSel="all";pmWkPage=0;renderProject(tab);};
 {const rpj=document.getElementById("raPrj");if(rpj)rpj.onchange=()=>{raPrjSel=rpj.value;renderProject(tab);};}
 document.querySelectorAll("[data-raedit]").forEach(el=>el.onclick=()=>{raEditRow=+el.dataset.raedit;renderProject("resourcing");});
 document.querySelectorAll("[data-rasave]").forEach(el=>el.onclick=()=>{raEditRow=-1;renderProject("resourcing");toast("Saved","ok");});
 document.querySelectorAll("[data-raf]").forEach(el=>{const h=()=>{const pr=el.dataset.raf.split("_");raSetField(+pr[0],pr[1],el.value);};if(el.tagName==="SELECT"||el.type==="date")el.onchange=h;else el.onblur=h;});
 document.querySelectorAll("[data-radel]").forEach(el=>el.onclick=()=>raDelete(+el.dataset.radel));
 {const aab=document.getElementById("raAddBtn");if(aab)aab.onclick=()=>raAddInline();}
 const pj=document.getElementById("pmPrj");if(pj)pj.onchange=()=>{pmPrjSel=pj.value;pmWkPage=0;renderProject(tab);};
 document.querySelectorAll("[data-wkpage]").forEach(b=>{if(!b.disabled)b.onclick=()=>{pmWkPage=+b.dataset.wkpage;renderProject(tab);};});
 const rt=document.getElementById("pmRiskType");if(rt)rt.onchange=()=>{pmRiskSel=rt.value;renderProject(tab);};
 document.querySelectorAll("[data-kpisub]").forEach(b=>b.onclick=()=>{kpiSub=b.dataset.kpisub;renderProject("metrics");});
 const kpj=document.getElementById("kpiProj");if(kpj)kpj.onchange=()=>{kpiProj=kpj.value;renderProject("metrics");};
 {const kcb=document.getElementById("kpiCfgBtn");if(kcb)kcb.onclick=()=>kpiConfigOpen();}
 {const kib=document.getElementById("kpiInputBtn");if(kib)kib.onclick=()=>{const pp=document.getElementById("pmKpiProj");kpiManualInput(pp?pp.value:null);};}
 document.querySelectorAll("[data-kpidrill]").forEach(b=>b.onclick=()=>kpiDrill(b.dataset.kpidrill));
 document.querySelectorAll("[data-capaf]").forEach(b=>b.onclick=()=>{kpiCapaF=b.dataset.capaf;renderProject("metrics");});
 document.querySelectorAll("[data-capaadv]").forEach(b=>b.onclick=()=>pmCapaAdvance(b.dataset.capaadv));
 const ra=document.getElementById("retroAcc");if(ra)ra.onchange=()=>{retroAcc=ra.value;renderProject("retro");};
 document.querySelectorAll("[data-task]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();const it=PM_RETRO[retroAcc].tr[+b.dataset.task];if(!it)return;PM_RISKS.unshift({id:"ACT-"+(200+PM_RISKS.length),project:retroAcc,title:it.txt,type:"Action",sev:"Important",pri:"P2",status:"Open",owner:it.owner,due:"2026-W-24",action:"Promoted from retro"});audit("Retro item promoted to task",retroAcc,it.txt.slice(0,60));toast("Tracked as task \u2014 see Risks & Issues");});
 document.querySelectorAll("[data-retroadd]").forEach(inp=>inp.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const v=inp.value.trim();if(!v)return;const mt=v.match(/@(\S+(?:\s\S+)?)/);const owner=mt?mt[1]:me().name;PM_RETRO[retroAcc][inp.dataset.retroadd].push({txt:v.replace(/@\S+(?:\s\S+)?/,"").trim()||v,owner:owner});renderProject("retro");}));
}
const NAV_ICON={
 dashboard:'<rect x="3" y="3" width="7" height="9" rx="1.4"/><rect x="14" y="3" width="7" height="5" rx="1.4"/><rect x="14" y="12" width="7" height="9" rx="1.4"/><rect x="3" y="16" width="7" height="5" rx="1.4"/>',
 employees:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
 org:'<rect x="9" y="2" width="6" height="5.5" rx="1.2"/><rect x="2.5" y="16.5" width="6" height="5.5" rx="1.2"/><rect x="15.5" y="16.5" width="6" height="5.5" rx="1.2"/><path d="M12 7.5v4M5.5 16.5v-2.5h13v2.5"/>',
 allocation:'<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7" rx="1"/><rect x="13" y="6" width="3" height="11" rx="1"/>',
 recruitment:'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>',
 talent:'<path d="M12 2.5l2.6 5.7 6.2.6-4.7 4.1 1.4 6.1L12 16.9l-5.5 3.1 1.4-6.1-4.7-4.1 6.2-.6z"/>',
 lifecycle:'<path d="M21 12a9 9 0 1 1-3.5-7.1"/><polyline points="21 3 21 8 16 8"/>',
 candidates:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/>',
 requisitions:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
 interviews:'<rect x="3" y="4.5" width="18" height="17" rx="2"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 15l2 2 4-4"/>',
 insights:'<path d="M3 3v18h18"/><path d="M7 14l3-3 3 3 5-6"/>',
 reports:'<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7" rx=".5"/><rect x="12" y="6" width="3" height="11" rx=".5"/><rect x="17" y="13" width="3" height="4" rx=".5"/>',
 portfolio:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.2A2.2 2.2 0 0 1 10.2 3h3.6A2.2 2.2 0 0 1 16 5.2V7"/>',
 requests:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/>',
 weekly:'<rect x="3" y="4.5" width="18" height="17" rx="2"/><line x1="16" y1="2.5" x2="16" y2="6.5"/><line x1="8" y1="2.5" x2="8" y2="6.5"/><line x1="3" y1="10" x2="21" y2="10"/>',
 resourcing:'<path d="M22 12h-4l-3 8L9 4l-3 8H2"/>',
 risks:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
 retro:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
 metrics:'<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6" rx=".5"/><rect x="12" y="7" width="3" height="10" rx=".5"/><rect x="17" y="13" width="3" height="4" rx=".5"/>'
};
function navIcon(p){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';}
function renderModTabs(){
  const el=document.getElementById("sideNav");if(!el)return;
  let h="";
  [["ai","Super Century AI"],["people","People"],["hiring","Hiring Management"],["project","Project Monitoring"],["lifecycle","Journey"]].forEach(g=>{
    let tabs=MOD_TABS[g[0]];if(!tabs)return;
    const empHire=(g[0]==="hiring"&&isEmployee());
    if(empHire)tabs=tabs.filter(t=>t[0]==="requisitions");
    if(g[0]==="project"&&!fullAccess()&&!isManager())tabs=tabs.filter(t=>t[0]!=="requests");
    h+='<div class="nav-group-label">'+(empHire?"Open Roles":g[1])+'</div>';
    tabs.forEach(tb=>{
      const active=(curMod===g[0]&&curTab===tb[0]);
      const bn=g[0]==="hiring"?hiringBadge(tb[0]):(g[0]==="lifecycle"?lcBadge(tb[0]):tb[2]);
      const lbl=(empHire&&tb[0]==="requisitions")?"Open Roles":tb[1];
      h+='<button class="nav-item'+(active?" active":"")+'" title="'+lbl+'" data-mod="'+g[0]+'" data-tab="'+tb[0]+'">'+navIcon(NAV_ICON[tb[0]]||"")+'<span class="ni-lbl">'+lbl+'</span>'+(bn?'<span class="badge">'+bn+'</span>':'')+'</button>';
    });
  });
  el.innerHTML=h;
  el.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{const m=b.dataset.mod,t=b.dataset.tab;if(m===curMod&&t===curTab)return;curMod=m;curTab=t;renderModTabs();renderContent();const c=document.getElementById("content");if(c)c.scrollTop=0;});
}
function renderContent(){
  if(curMod==="people"){render(curTab);}
  else if(curMod==="hiring"){renderHiringTab(curTab);}
  else if(curMod==="lifecycle"){renderLifecycleTab(curTab);}
  else if(curMod==="ai"){renderAI();}
  else{renderProject(curTab);}
}
function showTab(t){curTab=t;renderModTabs();renderContent();}
function showModule(m){curMod=m;curTab=MOD_TABS[m][0][0];renderModTabs();renderContent();}
function render(v){
  var _c=document.getElementById('content'); if(_c&&v!=='lifecycle')_c.classList.remove('rep-mode');
  document.getElementById("content").innerHTML='<section class="view active">'+VIEWS[v]()+'</section>';
  if(typeof updateBell==="function")updateBell();
  if(v==="performance"){document.querySelectorAll("[data-eval]").forEach(b=>b.onclick=()=>openEval(b.dataset.eval));document.querySelectorAll("[data-selfeval]").forEach(b=>b.onclick=()=>openSelfEval(b.dataset.selfeval));document.querySelectorAll("[data-perfack]").forEach(b=>b.onclick=()=>perfAck(b.dataset.perfack));const sp2=document.getElementById("scPer");if(sp2)sp2.onchange=()=>{scPeriod=sp2.value;render("performance");};}
  if(v==="dashboard"){document.querySelectorAll("[data-eval]").forEach(b=>b.onclick=()=>openEval(b.dataset.eval));const sp=document.getElementById("scPer");if(sp)sp.onchange=()=>{scPeriod=sp.value;render("dashboard");};document.querySelectorAll("[data-inspri]").forEach(b=>b.onclick=()=>{insPri=b.dataset.inspri;insPage=0;refreshInsList();document.querySelectorAll("[data-inspri]").forEach(x=>x.classList.toggle("on",x.dataset.inspri===insPri));});refreshInsList();const gb=document.getElementById("amGrantBtn");if(gb)gb.onclick=()=>{const sel=document.getElementById("amGrantSel");if(sel&&sel.value){amGrants.add(sel.value);audit("Account view grant requested",accName(sel.value),me().name+" (AM)");toast("Access granted \u2014 "+accName(sel.value));render("dashboard");}};}
  if(v==="dashboard"){document.querySelectorAll("[data-dashf]").forEach(s=>s.onchange=()=>{dashScope[s.dataset.dashf]=s.value;render("dashboard");});}
  if(v==="employees"){renderEmp();const g=document.getElementById("vGrid"),l=document.getElementById("vList");if(g)g.onclick=()=>{empView="grid";render("employees");};if(l)l.onclick=()=>{empView="list";render("employees");};const es=document.getElementById("empStatus");if(es)es.onchange=()=>{empStatus=es.value;renderEmp();};const ea=document.getElementById("empAcc");if(ea)ea.onchange=()=>{empAcc=ea.value;renderEmp();};const ae=document.querySelector("[data-addemp]");if(ae)ae.onclick=()=>openOnboardForm();const ix=document.querySelector("[data-importxlsx]");if(ix)ix.onclick=()=>openImportForm();}
  if(v==="org"){renderOrg();document.querySelectorAll("[data-lvl]").forEach(b=>b.onclick=()=>{orgLevel=b.dataset.lvl;render("org");});}
  if(v==="allocation"){renderAllocTable();renderUtilTable();const s=document.getElementById("allocSearch");if(s)s.addEventListener("input",e=>{allocQ=e.target.value;allocPage=1;renderAllocTable();});const u=document.getElementById("utilSearch");if(u)u.addEventListener("input",e=>{utilQ=e.target.value;utilPage=1;renderUtilTable();});}
  if(v==="dashboard"){renderTalentTable();const c=document.getElementById("talentCat");if(c)c.onchange=()=>{talentCat=c.value;talentPage=1;renderTalentTable();};const ts=document.getElementById("talentSearch");if(ts)ts.addEventListener("input",e=>{talentQ=e.target.value;talentPage=1;renderTalentTable();});}
  if(v==="recruitment"){renderRecruitment();}
  if(v==="lifecycle"){renderLC();document.querySelectorAll("[data-lctab]").forEach(b=>b.onclick=()=>{lcTab=b.dataset.lctab;render("lifecycle");});}
}
function go(v){curMod="people";curTab=v;renderModTabs();render(v);}
/* grouped sidebar nav binds its own clicks inside renderModTabs */
document.getElementById("scrim").onclick=closeProfile;
document.getElementById("mback").onclick=closeModal;
document.getElementById("persona").onchange=e=>{persona=e.target.value;renderMe();closeProfile();if(curMod==="hiring"&&isEmployee())curTab="requisitions";renderModTabs();renderContent();};
document.getElementById("globalSearch").addEventListener("input",e=>{empQ=e.target.value;if(curMod!=="people"||curTab!=="employees"){go("employees");}else renderEmp();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeProfile();closeModal();}});
/* Lifecycle module is registered in the appended block below; boot moved to end of file so all const data is initialized first. */

/* =====================================================================
   EXTERNAL RECRUITMENT (ATS) — candidates · interviews · insights · AI
   Added on top of the internal-mobility module. Shares engine scope.
   ===================================================================== */
var recSub = 'pipeline';
var candQ = '', candReqFilter = '', candShowRejected = false, intFilter = 'all', candView='board';
var CAND_STAGES = ["New","Screening","Interview","Offer","Hired"];
var SENIORITY = ["Intern","Junior","Mid","Senior","Lead","Principal"];
var SOURCES = ["LinkedIn","Referral","TopCV","ITviec","VietnamWorks","Career site","Agency"];
var INT_ROUNDS = ["Screening","Technical","Culture-fit","Final"];
var INT_MODES = ["Online","Onsite"];

function dDiff(a,b){return Math.round((new Date(b)-new Date(a))/864e5);}
function titleCaseSkill(s){return s.split(/[ .\/]/).map(function(w){return w.charAt(0).toUpperCase()+w.slice(1);}).join(' ').replace('.js','.js');}
function reqTitle(id){var r=REQS.find(function(x){return x.id===id;});return r?r.title:'Unassigned';}

var CAND_SEQ = 10;
var CANDIDATES = [
 {id:"CAND-001",name:"Tran Minh Quan",email:"quan.tranminh@gmail.com",phone:"+84 90 234 1188",dob:"1992-04-18",gender:"Male",seniority:"Senior",req:"REQ-3001",source:"LinkedIn",status:"Interview",cv:"Tran_Minh_Quan_CV.pdf",rating:4,skills:["React","TypeScript","Node.js","GraphQL"],note:"Led a 4-person FE team; built an internal design system. Strong on performance.",createdAt:"2026-05-26",hist:[{ts:"2026-05-26 09:10",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:"Sourced via LinkedIn"},{ts:"2026-05-28 14:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:"Phone screen passed"},{ts:"2026-06-02 10:30",actor:"Pham Quoc Bao (EM)",action:"Moved to Interview",note:"Technical round scheduled"}]},
 {id:"CAND-002",name:"Le Thi Thu Trang",email:"trang.lethu@gmail.com",phone:"+84 93 771 5520",dob:"1996-08-02",gender:"Female",seniority:"Mid",req:"REQ-3001",source:"TopCV",status:"Screening",cv:"LeThiThuTrang_CV.pdf",rating:3,skills:["React","JavaScript","CSS","Jest"],note:"3 yrs React. Good communicator, lighter on TypeScript.",createdAt:"2026-06-01",hist:[{ts:"2026-06-01 08:40",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-06-03 16:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""}]},
 {id:"CAND-003",name:"Nguyen Hoang Long",email:"long.nguyenhoang@gmail.com",phone:"+84 98 220 4471",dob:"1990-12-11",gender:"Male",seniority:"Senior",req:"REQ-3002",source:"Referral",status:"New",cv:"NHL_resume.pdf",rating:0,skills:["Go","PostgreSQL","gRPC","Kafka"],note:"Referred by Pham Quoc Bao. 6 yrs Go at a fintech.",createdAt:"2026-06-07",hist:[{ts:"2026-06-07 11:20",actor:"Pham Quoc Bao (EM)",action:"Candidate created — CV parsed",note:"Internal referral"}]},
 {id:"CAND-004",name:"Pham Anh Duc",email:"ducpa.devops@gmail.com",phone:"+84 91 663 8890",dob:"1989-03-27",gender:"Male",seniority:"Senior",req:"REQ-3003",source:"Agency",status:"Interview",cv:"PhamAnhDuc_DevOps.pdf",rating:4,skills:["AWS","Kubernetes","Terraform","GitOps"],note:"Banking-grade infra background — strong fit for the Maybank backfill.",createdAt:"2026-05-30",hist:[{ts:"2026-05-30 09:00",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-06-01 10:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""},{ts:"2026-06-05 13:30",actor:"Vo Thanh Dat (EM)",action:"Moved to Interview",note:"Critical role — fast-tracked"}]},
 {id:"CAND-005",name:"Vo Thi Kim Ngan",email:"ngan.vtk@gmail.com",phone:"+84 90 558 1123",dob:"1995-06-15",gender:"Female",seniority:"Mid",req:"REQ-3004",source:"VietnamWorks",status:"Offer",cv:"VoThiKimNgan_BA.pdf",rating:5,skills:["SQL","Stakeholder Mgmt","User Stories","Tableau"],note:"Excellent stakeholder communication; offer drafted at L3.",createdAt:"2026-05-20",decidedAt:"2026-06-06",hist:[{ts:"2026-05-20 08:30",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-05-24 14:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""},{ts:"2026-05-29 10:00",actor:"Hoang Thi Lan (EM)",action:"Moved to Interview",note:""},{ts:"2026-06-06 17:00",actor:"PMO · Nguyen Khanh Linh",action:"Moved to Offer",note:"Offer approved — awaiting acceptance"}]},
 {id:"CAND-006",name:"Dang Quoc Huy",email:"huy.dangquoc@gmail.com",phone:"+84 97 332 6654",dob:"1991-01-09",gender:"Male",seniority:"Senior",req:"REQ-3006",source:"LinkedIn",status:"Screening",cv:"DangQuocHuy_ML.pdf",rating:3,skills:["Python","Machine Learning","PyTorch","MLOps"],note:"Productionized forecasting models; relevant to AERIS-DA.",createdAt:"2026-06-03",hist:[{ts:"2026-06-03 09:50",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-06-05 11:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""}]},
 {id:"CAND-007",name:"Bui Thi Lan",email:"lan.buithi.qa@gmail.com",phone:"+84 94 880 2217",dob:"1999-10-30",gender:"Female",seniority:"Junior",req:"REQ-3005",source:"ITviec",status:"New",cv:"BuiThiLan_QA.pdf",rating:0,skills:["Playwright","Python","Selenium"],note:"2 yrs automation. Eager, needs CI/CD coaching.",createdAt:"2026-06-08",hist:[{ts:"2026-06-08 10:15",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""}]},
 {id:"CAND-008",name:"Hoang Van Son",email:"son.hoangvan@gmail.com",phone:"+84 90 991 4432",dob:"1988-07-22",gender:"Male",seniority:"Senior",req:"REQ-3007",source:"Agency",status:"Interview",cv:"HoangVanSon_Kafka.pdf",rating:4,skills:["Java","Kafka","Kafka Streams","Distributed Systems"],note:"Deep streaming background; ran Kafka at telecom scale.",createdAt:"2026-05-28",hist:[{ts:"2026-05-28 13:00",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-06-01 09:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""},{ts:"2026-06-06 15:00",actor:"Nguyen Anh Thai (EM)",action:"Moved to Interview",note:"Final round set"}]},
 {id:"CAND-009",name:"Nguyen Thi Mai Anh",email:"maianh.nt@gmail.com",phone:"+84 90 114 7788",dob:"1993-05-08",gender:"Female",seniority:"Senior",req:"REQ-3001",source:"Referral",status:"Hired",cv:"NguyenThiMaiAnh_CV.pdf",rating:5,skills:["React","TypeScript","Next.js","Design Systems"],note:"Top of the pool — accepted offer, starts soon.",createdAt:"2026-05-12",decidedAt:"2026-06-08",hist:[{ts:"2026-05-12 09:00",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-05-16 10:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""},{ts:"2026-05-22 14:00",actor:"Pham Quoc Bao (EM)",action:"Moved to Interview",note:""},{ts:"2026-06-02 11:00",actor:"PMO · Nguyen Khanh Linh",action:"Moved to Offer",note:""},{ts:"2026-06-08 16:30",actor:"Le Thu Ha (TA)",action:"Marked Hired",note:"Offer accepted"}]},
 {id:"CAND-010",name:"Tran Dinh Phong",email:"phong.trandinh@gmail.com",phone:"+84 96 220 9981",dob:"1994-02-14",gender:"Male",seniority:"Mid",req:"REQ-3003",source:"TopCV",status:"Rejected",cv:"TranDinhPhong_CV.pdf",rating:2,skills:["AWS","Docker","Linux"],note:"Good AWS breadth but shallow Kubernetes; failed the incident scenario.",createdAt:"2026-05-29",decidedAt:"2026-06-04",hist:[{ts:"2026-05-29 09:00",actor:"Le Thu Ha (TA)",action:"Candidate created — CV parsed",note:""},{ts:"2026-06-01 10:00",actor:"Le Thu Ha (TA)",action:"Moved to Screening",note:""},{ts:"2026-06-02 14:00",actor:"Vo Thanh Dat (EM)",action:"Moved to Interview",note:""},{ts:"2026-06-04 16:00",actor:"Vo Thanh Dat (EM)",action:"Rejected",note:"K8s depth insufficient for a banking workload"}]}
];

var INT_SEQ = 8;
var INTERVIEWS = [
 {id:"INT-001",cand:"CAND-008",round:"Final",date:"2026-06-11",time:"09:30",dur:60,mode:"Online",panel:["Nguyen Anh Thai","Pham Quoc Bao"],status:"Scheduled",result:"Pending",note:"Architecture deep-dive"},
 {id:"INT-002",cand:"CAND-004",round:"Technical",date:"2026-06-12",time:"14:00",dur:90,mode:"Onsite",panel:["Vo Thanh Dat"],status:"Scheduled",result:"Pending",note:"Live incident-response scenario"},
 {id:"INT-003",cand:"CAND-001",round:"Technical",date:"2026-06-13",time:"10:00",dur:60,mode:"Online",panel:["Pham Quoc Bao","Tran Thu Ha"],status:"Scheduled",result:"Pending",note:""},
 {id:"INT-004",cand:"CAND-002",round:"Screening",date:"2026-06-13",time:"09:00",dur:30,mode:"Online",panel:["Le Thu Ha"],status:"Scheduled",result:"Pending",note:""},
 {id:"INT-005",cand:"CAND-005",round:"Culture-fit",date:"2026-06-14",time:"16:00",dur:45,mode:"Online",panel:["Hoang Thi Lan","Nguyen Khanh Linh"],status:"Scheduled",result:"Pending",note:"Final culture round before offer"},
 {id:"INT-006",cand:"CAND-009",round:"Final",date:"2026-06-02",time:"11:00",dur:60,mode:"Onsite",panel:["Pham Quoc Bao","Nguyen Khanh Linh"],status:"Completed",result:"Pass",note:"Outstanding — recommend hire"},
 {id:"INT-007",cand:"CAND-010",round:"Technical",date:"2026-06-03",time:"15:00",dur:90,mode:"Online",panel:["Vo Thanh Dat"],status:"Completed",result:"Fail",note:"K8s depth insufficient"}
];

/* Closed-position history — drives fulfillment % and leadtime funnel */
var HIRE_HISTORY = [
 {pos:"Frontend Engineer",acc:"ACC-A",created:"2026-02-03",firstCv:"2026-02-12",approved:"2026-03-18",due:"2026-03-20"},
 {pos:"Go Backend Engineer",acc:"ACC-A",created:"2026-02-17",firstCv:"2026-03-01",approved:"2026-04-05",due:"2026-03-31"},
 {pos:"DevOps Engineer",acc:"ACC-B",created:"2026-03-02",firstCv:"2026-03-10",approved:"2026-04-08",due:"2026-04-15"},
 {pos:"Business Analyst",acc:"ACC-C",created:"2026-03-09",firstCv:"2026-03-22",approved:"2026-04-20",due:"2026-04-18"},
 {pos:"QA Automation Engineer",acc:"ACC-A",created:"2026-03-16",firstCv:"2026-03-24",approved:"2026-04-22",due:"2026-05-01"},
 {pos:"ML Engineer",acc:"ACC-E",created:"2026-02-24",firstCv:"2026-03-06",approved:"2026-04-15",due:"2026-04-10"},
 {pos:"Kafka Platform Engineer",acc:"ACC-D",created:"2026-03-23",firstCv:"2026-04-01",approved:"2026-05-02",due:"2026-05-10"},
 {pos:"Mobile Engineer",acc:"ACC-B",created:"2026-04-01",firstCv:"2026-04-09",approved:"2026-05-06",due:"2026-05-15"},
 {pos:"Data Engineer",acc:"ACC-E",created:"2026-04-06",firstCv:"2026-04-18",approved:"2026-05-28",due:"2026-05-20"},
 {pos:"UX Designer",acc:"ACC-C",created:"2026-04-13",firstCv:"2026-04-21",approved:"2026-05-18",due:"2026-05-30"}
];

var CASE_STUDIES = [
 {name:"Nguyen Thi Mai Anh",role:"Senior React Engineer",result:"pass",round:"Final",reason:"Outstanding system-design round and a shipped design-system portfolio. Strong culture signals.",tags:["strong-portfolio","system-design","culture-fit"]},
 {name:"Vo Thi Kim Ngan",role:"Business Analyst",result:"pass",round:"Final",reason:"Exceptional stakeholder communication and strong SQL. Clear, testable requirements.",tags:["communication","sql","stakeholder"]},
 {name:"Vu Hoang Yen",role:"Senior ML Engineer",result:"pass",round:"Technical",reason:"Strong MLOps; had productionized forecasting models with a model registry before.",tags:["mlops","production","ownership"]},
 {name:"Tran Dinh Phong",role:"DevOps Engineer",result:"fail",round:"Technical",reason:"Good AWS breadth but shallow Kubernetes depth; struggled on the incident-response scenario.",tags:["k8s-depth","incident-response"]},
 {name:"Le Van Khanh",role:"Go Backend Engineer",result:"fail",round:"Technical",reason:"Solid fundamentals but failed the concurrency live-coding task under time pressure.",tags:["concurrency","live-coding"]},
 {name:"Do Minh Tri",role:"QA Automation Engineer",result:"fail",round:"Technical",reason:"Weak CI integration experience; could not structure a flake-reduction strategy.",tags:["ci-cd","test-strategy","live-coding"]},
 {name:"Pham Hong Son",role:"Kafka Platform Engineer",result:"fail",round:"Final",reason:"Strong on paper; comp expectations far above band and limited distributed-systems depth.",tags:["comp-misalignment","system-design"]}
];

/* CV auto-fill: rotating pool of realistic 'parsed' profiles */
var CV_POOL = [
 {name:"Ngo Gia Bao",email:"giabao.ngo@gmail.com",phone:"+84 91 552 8841",dob:"1994-09-12",gender:"Male",seniority:"Senior",skills:["React","TypeScript","GraphQL","Node.js"]},
 {name:"Tran Khanh Linh",email:"khanhlinh.tran@gmail.com",phone:"+84 90 117 2245",dob:"1996-02-25",gender:"Female",seniority:"Mid",skills:["Go","PostgreSQL","Docker","gRPC"]},
 {name:"Pham Duc Anh",email:"ducanh.pham@gmail.com",phone:"+84 98 663 1190",dob:"1991-11-03",gender:"Male",seniority:"Senior",skills:["AWS","Kubernetes","Terraform","GitOps"]},
 {name:"Le Thi Hong Nhung",email:"hongnhung.le@gmail.com",phone:"+84 93 884 5510",dob:"1998-07-19",gender:"Female",seniority:"Junior",skills:["Playwright","Python","Selenium"]},
 {name:"Dinh Cong Minh",email:"congminh.dinh@gmail.com",phone:"+84 97 441 2208",dob:"1990-04-06",gender:"Male",seniority:"Lead",skills:["Java","Kafka","Spring","Microservices"]}
];
var cvPoolIdx = 0;

function candStatusPill(s){
  var slug = s.toLowerCase().replace(/[^a-z]/g,'');
  return '<span class="status-pill cst-'+slug+'">'+s+'</span>';
}
function candRating(n){
  var s='';for(var i=1;i<=5;i++){s+='<svg viewBox="0 0 24 24" class="rstar'+(i<=n?' on':'')+'" stroke="currentColor" stroke-width="1.6" fill="none"><polygon points="12 2 15 8.5 22 9.3 17 14 18.2 21 12 17.6 5.8 21 7 14 2 9.3 9 8.5 12 2"/></svg>';}
  return '<span class="cand-rating" title="'+(n||0)+'/5">'+s+'</span>';
}

function recSubnav(){
  var open=REQS.filter(function(r){return r.status!=='Filled';}).length;
  var sched=INTERVIEWS.filter(function(i){return i.status==='Scheduled';}).length;
  var active=CANDIDATES.filter(function(c){return ['Hired','Rejected'].indexOf(c.status)<0;}).length;
  var tabs=[['pipeline','Candidates',active],['interviews','Interviews',sched],['requisitions','Requisitions',open],['insights','Insights',null]];
  return '<div class="rec-subnav">'+tabs.map(function(t){return '<button class="seg-btn '+(recSub===t[0]?'on':'')+'" data-recsub="'+t[0]+'">'+t[1]+(t[2]!=null?'<span class="seg-n">'+t[2]+'</span>':'')+'</button>';}).join('')+'</div>';
}

/* ---------------- CANDIDATES (pipeline board) ---------------- */
function candCard(c){
  var active=['Hired','Rejected'].indexOf(c.status)<0;
  var age=dDiff(stageSince(c),'2026-06-09');
  var ageCls=age>=14?'age-hot':age>=7?'age-warn':'';
  var ageTxt=active?'<span class="cc-age '+ageCls+'" title="'+age+' days in '+c.status+'">'+icon('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>')+age+'d</span>':'';
  return '<div class="cand-card" data-cand="'+c.id+'">'
   +'<div class="cc-top">'+av(c.name,"width:30px;height:30px;font-size:11px")+'<div class="cc-id"><div class="cc-name">'+c.name+'</div><div class="cc-sen">'+c.seniority+' \u00b7 '+c.source+'</div></div></div>'
   +'<div class="cc-role">'+icon('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.2A2.2 2.2 0 0 1 10.2 3h3.6A2.2 2.2 0 0 1 16 5.2V7"/>')+'<span>'+reqTitle(c.req)+'</span></div>'
   +'<div class="cc-foot">'+(c.rating?candRating(c.rating):'<span class="cc-unrated">Not rated</span>')+ageTxt+'</div>'
   +'</div>';
}
function renderCandidates(box){
  var list=CANDIDATES.filter(function(c){
    if(!candInScope(c)) return false;
    if(candReqFilter && c.req!==candReqFilter) return false;
    if(candQ){var q=candQ.toLowerCase();if((c.name+' '+reqTitle(c.req)+' '+c.skills.join(' ')).toLowerCase().indexOf(q)<0)return false;}
    return true;
  });
  var inPipe=list.filter(function(c){return ['Hired','Rejected'].indexOf(c.status)<0;}).length;
  var offers=CANDIDATES.filter(function(c){return c.status==='Offer';}).length;
  var sched=INTERVIEWS.filter(function(i){return i.status==='Scheduled';}).length;
  var rej=list.filter(function(c){return c.status==='Rejected';});
  var stageMeta=[['New','New','var(--primary-ink)'],['Screening','Screening','var(--info-ink)'],['Interview','Interviewing','var(--warning-ink)'],['Offer','Offering','var(--teal-ink)'],['Hired','Hired','var(--positive-ink)']];
  var kpis=recStrip(stageMeta.map(function(s){return {l:s[1],v:CANDIDATES.filter(function(c){return c.status===s[0];}).length,color:s[2]};}).concat([{l:'Cancelled',v:CANDIDATES.filter(function(c){return c.status==='Rejected';}).length,color:'var(--accent-ink)'}]));
  var toolbar='<div class="rec-toolbar"><div class="flex center gap" style="flex:1;flex-wrap:wrap">'
   +'<div class="srch-mini">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input id="candSearch" placeholder="Search name, role, skill…" value="'+candQ.replace(/"/g,'&quot;')+'"></div>'
   +'<span class="chip">Role <select id="candReq"><option value="">All open roles</option>'+hiringVisibleReqs().filter(function(r){return r.status!=='Filled';}).map(function(r){return '<option value="'+r.id+'" '+(candReqFilter===r.id?'selected':'')+'>'+r.title+'</option>';}).join('')+'</select></span>'
   +'<div class="seg lc-seg" style="margin-left:auto">'+[['board','Board'],['list','List']].map(function(v){return '<button class="'+(candView===v[0]?'on':'')+'" data-candview="'+v[0]+'">'+v[1]+'</button>';}).join('')+'</div></div><button class="btn btn-primary" id="newCandBtn">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'New candidate</button></div>';
  var cols=CAND_STAGES.map(function(st){
    var items=list.filter(function(c){return c.status===st;});
    return '<div class="pl-col pl-'+st.toLowerCase()+'"><div class="pl-head"><span class="pl-title">'+st+'</span><span class="pl-n">'+items.length+'</span></div><div class="pl-body">'+(items.length?items.map(candCard).join(''):'<div class="pl-empty">\u2014</div>')+'</div></div>';
  }).join('');
  var listTbl='<div class="ctrl-table"><table><thead><tr><th>Candidate</th><th>Position</th><th>Seniority</th><th>Source</th><th>Stage</th><th>Rating</th></tr></thead><tbody>'+(list.length?list.map(function(c){return '<tr class="clk" data-cand="'+c.id+'"><td><div class="cellname">'+av(c.name,"width:26px;height:26px;font-size:10px")+'<span class="small" style="font-weight:600">'+c.name+'</span></div></td><td class="small">'+reqTitle(c.req)+'</td><td class="small">'+c.seniority+'</td><td class="small">'+c.source+'</td><td>'+candStatusPill(c.status)+'</td><td>'+candRating(c.rating)+'</td></tr>';}).join(''):'<tr><td colspan="6" class="empty" style="padding:24px">No candidates match.</td></tr>')+'</tbody></table></div>';
  var bodyHtml=candView==='list'?listTbl:'<div class="pipeline">'+cols+'</div>';
  var poolSec='';
  if(rej.length){
    poolSec='<div class="card mt"><div class="card-head"><h3>Talent pool</h3><span class="meta">'+rej.length+' past candidates \u00b7 auto-matched to open roles</span><button class="btn btn-ghost" id="rejToggle" style="margin-left:auto;height:28px;font-size:12px">'+(candShowRejected?'Hide':'Show')+'</button></div>'+(candShowRejected?'<div class="card-pad"><div class="pool-grid">'+rej.map(function(c){var recs=recForCand(c);return '<div class="pool-card"><div class="flex center gap clk" data-cand="'+c.id+'">'+av(c.name,"width:30px;height:30px;font-size:11px")+'<div><div style="font-weight:600;font-size:12.5px">'+c.name+'</div><div class="small muted">'+c.seniority+' \u00b7 was '+reqTitle(c.req)+'</div></div></div>'+(recs.length?'<div class="pool-rec"><span class="small muted">Recommended for</span><div class="pool-chips">'+recs.map(function(r){return '<span class="pool-chip">'+r.title+'</span>';}).join('')+'</div></div>':'<div class="small muted" style="margin-top:8px">No matching open role right now</div>')+'</div>';}).join('')+'</div></div>':'')+'</div>';
  }
  box.innerHTML=kpis+toolbar+bodyHtml+poolSec;
  box.querySelectorAll('[data-cand]').forEach(function(el){el.onclick=function(){openCandidate(el.dataset.cand);};});
  box.querySelectorAll('[data-candview]').forEach(function(b){b.onclick=function(){candView=b.dataset.candview;renderCandidates(box);};});
  var nb=box.querySelector('#newCandBtn');if(nb)nb.onclick=openCandidateForm;
  var cs=box.querySelector('#candSearch');if(cs)cs.oninput=function(){candQ=cs.value;var p=cs.selectionStart;renderCandidates(box);var n=document.getElementById('candSearch');if(n){n.focus();n.setSelectionRange(p,p);}};
  var cr=box.querySelector('#candReq');if(cr)cr.onchange=function(){candReqFilter=cr.value;renderCandidates(box);};
  var rt=box.querySelector('#rejToggle');if(rt)rt.onclick=function(){candShowRejected=!candShowRejected;renderCandidates(box);};
}
function recForCand(c){
  var open=REQS.filter(function(r){return r.status!=='Filled';});
  var sk=(c.skills||[]).map(function(s){return (s||'').toLowerCase().split(/[ /]/)[0];}).filter(Boolean);
  var scored=open.map(function(r){var tech=((r.stack||[]).map(function(t){return (t[0]||'').toLowerCase();}).join(' ')+' '+r.title.toLowerCase());var m=sk.filter(function(s){return s.length>2&&tech.indexOf(s)>=0;}).length;if(c.seniority&&r.title.toLowerCase().indexOf(c.seniority.toLowerCase())>=0)m++;return {r:r,m:m};}).filter(function(x){return x.m>0;}).sort(function(a,b){return b.m-a.m;});
  return scored.slice(0,2).map(function(x){return x.r;});
}

function openCandidate(id){
  var c=CANDIDATES.find(function(x){return x.id===id;});if(!c)return;
  var r=REQS.find(function(x){return x.id===c.req;});
  var ints=INTERVIEWS.filter(function(i){return i.cand===id;});
  var d=document.getElementById("drawer");
  var stageRow=CAND_STAGES.map(function(st){
    var done=CAND_STAGES.indexOf(st)<=CAND_STAGES.indexOf(c.status);
    var cur=st===c.status;
    return '<button class="cstage'+(cur?' cur':done?' done':'')+'" data-cstage="'+st+'"'+(c.status==='Rejected'||c.status==='Hired'?' disabled':'')+'>'+st+'</button>';
  }).join('');
  var intList=ints.length?ints.map(function(i){return '<div class="int-mini"><div><span class="im-round">'+i.round+'</span> <span class="small muted">'+i.date+' · '+i.time+' · '+i.mode+'</span></div>'+intResultPill(i)+'</div>';}).join(''):'<div class="muted small">No interviews scheduled yet.</div>';
  d.innerHTML=''
   +'<div class="drawer-head"><div class="drawer-top"><div class="drawer-id">'+av(c.name,"width:62px;height:62px;font-size:22px")+'<div><h2>'+c.name+'</h2><div class="rl">'+c.seniority+' · applying for '+(r?r.title:'—')+'</div>'+candStatusPill(c.status)+'</div></div><button class="drawer-close" id="drawerClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div><div class="flex gap wrap small muted"><span class="mono">'+c.id+'</span><span>·</span><span>'+c.source+'</span><span>·</span><span>Added '+c.createdAt+'</span></div></div>'
   +'<div class="drawer-body">'
   +'<div class="subhead" style="margin-top:0">Pipeline stage</div><div class="cstage-row">'+stageRow+'</div>'+(c.status==='Rejected'?'<div class="audit-note" style="background:var(--accent-soft);color:var(--accent-ink);margin-top:10px">'+icon('<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>')+'<span>This candidate was rejected.</span></div>':'')
   +'<div class="subhead">Contact</div><div class="field-grid"><div class="field"><div class="k">Email</div><div class="v">'+c.email+'</div></div><div class="field"><div class="k">Phone</div><div class="v mono">'+c.phone+'</div></div><div class="field"><div class="k">Date of birth</div><div class="v">'+c.dob+'</div></div><div class="field"><div class="k">Gender</div><div class="v">'+c.gender+'</div></div></div>'
   +'<div class="subhead">Application</div><div class="field-grid"><div class="field"><div class="k">Position</div><div class="v">'+(r?r.title:'—')+'</div></div><div class="field"><div class="k">Account / Project</div><div class="v">'+(r?accName(r.acc)+' · '+prjName(r.prj):'—')+'</div></div><div class="field"><div class="k">Source</div><div class="v">'+c.source+'</div></div><div class="field"><div class="k">Rating</div><div class="v">'+candRating(c.rating)+'</div></div></div>'
   +'<div class="subhead">CV</div><div class="doc"><div class="di">'+icon(I.doc)+'</div><div><div class="dn">'+c.cv+'</div><div class="dm">Parsed on intake · fields auto-filled</div></div><div class="dr"></div></div>'
   +'<div class="subhead">Skills</div><div class="req-tags">'+c.skills.map(function(s){return '<span class="tag tag-tech">'+s+'</span>';}).join('')+'</div>'
   +'<div class="subhead">Notes</div><div class="fb"><div class="fnote">'+(c.note||'—')+'</div></div>'
   +'<div class="subhead">Interviews</div>'+intList
   +'<div class="subhead">Activity</div><div class="timeline">'+c.hist.map(function(h){return '<div class="tl"><div class="when mono">'+h.ts+'</div><div class="what">'+h.action+'</div><div class="who">'+h.actor+'</div>'+(h.note?'<div class="chg"><span class="small muted">'+h.note+'</span></div>':'')+'</div>';}).join('')+'</div>'
   +'</div>'
   +'<div class="drawer-foot"><button class="btn btn-ghost" id="candRejectBtn"'+(c.status==='Rejected'||c.status==='Hired'?' disabled':'')+'>Reject</button><button class="btn btn-primary" id="candSchedBtn">'+icon('<rect x="3" y="4.5" width="18" height="17" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>')+'Schedule interview</button></div>';
  d.querySelectorAll('[data-cstage]').forEach(function(b){b.onclick=function(){if(b.disabled)return;candMove(id,b.dataset.cstage);};});
  d.querySelector('#drawerClose').onclick=closeProfile;
  d.querySelector('#candSchedBtn').onclick=function(){openInterviewForm(id);};
  var rj=d.querySelector('#candRejectBtn');if(rj&&!rj.disabled)rj.onclick=function(){candReject(id);};
  document.getElementById("scrim").classList.add("show");d.classList.add("show");
}
function candMove(id,status){
  var c=CANDIDATES.find(function(x){return x.id===id;});if(!c||c.status===status)return;
  c.status=status;
  if(status==='Offer'||status==='Hired')c.decidedAt="2026-06-09";
  c.hist.push({ts:nowTs(),actor:me().name+" ("+PERSONA_LABEL[persona]+")",action:status==='Hired'?'Marked Hired':'Moved to '+status,note:""});
  audit("Candidate stage changed",c.name,status);
  renderRecruitment();openCandidate(id);
  toast(c.name+" → "+status,"ok");
}
function candReject(id){
  var c=CANDIDATES.find(function(x){return x.id===id;});if(!c)return;
  confirmAction("Reject candidate?","This moves "+c.name+" to Rejected and records the decision. You can still see them under the Rejected filter.","Reject",function(){
    c.status="Rejected";c.decidedAt="2026-06-09";
    c.hist.push({ts:nowTs(),actor:me().name+" ("+PERSONA_LABEL[persona]+")",action:"Rejected",note:""});
    audit("Candidate rejected",c.name,"");
    renderRecruitment();openCandidate(id);toast(c.name+" rejected","warn");
  },true);
}

function openCandidateForm(){
  var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  openModal('<div class="modal-h"><div><h3>New candidate</h3><div class="small muted" style="margin-top:3px">Upload a CV — Seta parses it and auto-fills the fields below. Everything stays editable.</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b" id="candForm">'
   +'<label class="cv-drop" id="cvDrop"><div class="cv-drop-ic" id="cvDropIc">'+icon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')+'</div><div><div class="cv-drop-t" id="cvDropT">Upload CV to auto-fill</div><div class="small muted" id="cvDropS">PDF or DOCX — Seta extracts name, contact, DOB, seniority &amp; skills</div></div><input type="file" id="cvFile" accept=".pdf,.doc,.docx,.txt" style="display:none"></label>'
   +'<div class="ai-parse" id="aiParse" style="display:none">'+sparkIcon()+'<span id="aiParseTxt">Reading CV…</span></div>'
   +'<div class="field-grid" style="margin-top:14px"><div><label class="field-k">Full name</label><input class="inp" id="cfName" placeholder="Auto-filled from CV"></div><div><label class="field-k">Gmail</label><input class="inp" id="cfEmail" placeholder="name@gmail.com"></div>'
   +'<div><label class="field-k">Phone</label><input class="inp" id="cfPhone" placeholder="+84…"></div><div><label class="field-k">Date of birth</label><input type="date" class="inp" id="cfDob"></div>'
   +'<div><label class="field-k">Gender</label><select class="inp" id="cfGender"><option value="">—</option><option>Male</option><option>Female</option><option>Other</option></select></div><div><label class="field-k">Seniority</label><select class="inp" id="cfSen">'+SENIORITY.map(function(s){return '<option>'+s+'</option>';}).join('')+'</select></div>'
   +'<div><label class="field-k">Position applied</label><select class="inp" id="cfReq">'+REQS.filter(function(r){return r.status!=='Filled';}).map(function(r){return '<option value="'+r.id+'">'+r.title+'</option>';}).join('')+'</select></div><div><label class="field-k">Source</label><select class="inp" id="cfSrc">'+SOURCES.map(function(s){return '<option>'+s+'</option>';}).join('')+'</select></div></div>'
   +'<div style="margin-top:12px"><label class="field-k">Notes</label><textarea class="inp" id="cfNote" rows="2" placeholder="Additional notes…"></textarea></div>'
   +'<div class="audit-note" style="margin-top:12px;background:var(--info-soft);color:var(--ink-2)">'+icon('<circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/>')+'<span>Parsed values are a starting point — always verify against the original CV before saving.</span></div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="cfCancel">Cancel</button><button class="btn btn-primary" id="cfSave">Save candidate</button></div>');
  var w=document.getElementById('modalWrap');
  w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#cfCancel').onclick=closeModal;
  var file=w.querySelector('#cvFile');
  w.querySelector('#cvDrop').onclick=function(){file.click();};
  file.onchange=function(){
    if(!file.files[0])return;
    var fname=file.files[0].name;
    w.querySelector('#cvDropT').innerHTML='<span style="color:var(--positive);font-weight:600">'+fname+'</span>';
    w.querySelector('#cvDropS').textContent='Parsing…';
    var ap=w.querySelector('#aiParse');ap.style.display='flex';w.querySelector('#aiParseTxt').textContent='Reading CV — extracting fields…';
    setTimeout(function(){
      var p=CV_POOL[cvPoolIdx % CV_POOL.length];cvPoolIdx++;
      w.querySelector('#cfName').value=p.name;w.querySelector('#cfEmail').value=p.email;w.querySelector('#cfPhone').value=p.phone;w.querySelector('#cfDob').value=p.dob;w.querySelector('#cfGender').value=p.gender;w.querySelector('#cfSen').value=p.seniority;
      w.querySelector('#cfNote').value='Detected skills: '+p.skills.join(', ')+'.';
      w.querySelector('#aiParseTxt').innerHTML='Parsed <b>'+p.name+'</b> — '+p.skills.length+' skills, contact &amp; DOB filled. Review &amp; save.';
      w.querySelector('#cvDropS').textContent='Re-upload to replace';
      w.dataset.skills=p.skills.join(',');
    },1100);
  };
  w.querySelector('#cfSave').onclick=function(){
    var name=w.querySelector('#cfName').value.trim();if(!name){toast("Upload a CV or enter a name","warn");return;}
    var id="CAND-0"+(++CAND_SEQ);
    var skills=(w.dataset.skills||'').split(',').filter(Boolean);
    var nc={id:id,name:name,email:w.querySelector('#cfEmail').value.trim(),phone:w.querySelector('#cfPhone').value.trim(),dob:w.querySelector('#cfDob').value,gender:w.querySelector('#cfGender').value||'—',seniority:w.querySelector('#cfSen').value,req:w.querySelector('#cfReq').value,source:w.querySelector('#cfSrc').value,status:"New",cv:(file.files[0]?file.files[0].name:name.replace(/ /g,'_')+'_CV.pdf'),rating:0,skills:skills,note:w.querySelector('#cfNote').value.trim(),createdAt:"2026-06-09",hist:[{ts:nowTs(),actor:me().name+" ("+PERSONA_LABEL[persona]+")",action:"Candidate created — CV parsed",note:""}]};
    CANDIDATES.unshift(nc);
    audit("Candidate created",name,reqTitle(nc.req));
    closeModal();gotoHiring('candidates');toast("Candidate added — "+name,"ok");
  };
}

/* ---------------- INTERVIEWS (control table) ---------------- */
function intResultPill(i){
  if(i.status==='Cancelled')return '<span class="status-pill cst-rejected">Cancelled</span>';
  if(i.status==='No-show')return '<span class="status-pill cst-hold">No-show</span>';
  if(i.result==='Pass')return '<span class="status-pill cst-hired">Pass</span>';
  if(i.result==='Fail')return '<span class="status-pill cst-rejected">Fail</span>';
  if(i.status==='Completed')return '<span class="status-pill cst-hold">Done</span>';
  return '<span class="status-pill cst-interview">Scheduled</span>';
}
function renderInterviews(box){
  var rows=INTERVIEWS.filter(intInScope).sort(function(a,b){return (a.date+a.time)<(b.date+b.time)?-1:1;});
  if(intFilter!=='all')rows=rows.filter(function(i){return intFilter==='upcoming'?i.status==='Scheduled':i.status==='Completed';});
  var sched=INTERVIEWS.filter(function(i){return i.status==='Scheduled';}).length;
  var wk=INTERVIEWS.filter(function(i){return i.status==='Scheduled'&&i.date>='2026-06-09'&&i.date<='2026-06-16';}).length;
  var done=INTERVIEWS.filter(function(i){return i.status==='Completed';});
  var pass=done.filter(function(i){return i.result==='Pass';}).length;
  var passRate=done.length?Math.round(pass/done.length*100):0;
  var kpis=recStrip([{l:'Scheduled',v:sched},{l:'This week',v:wk,color:'var(--warning-ink)'},{l:'Completed',v:done.length},{l:'Pass rate',v:passRate+'%',color:'var(--positive-ink)'}]);
  var toolbar='<div class="rec-toolbar"><div class="seg">'+[['all','All'],['upcoming','Upcoming'],['done','Completed']].map(function(t){return '<button data-intf="'+t[0]+'" class="'+(intFilter===t[0]?'on':'')+'">'+t[1]+'</button>';}).join('')+'</div><button class="btn btn-primary" id="newIntBtn">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'Schedule interview</button></div>';
  var head='<div class="ctrl-table"><table><thead><tr><th>Candidate</th><th>Position</th><th>Round</th><th>When</th><th>Mode</th><th>Panel</th><th>Meeting</th><th>Status</th><th>Result</th></tr></thead><tbody>';
  var body=rows.map(function(i){
    var c=CANDIDATES.find(function(x){return x.id===i.cand;})||{name:i.cand,req:null};
    var rw=relWhen(i.date);
    return '<tr'+(rw.label==='Today'&&i.status==='Scheduled'?' class="int-today"':'')+'><td><div class="flex center gap">'+av(c.name,"width:24px;height:24px;font-size:9px")+'<span style="font-weight:600">'+c.name+'</span></div></td>'
     +'<td class="small muted">'+reqTitle(c.req)+'</td><td><span class="round-chip">'+i.round+'</span></td>'
     +'<td><div class="when-cell"><span class="when-rel'+(rw.soon&&i.status==='Scheduled'?' soon':'')+'">'+rw.label+'</span><span class="mono small muted">'+i.date.slice(5)+' · '+i.time+' · '+i.dur+'m</span></div></td>'
     +'<td>'+modePill(i.mode)+'</td><td>'+avStack(i.panel)+'</td>'
     +'<td>'+(i.link?'<a class="meet-link" href="'+i.link+'" target="_blank" onclick="event.stopPropagation()">'+icon('<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>')+'Join</a>':'<span class="small muted">—</span>')+'</td>'
     +'<td><select class="mini-sel" data-intstatus="'+i.id+'">'+['Scheduled','Completed','Cancelled','No-show'].map(function(o){return '<option '+(o===i.status?'selected':'')+'>'+o+'</option>';}).join('')+'</select></td>'
     +'<td>'+intResultPill(i)+(i.status==='Completed'?' <button class="btn btn-ghost" data-intfb="'+i.id+'" style="height:24px;font-size:11px;padding:0 8px;margin-left:6px">'+(i.rating?('\u2605'+i.rating+'/5'):'Add feedback')+'</button>':'')+'</td></tr>';
  }).join('');
  box.innerHTML=kpis+toolbar+head+(rows.length?body:'<tr><td colspan="9" class="empty" style="padding:24px">No interviews match this filter.</td></tr>')+'</tbody></table></div>';
  box.querySelectorAll('[data-intf]').forEach(function(b){b.onclick=function(){intFilter=b.dataset.intf;renderInterviews(box);};});
  var nb=box.querySelector('#newIntBtn');if(nb)nb.onclick=function(){openInterviewForm(null);};
  box.querySelectorAll('[data-intstatus]').forEach(function(sel){sel.onchange=function(){intSetStatus(sel.dataset.intstatus,sel.value,box);};});
  box.querySelectorAll('[data-intfb]').forEach(function(b){b.onclick=function(){openIntFeedback(b.dataset.intfb,box);};});
}
function intCandName(i){var c=CANDIDATES.find(function(x){return x.id===i.cand;});return c?c.name:i.cand;}
function intSetStatus(id,val,box){
  var i=INTERVIEWS.find(function(x){return x.id===id;});if(!i)return;
  if(val==='Completed'){openIntFeedback(id,box);return;}
  if(val==='Cancelled'||val==='No-show'){openIntCancel(id,val,box);return;}
  i.status=val;i.result='Pending';audit("Interview status updated",intCandName(i),val);renderInterviews(box);toast("Interview set to "+val);
}
function openIntCancel(id,val,box){
  var i=INTERVIEWS.find(function(x){return x.id===id;});if(!i)return;
  var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  openModal('<div class="modal-h"><div><h3>'+val+' interview</h3><div class="small muted" style="margin-top:3px">'+intCandName(i)+' \u00b7 '+i.round+' round</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b"><label class="field-k">Reason</label><textarea class="inp" id="intCxReason" placeholder="Why was it '+val.toLowerCase()+'? (candidate withdrew, reschedule needed, no-show\u2026)">'+(i.cancelReason||'')+'</textarea></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="intCxBack">Back</button><button class="btn btn-primary" id="intCxSave">Confirm '+val.toLowerCase()+'</button></div>');
  var m=document.getElementById('modalWrap');
  m.querySelector('#modalClose').onclick=function(){closeModal();renderInterviews(box);};
  m.querySelector('#intCxBack').onclick=function(){closeModal();renderInterviews(box);};
  m.querySelector('#intCxSave').onclick=function(){i.status=val;i.result='Pending';i.cancelReason=m.querySelector('#intCxReason').value.trim();audit("Interview "+val.toLowerCase(),intCandName(i),i.cancelReason||'');closeModal();renderInterviews(box);toast("Interview "+val.toLowerCase());};
}
function openIntFeedback(id,box){
  var i=INTERVIEWS.find(function(x){return x.id===id;});if(!i)return;
  var c=CANDIDATES.find(function(x){return x.id===i.cand;});
  var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  var st={result:(i.result&&i.result!=='Pending'?i.result:'Pass'),rating:i.rating||4,rec:i.rec||'Hire'};
  var resultSeg=['Pass','Hold','Fail'].map(function(o){return '<button type="button" data-ir="'+o+'" class="'+(o===st.result?'on':'')+'">'+o+'</button>';}).join('');
  var recSeg=['Hire','Next round','No hire'].map(function(o){return '<button type="button" data-irec="'+o+'" class="'+(o===st.rec?'on':'')+'">'+o+'</button>';}).join('');
  var stars=[1,2,3,4,5].map(function(n){return '<button type="button" class="int-star'+(n<=st.rating?' on':'')+'" data-irate="'+n+'">\u2605</button>';}).join('');
  openModal('<div class="modal-h"><div><h3>Interview feedback</h3><div class="small muted" style="margin-top:3px">'+(c?c.name:i.cand)+' \u00b7 '+i.round+' round \u00b7 '+i.date+'</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b">'
   +'<label class="field-k">Result</label><div class="seg rag-pick" id="intResSeg">'+resultSeg+'</div>'
   +'<label class="field-k" style="margin-top:12px">Overall rating</label><div class="int-stars" id="intStars">'+stars+'</div>'
   +'<label class="field-k" style="margin-top:12px">Recommendation</label><div class="seg rag-pick" id="intRecSeg">'+recSeg+'</div>'
   +'<label class="field-k" style="margin-top:12px">Teams transcript</label><div class="int-teams"><textarea class="inp" id="intTranscript" placeholder="Paste, or pull the Microsoft Teams transcript...">'+(i.transcript||'')+'</textarea><button type="button" class="btn btn-ghost" id="intPull">'+icon('<path d="M21 12a9 9 0 1 1-6.2-8.5"/><polyline points="21 3 21 9 15 9"/>')+'Pull from Teams</button></div>'
   +'<label class="field-k" style="margin-top:12px">Feedback \u2014 strengths &amp; concerns</label><textarea class="inp" id="intFbNote" placeholder="What stood out, gaps, evidence\u2026">'+(i.note||'')+'</textarea>'
   +'</div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="intFbCancel">Cancel</button><button class="btn btn-primary" id="intFbSave">Save result</button></div>');
  var m=document.getElementById('modalWrap');
  m.querySelectorAll('#intResSeg button').forEach(function(b){b.onclick=function(){m.querySelectorAll('#intResSeg button').forEach(function(z){z.classList.remove('on');});b.classList.add('on');st.result=b.dataset.ir;};});
  m.querySelectorAll('#intRecSeg button').forEach(function(b){b.onclick=function(){m.querySelectorAll('#intRecSeg button').forEach(function(z){z.classList.remove('on');});b.classList.add('on');st.rec=b.dataset.irec;};});
  m.querySelectorAll('#intStars .int-star').forEach(function(b){b.onclick=function(){st.rating=+b.dataset.irate;m.querySelectorAll('#intStars .int-star').forEach(function(z){z.classList.toggle('on',+z.dataset.irate<=st.rating);});};});
  m.querySelector('#modalClose').onclick=function(){closeModal();renderInterviews(box);};
  m.querySelector('#intFbCancel').onclick=function(){closeModal();renderInterviews(box);};
  {var pt=m.querySelector('#intPull');if(pt)pt.onclick=function(){m.querySelector('#intTranscript').value='[Microsoft Teams auto-transcript] '+(c?c.name:i.cand)+' - '+i.round+' round, '+i.date+'. Topics: architecture, trade-offs, testing, ownership. Full transcript synced from the meeting.';toast('Transcript pulled from Teams','ok');};}
  m.querySelector('#intFbSave').onclick=function(){
    i.status='Completed';i.result=st.result;i.rating=st.rating;i.rec=st.rec;i.note=m.querySelector('#intFbNote').value.trim()||i.note;
    i.transcript=m.querySelector('#intTranscript').value.trim();
    audit("Interview feedback recorded",c?c.name:i.cand,st.result+" \u00b7 "+st.rating+"/5 \u00b7 "+st.rec);
    if(c){c.lastResult={result:st.result,round:i.round,rating:st.rating,rec:st.rec};}
    closeModal();renderInterviews(box);
    var msg="Feedback saved \u2014 "+st.result+" ("+st.rating+"/5)";
    if(c&&st.result==='Pass'&&st.rec==='Hire'&&c.status==='Interview')toast(msg+" \u00b7 candidate ready to move to Offer",'ok');
    else toast(msg, st.result==='Fail'?'warn':'ok');
  };
}
function openInterviewForm(candId){
  var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
  var pool=CANDIDATES.filter(function(c){return ['Hired','Rejected'].indexOf(c.status)<0;});
  var panelPeople=EMP.filter(function(e){return e.dept==='Engineering'||/Lead|Manager|EM/.test(e.role);}).slice(0,7);
  if(!panelPeople.length)panelPeople=EMP.slice(0,7);
  openModal('<div class="modal-h"><div><h3>Schedule interview</h3><div class="small muted" style="margin-top:3px">Saved to the interview control table; the candidate moves to the Interview stage.</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
   +'<div class="modal-b"><div class="field-grid"><div><label class="field-k">Candidate</label><select class="inp" id="ifCand">'+pool.map(function(c){return '<option value="'+c.id+'" '+(c.id===candId?'selected':'')+'>'+c.name+' — '+reqTitle(c.req)+'</option>';}).join('')+'</select></div><div><label class="field-k">Round</label><select class="inp" id="ifRound">'+INT_ROUNDS.map(function(r){return '<option '+(r==='Technical'?'selected':'')+'>'+r+'</option>';}).join('')+'</select></div>'
   +'<div><label class="field-k">Date</label><input type="date" class="inp" id="ifDate" value="2026-06-13"></div><div><label class="field-k">Time</label><input type="time" class="inp" id="ifTime" value="10:00"></div>'
   +'<div><label class="field-k">Duration (min)</label><select class="inp" id="ifDur"><option>30</option><option selected>60</option><option>90</option></select></div><div><label class="field-k">Mode</label><select class="inp" id="ifMode">'+INT_MODES.map(function(m){return '<option>'+m+'</option>';}).join('')+'</select></div></div>'
   +'<div style="margin-top:12px"><label class="field-k">Meeting link</label><input class="inp" id="ifLink" placeholder="https://meet.seta.io/… (auto-generated for online)"></div>'
   +'<div class="subhead">Interview panel</div><div class="panel-pick" id="ifPanel">'+panelPeople.map(function(e,ix){return '<label class="pp-chip"><input type="checkbox" value="'+e.name+'" '+(ix<1?'checked':'')+'>'+av(e.name,"width:22px;height:22px;font-size:9px")+'<span>'+e.name+'</span></label>';}).join('')+'</div>'
   +'<div style="margin-top:12px"><label class="field-k">Note</label><input class="inp" id="ifNote" placeholder="Focus area, scenario, links…"></div></div>'
   +'<div class="modal-f"><button class="btn btn-ghost" id="ifCancel">Cancel</button><button class="btn btn-primary" id="ifSave">Schedule</button></div>');
  var w=document.getElementById('modalWrap');
  w.querySelector('#modalClose').onclick=closeModal;w.querySelector('#ifCancel').onclick=closeModal;
  w.querySelector('#ifSave').onclick=function(){
    var cand=w.querySelector('#ifCand').value;
    var panel=Array.prototype.slice.call(w.querySelectorAll('#ifPanel input:checked')).map(function(i){return i.value;});
    if(!panel.length){toast("Pick at least one panel member","warn");return;}
    var ni={id:"INT-0"+(++INT_SEQ),cand:cand,round:w.querySelector('#ifRound').value,date:w.querySelector('#ifDate').value,time:w.querySelector('#ifTime').value,dur:parseInt(w.querySelector('#ifDur').value),mode:w.querySelector('#ifMode').value,panel:panel,status:"Scheduled",result:"Pending",note:w.querySelector('#ifNote').value.trim(),link:(w.querySelector('#ifLink').value.trim()||(w.querySelector('#ifMode').value==='Online'?'https://meet.seta.io/iv-0'+INT_SEQ:''))};
    INTERVIEWS.push(ni);
    var c=CANDIDATES.find(function(x){return x.id===cand;});
    if(c&&['New','Screening'].indexOf(c.status)>=0){c.status='Interview';c.hist.push({ts:nowTs(),actor:me().name+" ("+PERSONA_LABEL[persona]+")",action:"Moved to Interview",note:ni.round+" scheduled"});}
    if(c)c.hist.push({ts:nowTs(),actor:me().name+" ("+PERSONA_LABEL[persona]+")",action:"Interview scheduled",note:ni.round+" · "+ni.date+" "+ni.time});
    audit("Interview scheduled",c?c.name:cand,ni.round+" · "+ni.date);
    closeModal();gotoHiring('interviews');toast("Interview scheduled — "+ni.date+" "+ni.time,"ok");
  };
}

/* ---------------- INSIGHTS (fulfillment · leadtime · AI) ---------------- */
function sparkIcon(){return '<span class="spark-ic">'+icon('<path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4z"/><path d="M19 14l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6z"/>')+'</span>';}
function gauge(pct,label,color){
  var size=124,r=size/2-11,cx=size/2,cy=size/2,C=2*Math.PI*r,len=pct/100*C;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'"><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="var(--surface-3)" stroke-width="11"/><circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+color+'" stroke-width="11" stroke-linecap="round" stroke-dasharray="'+len+' '+(C-len)+'" transform="rotate(-90 '+cx+' '+cy+')"/><text x="'+cx+'" y="'+(cy-1)+'" text-anchor="middle" font-family="Geist" font-size="26" font-weight="600" fill="currentColor">'+pct+'%</text><text x="'+cx+'" y="'+(cy+16)+'" text-anchor="middle" font-size="9" fill="var(--muted)" letter-spacing=".06em">'+label+'</text></svg>';
}
function renderInsights(box){
  /* Fulfillment */
  var onTime=HIRE_HISTORY.filter(function(h){return new Date(h.approved)<=new Date(h.due);});
  var rate=Math.round(onTime.length/HIRE_HISTORY.length*100);
  var fulRows=HIRE_HISTORY.map(function(h){var ot=new Date(h.approved)<=new Date(h.due);return '<tr><td style="font-weight:600">'+h.pos+'</td><td class="small muted">'+accName(h.acc)+'</td><td class="mono small">'+h.due+'</td><td class="mono small">'+h.approved+'</td><td>'+(ot?'<span class="status-pill cst-hired">On time</span>':'<span class="status-pill cst-rejected">Late '+dDiff(h.due,h.approved)+'d</span>')+'</td></tr>';}).join('');
  /* Leadtime */
  var src=Math.round(HIRE_HISTORY.reduce(function(a,h){return a+dDiff(h.created,h.firstCv);},0)/HIRE_HISTORY.length);
  var evl=Math.round(HIRE_HISTORY.reduce(function(a,h){return a+dDiff(h.firstCv,h.approved);},0)/HIRE_HISTORY.length);
  var tot=src+evl;
  var bar=function(label,sub,d,max,color){return '<div class="lt-row"><div class="lt-label"><div class="lt-stage">'+label+'</div><div class="small muted">'+sub+'</div></div><div class="lt-track"><div class="lt-fill" style="width:'+Math.round(d/max*100)+'%;background:'+color+'"></div></div><div class="lt-days mono">'+d+'d</div></div>';};
  var ltMax=Math.max(src,evl,tot);
  /* Case-study AI insight */
  var fails=CASE_STUDIES.filter(function(c){return c.result==='fail';});
  var passes=CASE_STUDIES.filter(function(c){return c.result==='pass';});
  var tagCount={};fails.forEach(function(c){c.tags.forEach(function(t){tagCount[t]=(tagCount[t]||0)+1;});});
  var topTags=Object.keys(tagCount).sort(function(a,b){return tagCount[b]-tagCount[a];}).slice(0,3);

  box.innerHTML=''
   +'<div class="grid cols-2 mb" style="align-items:start">'
   +'<div class="card"><div class="card-head"><h3>On-time fulfillment</h3><span class="meta">last 10 closed positions</span></div><div class="card-pad"><div class="flex center gap" style="gap:20px"><div style="color:'+(rate>=75?'var(--positive)':rate>=50?'var(--warning)':'var(--accent)')+'">'+gauge(rate,'ON TIME',(rate>=75?'var(--positive)':rate>=50?'var(--warning)':'var(--accent)'))+'</div><div style="flex:1"><div class="ins-stat"><span class="big">'+onTime.length+'/'+HIRE_HISTORY.length+'</span><span class="small muted">positions filled on or before the due date</span></div><div class="ins-stat" style="margin-top:10px"><span class="big" style="color:var(--accent)">'+(HIRE_HISTORY.length-onTime.length)+'</span><span class="small muted">missed SLA — review sourcing channels &amp; approval lag</span></div></div></div></div></div>'
   +'<div class="card"><div class="card-head"><h3>Hiring leadtime</h3><span class="meta">avg days · create → submit → approve</span></div><div class="card-pad">'+bar('Sourcing','Job created → first CV',src,ltMax,'var(--info)')+bar('Evaluation','First CV → approved',evl,ltMax,'var(--primary)')+bar('Total leadtime','Job created → approved',tot,ltMax,'var(--teal)')+'<div class="audit-note" style="margin-top:12px;background:var(--info-soft);color:var(--ink-2)">'+icon('<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>')+'<span>Evaluation is '+Math.round(evl/tot*100)+'% of total leadtime — the biggest lever is endorsement &amp; PMO turnaround.</span></div></div></div>'
   +'</div>'
   /* JD <-> CV analyzer */
   +'<div class="card mb"><div class="card-head"><div class="flex center gap">'+sparkIcon()+'<h3>JD ↔ CV match analysis</h3></div><span class="meta">Seta agent · paste a JD and a CV</span></div><div class="card-pad">'
   +'<div class="flex gap" style="margin-bottom:10px"><span class="chip">Prefill JD from <select id="anaReq"><option value="">— requisition</option>'+REQS.map(function(r){return '<option value="'+r.id+'">'+r.title+'</option>';}).join('')+'</select></span></div>'
   +'<div class="ana-grid"><div><label class="field-k">Job description</label><textarea class="inp" id="anaJd" rows="7" placeholder="Paste the JD — responsibilities &amp; requirements…"></textarea></div><div><label class="field-k">Candidate CV</label><textarea class="inp" id="anaCv" rows="7" placeholder="Paste the CV text…"></textarea></div></div>'
   +'<div class="flex between center" style="margin-top:12px"><span class="small muted">Seta extracts skills from both sides, scores the match, and proposes edits.</span><button class="btn btn-primary" id="anaBtn">'+sparkIcon()+'Analyze with Seta</button></div>'
   +'<div id="anaResult"></div></div></div>'
   /* Case studies */
   +'<div class="card"><div class="card-head"><div class="flex center gap">'+sparkIcon()+'<h3>Case studies — pass / fail patterns</h3></div><span class="meta">'+passes.length+' pass · '+fails.length+' fail</span></div><div class="card-pad">'
   +'<div class="hitl-insight" id="caseInsight"><div class="hi-head">'+sparkIcon()+'<span>Seta analysis</span><button class="btn btn-ghost" style="height:26px;font-size:11px;margin-left:auto" id="reanalyzeBtn">Re-analyze</button></div><div class="hi-body" id="caseInsightBody">'+caseInsightText(topTags,tagCount,passes,fails)+'</div></div>'
   +'<div class="case-grid" style="margin-top:14px">'+CASE_STUDIES.map(function(c){return '<div class="case-card '+c.result+'"><div class="flex between center"><div><div style="font-weight:600;font-size:13px">'+c.name+'</div><div class="small muted">'+c.role+' · '+c.round+' round</div></div><span class="status-pill '+(c.result==='pass'?'cst-hired':'cst-rejected')+'">'+(c.result==='pass'?'Pass':'Fail')+'</span></div><div class="fnote" style="margin-top:8px">'+c.reason+'</div><div class="req-tags" style="margin:8px 0 0">'+c.tags.map(function(t){return '<span class="tag tag-tech">'+t+'</span>';}).join('')+'</div></div>';}).join('')+'</div></div></div>';

  var rs=box.querySelector('#anaReq');if(rs)rs.onchange=function(){var r=REQS.find(function(x){return x.id===rs.value;});var jd=box.querySelector('#anaJd');if(r){var d=reqJD(r.id);jd.value=(d?d.summary+'\n\nResponsibilities: '+d.resp.join('; ')+'\nRequirements: '+d.req.join('; ')+(d.nice?'\nNice to have: '+d.nice.join('; '):''):'')+'\nTech: '+r.stack.map(function(s){return s[0];}).join(', ');}};
  var ab=box.querySelector('#anaBtn');if(ab)ab.onclick=function(){runAnalyzer(box);};
  var rb=box.querySelector('#reanalyzeBtn');if(rb)rb.onclick=function(){var b=box.querySelector('#caseInsightBody');b.innerHTML='<span class="ana-loading">'+sparkIcon()+'Analyzing '+CASE_STUDIES.length+' case studies…</span>';setTimeout(function(){b.innerHTML=caseInsightText(topTags,tagCount,passes,fails);},900);};
}
function caseInsightText(topTags,tagCount,passes,fails){
  var lead=topTags.length?'Most failures cluster on <b>'+topTags.map(function(t){return t.replace(/-/g,' ')+' ('+tagCount[t]+')';}).join('</b>, <b>')+'</b>.':'No dominant failure pattern yet.';
  var passTheme=passes.length?'Successful hires share <b>strong portfolios, system-design depth and clear communication</b>.':'';
  var rec=topTags.indexOf('live-coding')>=0||topTags.indexOf('concurrency')>=0?'Recommend a standardized take-home plus a depth-probe rubric for the technical round, and screen Kubernetes/CI depth earlier.':'Recommend tightening the technical rubric and screening depth earlier in the funnel.';
  return '<p>'+lead+' '+passTheme+'</p><p style="margin-top:8px">'+rec+'</p>';
}
var SKILL_DICT=["react","typescript","javascript","node.js","node","go","golang","python","java","kotlin","swift","aws","gcp","azure","kubernetes","docker","terraform","gitops","postgresql","mysql","mongodb","redis","kafka","graphql","grpc","rest","ci/cd","jenkins","github actions","playwright","cypress","jest","selenium","sql","tableau","power bi","machine learning","tensorflow","pytorch","mlops","sagemaker","spark","airflow","figma","agile","scrum","stakeholder","leadership","mentoring","microservices","system design","distributed systems","rabbitmq","elasticsearch","next.js","vue","angular","tailwind","spring","concurrency"];
function skillsIn(text){var t=(text||'').toLowerCase();var found=[];SKILL_DICT.forEach(function(s){if(t.indexOf(s)>=0&&found.indexOf(s)<0)found.push(s);});return found;}
function runAnalyzer(box){
  var jd=box.querySelector('#anaJd').value,cv=box.querySelector('#anaCv').value;
  var res=box.querySelector('#anaResult');
  if(jd.trim().length<20||cv.trim().length<20){res.innerHTML='<div class="audit-note" style="margin-top:14px;background:var(--warning-soft);color:var(--warning-ink)">'+icon('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/>')+'<span>Add more detail to both the JD and the CV (at least a few lines each) for a meaningful match.</span></div>';return;}
  res.innerHTML='<div class="ana-loading" style="margin-top:16px">'+sparkIcon()+'Seta is reading both documents and scoring the match…</div>';
  setTimeout(function(){
    var j=skillsIn(jd),c=skillsIn(cv);
    var matched=j.filter(function(s){return c.indexOf(s)>=0;});
    var gaps=j.filter(function(s){return c.indexOf(s)<0;});
    var extra=c.filter(function(s){return j.indexOf(s)<0;});
    var score=j.length?Math.round(matched.length/j.length*100):0;
    var verdict=score>=75?['Strong match','var(--positive)','cst-hired']:score>=45?['Partial match','var(--warning)','cst-interview']:['Weak match','var(--accent)','cst-rejected'];
    var sugg=[];
    gaps.slice(0,4).forEach(function(g){sugg.push('JD requires <b>'+titleCaseSkill(g)+'</b> — not evident in the CV. Probe in screening, or mark it nice-to-have if non-essential.');});
    if(extra.length)sugg.push('CV adds <b>'+extra.slice(0,3).map(titleCaseSkill).join(', ')+'</b> beyond the JD — consider whether the role can use this strength.');
    if(cv.trim().length<260)sugg.push('CV is light on detail — request a portfolio or a project list with measurable outcomes.');
    if(score>=75)sugg.push('Strong overlap — fast-track to the technical round.');
    if(!sugg.length)sugg.push('Balanced match — proceed to a standard screening round.');
    res.innerHTML='<div class="ana-out">'
     +'<div class="ana-score"><div style="color:'+verdict[1]+'">'+gauge(score,'MATCH',verdict[1])+'</div><div><span class="status-pill '+verdict[2]+'">'+verdict[0]+'</span><div class="small muted" style="margin-top:8px">'+matched.length+' of '+j.length+' required skills present · '+extra.length+' extra</div></div></div>'
     +'<div class="ana-cols"><div><div class="field-k" style="color:var(--positive-ink)">Matched ('+matched.length+')</div><div class="req-tags">'+(matched.length?matched.map(function(s){return '<span class="tag" style="background:var(--positive-soft);color:var(--positive-ink)">'+titleCaseSkill(s)+'</span>';}).join(''):'<span class="small muted">None detected</span>')+'</div></div>'
     +'<div><div class="field-k" style="color:var(--accent-ink)">Gaps ('+gaps.length+')</div><div class="req-tags">'+(gaps.length?gaps.map(function(s){return '<span class="tag" style="background:var(--accent-soft);color:var(--accent-ink)">'+titleCaseSkill(s)+'</span>';}).join(''):'<span class="small muted">No gaps — full coverage</span>')+'</div></div></div>'
     +'<div class="hitl-insight" style="margin-top:14px"><div class="hi-head">'+sparkIcon()+'<span>Suggested edits</span><span class="risk-tag">proposal</span></div><div class="hi-body"><ul class="sugg-list">'+sugg.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ul></div><div class="hi-foot"><button class="btn btn-ghost" id="anaDismiss">Dismiss</button><button class="btn btn-primary" id="anaApply">Apply to JD note</button></div></div>'
     +'</div>';
    var ap=res.querySelector('#anaApply');if(ap)ap.onclick=function(){toast("Suggestions saved to the requisition note — pending your review","ok");};
    var dm=res.querySelector('#anaDismiss');if(dm)dm.onclick=function(){res.innerHTML='';};
  },950);
}
function prefillAnalyzer(c){
  var box=document.getElementById('recBody');if(!box)return;
  var jd=box.querySelector('#anaJd'),cv=box.querySelector('#anaCv'),rs=box.querySelector('#anaReq');
  if(rs&&c.req){rs.value=c.req;rs.onchange();}
  if(cv)cv.value=c.name+' — '+c.seniority+'\nSkills: '+c.skills.join(', ')+'\n'+(c.note||'');
  if(jd)jd.scrollIntoView&&null;
  toast("Loaded "+c.name+" into the analyzer — press Analyze","info");
}


/* =====================================================================
   HIRING MANAGEMENT MODULE — dispatch · reports · shared helpers
   Recruitment (Candidates/Requisitions/Interviews/Insights) + a new
   Reports tab + Lifecycle, lifted into their own module + sidebar group.
   ===================================================================== */

/* meeting links for interviews (online get a room URL) */
INTERVIEWS.forEach(function(i){ if(!('link' in i)) i.link = (i.mode==='Online') ? 'https://meet.seta.io/'+i.id.toLowerCase().replace('int','iv') : ''; });

/* recruiter performance (TA team) — drives the Reports leaderboard */
var REC_PERF=[
 {name:"Le Thu Ha",title:"Senior Recruiter",roles:5,active:14,interviews:22,offers:7,hires:8,ttf:38,onTime:83,csat:4.6},
 {name:"Tran Thi Mai",title:"Recruiter",roles:4,active:9,interviews:13,offers:4,hires:6,ttf:46,onTime:60,csat:4.0},
 {name:"Pham Quoc Bao",title:"Tech Recruiter",roles:3,active:6,interviews:11,offers:4,hires:4,ttf:31,onTime:90,csat:4.7}
];
/* recruitment funnel — cumulative candidate flow this quarter */
var FUNNEL=[
 {stage:"Applied",n:480},
 {stage:"Screening",n:312},
 {stage:"Interview",n:109},
 {stage:"Offer",n:34},
 {stage:"Hired",n:21}
];

/* ---- shared helpers ---- */
function stageSince(c){ if(c.hist&&c.hist.length)return c.hist[c.hist.length-1].ts.slice(0,10); return c.createdAt; }
function relWhen(d){ var diff=dDiff('2026-06-09',d); var label,soon=false;
  if(diff===0){label='Today';soon=true;} else if(diff===1){label='Tomorrow';soon=true;}
  else if(diff>1){label='In '+diff+'d';soon=diff<=3;} else {label=Math.abs(diff)+'d ago';}
  return {label:label,soon:soon}; }
function modePill(m){ var on=m==='Online';
  return '<span class="mode-pill '+(on?'mp-online':'mp-onsite')+'">'+icon(on?'<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>':'<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>')+m+'</span>'; }
function avStack(names){ return '<div class="av-stack">'+names.slice(0,3).map(function(n){return av(n,"width:23px;height:23px;font-size:8px");}).join('')+(names.length>3?'<span class="av-more">+'+(names.length-3)+'</span>':'')+'</div>'; }
function recStrip(items){ return '<div class="rec-strip mb">'+items.map(function(it){
   return '<div class="rs-cell"><div class="rs-v"'+(it.color?' style="color:'+it.color+'"':'')+'>'+it.v+'</div><div class="rs-l">'+it.l+'</div>'+(it.s?'<div class="rs-s">'+it.s+'</div>':'')+'</div>';
  }).join('')+'</div>'; }
function hiringBadge(tab){ try{
   if(tab==='requisitions')return hiringVisibleReqs().filter(function(r){return r.status!=='Filled';}).length;
   if(tab==='candidates')return CANDIDATES.filter(function(c){return candInScope(c)&&['Hired','Rejected'].indexOf(c.status)<0;}).length;
   if(tab==='interviews')return INTERVIEWS.filter(function(i){return intInScope(i)&&i.status==='Scheduled';}).length;
  }catch(e){} return 0; }
function gotoHiring(t){ curMod='hiring'; curTab=t; renderModTabs(); renderHiringTab(t); var c=document.getElementById('content'); if(c)c.scrollTop=0; }

/* ---- module dispatch ---- */
var HIRING_HEAD={
 candidates:{eye:'Hiring Management · Talent Pipeline',h1:'Candidates',p:'Every applicant tracked from CV to offer — open a card to move it through the pipeline, schedule interviews, and keep the funnel moving.'},
 requisitions:{eye:'Hiring Management · Open Positions',h1:'Requisitions',p:'Live open positions across every account — track hiring status and let internal staff browse and apply.'},
 interviews:{eye:'Hiring Management · Interview Control',h1:'Interviews',p:'Schedule rounds, attach meeting links, record outcomes — one control table for the whole panel.'},
 reports:{eye:'Hiring Management · Executive Dashboard',h1:'Recruitment Reports',p:'The 30-second read on hiring health — where we are short, which roles are at risk, where the pipeline stalls, and whether hiring keeps pace with demand.'},
 knowledge:{eye:'Hiring Management · Knowledge Base',h1:'Recruitment Knowledge Base',p:'Every closed position by account & project — CVs, interviews, final outcome and lessons. The clean dataset that future recommendations are built on.'}
};
function renderHiringTab(t){
  var _c=document.getElementById('content'); if(_c)_c.classList.toggle('rep-mode', t==='reports'||t==='knowledge');
  if(t==='lifecycle'){ render('lifecycle'); return; }
  var emp=isEmployee();
  if(emp) t='requisitions';
  var head=HIRING_HEAD[t]||HIRING_HEAD.candidates;
  if(emp&&t==='requisitions')head={eye:'Hiring Management · Internal Mobility',h1:'Open Roles',p:'Open positions across the company — follow roles you\u2019re interested in and apply for stretch work. Each application is endorsed by EMs and approved by PMO.'};
  document.getElementById('content').innerHTML='<section class="view active">'
   +'<div class="page-head"><div><div class="eyebrow">'+head.eye+'</div><h1>'+head.h1+'</h1><p>'+head.p+'</p></div></div>'
   +'<div id="recBody"></div></section>';
  if(typeof updateBell==='function')updateBell();
  var box=document.getElementById('recBody');
  if(t==='requisitions'){ emp?renderJobBoard(box):renderReqList(box); return; }
  if(t==='candidates')renderCandidates(box);
  else if(t==='interviews')renderInterviews(box);
  else if(t==='knowledge')renderKnowledgeBase(box);
  else renderReports(box);
}

/* ---- REPORTS — strategic recruitment analytics ---- */
/* ---- extended reporting datasets ---- */
var HIRE_TREND=[
 {m:"Jan",opened:6,hired:3,target:4},
 {m:"Feb",opened:9,hired:5,target:5},
 {m:"Mar",opened:7,hired:6,target:5},
 {m:"Apr",opened:8,hired:4,target:6},
 {m:"May",opened:11,hired:7,target:6},
 {m:"Jun",opened:9,hired:5,target:7}
];
var SRC_PERF=[
 {src:"Referral",apps:18,interviews:11,offers:6,hires:5,cost:6},
 {src:"LinkedIn",apps:42,interviews:16,offers:5,hires:4,cost:32},
 {src:"TopCV",apps:31,interviews:9,offers:3,hires:2,cost:14},
 {src:"ITviec",apps:19,interviews:7,offers:2,hires:2,cost:11},
 {src:"Agency",apps:9,interviews:6,offers:3,hires:2,cost:48},
 {src:"VietnamWorks",apps:14,interviews:4,offers:1,hires:1,cost:12}
];
var ROUND_STATS=[
 {round:"Screening",total:74,pass:48},
 {round:"Technical",total:40,pass:22},
 {round:"Culture-fit",total:20,pass:15},
 {round:"Final",total:15,pass:11}
];
var STAGE_DAYS=[
 {stage:"New \u2192 Screening",days:3,sla:4},
 {stage:"Screening \u2192 Interview",days:6,sla:5},
 {stage:"Interview \u2192 Offer",days:9,sla:7},
 {stage:"Offer \u2192 Hired",days:5,sla:5}
];
var OFFER_STATS={extended:14,accepted:9,declined:3,pending:2};
var SENIORITY_DEMAND=[
 {label:"Junior",n:2,color:"var(--info)"},
 {label:"Mid",n:5,color:"var(--primary)"},
 {label:"Senior",n:8,color:"var(--teal)"},
 {label:"Lead+",n:3,color:"var(--warning)"}
];
function miniDonut(seg,size,top,bot){size=size||120;var total=seg.reduce(function(a,b){return a+b.v;},0)||1;var r=size/2-11,cx=size/2,cy=size/2,C=2*Math.PI*r,off=0,arcs="";seg.forEach(function(s){var len=s.v/total*C;arcs+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="'+s.color+'" stroke-width="13" stroke-dasharray="'+len+' '+(C-len)+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 '+cx+' '+cy+')"/>';off+=len;});return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'">'+arcs+'<text x="'+cx+'" y="'+(cy-1)+'" text-anchor="middle" font-family="Geist" font-size="22" font-weight="600" fill="currentColor">'+(top||total)+'</text><text x="'+cx+'" y="'+(cy+15)+'" text-anchor="middle" font-size="8.5" fill="var(--muted)" letter-spacing=".06em">'+(bot||'TOTAL')+'</text></svg>';}
function legendRow(seg){return '<div class="dn-legend">'+seg.map(function(s){return '<div class="dn-li"><span class="dn-dot" style="background:'+s.color+'"></span><span class="dn-lbl">'+s.label+'</span><span class="dn-val">'+s.v+'</span></div>';}).join('')+'</div>';}
function repBar(label,sub,val,max,color,suffix){
  return '<div class="lt-row"><div class="lt-label"><div class="lt-stage">'+label+'</div>'+(sub?'<div class="small muted">'+sub+'</div>':'')+'</div><div class="lt-track"><div class="lt-fill" style="width:'+Math.max(3,Math.round(val/max*100))+'%;background:'+color+'"></div></div><div class="lt-days mono">'+val+(suffix||'')+'</div></div>';
}
var repTab='overview';
var REP_ACTIVE=156, REP_OPEN_MOM=4, REP_DEMAND_MOM=28;
var HIRE_FORECAST=[
 {m:"Jul",demand:14,forecast:9},
 {m:"Aug",demand:18,forecast:11},
 {m:"Sep",demand:16,forecast:12},
 {m:"Oct",demand:13,forecast:12}
];
function repFunnelSVG(stages){
 var W=460,H=290,pad=14,cx=W/2,max=stages[0].n,n=stages.length,bandH=(H-pad*2)/n;
 var col=['#0047FF','#1f54e6','#2f63d8','#3f72c9','#4f80bb'];
 var g='';
 for(var i=0;i<n;i++){
  var cur=stages[i],nx=stages[i+1]||cur;
  var wT=(cur.n/max)*(W-2*pad), wB=(i===n-1?wT:(nx.n/max)*(W-2*pad));
  var y=pad+i*bandH,y2=y+bandH-6;
  g+='<polygon points="'+(cx-wT/2).toFixed(1)+','+y.toFixed(1)+' '+(cx+wT/2).toFixed(1)+','+y.toFixed(1)+' '+(cx+wB/2).toFixed(1)+','+y2.toFixed(1)+' '+(cx-wB/2).toFixed(1)+','+y2.toFixed(1)+'" fill="'+col[i]+'"/>';
  g+='<text x="'+cx+'" y="'+(y+bandH/2-3)+'" text-anchor="middle" fill="#fff" font-family="Geist" font-weight="600" font-size="13.5">'+cur.stage+'</text>';
  g+='<text x="'+cx+'" y="'+(y+bandH/2+14)+'" text-anchor="middle" fill="rgba(255,255,255,.92)" font-family="Geist Mono" font-size="12">'+cur.n+'</text>';
 }
 return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="display:block;height:auto">'+g+'</svg>';
}
function repBubbleSVG(points){
 var W=470,H=300,pl=44,pb=40,pt=14,pr=18,pw=W-pl-pr,ph=H-pt-pb;
 var xMax=Math.max(60,Math.ceil(Math.max.apply(0,points.map(function(p){return p.x;}))/10)*10);
 var yMax=Math.max(10,Math.ceil(Math.max.apply(0,points.map(function(p){return p.y;}))/5)*5);
 var g='';
 var dx=pl+(45/xMax*pw);
 g+='<rect x="'+dx.toFixed(1)+'" y="'+pt+'" width="'+(W-pr-dx).toFixed(1)+'" height="'+ph+'" fill="var(--accent)" opacity=".07"/>';
 g+='<text x="'+(W-pr-4)+'" y="'+(pt+12)+'" text-anchor="end" font-size="9" fill="var(--accent-ink)" font-weight="600">CRITICAL ZONE</text>';
 for(var i=0;i<=4;i++){var yv=yMax/4*i;var y=pt+ph-(yv/yMax*ph);g+='<line x1="'+pl+'" y1="'+y.toFixed(1)+'" x2="'+(W-pr)+'" y2="'+y.toFixed(1)+'" stroke="var(--line)"/><text x="'+(pl-6)+'" y="'+(y+3).toFixed(1)+'" text-anchor="end" font-size="9" fill="var(--muted)" font-family="Geist Mono">'+Math.round(yv)+'</text>';}
 [0,0.5,1].forEach(function(f){var xv=Math.round(xMax*f);var x=pl+(xv/xMax*pw);g+='<text x="'+x.toFixed(1)+'" y="'+(H-22)+'" text-anchor="middle" font-size="9" fill="var(--muted)" font-family="Geist Mono">'+xv+'</text>';});
 g+='<text x="'+(pl+pw/2)+'" y="'+(H-6)+'" text-anchor="middle" font-size="10" fill="var(--muted)">Days open \u2192</text>';
 g+='<text transform="translate(12,'+(pt+ph/2)+') rotate(-90)" text-anchor="middle" font-size="10" fill="var(--muted)">Candidates in pipeline \u2192</text>';
 points.forEach(function(p){
   var cx=pl+(p.x/xMax*pw), cy=pt+ph-(p.y/yMax*ph);
   var right=cx>pl+pw*0.6;
   g+='<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="11" fill="'+p.color+'" fill-opacity=".22" stroke="'+p.color+'" stroke-width="2"/>';
   g+='<text x="'+((right?cx-15:cx+15)).toFixed(1)+'" y="'+(cy+3).toFixed(1)+'" text-anchor="'+(right?'end':'start')+'" font-size="9.5" fill="var(--ink-2)" font-weight="600">'+p.label+'</text>';
 });
 return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="display:block;height:auto">'+g+'</svg>';
}
function repLineSVG(series,xLabels,yMax){
 var W=470,H=240,pl=34,pb=30,pt=16,pr=16,pw=W-pl-pr,ph=H-pt-pb;
 if(!yMax){yMax=Math.max.apply(0,series.reduce(function(a,s){return a.concat(s.values);},[]));}
 yMax=Math.max(5,Math.ceil(yMax/5)*5);
 var n=xLabels.length,g='';
 for(var i=0;i<=4;i++){var yv=yMax/4*i;var y=pt+ph-(yv/yMax*ph);g+='<line x1="'+pl+'" y1="'+y.toFixed(1)+'" x2="'+(W-pr)+'" y2="'+y.toFixed(1)+'" stroke="var(--line)"/><text x="'+(pl-6)+'" y="'+(y+3).toFixed(1)+'" text-anchor="end" font-size="9" fill="var(--muted)" font-family="Geist Mono">'+Math.round(yv)+'</text>';}
 xLabels.forEach(function(lb,xi){var x=pl+(n===1?pw/2:pw/(n-1)*xi);g+='<text x="'+x.toFixed(1)+'" y="'+(H-10)+'" text-anchor="middle" font-size="10" fill="var(--muted)">'+lb+'</text>';});
 series.forEach(function(s){
   var pts=s.values.map(function(v,xi){var x=pl+(n===1?pw/2:pw/(n-1)*xi);var y=pt+ph-(v/yMax*ph);return [x,y];});
   g+='<polyline points="'+pts.map(function(p){return p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' ')+'" fill="none" stroke="'+s.color+'" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"'+(s.dash?' stroke-dasharray="5 4"':'')+'/>';
   pts.forEach(function(p){g+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3.4" fill="var(--surface)" stroke="'+s.color+'" stroke-width="2"/>';});
 });
 return '<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="display:block;height:auto">'+g+'</svg>';
}
function posRisk(days,cands){ if(days>45&&cands<=3)return 'Critical'; if(days>30||cands<=2)return 'Risk'; return 'Healthy'; }
function riskColor(r){ return r==='Critical'?'var(--accent)':r==='Risk'?'var(--warning)':'var(--positive)'; }
function fillProb(days,cands){ return Math.round(Math.min(92,Math.max(15, 55 + cands*5 - days*0.95))); }

function stageLeadtimes(){
 var order=['New','Screening','Interview','Offer','Hired'];
 var sums={},counts={};
 CANDIDATES.forEach(function(c){
   var d={};
   (c.hist||[]).forEach(function(h){var dt=h.ts.slice(0,10),a=h.action;
     if(/created/i.test(a))d.New=dt; else if(/Screening/.test(a))d.Screening=dt; else if(/Interview/.test(a))d.Interview=dt; else if(/Offer/.test(a))d.Offer=dt; else if(/Hired/.test(a))d.Hired=dt;});
   for(var i=1;i<order.length;i++){var a=order[i-1],b=order[i];if(d[a]&&d[b]){var dd=dDiff(d[a],d[b]);if(dd>=0){var key=a+'>'+b;sums[key]=(sums[key]||0)+dd;counts[key]=(counts[key]||0)+1;}}}
 });
 return order.slice(1).map(function(b,i){var a=order[i];var key=a+'>'+b;return {from:a,to:b,avg:counts[key]?Math.round(sums[key]/counts[key]*10)/10:0,n:counts[key]||0};});
}
function renderReports(box){
 var TODAY='2026-06-09';
 var openReqs=hiringVisibleReqs().filter(function(r){return r.status!=='Filled';});
 /* pipeline counts + pass-through */
 var pass=[];for(var k=1;k<FUNNEL.length;k++){pass.push({from:FUNNEL[k-1].stage,to:FUNNEL[k].stage,pct:Math.round(FUNNEL[k].n/FUNNEL[k-1].n*100)});}
 var slowestPass=pass.slice().sort(function(a,b){return a.pct-b.pct;})[0];
 var overallConv=Math.round(FUNNEL[FUNNEL.length-1].n/FUNNEL[0].n*1000)/10;
 /* leadtimes */
 var lts=stageLeadtimes();
 var maxLt=Math.max.apply(0,lts.map(function(l){return l.avg;}))||1;
 var slowLt=lts.slice().filter(function(l){return l.n>0;}).sort(function(a,b){return b.avg-a.avg;})[0]||lts[0];
 var totalLt=Math.round(lts.reduce(function(a,l){return a+l.avg;},0)*10)/10;
 /* time to hire */
 var ttfs=HIRE_HISTORY.map(function(h){return dDiff(h.created,h.approved);});
 var avgTtf=Math.round(ttfs.reduce(function(a,b){return a+b;},0)/ttfs.length);
 var acceptRate=Math.round(OFFER_STATS.accepted/OFFER_STATS.extended*100);
 /* open positions vs deadline */
 var posRows=openReqs.map(function(r){var open=dDiff(r.start,TODAY);var left=dDiff(TODAY,r.due);var st=left<0?'Overdue':left<=21?'Due soon':'On track';return {title:r.title,acc:r.acc,open:open,left:left,due:r.due,grade:r.grade,st:st};}).sort(function(a,b){return a.left-b.left;});
 var overdue=posRows.filter(function(p){return p.st==='Overdue';}).length;
 var dueSoon=posRows.filter(function(p){return p.st==='Due soon';}).length;
 var onTrack=posRows.filter(function(p){return p.st==='On track';}).length;
 var onTrackPct=Math.round(onTrack/posRows.length*100);
 var oldest=posRows.slice().sort(function(a,b){return b.open-a.open;})[0];
 var maxOpen=Math.max.apply(0,posRows.map(function(p){return p.open;}))||1;
 /* health */
 var withinAge=openReqs.filter(function(r){return dDiff(r.start,TODAY)<=30;}).length;
 var ageScore=openReqs.length?Math.round(withinAge/openReqs.length*100):100;
 var volScore=Math.min(100,Math.round(REP_ACTIVE/Math.max(1,openReqs.length)/12*100));
 var convScore=Math.min(100,Math.round(overallConv/6*100));
 var health=Math.round((ageScore+volScore+convScore+acceptRate)/4);
 var healthWord=health>=75?'Healthy':health>=55?'Needs attention':'At risk';
 var healthCol=health>=75?'var(--positive-ink)':health>=55?'var(--warning-ink)':'var(--accent-ink)';
 /* sources */
 var srcSorted=SRC_PERF.slice().sort(function(a,b){return (b.hires/b.apps)-(a.hires/a.apps);});
 var totalApps=SRC_PERF.reduce(function(a,s){return a+s.apps;},0);
 var totalHires=SRC_PERF.reduce(function(a,s){return a+s.hires;},0);
 var bestSrc=srcSorted[0];
 var bestSrcHirePct=Math.round(bestSrc.hires/totalHires*100);
 var bestSrcAppPct=Math.round(bestSrc.apps/totalApps*100);
 var maxConv=Math.max.apply(0,SRC_PERF.map(function(s){return s.hires/s.apps;}));
 /* recruiters */
 var maxHires=Math.max.apply(0,REC_PERF.map(function(r){return r.hires;}))||1;
 var recScored=REC_PERF.map(function(r){var ttfScore=Math.max(0,Math.min(100,(55-r.ttf)/40*100));var eff=Math.round(0.35*(r.hires/maxHires*100)+0.25*r.onTime+0.2*ttfScore+0.2*(r.csat/5*100));return Object.assign({},r,{eff:eff});}).sort(function(a,b){return b.eff-a.eff;});
 var bestRec=recScored[0];
 var worst={title:oldest.title,x:oldest.open,y:CANDIDATES.filter(function(c){return reqTitle(c.req)===oldest.title;}).length};
 var cumD=0,cumF=0,gapByAug=0;HIRE_FORECAST.forEach(function(f,ix){cumD+=f.demand;cumF+=f.forecast;if(ix===1)gapByAug=cumD-cumF;});
 var totalGapFc=cumD-cumF;

 function sec(t,d){return '<div class="rep-sec"><span class="rep-sec-t">'+t+'</span>'+(d?'<span class="rep-sec-m">'+d+'</span>':'')+'</div>';}
 function insight(txt,tone){var bg=tone==='warn'?'background:var(--warning-soft);color:var(--warning-ink)':tone==='bad'?'background:var(--accent-soft);color:var(--accent-ink)':tone==='good'?'background:var(--positive-soft);color:var(--positive-ink)':'background:var(--info-soft);color:var(--ink-2)';return '<div class="rep-insight" style="'+bg+'">'+sparkDot()+'<span>'+txt+'</span></div>';}

 /* KPI */
 var kpi='<div class="kpi-exec">'
  +'<div class="kx-card"><div class="kx-l">Open positions</div><div class="kx-v">'+openReqs.length+'</div><div class="kx-d up">+'+REP_OPEN_MOM+' vs last month</div><div class="kx-i">'+sparkDot()+'Demand up '+REP_DEMAND_MOM+'% vs last month</div></div>'
  +'<div class="kx-card"><div class="kx-l">Candidates in process</div><div class="kx-v">'+REP_ACTIVE+'</div><div class="kx-d">about '+Math.round(REP_ACTIVE/Math.max(1,openReqs.length))+' per open role</div></div>'
  +'<div class="kx-card"><div class="kx-l">Avg days to hire</div><div class="kx-v">'+avgTtf+'<span class="kx-u">d</span></div><div class="kx-d '+(avgTtf>30?'down':'up')+'">'+(avgTtf>30?(avgTtf-30)+' days over the 30-day goal':'within the 30-day goal')+'</div></div>'
  +'<div class="kx-card"><div class="kx-l">Offers accepted</div><div class="kx-v">'+acceptRate+'<span class="kx-u">%</span></div><div class="kx-d">'+OFFER_STATS.accepted+' of '+OFFER_STATS.extended+' offers accepted</div></div>'
  +'<div class="kx-card kx-health"><div class="kx-l">Hiring health</div><div class="kx-v" style="color:'+healthCol+'">'+health+'<span class="kx-u">/100</span></div><div class="kx-hbar"><div class="kx-hfill" style="width:'+health+'%;background:'+healthCol+'"></div></div><div class="kx-d" style="color:'+healthCol+'">'+healthWord+'</div></div>'
  +'</div>';

 /* pipeline — horizontal bars */
 var col=['#0047FF','#1f54e6','#2f63d8','#3f72c9','#4f80bb'];
 var maxN=FUNNEL[0].n;
 var funBars='';
 FUNNEL.forEach(function(s,i){
   var ofApplied=Math.round(s.n/maxN*100);
   funBars+='<div class="hf-row"><div class="hf-label">'+s.stage+'</div><div class="hf-track"><div class="hf-bar" style="width:'+Math.max(7,ofApplied)+'%;background:'+col[i]+'"><span class="hf-n">'+s.n+'</span></div></div><div class="hf-pct">'+ofApplied+'%</div></div>';
   if(i<FUNNEL.length-1){var p=pass[i];var bn=p===slowestPass;funBars+='<div class="hf-drop'+(bn?' bn':'')+'">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><polyline points="6 13 12 19 18 13"/>')+'<b>'+p.pct+'%</b> move on to '+p.to+(bn?' \u00b7 biggest drop':'')+'</div>';}
 });
 var rowPipe='<div class="card"><div class="card-head"><h3>How many candidates are at each step</h3><span class="meta">'+FUNNEL[0].n+' applied this quarter \u2192 '+FUNNEL[FUNNEL.length-1].n+' hired</span></div><div class="card-pad">'+funBars
  +insight('Most candidates fall away between <b>'+slowestPass.from+'</b> and <b>'+slowestPass.to+'</b> \u2014 only <b>'+slowestPass.pct+'%</b> move on. This is the step to fix first: tighten who you source or sharpen the job description.','bad')
  +'</div></div>';

 /* leadtime */
 var ltBars=lts.map(function(l){var c=l===slowLt?'var(--warning)':'var(--teal)';return '<div class="lt-row"><div class="lt-label"><div class="lt-stage">'+l.from+' \u2192 '+l.to+'</div><div class="small muted">'+(l.n?l.n+' candidate'+(l.n===1?'':'s'):'no data yet')+'</div></div><div class="lt-track"><div class="lt-fill" style="width:'+(l.avg?Math.max(4,Math.round(l.avg/maxLt*100)):0)+'%;background:'+c+'"></div></div><div class="lt-days mono">'+(l.avg?l.avg+'d':'\u2014')+'</div></div>';}).join('');
 var rowLt='<div class="card"><div class="card-head"><h3>How long candidates spend at each step</h3><span class="meta">average days, from candidate history</span></div><div class="card-pad">'+ltBars
  +insight('A candidate takes about <b>'+totalLt+' days</b> end to end. The slowest step is <b>'+slowLt.from+' \u2192 '+slowLt.to+'</b> at <b>'+slowLt.avg+' days</b> \u2014 usually waiting on interview scheduling or a hiring-manager decision.','warn')
  +'</div></div>';

 var rowPipeLt='<div class="grid cols-2" style="align-items:start">'+rowPipe+rowLt+'</div>';

 /* open positions vs deadline */
 var stPill=function(s){var c=s==='Overdue'?'cst-rejected':s==='Due soon'?'cst-interview':'cst-hired';return '<span class="status-pill '+c+'">'+s+'</span>';};
 var posTable='<div class="ctrl-table"><table><thead><tr><th>Position</th><th>Account</th><th>Open for</th><th>Due date</th><th>Time left</th><th>Status</th></tr></thead><tbody>'
  +posRows.map(function(p){var over=p.open>30;return '<tr><td style="font-weight:600">'+p.title+'</td><td class="small muted">'+accName(p.acc)+'</td>'
    +'<td><div class="days-cell"><div class="days-bar"><div class="days-fill" style="width:'+Math.round(p.open/maxOpen*100)+'%;background:'+(over?'var(--warning)':'var(--teal)')+'"></div></div><span class="mono small'+(over?'" style="color:var(--warning-ink)':'')+'">'+p.open+'d</span></div></td>'
    +'<td class="mono small">'+p.due.slice(5)+'</td>'
    +'<td class="mono small'+(p.left<0?'" style="color:var(--accent-ink)':p.left<=21?'" style="color:var(--warning-ink)':'')+'">'+(p.left<0?Math.abs(p.left)+'d over':'in '+p.left+'d')+'</td>'
    +'<td>'+stPill(p.st)+'</td></tr>';}).join('')
  +'</tbody></table></div>';
 var posInsight=insight((overdue?'<b>'+overdue+'</b> position'+(overdue>1?'s are':' is')+' already past its due date. ':'')+'<b>'+dueSoon+'</b> role'+(dueSoon===1?' is':'s are')+' due within 3 weeks \u2014 <b>'+(posRows.filter(function(p){return p.st!=='On track';}).map(function(p){return p.title;}).slice(0,3).join(', ')||'none')+'</b>. <b>'+oldest.title+'</b> has been open the longest at <b>'+oldest.open+' days</b>. Overall <b>'+onTrackPct+'%</b> of open roles are still on track.', overdue?'bad':dueSoon?'warn':'good');
 var rowPos='<div class="card"><div class="card-head"><h3>Open positions vs their deadline</h3><span class="meta">'+onTrack+' on track \u00b7 '+dueSoon+' due soon \u00b7 '+overdue+' overdue</span></div>'+posTable+'<div class="card-pad" style="padding-top:14px">'+posInsight+'</div></div>';

 /* capacity & demand */
 var rowTrend='<div class="grid cols-2" style="align-items:start">'
  +'<div class="card"><div class="card-head"><h3>Roles opened vs filled</h3><span class="meta">last 6 months</span></div><div class="card-pad">'+repLineSVG([{name:'Opened',color:'var(--warning)',values:HIRE_TREND.map(function(t){return t.opened;})},{name:'Hired',color:'var(--primary)',values:HIRE_TREND.map(function(t){return t.hired;})}],HIRE_TREND.map(function(t){return t.m;}))+'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:var(--warning)"></span>Roles opened</span><span class="tl-i"><span class="tl-sw" style="background:var(--primary)"></span>People hired</span></div>'+insight('New roles are opening faster than we are filling them. The gap widens each month \u2014 hiring capacity is the constraint.','warn')+'</div></div>'
  +'<div class="card"><div class="card-head"><h3>Can we keep up? (next 4 months)</h3><span class="meta">people needed vs expected hires</span></div><div class="card-pad">'+repLineSVG([{name:'Demand',color:'var(--accent)',values:HIRE_FORECAST.map(function(f){return f.demand;})},{name:'Forecast',color:'var(--primary)',dash:true,values:HIRE_FORECAST.map(function(f){return f.forecast;})}],HIRE_FORECAST.map(function(f){return f.m;}))+'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:var(--accent)"></span>People needed</span><span class="tl-i"><span class="tl-sw" style="background:var(--primary)"></span>Expected hires</span></div>'+insight('At today\u2019s pace we will be short <b>'+gapByAug+' people by August</b> and <b>'+totalGapFc+'</b> over four months. Add recruiter capacity or push less-urgent roles to Q4.','bad')+'</div></div>'
  +'</div>';

 /* recruiters + sources */
 var recCard='<div class="card"><div class="card-head"><h3>Recruiters</h3><span class="meta">ranked by overall score</span></div><div class="card-pad">'
  +recScored.map(function(r,ix){return '<div class="rec-row"><div class="rec-rank">'+(ix+1)+'</div>'+av(r.name,"width:32px;height:32px;font-size:11px")
   +'<div class="rec-meta"><div class="rec-name">'+r.name+'</div><div class="small muted">'+r.active+' candidates in process</div><div class="rec-bar"><div class="rec-bar-fill" style="width:'+Math.round(r.hires/maxHires*100)+'%"></div></div></div>'
   +'<div class="rec-stats"><div class="rec-stat"><span class="rs-num">'+r.hires+'</span><span class="rs-cap">hires</span></div><div class="rec-stat"><span class="rs-num">'+r.ttf+'d</span><span class="rs-cap">avg days</span></div><div class="rec-stat"><span class="rs-num" style="color:'+(r.onTime>=80?'var(--positive-ink)':'var(--warning-ink)')+'">'+r.onTime+'%</span><span class="rs-cap">on time</span></div><div class="rec-stat eff"><span class="rs-num" style="color:var(--primary-ink)">'+r.eff+'</span><span class="rs-cap">score</span></div></div></div>';}).join('')
  +insight('<b>'+bestRec.name+'</b> is the strongest this quarter \u2014 most hires and best on-time rate. Pair others with '+bestRec.name.split(' ').slice(-1)[0]+' on the hardest roles.','good')
  +'</div></div>';
 var srcCard='<div class="card"><div class="card-head"><h3>Where hires come from</h3><span class="meta">by hire rate, not number of CVs</span></div><div class="ctrl-table" style="border:none;border-radius:0;background:transparent"><table><thead><tr><th>Channel</th><th>Applicants</th><th>Hires</th><th>Hire rate</th><th>Cost / hire</th></tr></thead><tbody>'
  +srcSorted.map(function(s){var cv=s.hires/s.apps;return '<tr><td style="font-weight:600">'+s.src+'</td><td class="mono small">'+s.apps+'</td><td class="mono small" style="font-weight:700;color:var(--positive-ink)">'+s.hires+'</td><td><div class="days-cell"><div class="days-bar"><div class="days-fill" style="width:'+Math.round(cv/maxConv*100)+'%;background:var(--primary)"></div></div><span class="mono small">'+Math.round(cv*100)+'%</span></div></td><td class="mono small'+(s.cost>=40?'" style="color:var(--accent-ink)':'')+'">\u20ab'+s.cost+'M</td></tr>';}).join('')
  +'</tbody></table></div><div class="card-pad" style="padding-top:14px">'+insight('<b>'+bestSrc.src+'</b> makes <b>'+bestSrcHirePct+'% of hires</b> from only <b>'+bestSrcAppPct+'% of applicants</b> \u2014 the best-value channel. Lean into it; spend less on high-volume boards that rarely convert.','good')+'</div></div>';
 var rowTeam='<div class="grid cols-2" style="align-items:start">'+recCard+srcCard+'</div>';

 /* AI signals */
 var ai='<div class="ai-cards">'
  +'<div class="ai-card crit"><div class="ai-h"><span class="ai-dot" style="background:var(--accent)"></span>Biggest risk</div><div class="ai-b"><b>'+worst.title+'</b> has been open <b>'+worst.x+' days</b> with only <b>'+worst.y+' candidate'+(worst.y===1?'':'s')+'</b> in process.</div><div class="ai-f">Chance of filling on time: <b style="color:var(--accent-ink)">'+Math.round(Math.min(92,Math.max(15,55+worst.y*5-worst.x*0.95)))+'%</b></div></div>'
  +'<div class="ai-card warn"><div class="ai-h"><span class="ai-dot" style="background:var(--warning)"></span>Slowest step</div><div class="ai-b">Only <b>'+slowestPass.pct+'%</b> of candidates get from <b>'+slowestPass.from+'</b> to <b>'+slowestPass.to+'</b> \u2014 fewer than half.</div><div class="ai-f">Review screening and book interviews faster</div></div>'
  +'<div class="ai-card opp"><div class="ai-h"><span class="ai-dot" style="background:var(--positive)"></span>Best opportunity</div><div class="ai-b"><b>'+bestSrc.src+'</b> brings <b>'+bestSrcHirePct+'% of hires</b> from just '+bestSrcAppPct+'% of applicants.</div><div class="ai-f">Run more '+bestSrc.src.toLowerCase()+' campaigns</div></div>'
  +'</div>';

 box.innerHTML=kpi
  +sec('Hiring pipeline','How many candidates sit at each step right now')+rowPipeLt
  +sec('Open positions vs deadline','Every open role, how long it has been open, and whether it will hit its due date')+rowPos
  +sec('Can we keep up with demand?','Are we hiring fast enough for what the business needs')+rowTrend
  +sec('Recruiters & channels','Who is delivering, and which sources actually produce hires')+rowTeam
  +sec('What to act on this week')+ai;
}
function sparkDot(){return '<span class="spark-dot"></span>';}


/* =====================================================================
   ███  LIFECYCLE MANAGEMENT MODULE  ███
   Employee Lifecycle: Preboarding → Onboarding → Probation → Active
   → Movement → Offboarding → Alumni.  Shares engine scope & helpers.
   ===================================================================== */
Object.assign(NAV_ICON,{
 lc_dashboard:'<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
 lc_directory:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>',
 lc_onboarding:'<path d="M22 11V9a2 2 0 0 0-2-2h-6l-2-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/><path d="M16 19l2 2 4-4"/>',
 lc_probation:'<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
 lc_movement:'<path d="M16 3h5v5"/><path d="M21 3l-7 7"/><path d="M8 21H3v-5"/><path d="M3 21l7-7"/>',
 lc_offboarding:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'
});
MOD_TABS.lifecycle=[["lc_dashboard","Dashboard"],["lc_directory","Directory"],["lc_onboarding","Onboarding"],["lc_probation","Probation"],["lc_offboarding","Offboarding"]];
NAV_ICON.chat='<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M9.5 10.5l1.2 1.2L13 9.2"/>';
NAV_ICON.performance='<path d="M3 3v18h18"/><path d="M7 14l3-4 3 3 4-6"/>';
MOD_TABS.ai=[["chat","Super Century AI"]];

const LC_TODAY="2026-06-09";
function lcDays(d){return Math.round((new Date(d)-new Date(LC_TODAY))/864e5);}   /* +future / −past */
function lcAgo(d){return -lcDays(d);}
let lcDashLayout="overview", lcJourneyLayout="timeline", lcJourneyId=null, lcDirView="directory";
let lcDirStage="All", lcDirDept="All", lcDirQ="", lcDirPage=0;
let lcOnbView="kanban", lcProbId=null;

/* ---- canonical stages ---- */
const LC_STAGES=["Preboarding","Onboarding","Probation","Active","Offboarding","Alumni"];
const LC_STAGE_TONE={Preboarding:"info",Onboarding:"primary",Probation:"warning",Active:"positive",Offboarding:"accent",Alumni:"muted"};
function lcToneVar(t){return t==="primary"?"var(--primary)":t==="muted"?"var(--muted)":"var(--"+t+")";}
function lcStageColor(s){return lcToneVar(LC_STAGE_TONE[s]||"muted");}
function lcStagePill(s){const t=LC_STAGE_TONE[s]||"muted";const c=t==="muted"?"var(--surface-3)":"var(--"+t+"-soft)";const ink=t==="primary"?"var(--primary-ink)":t==="muted"?"var(--muted)":"var(--"+t+"-ink)";return '<span class="status-pill" style="background:'+c+';color:'+ink+'">'+s+'</span>';}
function lcHealth(h){const m={"On track":["positive","On track"],"At risk":["warning","At risk"],"Blocked":["accent","Blocked"],"Overdue":["accent","Overdue"],"Complete":["positive","Complete"]};const x=m[h]||["muted",h];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}
const OWNER_META={HR:["#0047FF","HR"],IT:["#207087","IT"],Leader:["#7c4dff","Leader"],Employee:["#1f8a4c","Employee"],Finance:["#b86e00","Finance"],PMO:["#c2410c","PMO"]};
function ownerChip(o){const m=OWNER_META[o]||["#6b6c75",o];return '<span class="own-chip" style="--oc:'+m[0]+'">'+m[1]+'</span>';}
function taskStatePill(s){const m={done:["positive","Done"],doing:["info","In progress"],todo:["muted","To do"],blocked:["accent","Blocked"]};const x=m[s]||["muted",s];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}

/* ---- people resolver: ref → EMP, else inline ---- */
function lcPerson(c){
 if(c.ref){const e=EMP.find(x=>x.id===c.ref);if(e)return {id:e.id,name:e.name,role:e.role,dept:e.dept,acc:e.acc,mgr:e.mgr,grade:e.grade,joined:e.joined,loc:e.loc,type:e.type};}
 return {id:c.id,name:c.name,role:c.role,dept:c.dept,acc:c.acc||null,mgr:c.mgr||null,grade:c.grade||"",joined:c.started||c.joined,loc:c.loc||"Hanoi, VN",type:c.type||"Full-Time"};
}
function lcLeaderName(c){const p=lcPerson(c);return p.mgr?mgrName(p.mgr):"—";}
function lcAccName(c){const p=lcPerson(c);return p.acc?accName(p.acc):"Internal";}

/* ===================== SEED DATA ===================== */
/* tasks: {t,owner,pic,due,st,col}  st: done|doing|todo|blocked  col: onboarding stage column */
const LC_CASES=[
 /* ---------- PREBOARDING ---------- */
 {id:"LC-2001",name:"Vuong Thi Lan",role:"Backend Engineer",dept:"Engineering",acc:"ACC-A",mgr:"FA-1002",grade:"L4",loc:"Hanoi, VN",type:"Full-Time",
  stage:"Preboarding",sub:"Offer accepted",progress:35,health:"On track",started:"2026-05-28",nextMs:"Day 1 — first day",nextDate:"2026-06-22",
  tasks:[
   {t:"Sign employment contract",owner:"Employee",pic:"Vuong Thi Lan",due:"2026-06-12",st:"done",col:"Preboarding"},
   {t:"Submit personal information & bank details",owner:"Employee",pic:"Vuong Thi Lan",due:"2026-06-14",st:"doing",col:"Preboarding"},
   {t:"Background & reference check",owner:"HR",pic:"Tran Bao",due:"2026-06-16",st:"doing",col:"Preboarding"},
   {t:"Raise equipment request (laptop)",owner:"IT",pic:"IT Service Desk",due:"2026-06-18",st:"todo",col:"Preboarding"},
   {t:"Create accounts (email, Teams)",owner:"IT",pic:"IT Service Desk",due:"2026-06-20",st:"todo",col:"Preboarding"}
  ],
  events:[{date:"2026-05-26",stage:"Offer Accepted",title:"Offer accepted",note:"Signed offer returned via ATS",done:true},
   {date:"2026-05-28",stage:"Preboarding",title:"Preboarding started",note:"HR opened preboarding checklist",done:true},
   {date:"2026-06-22",stage:"Onboarding",title:"Day 1 — scheduled",note:"Welcome session 9:00, Hanoi office",done:false}],
  docs:[{name:"Signed Offer Letter",type:"Contract",st:"signed"},{name:"Employment Contract 2026",type:"Contract",st:"signed"},{name:"Personal Info Form",type:"HR",st:"pending"},{name:"NDA",type:"Legal",st:"missing"}]},

 {id:"LC-2002",name:"Tran Minh Duc",role:"QA Engineer",dept:"QA",acc:"ACC-D",mgr:"FA-1020",grade:"L3",loc:"Ho Chi Minh, VN",type:"Full-Time",
  stage:"Preboarding",sub:"Offer accepted",progress:20,health:"At risk",started:"2026-06-03",nextMs:"Day 1 — first day",nextDate:"2026-06-29",
  tasks:[
   {t:"Sign employment contract",owner:"Employee",pic:"Tran Minh Duc",due:"2026-06-10",st:"done",col:"Preboarding"},
   {t:"Submit ID & tax documents",owner:"Employee",pic:"Tran Minh Duc",due:"2026-06-09",st:"blocked",col:"Preboarding"},
   {t:"Background check",owner:"HR",pic:"Tran Bao",due:"2026-06-18",st:"todo",col:"Preboarding"},
   {t:"Equipment request",owner:"IT",pic:"IT Service Desk",due:"2026-06-20",st:"todo",col:"Preboarding"}
  ],
  events:[{date:"2026-06-01",stage:"Offer Accepted",title:"Offer accepted",note:"",done:true},{date:"2026-06-03",stage:"Preboarding",title:"Preboarding started",note:"",done:true}],
  docs:[{name:"Signed Offer Letter",type:"Contract",st:"signed"},{name:"ID / Tax Documents",type:"Identity",st:"missing"}]},

 /* ---------- ONBOARDING ---------- */
 {id:"LC-2003",ref:"FA-1011",
  stage:"Onboarding",sub:"Day 7 audit",progress:58,health:"On track",started:"2026-06-01",nextMs:"Day 30 review",nextDate:"2026-07-01",
  tasks:[
   {t:"Welcome session & company intro",owner:"HR",pic:"Tran Bao",due:"2026-06-01",st:"done",col:"Day 1"},
   {t:"Policy introduction & handbook",owner:"HR",pic:"Tran Bao",due:"2026-06-02",st:"done",col:"Day 1"},
   {t:"Provision email & Teams access",owner:"IT",pic:"IT Service Desk",due:"2026-06-01",st:"done",col:"Day 1"},
   {t:"Hand over laptop & dev environment",owner:"IT",pic:"IT Service Desk",due:"2026-06-02",st:"done",col:"Day 1"},
   {t:"Assign onboarding buddy",owner:"Leader",pic:"Tran Thu Ha",due:"2026-06-02",st:"done",col:"Day 1"},
   {t:"Team introduction",owner:"Leader",pic:"Tran Thu Ha",due:"2026-06-03",st:"done",col:"Day 1"},
   {t:"Complete profile & emergency contacts",owner:"Employee",pic:"James Carter",due:"2026-06-04",st:"done",col:"Day 1"},
   {t:"Read & acknowledge core policies",owner:"Employee",pic:"James Carter",due:"2026-06-05",st:"done",col:"Day 7"},
   {t:"Define 30-day training roadmap",owner:"Leader",pic:"Tran Thu Ha",due:"2026-06-08",st:"doing",col:"Day 7"},
   {t:"Day 7 check-in audit",owner:"HR",pic:"Tran Bao",due:"2026-06-09",st:"doing",col:"Day 7"},
   {t:"First task assigned (starter ticket)",owner:"Leader",pic:"Tran Thu Ha",due:"2026-06-12",st:"todo",col:"Day 30"},
   {t:"30-day performance review",owner:"Leader",pic:"Tran Thu Ha",due:"2026-07-01",st:"todo",col:"Day 30"}
  ],
  events:[{date:"2026-06-01",stage:"Onboarding",title:"Day 1 complete",note:"Welcome session, IT setup, buddy assigned",done:true},
   {date:"2026-06-05",stage:"Onboarding",title:"Policies acknowledged",note:"All core policies read & signed",done:true},
   {date:"2026-06-09",stage:"Onboarding",title:"Day 7 audit — in progress",note:"HR check-in scheduled today",done:false},
   {date:"2026-07-01",stage:"Onboarding",title:"Day 30 review",note:"With buddy & leader",done:false}],
  docs:[{name:"Internship Agreement",type:"Contract",st:"signed"},{name:"Code of Conduct",type:"Policy",st:"signed"},{name:"IT Acceptable Use",type:"Policy",st:"signed"},{name:"Training Roadmap",type:"HR",st:"pending"}]},

 {id:"LC-2004",ref:"FA-1029",
  stage:"Onboarding",sub:"Day 30 review",progress:64,health:"Blocked",started:"2026-05-26",nextMs:"Day 30 review",nextDate:"2026-06-25",
  tasks:[
   {t:"Welcome session & company intro",owner:"HR",pic:"Tran Bao",due:"2026-05-26",st:"done",col:"Day 1"},
   {t:"Provision email & Teams access",owner:"IT",pic:"IT Service Desk",due:"2026-05-26",st:"done",col:"Day 1"},
   {t:"Hand over GPU workstation",owner:"IT",pic:"IT Service Desk",due:"2026-05-28",st:"blocked",col:"Day 1"},
   {t:"Grant access to research data lake",owner:"IT",pic:"IT Service Desk",due:"2026-06-01",st:"blocked",col:"Day 7"},
   {t:"Assign onboarding buddy",owner:"Leader",pic:"Le Quoc Hung",due:"2026-05-28",st:"done",col:"Day 1"},
   {t:"Complete profile",owner:"Employee",pic:"Bui Nguyen Minh",due:"2026-05-29",st:"done",col:"Day 1"},
   {t:"Read research & security policies",owner:"Employee",pic:"Bui Nguyen Minh",due:"2026-06-02",st:"done",col:"Day 7"},
   {t:"Define 30-day research onboarding plan",owner:"Leader",pic:"Le Quoc Hung",due:"2026-06-05",st:"done",col:"Day 7"},
   {t:"Day 7 audit",owner:"HR",pic:"Tran Bao",due:"2026-06-02",st:"done",col:"Day 7"},
   {t:"30-day review",owner:"Leader",pic:"Le Quoc Hung",due:"2026-06-25",st:"todo",col:"Day 30"}
  ],
  events:[{date:"2026-05-26",stage:"Onboarding",title:"Day 1 complete",note:"",done:true},
   {date:"2026-05-28",stage:"Onboarding",title:"Blocker raised — GPU workstation",note:"IT hardware backorder; researcher idle on env setup",done:false},
   {date:"2026-06-25",stage:"Onboarding",title:"Day 30 review",note:"",done:false}],
  docs:[{name:"Labor Contract",type:"Contract",st:"signed"},{name:"Research Security Policy",type:"Policy",st:"signed"},{name:"Data Lake Access Form",type:"IT",st:"pending"}]},

 {id:"LC-2005",name:"Le Thi Ngoc",role:"Frontend Engineer",dept:"Engineering",acc:"ACC-E",mgr:"FA-1021",grade:"L3",loc:"Ho Chi Minh, VN",type:"Full-Time",
  stage:"Onboarding",sub:"Day 1",progress:30,health:"On track",started:"2026-06-08",nextMs:"Day 7 audit",nextDate:"2026-06-15",
  tasks:[
   {t:"Welcome session",owner:"HR",pic:"Tran Bao",due:"2026-06-08",st:"done",col:"Day 1"},
   {t:"Provision accounts & laptop",owner:"IT",pic:"IT Service Desk",due:"2026-06-08",st:"done",col:"Day 1"},
   {t:"Assign buddy",owner:"Leader",pic:"Vo Thi Huong",due:"2026-06-09",st:"doing",col:"Day 1"},
   {t:"Complete profile",owner:"Employee",pic:"Le Thi Ngoc",due:"2026-06-10",st:"doing",col:"Day 1"},
   {t:"Read core policies",owner:"Employee",pic:"Le Thi Ngoc",due:"2026-06-12",st:"todo",col:"Day 7"},
   {t:"Day 7 audit",owner:"HR",pic:"Tran Bao",due:"2026-06-15",st:"todo",col:"Day 7"}
  ],
  events:[{date:"2026-06-08",stage:"Onboarding",title:"Day 1 — started",note:"Welcome session, IT setup done",done:true},{date:"2026-06-15",stage:"Onboarding",title:"Day 7 audit",note:"",done:false}],
  docs:[{name:"Labor Contract",type:"Contract",st:"signed"},{name:"Code of Conduct",type:"Policy",st:"pending"}]},

 /* ---------- PROBATION ---------- */
 {id:"LC-2006",ref:"FA-1004",
  stage:"Probation",sub:"Day 60 review",progress:66,health:"On track",started:"2026-04-21",nextMs:"Day 90 confirmation",nextDate:"2026-07-21",
  tasks:[
   {t:"Set probation objectives",owner:"Leader",pic:"Pham Quoc Bao",due:"2026-04-28",st:"done",col:"Day 1"},
   {t:"30-day review",owner:"Leader",pic:"Pham Quoc Bao",due:"2026-05-21",st:"done",col:"Day 30"},
   {t:"60-day review",owner:"Leader",pic:"Pham Quoc Bao",due:"2026-06-20",st:"doing",col:"Day 60"},
   {t:"90-day confirmation decision",owner:"Manager",pic:"Le Minh Anh",due:"2026-07-21",st:"todo",col:"Day 90"}
  ],
  events:[{date:"2026-04-21",stage:"Probation",title:"Probation started",note:"3-month probation, objectives set Apr 28",done:true},
   {date:"2026-05-21",stage:"Probation",title:"30-day review — 3.8/5",note:"Solid ramp on the Dealer Portal UI",done:true},
   {date:"2026-07-21",stage:"Probation",title:"90-day confirmation",note:"Decision due",done:false}],
  docs:[{name:"Probation Contract",type:"Contract",st:"signed"},{name:"Probation Objectives",type:"HR",st:"signed"},{name:"30-day Review Form",type:"Review",st:"signed"}],
  prob:{risk:22,objectives:[{t:"Ship Dealer Portal UI module to staging",weight:40,prog:75},{t:"Reach team velocity baseline (8 pts/sprint)",weight:30,prog:80},{t:"Complete React/TS internal certification",weight:15,prog:60},{t:"Establish strong squad collaboration",weight:15,prog:90}],
   reviews:[{day:30,score:3.8,by:"Pham Quoc Bao (Leader)",note:"Strong start; watch estimation accuracy.",done:true},{day:60,score:4.1,by:"Pham Quoc Bao (Leader)",note:"Improved delivery; ready to own a module.",done:true},{day:90,score:null,by:"",note:"",done:false}],
   verdict:null}},

 {id:"LC-2007",name:"Nguyen Van Son",role:"Backend Engineer",dept:"Engineering",acc:"ACC-D",mgr:"FA-1020",grade:"L3",loc:"Hanoi, VN",type:"Full-Time",
  stage:"Probation",sub:"Day 90 confirmation",progress:88,health:"At risk",started:"2026-03-18",nextMs:"Day 90 confirmation",nextDate:"2026-06-16",
  tasks:[
   {t:"Set probation objectives",owner:"Leader",pic:"Nguyen Anh Thai",due:"2026-03-25",st:"done",col:"Day 1"},
   {t:"30-day review",owner:"Leader",pic:"Nguyen Anh Thai",due:"2026-04-18",st:"done",col:"Day 30"},
   {t:"60-day review",owner:"Leader",pic:"Nguyen Anh Thai",due:"2026-05-18",st:"done",col:"Day 60"},
   {t:"90-day confirmation decision",owner:"Manager",pic:"Tran Van Long",due:"2026-06-16",st:"doing",col:"Day 90"}
  ],
  events:[{date:"2026-03-18",stage:"Probation",title:"Probation started",note:"",done:true},
   {date:"2026-04-18",stage:"Probation",title:"30-day review — 3.2/5",note:"Slow ramp on Kafka pipeline",done:true},
   {date:"2026-05-18",stage:"Probation",title:"60-day review — 3.0/5",note:"Delivery below baseline; PIP discussed",done:true},
   {date:"2026-06-16",stage:"Probation",title:"90-day confirmation — due",note:"Decision needed in 7 days",done:false}],
  docs:[{name:"Probation Contract",type:"Contract",st:"signed"},{name:"Probation Objectives",type:"HR",st:"signed"},{name:"60-day Review Form",type:"Review",st:"signed"}],
  prob:{risk:68,objectives:[{t:"Deliver Kafka ingestion pipeline",weight:40,prog:45},{t:"Reach velocity baseline",weight:30,prog:50},{t:"Reduce PR review cycles",weight:15,prog:55},{t:"Domain ramp (payments)",weight:15,prog:60}],
   reviews:[{day:30,score:3.2,by:"Nguyen Anh Thai (Leader)",note:"Behind on ramp.",done:true},{day:60,score:3.0,by:"Nguyen Anh Thai (Leader)",note:"Still below baseline; recommend extend.",done:true},{day:90,score:null,by:"",note:"",done:false}],
   verdict:null}},

 /* ---------- ACTIVE (breadth + journey + movement source) ---------- */
 {id:"LC-2008",ref:"FA-1015",stage:"Active",sub:"Confirmed employee",progress:100,health:"On track",started:"2024-02-05",nextMs:"Promotion review (Q3)",nextDate:"2026-08-01",
  tasks:[],events:[{date:"2024-02-05",stage:"Onboarding",title:"Joined Seta",note:"Backend Engineer, Vinfast account",done:true},
   {date:"2024-05-05",stage:"Probation",title:"Probation passed — 4.0/5",note:"Confirmed full-time",done:true},
   {date:"2025-02-05",stage:"Active",title:"Salary review",note:"$51,000 → $58,000",done:true},
   {date:"2026-06-01",stage:"Active",title:"Promotion nominated",note:"To Senior Backend Engineer — in review",done:false}],
  docs:[{name:"Labor Contract",type:"Contract",st:"signed"},{name:"Citizen ID",type:"Identity",st:"signed"}]},
 {id:"LC-2009",ref:"FA-1010",stage:"Active",sub:"Confirmed employee",progress:100,health:"On track",started:"2023-10-03",nextMs:"Annual review",nextDate:"2026-10-03",tasks:[],events:[{date:"2023-10-03",stage:"Onboarding",title:"Joined Seta",note:"QA Automation Engineer",done:true},{date:"2024-01-03",stage:"Active",title:"Probation passed",note:"4.2/5",done:true}],docs:[{name:"Labor Contract",type:"Contract",st:"signed"}]},
 {id:"LC-2010",ref:"FA-1009",stage:"Active",sub:"Transfer in progress",progress:100,health:"At risk",started:"2023-05-20",nextMs:"Transfer to Aeris",nextDate:"2026-07-01",tasks:[],events:[{date:"2023-05-20",stage:"Onboarding",title:"Joined Seta",note:"Fullstack Engineer, Maybank",done:true},{date:"2026-06-05",stage:"Active",title:"Transfer requested",note:"Maybank → Aeris account",done:false}],docs:[{name:"Employment Contract",type:"Contract",st:"signed"},{name:"UAE Visa",type:"Identity",st:"pending"}]},

 /* ---------- OFFBOARDING ---------- */
 {id:"LC-2011",ref:"FA-1016",stage:"Offboarding",sub:"Asset return",progress:48,health:"On track",started:"2026-06-02",nextMs:"Last working day",nextDate:"2026-06-30",
  tasks:[],events:[{date:"2026-06-02",stage:"Offboarding",title:"Resignation received",note:"30-day notice; last day Jun 30",done:true},{date:"2026-06-30",stage:"Offboarding",title:"Last working day",note:"",done:false}],
  docs:[{name:"Resignation Letter",type:"HR",st:"signed"},{name:"Clearance Form",type:"HR",st:"pending"}],
  off:{type:"Voluntary",reason:"Better offer",lastDay:"2026-06-30",
   workflow:[{stage:"Planning",owner:"HR",pic:"Tran Bao",due:"2026-06-05",st:"done"},
    {stage:"Knowledge transfer",owner:"Leader",pic:"Vu Hoang Nam",due:"2026-06-20",st:"doing"},
    {stage:"Asset return",owner:"IT",pic:"IT Service Desk",due:"2026-06-27",st:"doing"},
    {stage:"Access revocation",owner:"IT",pic:"IT Service Desk",due:"2026-06-30",st:"todo"},
    {stage:"Financial clearance",owner:"Finance",pic:"Finance Team",due:"2026-06-30",st:"todo"},
    {stage:"Exit interview",owner:"HR",pic:"Tran Bao",due:"2026-06-29",st:"todo"},
    {stage:"Completed",owner:"PMO",pic:"Khanh Minh",due:"2026-07-02",st:"todo"}]}},

 {id:"LC-2012",name:"Hoang Thi Mai",role:"Business Analyst",dept:"Business",acc:"ACC-C",mgr:"FA-1014",grade:"L4",loc:"Dubai, AE",type:"Full-Time",
  stage:"Offboarding",sub:"Access revocation",progress:72,health:"Overdue",started:"2026-05-12",nextMs:"Final clearance",nextDate:"2026-06-06",
  tasks:[],events:[{date:"2026-05-12",stage:"Offboarding",title:"Termination notice",note:"End of fixed-term contract",done:true},{date:"2026-06-06",stage:"Offboarding",title:"Final clearance — overdue",note:"Finance clearance pending 3 days",done:false}],
  docs:[{name:"Contract End Notice",type:"HR",st:"signed"},{name:"Clearance Form",type:"HR",st:"pending"}],
  off:{type:"Involuntary",reason:"Contract end",lastDay:"2026-06-05",
   workflow:[{stage:"Planning",owner:"HR",pic:"Tran Bao",due:"2026-05-15",st:"done"},
    {stage:"Knowledge transfer",owner:"Leader",pic:"Hoang Gia Bao",due:"2026-05-30",st:"done"},
    {stage:"Asset return",owner:"IT",pic:"IT Service Desk",due:"2026-06-03",st:"done"},
    {stage:"Access revocation",owner:"IT",pic:"IT Service Desk",due:"2026-06-04",st:"doing"},
    {stage:"Financial clearance",owner:"Finance",pic:"Finance Team",due:"2026-06-06",st:"blocked"},
    {stage:"Exit interview",owner:"HR",pic:"Tran Bao",due:"2026-06-04",st:"done"},
    {stage:"Completed",owner:"PMO",pic:"Khanh Minh",due:"2026-06-08",st:"todo"}]}},

 /* ---------- ALUMNI ---------- */
 {id:"LC-2013",name:"Pham Hoang Yen",role:"Frontend Engineer",dept:"Engineering",acc:"ACC-B",mgr:"FA-1008",grade:"L4",loc:"Hanoi, VN",type:"Full-Time",
  stage:"Alumni",sub:"Left 2026-03-15",progress:100,health:"Complete",started:"2022-06-01",nextMs:"—",nextDate:"2026-03-15",
  tasks:[],events:[{date:"2022-06-01",stage:"Onboarding",title:"Joined Seta",note:"",done:true},{date:"2026-02-15",stage:"Offboarding",title:"Resignation — career growth",note:"",done:true},{date:"2026-03-15",stage:"Alumni",title:"Left Seta",note:"Eligible for rehire · exit score 4.1",done:true}],
  docs:[{name:"Experience Letter",type:"HR",st:"signed"},{name:"Final Settlement",type:"Finance",st:"signed"}]}
];

/* ---------- MOVEMENT requests ---------- */
const LC_MOVES=[
 {id:"MOV-3001",ref:"FA-1015",type:"Promotion",from:"Backend Engineer (L4)",to:"Senior Backend Engineer (L5)",effective:"2026-08-01",salFrom:"$58,000",salTo:"$70,000",status:"In review",requested:"2026-06-01",by:"Daniel Okafor (Leader)",
  steps:[{name:"Request",st:"done"},{name:"Leader review",st:"done"},{name:"Manager approval",st:"doing"},{name:"HR approval",st:"todo"},{name:"Effective",st:"todo"}]},
 {id:"MOV-3002",ref:"FA-1009",type:"Transfer",from:"Maybank (ACC-B)",to:"Aeris (ACC-E)",effective:"2026-07-01",salFrom:"$66,000",salTo:"$66,000",status:"Pending HR",requested:"2026-06-05",by:"Vu Hoang Nam (Leader)",
  steps:[{name:"Request",st:"done"},{name:"Manager approval",st:"done"},{name:"HR approval",st:"doing"},{name:"Transition plan",st:"todo"},{name:"Completed",st:"todo"}]},
 {id:"MOV-3003",ref:"FA-1025",type:"Salary",from:"$44,000",to:"$50,000",effective:"2026-07-01",salFrom:"$44,000",salTo:"$50,000",status:"Approved",requested:"2026-05-20",by:"Nguyen Anh Thai (Leader)",
  steps:[{name:"Request",st:"done"},{name:"Manager approval",st:"done"},{name:"HR approval",st:"done"},{name:"Effective",st:"todo"}]},
 {id:"MOV-3004",ref:"FA-1026",type:"Promotion",from:"Fullstack Engineer (L4)",to:"Senior Fullstack Engineer (L5)",effective:"2026-09-01",salFrom:"$58,000",salTo:"$72,000",status:"Draft",requested:"2026-06-08",by:"Vo Thi Huong (Leader)",
  steps:[{name:"Request",st:"doing"},{name:"Leader review",st:"todo"},{name:"Manager approval",st:"todo"},{name:"HR approval",st:"todo"},{name:"Effective",st:"todo"}]}
];

/* ===================== DERIVED / SCOPE ===================== */
function lcCaseById(id){return LC_CASES.find(c=>c.id===id);}
function lcStageCount(){const m={};LC_STAGES.forEach(s=>m[s]=0);LC_CASES.forEach(c=>{if(m[c.stage]!=null)m[c.stage]++;});return m;}
function lcTaskOverdue(t){return (t.st==="todo"||t.st==="doing")&&lcDays(t.due)<0;}
function lcAllTasks(){const out=[];LC_CASES.forEach(c=>{(c.tasks||[]).forEach(t=>out.push(Object.assign({case:c},t)));});return out;}
/* scope by persona: admin=all; am(Manager)=their account; manager(Leader)=their direct reports; member=self */
function lcVisible(){
 if(fullAccess())return LC_CASES;
 if(isAM()){const accs=amAccounts().map(a=>a.id);return LC_CASES.filter(c=>{const p=lcPerson(c);return accs.indexOf(p.acc)>=0;});}
 if(isManager()){const meId=me().id;return LC_CASES.filter(c=>{const p=lcPerson(c);return p.mgr===meId||p.id===meId;});}
 const meId=me().id;return LC_CASES.filter(c=>lcPerson(c).id===meId);
}
function lcBadge(tab){
 let cnt=0;const vis=lcVisible();
 if(tab==="lc_onboarding")cnt=vis.filter(c=>c.stage==="Onboarding"||c.stage==="Preboarding").reduce((a,c)=>a+(c.tasks||[]).filter(lcTaskOverdue).length,0);
 else if(tab==="lc_probation")cnt=vis.filter(c=>c.stage==="Probation"&&lcDays(c.nextDate)<=14).length;
 else if(tab==="lc_offboarding")cnt=vis.filter(c=>c.stage==="Offboarding"&&c.health==="Overdue").length;
 else if(tab==="lc_movement")cnt=LC_MOVES.filter(m=>m.status==="In review"||m.status==="Pending HR").length;
 return cnt>0?cnt:null;
}
/* attention items (data-driven, non-AI) */
function lcAttention(){
 const items=[];const vis=lcVisible();
 vis.forEach(c=>{const p=lcPerson(c);
  (c.tasks||[]).forEach(t=>{if(t.st==="blocked")items.push({sev:"crit",icon:"block",txt:"<b>"+p.name+"</b> — onboarding blocked: "+t.t+" ("+ownerChip(t.owner)+")",cid:c.id,tab:"lc_onboarding"});});
  if(c.stage==="Probation"&&c.prob&&c.prob.risk>=60&&lcDays(c.nextDate)<=14)items.push({sev:"crit",icon:"warn",txt:"<b>"+p.name+"</b> — probation decision due "+c.nextDate+" with high risk score ("+c.prob.risk+")",cid:c.id,tab:"lc_probation"});
  if(c.stage==="Offboarding"&&c.health==="Overdue")items.push({sev:"crit",icon:"warn",txt:"<b>"+p.name+"</b> — offboarding overdue: "+c.sub,cid:c.id,tab:"lc_offboarding"});
  const missing=(c.docs||[]).filter(d=>d.st==="missing");
  if((c.stage==="Preboarding"||c.stage==="Onboarding")&&missing.length)items.push({sev:"warn",icon:"doc",txt:"<b>"+p.name+"</b> — missing document"+(missing.length>1?"s":"")+": "+missing.map(d=>d.name).join(", "),cid:c.id,tab:"lc_onboarding"});
 });
 LC_MOVES.forEach(m=>{if(m.status==="In review"||m.status==="Pending HR"){const p=lcPerson(m);items.push({sev:"warn",icon:"clock",txt:"<b>"+p.name+"</b> — "+m.type.toLowerCase()+" awaiting approval ("+m.status+")",mid:m.id,tab:"lc_movement"});}});
 const order={crit:0,warn:1};
 return items.sort((a,b)=>order[a.sev]-order[b.sev]);
}
function lcGo(tab){curMod="lifecycle";curTab=tab;renderModTabs();renderContent();const c=document.getElementById("content");if(c)c.scrollTop=0;}
function lcOpenJourney(id){lcJourneyId=id;lcGo("lc_directory");}

/* ===================== ROUTER ===================== */
function renderLifecycleTab(t){
 const _c=document.getElementById('content');if(_c)_c.classList.remove('rep-mode');
 const box=document.getElementById("content");if(!box)return;
 if(t==="lc_dashboard")box.innerHTML='<section class="view active">'+lcDashboard()+'</section>',lcWireDashboard();
 else if(t==="lc_directory"){ if(lcJourneyId){box.innerHTML='<section class="view active">'+lcJourney(lcJourneyId)+'</section>';lcWireJourney();} else {box.innerHTML='<section class="view active">'+lcDirectory()+'</section>';lcWireDirectory();} }
 else if(t==="lc_onboarding")box.innerHTML='<section class="view active">'+lcOnboarding()+'</section>',lcWireOnboarding();
 else if(t==="lc_probation")box.innerHTML='<section class="view active">'+lcProbation()+'</section>',lcWireProbation();
 else if(t==="lc_movement")box.innerHTML='<section class="view active">'+lcMovement()+'</section>',lcWireMovement();
 else if(t==="lc_offboarding")box.innerHTML='<section class="view active">'+lcOffboarding()+'</section>',lcWireOffboarding();
}
/* stubs (replaced in later chunks) */
function lcTenure(started){const d=lcAgo(started);if(d<0)return "starts in "+(-d)+"d";const y=Math.floor(d/365);const mo=Math.floor((d%365)/30);if(y>0)return y+"y "+(mo>0?mo+"mo":"");if(mo>0)return mo+"mo";return Math.max(0,d)+"d";}
function lcTimelineFull(c){
 const evs=(c.events||[]).slice().sort((a,b)=>new Date(a.date)-new Date(b.date));
 if(!evs.length)return '<div class="small muted">No timeline events recorded.</div>';
 return '<div class="lc-tl">'+evs.map(e=>'<div class="lc-tl-item '+(e.done?"done":"future")+'"><div class="lc-tl-marker" style="--mc:'+lcStageColor(e.stage)+'"></div><div class="lc-tl-body"><div class="lc-tl-stage" style="--mc:'+lcStageColor(e.stage)+'">'+e.stage+'</div><div class="lc-tl-when mono">'+e.date+(e.done?"":" · upcoming")+'</div><div class="lc-tl-title">'+e.title+'</div>'+(e.note?'<div class="lc-tl-note">'+e.note+'</div>':'')+'</div></div>').join('')+'</div>';
}
function lcTasksCard(c){
 const tasks=(c.tasks||[]);
 if(!tasks.length)return '<div class="card"><div class="card-head"><h3>Active tasks</h3></div><div class="card-pad"><div class="lc-empty small muted" style="padding:14px">No open lifecycle tasks — this employee is a confirmed active member.</div></div></div>';
 const open=tasks.filter(t=>t.st!=="done");
 return '<div class="card"><div class="card-head"><h3>Active tasks</h3><span class="meta">'+open.length+' open · '+tasks.length+' total</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
  +tasks.map(t=>{const od=lcTaskOverdue(t);return '<div class="lc-task-row"><span class="lc-check '+(t.st==="done"?"on":"")+'">'+(t.st==="done"?icon('<path d="M20 6L9 17l-5-5"/>'):'')+'</span><div class="lc-task-main"><div class="lc-task-t"'+(t.st==="done"?' style="color:var(--muted)"':'')+'>'+t.t+'</div><div class="small muted">'+ownerChip(t.owner)+' '+t.pic+' · due '+t.due.slice(5)+(od?' <span style="color:var(--accent-ink);font-weight:600">overdue</span>':'')+'</div></div>'+taskStatePill(t.st)+'</div>';}).join('')
  +'</div></div>';
}
function lcDocsCard(c){
 const docs=(c.docs||[]);
 return '<div class="card"><div class="card-head"><h3>Documents</h3><span class="meta">'+docs.length+'</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
  +(docs.length?docs.map(d=>'<div class="lc-doc"><span class="lc-doc-i">'+icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>')+'</span><div class="lc-doc-m"><div class="lc-doc-n">'+d.name+'</div><div class="small muted">'+d.type+'</div></div>'+lcDocPill(d.st)+'</div>').join(''):'<div class="small muted" style="padding:8px">No documents on file.</div>')
  +'</div></div>';
}
function lcStageCTA(c){
 if(c.stage==="Onboarding"||c.stage==="Preboarding")return '<button class="btn btn-primary" data-lcopen="lc_onboarding" style="height:32px;font-size:12px">'+icon('<path d="M22 11V9a2 2 0 0 0-2-2h-6l-2-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/>')+'Open onboarding board</button>';
 if(c.stage==="Probation")return '<button class="btn btn-primary" data-lcopen="lc_probation" data-lcid="'+c.id+'" style="height:32px;font-size:12px">'+icon('<path d="M9 11l3 3L22 4"/>')+'Open probation review</button>';
 if(c.stage==="Offboarding")return '<button class="btn btn-primary" data-lcopen="lc_offboarding" style="height:32px;font-size:12px">'+icon('<polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>')+'Open offboarding</button>';
 return '';
}
function lcProfileBanner(c){
 const p=lcPerson(c);
 return '<div class="card lc-banner"><div class="lc-banner-l">'+av(p.name,"width:60px;height:60px;font-size:21px")
  +'<div><div class="lc-banner-name">'+p.name+'</div><div class="lc-banner-role">'+p.role+'</div>'
  +'<div class="lc-banner-meta">'+lcStagePill(c.stage)+'<span class="lc-bm">'+p.dept+'</span><span class="lc-bm">'+lcAccName(c)+'</span><span class="lc-bm">'+p.loc+'</span></div></div></div>'
  +'<div class="lc-banner-r"><div class="lc-bstat"><span class="lc-bstat-l">Manager</span><span class="lc-bstat-v">'+(p.mgr?mgrName(p.mgr):"—")+'</span></div><div class="lc-bstat"><span class="lc-bstat-l">Tenure</span><span class="lc-bstat-v">'+lcTenure(p.joined)+'</span></div><div class="lc-bstat"><span class="lc-bstat-l">Progress</span><span class="lc-bstat-v">'+c.progress+'%</span></div><div class="lc-bstat"><span class="lc-bstat-l">Status</span><span class="lc-bstat-v">'+lcHealth(c.health)+'</span></div></div></div>';
}
function lcProfilePanel(c){
 const p=lcPerson(c);
 const row=(k,v)=>'<div class="lc-pf"><span class="lc-pf-k">'+k+'</span><span class="lc-pf-v">'+v+'</span></div>';
 return '<div class="card"><div class="card-pad" style="text-align:center;padding-bottom:16px">'+av(p.name,"width:72px;height:72px;font-size:26px;margin:0 auto 12px")
  +'<div class="lc-banner-name" style="font-size:18px">'+p.name+'</div><div class="lc-banner-role">'+p.role+'</div><div style="margin-top:10px">'+lcStagePill(c.stage)+'</div></div>'
  +'<div class="card-pad" style="border-top:1px solid var(--line);padding-top:14px">'
  +row("Employee ID",'<span class="mono">'+p.id+'</span>')+row("Department",p.dept)+row("Account",lcAccName(c))+row("Manager",p.mgr?mgrName(p.mgr):"—")+row("Location",p.loc)+row("Type",p.type)+row("Grade",p.grade||"—")+row("Started",'<span class="mono">'+(p.joined||"—")+'</span>')+row("Tenure",lcTenure(p.joined))
  +'<div class="lc-pf"><span class="lc-pf-k">Next milestone</span><span class="lc-pf-v" style="text-align:right">'+c.nextMs+(c.nextDate&&c.stage!=="Active"&&c.stage!=="Alumni"?'<br><span class="mono small muted">'+c.nextDate+'</span>':'')+'</span></div>'
  +'</div></div>';
}
function lcJourney(id){
 const c=lcCaseById(id)||LC_CASES.find(x=>lcPerson(x).id===(me().id))||LC_CASES[0];
 if(!c)return '<div class="page-head"><h1>Journey</h1></div><div class="card"><div class="card-pad">Not found.</div></div>';
 const p=lcPerson(c);
 const back='<button class="btn btn-ghost" data-lcback="1" style="margin-bottom:12px;height:30px;font-size:12px">'+icon('<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>')+'Back to directory</button>';
 const toggle='<div class="seg lc-seg">'+[["timeline","Timeline"],["split","Profile + timeline"]].map(o=>'<button class="'+(lcJourneyLayout===o[0]?'on':'')+'" data-lcjlayout="'+o[0]+'">'+o[1]+'</button>').join('')+'</div>';
 const head='<div class="page-head"><div>'+back+'<div class="eyebrow">Journey · Employee Journey</div><h1>'+p.name+'</h1><p>'+p.role+' · '+p.dept+' · '+lcAccName(c)+'</p></div><div class="flex center gap" style="flex-direction:column;align-items:flex-end;gap:10px">'+toggle+lcStageCTA(c)+'</div></div>';
 const tlCard='<div class="card"><div class="card-head"><h3>Lifecycle timeline</h3><span class="meta">'+(c.events||[]).length+' events</span></div><div class="card-pad">'+lcTimelineFull(c)+'</div></div>';
 let body;
 if(lcJourneyLayout==="split"){
   body='<div class="lc-split">'
    +'<div class="lc-split-side">'+lcProfilePanel(c)+'</div>'
    +'<div class="lc-split-main">'+tlCard+lcTasksCard(c)+lcDocsCard(c)+'</div>'
    +'</div>';
 } else {
   body=lcProfileBanner(c)
    +'<div class="lc-split" style="margin-top:16px"><div class="lc-split-main">'+tlCard+'</div><div class="lc-split-side">'+lcTasksCard(c)+lcDocsCard(c)+'</div></div>';
 }
 return '<div class="dash-wrap">'+head+body+'</div>';
}
function lcWireJourney(){
 const b=document.querySelector("[data-lcback]");if(b)b.onclick=()=>{lcJourneyId=null;renderLifecycleTab("lc_directory");};
 document.querySelectorAll("[data-lcjlayout]").forEach(x=>x.onclick=()=>{lcJourneyLayout=x.dataset.lcjlayout;renderLifecycleTab("lc_directory");});
 document.querySelectorAll("[data-lcopen]").forEach(x=>x.onclick=()=>{const tab=x.dataset.lcopen;if(x.dataset.lcid)lcProbId=x.dataset.lcid;lcJourneyId=null;lcGo(tab);});
}
function lcStateLabel(s){return {todo:"To do",doing:"In progress",done:"Done",blocked:"Blocked"}[s]||s;}
function lcSla(t){if(t.st==="done")return {k:"done",lbl:"Done"};const d=lcDays(t.due);if(d<0)return {k:"over",lbl:Math.abs(d)+"d overdue"};if(d<=3)return {k:"soon",lbl:"due in "+d+"d"};return {k:"ok",lbl:"due "+t.due.slice(5)};}
function lcSlaDot(t){const s=lcSla(t);const c=s.k==="over"?"var(--accent)":s.k==="soon"?"var(--warning)":s.k==="done"?"var(--positive)":"var(--muted)";return '<span class="lc-sla" style="color:'+(s.k==="over"?"var(--accent-ink)":s.k==="soon"?"var(--warning-ink)":"var(--muted)")+'"><span class="lc-sla-d" style="background:'+c+'"></span>'+s.lbl+'</span>';}
function lcRecalcProgress(c){const ts=c.tasks||[];if(ts.length){c.progress=Math.round(ts.filter(t=>t.st==="done").length/ts.length*100);}const blocked=ts.some(t=>t.st==="blocked");const overdue=ts.some(lcTaskOverdue);c.health=blocked?"Blocked":overdue?"At risk":(c.progress>=100?"Complete":"On track");}
function lcAdvanceTask(cid,ti){const c=lcCaseById(cid);if(!c||!c.tasks[ti])return;const t=c.tasks[ti];
 if(t.st==="blocked"){confirmAction("Resolve blocker?","Mark \u201c"+t.t+"\u201d as unblocked and back in progress?","Resolve",function(){t.st="doing";lcRecalcProgress(c);audit("Onboarding blocker resolved",lcPerson(c).name,t.t);renderLifecycleTab("lc_onboarding");toast("Blocker resolved \u2014 "+t.t,"ok");});return;}
 const order=["todo","doing","done"];t.st=order[Math.min(2,order.indexOf(t.st)+1)];lcRecalcProgress(c);audit("Onboarding task updated",lcPerson(c).name,t.t+" \u2192 "+lcStateLabel(t.st));renderLifecycleTab("lc_onboarding");toast(t.t+" \u2192 "+lcStateLabel(t.st),"ok");}
function lcToggleDone(cid,ti){const c=lcCaseById(cid);if(!c||!c.tasks[ti])return;const t=c.tasks[ti];if(t.st==="blocked")return lcAdvanceTask(cid,ti);t.st=t.st==="done"?"todo":"done";lcRecalcProgress(c);audit("Onboarding task updated",lcPerson(c).name,t.t+" \u2192 "+lcStateLabel(t.st));renderLifecycleTab("lc_onboarding");}
var PIC_META={Recruitment:['#0047FF','Recruitment'],IT:['#207087','IT'],Leader:['#7c4dff','Team Leader'],CPO:['#c2410c','CPO'],HR:['#1f8a5b','HR'],PMO:['#b86e00','PMO / Audit'],Finance:['#b86e00','Finance'],Employee:['#475569','Employee']};
function picChip(k){var m=PIC_META[k]||['#6b6c75',k];return '<span class="pic-chip" style="--pc:'+m[0]+'">'+m[1]+'</span>';}
var ONB_PROCESS=[
 {ph:'1 · Receive info',steps:[
   {k:'r_notify',pic:'Recruitment',t:'Notify staffing of the new joiner & assign the onboard owner',sla:'On offer accept'},
   {k:'it_recv',pic:'IT',t:'Receive onboarding request from Recruitment',sla:'Same day'}]},
 {ph:'2 · Prepare',steps:[
   {k:'r_email',pic:'Recruitment',t:'Email IT, CC Finance, BO &amp; Leader',sla:'D-3'},
   {k:'r_profiles',pic:'Recruitment',t:'Create profiles on Timesheet, Audit &amp; Review tools; send credentials to Team Leader',sla:'D-3'},
   {k:'it_setup',pic:'IT',t:'Prepare machine + Teams account; add to SETA-users &amp; project group mail; confirm done to HR',sla:'D-2'},
   {k:'tl_docs',pic:'Leader',t:'Prepare specialist docs &amp; work plan: probation goals, links, buddy/mentor; confirm ready to HR',sla:'D-1'},
   {k:'a1',pic:'PMO',t:'AUDIT 01 — IT checklist complete &amp; all group mail joined?',sla:'24h',audit:true}]},
 {ph:'3 · Execute',steps:[
   {k:'r_onbHR',pic:'Recruitment',t:'Onboard with HR: welcome kit, Timesheet / EMS / Review / Audit guide, office tour',sla:'Day 1'},
   {k:'tl_team',pic:'Leader',t:'Onboard with team: intro &amp; buddy, tools walkthrough, probation goals, Q&amp;A',sla:'Day 1'},
   {k:'a2',pic:'PMO',t:'AUDIT 02 — profile active on all tools?',sla:'24h',audit:true}]},
 {ph:'4 · Follow-up &amp; complete',steps:[
   {k:'cpo_contract',pic:'CPO',t:'Send labor contract to sign; archive signed copy',sla:'D+7 (hard)'},
   {k:'hr_docs',pic:'HR',t:'Collect personal documents &amp; info form',sla:'D+7'},
   {k:'a3',pic:'PMO',t:'AUDIT 03 — probation goals &amp; work docs suitable?',sla:'24h',audit:true},
   {k:'hr_review',pic:'HR',t:'Probation review forms after month 1 &amp; 2',sla:'M+1, M+2'},
   {k:'hr_result',pic:'HR',t:'Notify probation pass / fail (+ insurance info if pass)',sla:'End of probation'},
   {k:'a4',pic:'PMO',t:'AUDIT 04 — follow-up performance after 1 &amp; 2 months',sla:'M+1, M+2',audit:true}]}
];
function onbAllSteps(){var o=[];ONB_PROCESS.forEach(function(p){p.steps.forEach(function(s){o.push(s);});});return o;}
function onbInit(c){if(c.onb)return;var steps=onbAllSteps();var prog=(c.progress||0)/100;var n=Math.round(steps.length*prog);c.onb={};steps.forEach(function(s,i){c.onb[s.k]=i<n?(s.audit?'pass':'done'):(i===n?'doing':'todo');});if(c.health==='Blocked'){var firstOpen=steps.find(function(s){return c.onb[s.k]==='doing'||c.onb[s.k]==='todo';});if(firstOpen)c.onb[firstOpen.k]='blocked';}}
function onbStateLabel(s){return {todo:'To do',doing:'In progress',done:'Done',blocked:'Blocked',pass:'Audit passed'}[s]||s;}
function onbStatePill(s){var m={done:['positive','Done'],pass:['positive','Passed'],doing:['info','In progress'],todo:['muted','To do'],blocked:['accent','Blocked']};var x=m[s]||['muted',s];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}
function onbProgress(c){onbInit(c);var steps=onbAllSteps();var done=steps.filter(function(s){return c.onb[s.k]==='done'||c.onb[s.k]==='pass';}).length;return Math.round(done/steps.length*100);}
function onbStep(cid,key){var c=lcCaseById(cid);if(!c)return;onbInit(c);var s=onbAllSteps().find(function(x){return x.k===key;});if(!s)return;
  if(s.audit){c.onb[key]=c.onb[key]==='pass'?'todo':'pass';}
  else {var order=['todo','doing','done'];var cur=c.onb[key];if(cur==='blocked')cur='todo';c.onb[key]=order[(order.indexOf(cur)+1)%3];}
  c.progress=onbProgress(c);var open=onbAllSteps().some(function(x){return c.onb[x.k]==='blocked';});c.health=open?'Blocked':(c.progress>=100?'Complete':'On track');
  audit('Onboarding step',lcPerson(c).name,s.t.replace(/&amp;/g,'&')+' \u2192 '+onbStateLabel(c.onb[key]));renderLifecycleTab('lc_onboarding');toast('Updated \u2014 '+onbStateLabel(c.onb[key]),'ok');}
function onbBlock(cid,key){var c=lcCaseById(cid);if(!c)return;onbInit(c);c.onb[key]=c.onb[key]==='blocked'?'todo':'blocked';c.health=c.onb[key]==='blocked'?'Blocked':'On track';audit('Onboarding blocker',lcPerson(c).name,key);renderLifecycleTab('lc_onboarding');}
function lcOnbCases(){return lcVisible().filter(function(c){return c.stage==='Onboarding'||c.stage==='Preboarding';});}
let onbRole='all', onbOpenId=null;
function onbPersonCard(c){var p=lcPerson(c);onbInit(c);var prog=onbProgress(c);var open=onbOpenId===c.id;
  var blocked=onbAllSteps().filter(function(s){return c.onb[s.k]==='blocked';}).length;
  var phStrip=ONB_PROCESS.map(function(ph){var ds=ph.steps.filter(function(s){return c.onb[s.k]==='done'||c.onb[s.k]==='pass';}).length;var full=ds===ph.steps.length;var any=ds>0;return '<div class="onb-phase '+(full?'full':any?'part':'')+'"><span class="onb-phase-n">'+ph.ph+'</span><span class="onb-phase-c mono">'+ds+'/'+ph.steps.length+'</span></div>';}).join('<span class="onb-phase-arrow">'+icon('<path d="M9 18l6-6-6-6"/>')+'</span>');
  var body='';
  if(open){body='<div class="onb-detail">'+ONB_PROCESS.map(function(ph){
    var rows=ph.steps.filter(function(s){return onbRole==='all'||s.pic===onbRole;}).map(function(s){var stt=c.onb[s.k];var done=stt==='done'||stt==='pass';var canEdit=lcCanEditOnb(s.pic);
      return '<div class="onb-step '+(s.audit?'audit':'')+' st-'+stt+'">'
       +'<button class="lc-check '+(done?'on':'')+(stt==='blocked'?' blk':'')+'" '+(canEdit?'data-onbstep="'+c.id+'|'+s.k+'"':'disabled')+'>'+(done?icon('<path d="M20 6L9 17l-5-5"/>'):stt==='blocked'?icon('<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'):s.audit?icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'):'')+'</button>'
       +'<div class="onb-step-main"><div class="onb-step-t">'+s.t+'</div><div class="onb-step-meta">'+picChip(s.pic)+'<span class="onb-sla">'+icon('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>')+s.sla+'</span></div></div>'
       +onbStatePill(stt)
       +(canEdit&&!s.audit&&stt!=='done'?'<button class="onb-blk" data-onbblock="'+c.id+'|'+s.k+'" title="Toggle blocker">'+icon('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>')+'</button>':'')
       +'</div>';}).join('');
    if(!rows)return '';
    return '<div class="onb-phase-block"><div class="onb-phase-h">'+ph.ph+'</div>'+rows+'</div>';
  }).join('')+'</div>';}
  return '<div class="card onb-card">'
   +'<div class="onb-card-h" data-onbtoggle="'+c.id+'">'+av(p.name,"width:34px;height:34px;font-size:12px")
   +'<div class="onb-card-id"><div class="onb-card-n">'+p.name+'</div><div class="small muted">'+p.role+' \u00b7 '+lcAccName(c)+' \u00b7 starts '+(c.started||'\u2014')+'</div></div>'
   +'<div class="onb-card-r">'+(blocked?'<span class="status-pill" style="background:var(--accent-soft);color:var(--accent-ink)">'+blocked+' blocked</span>':'')+'<div class="onb-prog"><div class="onb-prog-fill" style="width:'+prog+'%"></div></div><span class="mono small" style="min-width:34px;text-align:right">'+prog+'%</span><span class="onb-chev '+(open?'open':'')+'">'+icon('<path d="M9 18l6-6-6-6"/>')+'</span></div></div>'
   +'<div class="onb-strip">'+phStrip+'</div>'+body+'</div>';
}
function lcCanEditOnb(pic){if(fullAccess())return true;if(isManager())return pic==='Leader';if(isEmployee())return pic==='Employee';return false;}
function lcOnboarding(){
 const cases=lcOnbCases();cases.forEach(onbInit);
 const steps=onbAllSteps();
 let allSt=[];cases.forEach(function(c){steps.forEach(function(s){allSt.push({c:c,s:s,st:c.onb[s.k]});});});
 const blocked=allSt.filter(function(x){return x.st==='blocked';}).length;
 const auditsPending=allSt.filter(function(x){return x.s.audit&&x.st!=='pass';}).length;
 const doneN=allSt.filter(function(x){return x.st==='done'||x.st==='pass';}).length;
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("People onboarding",cases.length,"in the company process","primary")
  +lcKpi("Steps complete",doneN+"/"+allSt.length,allSt.length?Math.round(doneN/allSt.length*100)+"% done":"\u2014","positive")
  +lcKpi("Audit gates open",auditsPending,"awaiting PMO / HR sign-off",auditsPending>0?"warning":"positive")
  +lcKpi("Blocked steps",blocked,"need attention",blocked>0?"accent":"positive")
  +'</div>';
 const roles=['all','Recruitment','IT','Leader','CPO','HR','PMO'];
 const filter='<div class="dash-filters"><div class="df-left"><span class="small muted" style="margin-right:4px">Swimlane</span><div class="seg lc-seg">'+roles.map(function(r){return '<button class="'+(onbRole===r?'on':'')+'" data-onbrole="'+r+'">'+(r==='all'?'All':(PIC_META[r]||[0,r])[1])+'</button>';}).join('')+'</div></div><span class="df-note">Seta onboarding process \u00b7 4 phases \u00b7 4 audit gates</span></div>';
 const list=!cases.length?lcOnbEmpty():(onbRole==='all'?cases.map(onbPersonCard).join(''):onbRoleList(cases,onbRole));
 return '<div class="dash-wrap">'+lcDashHead("Journey \u00b7 Onboarding","Onboarding","Track every new joiner through Seta\u2019s defined onboarding process \u2014 by phase, owner (PIC), SLA and audit gate. Each party can filter to their own swimlane.")+kpis+filter+list+'</div>';
}
function onbRoleList(cases,role){
  var rows=[];cases.forEach(function(c){ONB_PROCESS.forEach(function(ph){ph.steps.forEach(function(s){if(s.pic!==role)return;rows.push({c:c,p:lcPerson(c),ph:ph.ph,s:s,st:c.onb[s.k]});});});});
  var rn=(PIC_META[role]||[0,role])[1];
  if(!rows.length)return '<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>No '+rn+' steps</b><div class="small muted">No onboarding tasks in this swimlane right now.</div></div></div></div></div>';
  rows.sort(function(a,b){return ((a.st==='done'||a.st==='pass')?1:0)-((b.st==='done'||b.st==='pass')?1:0);});
  var open=rows.filter(function(r){return r.st!=='done'&&r.st!=='pass';}).length;
  return '<div class="card"><div class="card-head"><div class="flex center gap">'+picChip(role)+'<h3>'+rn+' tasks</h3></div><span class="meta">'+open+' open \u00b7 '+rows.length+' total \u00b7 across '+cases.length+' joiners</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
   +rows.map(function(r){var done=r.st==='done'||r.st==='pass';var canEdit=lcCanEditOnb(r.s.pic);return '<div class="onb-step '+(r.s.audit?'audit':'')+' st-'+r.st+'">'
     +'<button class="lc-check '+(done?'on':'')+(r.st==='blocked'?' blk':'')+'" '+(canEdit?'data-onbstep="'+r.c.id+'|'+r.s.k+'"':'disabled')+'>'+(done?icon('<path d="M20 6L9 17l-5-5"/>'):r.st==='blocked'?icon('<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'):r.s.audit?icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'):'')+'</button>'
     +'<div class="onb-step-main"><div class="onb-step-t">'+r.s.t+'</div><div class="onb-step-meta"><span class="onb-person">'+av(r.p.name,"width:18px;height:18px;font-size:7px")+r.p.name+'</span><span class="onb-sla">'+r.ph+'</span><span class="onb-sla">'+icon('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>')+r.s.sla+'</span></div></div>'+onbStatePill(r.st)+'</div>';}).join('')
   +'</div></div>';
}
function lcOnbEmpty(){return '<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>No one onboarding in your scope</b><div class="small muted">New joiners appear here as they move through the process.</div></div></div></div></div>';}
function lcWireOnboarding(){
 document.querySelectorAll("[data-onbrole]").forEach(b=>b.onclick=()=>{onbRole=b.dataset.onbrole;renderLifecycleTab("lc_onboarding");});
 document.querySelectorAll("[data-onbtoggle]").forEach(b=>b.onclick=()=>{onbOpenId=onbOpenId===b.dataset.onbtoggle?null:b.dataset.onbtoggle;renderLifecycleTab("lc_onboarding");});
 document.querySelectorAll("[data-onbstep]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();const pr=b.dataset.onbstep.split("|");onbStep(pr[0],pr[1]);});
 document.querySelectorAll("[data-onbblock]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();const pr=b.dataset.onbblock.split("|");onbBlock(pr[0],pr[1]);});
}

function lcProbCases(){return lcVisible().filter(c=>c.stage==="Probation");}
function lcStdOffWorkflow(lastDay){return [{stage:"Planning",owner:"HR",pic:"Tran Bao",due:lastDay,st:"todo"},{stage:"Knowledge transfer",owner:"Leader",pic:"Team Lead",due:lastDay,st:"todo"},{stage:"Asset return",owner:"IT",pic:"IT Service Desk",due:lastDay,st:"todo"},{stage:"Access revocation",owner:"IT",pic:"IT Service Desk",due:lastDay,st:"todo"},{stage:"Financial clearance",owner:"Finance",pic:"Finance Team",due:lastDay,st:"todo"},{stage:"Exit interview",owner:"HR",pic:"Tran Bao",due:lastDay,st:"todo"},{stage:"Completed",owner:"PMO",pic:"Khanh Minh",due:lastDay,st:"todo"}];}
function lcProbObjScore(c){if(!c.prob)return 0;const o=c.prob.objectives;const w=o.reduce((a,x)=>a+x.weight,0)||1;return Math.round(o.reduce((a,x)=>a+x.prog*x.weight,0)/w);}
function lcRecordReview(cid,day){const c=lcCaseById(cid);if(!c||!c.prob)return;const rv=c.prob.reviews.find(r=>r.day===day);if(!rv)return;
 let score=rv.score||4;
 const scoreBtns=[1,2,3,4,5].map(n=>'<button class="lc-score-b" data-sc="'+n+'">'+n+'</button>').join('');
 openModal('<div class="modal-h"><div><h3>Record '+day+'-day review</h3><div class="small muted" style="margin-top:3px">'+lcPerson(c).name+' \u00b7 '+lcPerson(c).role+'</div></div><button class="drawer-close" id="modalClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div>'
  +'<div class="modal-b"><div class="field"><div class="k" style="margin-bottom:8px">Overall score</div><div class="lc-score" id="lcScore">'+scoreBtns+'</div></div>'
  +'<div class="field" style="margin-top:14px"><div class="k" style="margin-bottom:6px">Reviewer note</div><textarea id="lcRvNote" class="lc-ta" placeholder="Summary, strengths, and any concerns\u2026">'+(rv.note||'')+'</textarea></div></div>'
  +'<div class="modal-f"><button class="btn btn-ghost" id="lcRvCancel">Cancel</button><button class="btn btn-primary" id="lcRvSave">Save review</button></div>');
 const setSc=v=>{score=v;document.querySelectorAll('#lcScore .lc-score-b').forEach(b=>b.classList.toggle('on',parseInt(b.dataset.sc)<=v));};
 document.querySelectorAll('#lcScore .lc-score-b').forEach(b=>b.onclick=()=>setSc(parseInt(b.dataset.sc)));setSc(score);
 document.getElementById('modalClose').onclick=closeModal;document.getElementById('lcRvCancel').onclick=closeModal;
 document.getElementById('lcRvSave').onclick=()=>{rv.score=score;rv.note=document.getElementById('lcRvNote').value.trim()||rv.note;rv.by=me().name+" ("+PERSONA_LABEL[persona]+")";rv.done=true;
  (c.events=c.events||[]).push({date:LC_TODAY,stage:"Probation",title:day+"-day review \u2014 "+score+"/5",note:rv.note,done:true});
  audit("Probation review recorded",lcPerson(c).name,day+"-day \u00b7 "+score+"/5");closeModal();renderLifecycleTab("lc_probation");toast(day+"-day review saved \u2014 "+score+"/5","ok");};
}
function lcDecide(cid,verdict){const c=lcCaseById(cid);if(!c||!c.prob)return;const p=lcPerson(c);
 const cfg={Pass:["Confirm employment?","Confirm "+p.name+" as a permanent employee. Probation will be marked passed and their stage moves to Active.","Confirm & pass"],Extend:["Extend probation?","Extend "+p.name+"'s probation by 30 days. A new confirmation date will be set.","Extend 30 days"],Fail:["Do not confirm?","End "+p.name+"'s probation as not passed. This initiates offboarding.","Confirm decision"]};
 const k=cfg[verdict];confirmAction(k[0],k[1],k[2],function(){
  c.prob.verdict=verdict;
  if(verdict==="Pass"){c.stage="Active";c.sub="Confirmed employee";c.progress=100;c.health="On track";c.nextMs="Annual review";(c.events=c.events||[]).push({date:LC_TODAY,stage:"Active",title:"Probation passed \u2014 confirmed",note:"Confirmed permanent by "+me().name,done:true});}
  else if(verdict==="Extend"){const nd=fmtD(addDays(new Date(LC_TODAY),30));c.sub="Probation extended";c.nextMs="Extended confirmation";c.nextDate=nd;c.health="At risk";(c.events=c.events||[]).push({date:LC_TODAY,stage:"Probation",title:"Probation extended +30 days",note:"New confirmation "+nd,done:true});}
  else {const ld=fmtD(addDays(new Date(LC_TODAY),14));c.stage="Offboarding";c.sub="Probation not passed";c.health="On track";c.progress=0;c.nextMs="Last working day";c.nextDate=ld;c.off={type:"Involuntary",reason:"Probation not passed",lastDay:ld,workflow:lcStdOffWorkflow(ld)};(c.events=c.events||[]).push({date:LC_TODAY,stage:"Offboarding",title:"Probation not passed \u2014 offboarding",note:"Initiated by "+me().name,done:true});}
  audit("Probation decision",p.name,verdict);closeModal();
  if(verdict==="Fail"){lcProbId=null;lcGo("lc_offboarding");}else{renderLifecycleTab("lc_probation");}
  toast("Decision recorded \u2014 "+verdict,verdict==="Fail"?"warn":"ok");
 },verdict==="Fail");
}
function lcProbList(){
 const cases=lcProbCases();
 const dueSoon=cases.filter(c=>lcDays(c.nextDate)<=14).length;const hiRisk=cases.filter(c=>c.prob&&c.prob.risk>=60).length;
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("In probation",cases.length,"being evaluated","warning")
  +lcKpi("Confirmation due",dueSoon,"within 14 days",dueSoon>0?"accent":"positive")
  +lcKpi("High risk",hiRisk,"risk score \u2265 60",hiRisk>0?"accent":"positive")
  +lcKpi("Avg objective progress",cases.length?Math.round(cases.reduce((a,c)=>a+lcProbObjScore(c),0)/cases.length)+"%":"\u2014","across cohort","primary")
  +'</div>';
 const list=cases.length?'<div class="card"><div class="ctrl-table"><table><thead><tr><th>Employee</th><th>Stage</th><th>Objective progress</th><th>Risk</th><th>Confirmation due</th><th>Decision</th><th></th></tr></thead><tbody>'
  +cases.map(c=>{const p=lcPerson(c);const risk=c.prob?c.prob.risk:0;const objs=lcProbObjScore(c);const dd=lcDays(c.nextDate);return '<tr class="clk" data-lcprobopen="'+c.id+'"><td><div class="cellname">'+av(p.name,"width:28px;height:28px;font-size:10px")+'<div><div style="font-weight:600;font-size:12.5px">'+p.name+'</div><div class="small muted">'+p.role+'</div></div></div></td><td class="small">'+c.sub+'</td><td style="min-width:130px"><div class="flex center gap">'+lcProgress(objs,objs>=70?"positive":objs>=50?"warning":"accent")+'<span class="mono small">'+objs+'%</span></div></td><td><span class="lc-risk '+(risk>=60?'hi':risk>=35?'mid':'lo')+'">'+risk+'</span></td><td class="mono small" style="color:'+(dd<0?'var(--accent-ink)':dd<=14?'var(--warning-ink)':'var(--muted)')+'">'+(dd<0?Math.abs(dd)+'d ago':'in '+dd+'d')+'</td><td>'+(c.prob&&c.prob.verdict?lcVerdictPill(c.prob.verdict):'<span class="small muted">pending</span>')+'</td><td><button class="btn btn-ghost" data-lcprobopen="'+c.id+'" style="height:28px;font-size:11px">Review</button></td></tr>';}).join('')
  +'</tbody></table></div></div>':'<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>No one in probation</b><div class="small muted">New hires under probation appear here for review and confirmation.</div></div></div></div></div>';
 return '<div class="dash-wrap">'+lcDashHead("Journey \u00b7 Probation","Probation","Track objectives and 30/60/90-day reviews, then confirm, extend, or end probation.")+kpis+list+'</div>';
}
function lcVerdictPill(v){const m={Pass:["positive","Passed"],Extend:["warning","Extended"],Fail:["accent","Not passed"]};const x=m[v]||["muted",v];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}
function lcProbDetail(c){
 const p=lcPerson(c);const prob=c.prob;const objs=lcProbObjScore(c);
 const back='<button class="btn btn-ghost" data-lcprobback="1" style="margin-bottom:12px;height:30px;font-size:12px">'+icon('<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>')+'Back to probation</button>';
 const head='<div class="page-head"><div>'+back+'<div class="eyebrow">Journey \u00b7 Probation Review</div><h1>'+p.name+'</h1><p>'+p.role+' \u00b7 '+lcAccName(c)+' \u00b7 started '+c.started+'</p></div><div class="flex center gap" style="flex-direction:column;align-items:flex-end;gap:8px"><span class="lc-risk '+(prob.risk>=60?'hi':prob.risk>=35?'mid':'lo')+'" style="font-size:12px;padding:5px 12px">Risk score '+prob.risk+'</span><button class="btn btn-ghost" data-lcjourney="'+c.id+'" style="height:28px;font-size:11px">View full journey</button></div></div>';
 const objCard='<div class="card"><div class="card-head"><h3>Objectives</h3><span class="meta">weighted '+objs+'% complete</span></div><div class="card-pad">'
  +prob.objectives.map(o=>'<div class="lc-obj"><div class="lc-obj-h"><span class="lc-obj-t">'+o.t+'</span><span class="lc-obj-w mono">w'+o.weight+'% \u00b7 '+o.prog+'%</span></div>'+lcProgress(o.prog,o.prog>=70?"positive":o.prog>=50?"warning":"accent")+'</div>').join('')+'</div></div>';
 const reviews=prob.reviews.map(r=>{const can=!r.done;return '<div class="lc-rv '+(r.done?"done":"")+'"><div class="lc-rv-day">'+r.day+'d</div><div class="lc-rv-body">'+(r.done?'<div class="lc-rv-score">'+r.score+'<span class="lc-rv-max">/5</span></div><div class="lc-rv-note">'+r.note+'</div><div class="small muted">'+r.by+'</div>':'<div class="small muted" style="padding:4px 0">Not yet recorded</div><button class="btn btn-secondary" data-lcreview="'+r.day+'" style="height:28px;font-size:11px;margin-top:4px">Record '+r.day+'-day review</button>')+'</div></div>';}).join('');
 const reviewCard='<div class="card"><div class="card-head"><h3>Reviews</h3><span class="meta">30 / 60 / 90 day</span></div><div class="card-pad"><div class="lc-rv-list">'+reviews+'</div></div></div>';
 const decided=prob.verdict;
 const decisionCard='<div class="card"><div class="card-head"><h3>Confirmation decision</h3><span class="meta">due '+c.nextDate+'</span></div><div class="card-pad">'
  +(decided?'<div class="lc-decided">'+lcVerdictPill(decided)+'<span class="small muted">Decision recorded. '+(decided==="Pass"?"Employee confirmed.":decided==="Extend"?"Probation extended by 30 days.":"Offboarding initiated.")+'</span></div>'
   :'<div class="small muted" style="margin-bottom:12px">Record the manager recommendation. Based on objectives ('+objs+'%) and reviews.</div><div class="lc-decide"><button class="btn lc-pass" data-lcdecide="Pass">'+icon('<path d="M20 6L9 17l-5-5"/>')+'Pass &amp; confirm</button><button class="btn lc-extend" data-lcdecide="Extend">'+icon('<path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/>')+'Extend 30 days</button><button class="btn lc-fail" data-lcdecide="Fail">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'Do not confirm</button></div>')
  +'</div></div>';
 return '<div class="dash-wrap">'+head+'<div class="lc-split"><div class="lc-split-main">'+objCard+reviewCard+'</div><div class="lc-split-side">'+decisionCard+lcTasksCard(c)+'</div></div></div>';
}
function lcProbation(){
 if(lcProbId){const c=lcCaseById(lcProbId);if(c&&c.stage==="Probation"&&c.prob)return lcProbDetail(c);lcProbId=null;}
 return lcProbList();
}
function lcWireProbation(){
 document.querySelectorAll("[data-lcprobopen]").forEach(b=>b.onclick=()=>{lcProbId=b.dataset.lcprobopen;renderLifecycleTab("lc_probation");});
 const bk=document.querySelector("[data-lcprobback]");if(bk)bk.onclick=()=>{lcProbId=null;renderLifecycleTab("lc_probation");};
 document.querySelectorAll("[data-lcreview]").forEach(b=>b.onclick=()=>lcRecordReview(lcProbId,parseInt(b.dataset.lcreview)));
 document.querySelectorAll("[data-lcdecide]").forEach(b=>b.onclick=()=>lcDecide(lcProbId,b.dataset.lcdecide));
 document.querySelectorAll("[data-lcjourney]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();lcOpenJourney(b.dataset.lcjourney);});
}
let lcMoveType="All";
function lcMoveStatusOf(m){const s=m.steps.find(x=>x.st!=="done");if(!s)return m.type==="Transfer"?"Completed":"Effective";return s.name;}
function lcMoveTypePill(t){const m={Promotion:["positive","Promotion"],Transfer:["info","Transfer"],Salary:["warning","Salary"]};const x=m[t]||["muted",t];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}
function lcSteps(steps){return '<div class="lc-steps">'+steps.map((s,i)=>'<div class="lc-stepwrap"><div class="lc-step '+s.st+'"><span class="lc-step-dot">'+(s.st==="done"?icon('<path d="M20 6L9 17l-5-5"/>'):(i+1))+'</span><span class="lc-step-l">'+s.name+'</span></div>'+(i<steps.length-1?'<span class="lc-step-line '+(s.st==="done"?"done":"")+'"></span>':'')+'</div>').join('')+'</div>';}
function lcMoveAdvance(id){const m=LC_MOVES.find(x=>x.id===id);if(!m)return;const idx=m.steps.findIndex(s=>s.st!=="done");if(idx<0)return;const p=lcPerson(m);
 const stepName=m.steps[idx].name;
 confirmAction("Approve this step?","Approve \u201c"+stepName+"\u201d for "+p.name+"'s "+m.type.toLowerCase()+". The request advances to the next stage.","Approve & advance",function(){
  m.steps[idx].st="done";if(m.steps[idx+1])m.steps[idx+1].st="doing";m.status=lcMoveStatusOf(m);
  audit(m.type+" approval",p.name,stepName+" approved");closeModal();renderLifecycleTab("lc_movement");
  const doneAll=!m.steps.some(s=>s.st!=="done");toast(doneAll?(m.type+" complete \u2014 "+p.name):(stepName+" approved"),"ok");
 });
}
function lcMoveNew(){
 const actives=EMP.filter(e=>e.status==="active").slice(0,14);
 const empOpts=actives.map(e=>'<option value="'+e.id+'">'+e.name+' \u00b7 '+e.role+'</option>').join('');
 openModal('<div class="modal-h"><div><h3>New movement request</h3><div class="small muted" style="margin-top:3px">Promotion, transfer or salary adjustment \u2014 routed for approval</div></div><button class="drawer-close" id="modalClose">'+icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>')+'</button></div>'
  +'<div class="modal-b"><div class="field-grid" style="grid-template-columns:1fr 1fr;gap:12px">'
  +'<div class="field" style="grid-column:1/-1"><div class="k">Employee</div><select id="mvEmp" class="lc-inp">'+empOpts+'</select></div>'
  +'<div class="field"><div class="k">Type</div><select id="mvType" class="lc-inp"><option>Promotion</option><option>Transfer</option><option>Salary</option></select></div>'
  +'<div class="field"><div class="k">Effective date</div><input id="mvEff" type="date" class="lc-inp" value="2026-08-01"></div>'
  +'<div class="field"><div class="k">From</div><input id="mvFrom" class="lc-inp" placeholder="Current role / account / salary"></div>'
  +'<div class="field"><div class="k">To</div><input id="mvTo" class="lc-inp" placeholder="New role / account / salary"></div>'
  +'</div></div>'
  +'<div class="modal-f"><button class="btn btn-ghost" id="mvCancel">Cancel</button><button class="btn btn-primary" id="mvSave">Submit request</button></div>');
 document.getElementById('modalClose').onclick=closeModal;document.getElementById('mvCancel').onclick=closeModal;
 document.getElementById('mvSave').onclick=()=>{const eid=document.getElementById('mvEmp').value;const type=document.getElementById('mvType').value;const e=EMP.find(x=>x.id===eid);
  const steps=type==="Transfer"?[{name:"Request",st:"done"},{name:"Manager approval",st:"doing"},{name:"HR approval",st:"todo"},{name:"Transition plan",st:"todo"},{name:"Completed",st:"todo"}]:type==="Salary"?[{name:"Request",st:"done"},{name:"Manager approval",st:"doing"},{name:"HR approval",st:"todo"},{name:"Effective",st:"todo"}]:[{name:"Request",st:"done"},{name:"Leader review",st:"doing"},{name:"Manager approval",st:"todo"},{name:"HR approval",st:"todo"},{name:"Effective",st:"todo"}];
  const m={id:"MOV-"+(3005+LC_MOVES.length),ref:eid,type:type,from:document.getElementById('mvFrom').value||"\u2014",to:document.getElementById('mvTo').value||"\u2014",effective:document.getElementById('mvEff').value,salFrom:"",salTo:"",status:"In review",requested:LC_TODAY,by:me().name+" ("+PERSONA_LABEL[persona]+")",steps:steps};
  m.status=lcMoveStatusOf(m);LC_MOVES.unshift(m);audit(type+" requested",e?e.name:eid,(m.from||"")+" \u2192 "+(m.to||""));closeModal();renderLifecycleTab("lc_movement");toast(type+" request submitted \u2014 routed for approval","ok");};
}
function lcMovement(){
 let moves=LC_MOVES.slice();
 if(!fullAccess()){const ids=lcVisible().map(c=>lcPerson(c).id);moves=moves.filter(m=>ids.indexOf(lcPerson(m).id)>=0);}
 const shown=lcMoveType==="All"?moves:moves.filter(m=>m.type===lcMoveType);
 const pending=moves.filter(m=>m.steps.some(s=>s.st!=="done")).length;
 const promos=moves.filter(m=>m.type==="Promotion").length,transfers=moves.filter(m=>m.type==="Transfer").length,sal=moves.filter(m=>m.type==="Salary").length;
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("In flight",pending,"awaiting approval",pending>0?"warning":"positive")
  +lcKpi("Promotions",promos,"","positive")+lcKpi("Transfers",transfers,"","info")+lcKpi("Salary changes",sal,"","warning")
  +'</div>';
 const filter='<div class="dash-filters"><div class="df-left"><div class="seg lc-seg">'+["All","Promotion","Transfer","Salary"].map(t=>'<button class="'+(lcMoveType===t?'on':'')+'" data-lcmovetype="'+t+'">'+t+'</button>').join('')+'</div></div>'+(isEmployee()?'':'<button class="btn btn-primary" data-lcmovenew="1" style="height:34px">'+icon('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>')+'New request</button>')+'</div>';
 const cards=shown.length?shown.map(m=>{const p=lcPerson(m);const done=!m.steps.some(s=>s.st!=="done");const canApprove=!isEmployee()&&!done;return '<div class="card lc-move"><div class="card-pad"><div class="lc-move-h"><div class="cellname">'+av(p.name,"width:34px;height:34px;font-size:12px")+'<div><div style="font-weight:600;font-size:13px">'+p.name+'</div><div class="small muted">'+p.role+' \u00b7 '+lcAccName(m)+'</div></div></div>'+lcMoveTypePill(m.type)+'</div>'
   +'<div class="lc-move-cr"><div class="lc-move-fromto"><span class="lc-mft-l">From</span><span class="lc-mft-v">'+m.from+'</span></div>'+icon('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>')+'<div class="lc-move-fromto"><span class="lc-mft-l">To</span><span class="lc-mft-v" style="color:var(--primary-ink);font-weight:700">'+m.to+'</span></div><div class="lc-move-fromto" style="margin-left:auto;text-align:right"><span class="lc-mft-l">Effective</span><span class="lc-mft-v mono">'+m.effective+'</span></div></div>'
   +lcSteps(m.steps)
   +'<div class="lc-move-f"><span class="small muted">Requested by '+m.by+' \u00b7 '+m.requested+'</span><div class="flex center gap">'+(done?lcMoveTypePill(m.type).replace(m.type,'Completed'):'<span class="status-pill cst-interview">'+lcMoveStatusOf(m)+'</span>')+(canApprove?'<button class="btn btn-primary" data-lcmoveadv="'+m.id+'" style="height:30px;font-size:12px">Approve step</button>':'')+'</div></div>'
   +'</div></div>';}).join(''):'<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M16 3h5v5"/><path d="M8 21H3v-5"/>')+'<div><b>No movement requests</b><div class="small muted">Promotions, transfers and salary changes will appear here.</div></div></div></div></div>';
 return '<div class="dash-wrap">'+lcDashHead("Journey \u00b7 Movement","Employee Movement","Promotions, internal transfers and salary adjustments \u2014 each routed through an approval workflow.")+kpis+filter+'<div class="lc-move-list">'+cards+'</div></div>';
}
function lcWireMovement(){
 document.querySelectorAll("[data-lcmovetype]").forEach(b=>b.onclick=()=>{lcMoveType=b.dataset.lcmovetype;renderLifecycleTab("lc_movement");});
 document.querySelectorAll("[data-lcmoveadv]").forEach(b=>b.onclick=()=>lcMoveAdvance(b.dataset.lcmoveadv));
 const nb=document.querySelector("[data-lcmovenew]");if(nb)nb.onclick=()=>lcMoveNew();
}
let lcOffId=null, offRole='all';
var OFF_PROCESS=[
 {ph:'Pre-offboarding',sub:'From notice received to before the last working day',steps:[
   {k:'hr_receive',pic:'HR',t:'Receive &amp; confirm resignation: date, reason, offboarding type; notify IT / Finance / PM; schedule exit interview',sla:'Within 24h'},
   {k:'pm_plan',pic:'Leader',t:'Report to BOD &amp; HR and plan replacement: handover receiver, task list, hire vs internal, notify client if needed',sla:'Within 1 week'},
   {k:'emp_handover',pic:'Employee',t:'Build the handover file (tasks, docs, receiver); send to Leader / PM to approve',sla:'Within 1 week',audit:'PMO'},
   {k:'it_prep',pic:'IT',t:'Prepare account &amp; device recovery list; guide data handover; prepare the access-revoke process',sla:'Before D-2'}]},
 {ph:'Last working day (D)',sub:'Executed and audited on the final day',steps:[
   {k:'handover',pic:'Leader',t:'Complete work / docs / repository handover; sign handover; PM/Leader confirm fully handed over',sla:'On day D',audit:'PMO'},
   {k:'it_revoke',pic:'IT',t:'Revoke access &amp; recover devices: mail, VPN, GitHub, cloud, Teams, timesheet, biometric; collect laptop / phone / card / license',sla:'On day D',audit:'PMO'},
   {k:'fin_audit',pic:'Finance',t:'Asset &amp; financial audit: reconcile assets, confirm no debt, finalize pay / bonus / leave, sign device handover',sla:'On day D',audit:'Finance'},
   {k:'hr_final',pic:'HR',t:'Finalize payroll &amp; sign contract liquidation; print &amp; archive records; complete exit interview',sla:'On day D (hard)'}]}
];
function offAllSteps(){var o=[];OFF_PROCESS.forEach(function(p){p.steps.forEach(function(s){o.push(s);});});return o;}
function offInit(c){if(!c.off)return;if(c.off.proc)return;var steps=offAllSteps();var w=c.off.workflow||[];var doneN=w.filter(function(s){return s.st==='done';}).length;var prog=w.length?doneN/w.length:0;var n=Math.round(steps.length*prog);c.off.proc={};steps.forEach(function(s,i){c.off.proc[s.k]=i<n?(s.audit?'pass':'done'):(i===n?'doing':'todo');});if(c.health==='Overdue'){var fo=steps.find(function(s){return c.off.proc[s.k]==='doing'||c.off.proc[s.k]==='todo';});if(fo)c.off.proc[fo.k]='blocked';}}
function offProgress(c){offInit(c);var steps=offAllSteps();var d=steps.filter(function(s){return c.off.proc[s.k]==='done'||c.off.proc[s.k]==='pass';}).length;return Math.round(d/steps.length*100);}
function lcOffCases(){return lcVisible().filter(function(c){return c.stage==='Offboarding'&&c.off;});}
function offStatePill(s){var m={done:['positive','Done'],pass:['positive','Audited'],doing:['info','In progress'],todo:['muted','Pending'],blocked:['accent','Blocked']};var x=m[s]||['muted',s];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}
function lcCanEditOff(pic){if(fullAccess())return true;if(isManager())return pic==='Leader';if(isEmployee())return pic==='Employee';return false;}
function offStep(cid,key){var c=lcCaseById(cid);if(!c||!c.off)return;offInit(c);var s=offAllSteps().find(function(x){return x.k===key;});if(!s)return;
  if(s.audit){c.off.proc[key]=c.off.proc[key]==='pass'?'todo':'pass';}
  else {var order=['todo','doing','done'];var cur=c.off.proc[key];if(cur==='blocked')cur='todo';c.off.proc[key]=order[(order.indexOf(cur)+1)%3];}
  c.progress=offProgress(c);var blk=offAllSteps().some(function(x){return c.off.proc[x.k]==='blocked';});
  if(c.progress>=100){c.health='Complete';c.stage='Alumni';c.sub='Offboarded '+(c.off.lastDay||'');(c.events=c.events||[]).push({date:LC_TODAY,stage:'Alumni',title:'Offboarding complete',note:'All process steps &amp; audits done',done:true});}
  else c.health=blk?'Overdue':'On track';
  audit('Offboarding step',lcPerson(c).name,s.t.replace(/&amp;/g,'&').slice(0,40)+' \u2192 '+(c.off.proc[key]));renderLifecycleTab('lc_offboarding');toast('Updated','ok');}
function offBlock(cid,key){var c=lcCaseById(cid);if(!c||!c.off)return;offInit(c);c.off.proc[key]=c.off.proc[key]==='blocked'?'todo':'blocked';c.health=c.off.proc[key]==='blocked'?'Overdue':'On track';renderLifecycleTab('lc_offboarding');}
function lcOffboarding(){
 const cases=lcOffCases();cases.forEach(offInit);
 if(lcOffId){const c=lcCaseById(lcOffId);if(c&&c.off)return lcOffDetail(c);lcOffId=null;}
 const steps=offAllSteps();let allSt=[];cases.forEach(function(c){steps.forEach(function(s){allSt.push({c:c,s:s,st:c.off.proc[s.k]});});});
 const overdue=cases.filter(function(c){return c.health==='Overdue';}).length;
 const blocked=allSt.filter(function(x){return x.st==='blocked';}).length;
 const auditsPending=allSt.filter(function(x){return x.s.audit&&x.st!=='pass';}).length;
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("Active offboarding",cases.length,"in the exit process","accent")
  +lcKpi("Overdue",overdue,"past SLA",overdue>0?"accent":"positive")
  +lcKpi("Audit gates open",auditsPending,"PMO / Finance sign-off",auditsPending>0?"warning":"positive")
  +lcKpi("Avg completion",cases.length?Math.round(cases.reduce(function(a,c){return a+offProgress(c);},0)/cases.length)+"%":"\u2014","clearance progress","primary")
  +'</div>';
 const list=cases.length?cases.map(function(c){const p=lcPerson(c);const prog=offProgress(c);const cur=offAllSteps().find(function(s){return c.off.proc[s.k]!=='done'&&c.off.proc[s.k]!=='pass';});
   return '<div class="card onb-card clk" data-lcoffopen="'+c.id+'"><div class="onb-card-h">'+av(p.name,"width:34px;height:34px;font-size:12px")
    +'<div class="onb-card-id"><div class="onb-card-n">'+p.name+'</div><div class="small muted">'+p.role+' \u00b7 '+lcAccName(c)+' \u00b7 '+c.off.type+' \u00b7 last day '+c.off.lastDay+'</div></div>'
    +'<div class="onb-card-r">'+lcHealth(c.health)+'<div class="onb-prog"><div class="onb-prog-fill" style="width:'+prog+'%;background:var(--accent)"></div></div><span class="mono small" style="min-width:34px;text-align:right">'+prog+'%</span>'+icon('<path d="M9 18l6-6-6-6"/>')+'</div></div>'
    +'<div class="small muted" style="margin-top:10px">Now: <b>'+(cur?cur.t.replace(/&amp;/g,'&'):'Complete')+'</b> '+(cur?picChip(cur.pic):'')+'</div></div>';}).join(''):'<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>No active offboarding</b><div class="small muted">Resignations and exits will appear here with the full clearance process.</div></div></div></div></div>';
 return '<div class="dash-wrap">'+lcDashHead("Journey \u00b7 Offboarding","Offboarding","Seta\u2019s defined exit process \u2014 pre-offboarding through the last working day, with an owner (PIC), SLA and PMO / Finance audit on every step. Click a person to work their clearance.")+kpis+list+'</div>';
}
function lcOffDetail(c){
 offInit(c);const p=lcPerson(c);const prog=offProgress(c);
 const back='<button class="btn btn-ghost" data-lcoffback="1" style="margin-bottom:12px;height:30px;font-size:12px">'+icon('<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>')+'Back to offboarding</button>';
 const head='<div class="page-head"><div>'+back+'<div class="eyebrow">Journey \u00b7 Offboarding</div><h1>'+p.name+'</h1><p>'+p.role+' \u00b7 '+lcAccName(c)+' \u00b7 '+c.off.type+' \u00b7 reason: '+c.off.reason+' \u00b7 last day '+c.off.lastDay+'</p></div><div class="flex center gap" style="flex-direction:column;align-items:flex-end;gap:8px"><div class="flex center gap"><div class="onb-prog" style="width:120px"><div class="onb-prog-fill" style="width:'+prog+'%;background:var(--accent)"></div></div><span class="mono small">'+prog+'%</span></div></div></div>';
 const roles=['all','HR','Leader','IT','Finance','PMO'];
 const filter='<div class="dash-filters"><div class="df-left"><span class="small muted" style="margin-right:4px">Swimlane</span><div class="seg lc-seg">'+roles.map(function(r){return '<button class="'+(offRole===r?'on':'')+'" data-offrole="'+r+'">'+(r==='all'?'All':(PIC_META[r]||[0,r])[1])+'</button>';}).join('')+'</div></div></div>';
 const blocks=OFF_PROCESS.map(function(ph){
   var rows=ph.steps.filter(function(s){return offRole==='all'||s.pic===offRole;}).map(function(s){var stt=c.off.proc[s.k];var done=stt==='done'||stt==='pass';var canEdit=lcCanEditOff(s.pic);
     return '<div class="onb-step '+(s.audit?'audit':'')+' st-'+stt+'">'
      +'<button class="lc-check '+(done?'on':'')+(stt==='blocked'?' blk':'')+'" '+(canEdit?'data-offstep="'+c.id+'|'+s.k+'"':'disabled')+'>'+(done?icon('<path d="M20 6L9 17l-5-5"/>'):stt==='blocked'?icon('<line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>'):s.audit?icon('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'):'')+'</button>'
      +'<div class="onb-step-main"><div class="onb-step-t">'+s.t+'</div><div class="onb-step-meta">'+picChip(s.pic)+'<span class="onb-sla">'+icon('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>')+s.sla+'</span>'+(s.audit?'<span class="off-audit-tag">'+s.audit+' audit</span>':'')+'</div></div>'
      +offStatePill(stt)
      +(canEdit&&!s.audit&&!done?'<button class="onb-blk" data-offblock="'+c.id+'|'+s.k+'" title="Flag overdue/blocked">'+icon('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>')+'</button>':'')
      +'</div>';}).join('');
   if(!rows)return '';
   return '<div class="card mb"><div class="card-head"><h3>'+ph.ph+'</h3><span class="meta">'+ph.sub+'</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'+rows+'</div></div>';
 }).join('');
 const auditNote='<div class="rep-insight" style="background:var(--info-soft);color:var(--ink-2)"><span class="spark-dot"></span><span>Steps marked with a shield are <b>audit gates</b> \u2014 PMO confirms handover &amp; access revocation; Finance confirms assets &amp; settlement. Offboarding only completes when all parties confirm.</span></div>';
 return '<div class="dash-wrap">'+head+filter+blocks+auditNote+'</div>';
}
function lcWireOffboarding(){
 document.querySelectorAll("[data-lcoffopen]").forEach(b=>b.onclick=()=>{lcOffId=b.dataset.lcoffopen;offRole='all';renderLifecycleTab("lc_offboarding");});
 const bk=document.querySelector("[data-lcoffback]");if(bk)bk.onclick=()=>{lcOffId=null;renderLifecycleTab("lc_offboarding");};
 document.querySelectorAll("[data-offrole]").forEach(b=>b.onclick=()=>{offRole=b.dataset.offrole;renderLifecycleTab("lc_offboarding");});
 document.querySelectorAll("[data-offstep]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();const pr=b.dataset.offstep.split("|");offStep(pr[0],pr[1]);});
 document.querySelectorAll("[data-offblock]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();const pr=b.dataset.offblock.split("|");offBlock(pr[0],pr[1]);});
}

function lcStub(n){return '<div class="page-head"><div><div class="eyebrow">Journey</div><h1>'+n+'</h1><p>Workspace loading…</p></div></div><div class="card"><div class="card-pad" style="padding:40px;text-align:center;color:var(--muted)">'+n+' workspace</div></div>';}


/* ============================ DASHBOARD ============================ */
function lcProgress(pct,tone){tone=tone||"primary";return '<div class="lc-prog"><div class="lc-prog-fill" style="width:'+Math.max(3,pct)+'%;background:'+lcToneVar(tone)+'"></div></div>';}
function lcKpi(label,val,sub,tone,extra){return '<div class="kx-card"><div class="kx-l">'+label+'</div><div class="kx-v"'+(tone?' style="color:'+lcToneVar(tone)+'"':'')+'>'+val+'</div><div class="kx-d">'+sub+'</div>'+(extra||'')+'</div>';}
function lcFunnel(counts){
 const total=LC_STAGES.reduce((a,s)=>a+(counts[s]||0),0)||1;
 const max=Math.max.apply(0,LC_STAGES.map(s=>counts[s]||0))||1;
 return '<div class="lc-funnel">'+LC_STAGES.map(s=>{const n=counts[s]||0;const pct=Math.round(n/total*100);
   return '<div class="hf-row"><div class="hf-label" style="width:96px">'+s+'</div><div class="hf-track"><div class="hf-bar" style="width:'+Math.max(6,Math.round(n/max*100))+'%;background:'+lcStageColor(s)+'"><span class="hf-n">'+n+'</span></div></div><div class="hf-pct">'+pct+'%</div></div>';}).join('')+'</div>';
}
function lcAttIcon(k){const m={block:'<path d="M4.9 4.9l14.2 14.2"/><circle cx="12" cy="12" r="9"/>',warn:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/>',doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',clock:'<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>'};return icon(m[k]||m.warn);}
function lcAttentionPanel(items,cap){
 if(!items.length)return '<div class="card"><div class="card-head"><h3>Needs attention</h3></div><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>')+'<div><b>All clear</b><div class="small muted">No blockers, overdue tasks or pending approvals in your scope.</div></div></div></div></div>';
 const shown=cap?items.slice(0,cap):items;
 return '<div class="card"><div class="card-head"><h3>Needs attention</h3><span class="meta">'+items.length+' item'+(items.length>1?'s':'')+'</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
  +shown.map(i=>'<button class="lc-att lc-att-'+i.sev+'" data-lcatt="'+(i.cid||i.mid||'')+'" data-lcatttab="'+i.tab+'">'+'<span class="lc-att-i">'+lcAttIcon(i.icon)+'</span><span class="lc-att-t">'+i.txt+'</span>'+icon('<path d="M9 18l6-6-6-6"/>')+'</button>').join('')
  +(cap&&items.length>cap?'<div class="small muted" style="padding-top:4px">+ '+(items.length-cap)+' more across the workspace</div>':'')
  +'</div></div>';
}
function lcHeatmap(vis){
 const stages=["Preboarding","Onboarding","Probation","Offboarding"];const cols=[["On track","positive"],["At risk","warning"],["Blocked","accent"],["Overdue","accent"]];
 const cell=(s,h)=>vis.filter(c=>c.stage===s&&c.health===h).length;
 let h='<table class="lc-heat"><thead><tr><th></th>'+cols.map(c=>'<th>'+c[0]+'</th>').join('')+'</tr></thead><tbody>';
 stages.forEach(s=>{h+='<tr><td class="lc-heat-r">'+s+'</td>'+cols.map(c=>{const n=cell(s,c[1]==="accent"&&c[0]==="Overdue"?"Overdue":c[0]);const on=n>0;return '<td><span class="lc-heat-c" style="background:'+(on?'var(--'+c[1]+'-soft)':'var(--surface-2)')+';color:'+(on?'var(--'+c[1]+'-ink)':'var(--faint)')+'">'+n+'</span></td>';}).join('')+'</tr>';});
 return h+'</tbody></table>';
}
function lcDeptCompare(vis){
 const depts={};vis.forEach(c=>{if(c.stage==="Onboarding"||c.stage==="Preboarding"||c.stage==="Probation"){const d=lcPerson(c).dept;depts[d]=(depts[d]||0)+1;}});
 const arr=Object.keys(depts).map(d=>({d:d,n:depts[d]})).sort((a,b)=>b.n-a.n);
 if(!arr.length)return '<div class="lc-empty" style="padding:20px">No active onboarding or probation in scope.</div>';
 const max=Math.max.apply(0,arr.map(x=>x.n));
 return arr.map(x=>'<div class="lt-row"><div class="lt-label" style="width:120px"><div class="lt-stage">'+x.d+'</div></div><div class="lt-track"><div class="lt-fill" style="width:'+Math.round(x.n/max*100)+'%;background:var(--primary)"></div></div><div class="lt-days mono">'+x.n+'</div></div>').join('');
}
function lcTrendChart(){
 const months=["Jan","Feb","Mar","Apr","May","Jun"];const joiners=[4,3,5,4,3,6];const leavers=[1,2,1,2,1,3];
 return repLineSVG([{name:"Joiners",color:"var(--positive)",values:joiners},{name:"Leavers",color:"var(--accent)",values:leavers}],months)
  +'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:var(--positive)"></span>New joiners</span><span class="tl-i"><span class="tl-sw" style="background:var(--accent)"></span>Leavers</span></div>';
}

function lcDashboard(){
 if(isEmployee())return lcDashMember();
 if(isManager())return lcDashLeader();
 if(isAM())return lcDashManager();
 return lcDashAdmin();
}
function lcDashHead(eyebrow,title,sub,toggle){
 return '<div class="page-head"><div><div class="eyebrow">'+eyebrow+'</div><h1>'+title+'</h1><p>'+sub+'</p></div>'+(toggle||'')+'</div>';
}
function lcDashAdmin(){
 const vis=LC_CASES;const cnt=lcStageCount();
 const joinM=vis.filter(c=>(c.stage==="Onboarding"||c.stage==="Preboarding")&&lcAgo(c.started)<=40).length;
 const inProb=cnt["Probation"];
 const upConf=vis.filter(c=>c.stage==="Probation"&&lcDays(c.nextDate)<=45&&lcDays(c.nextDate)>=-7).length;
 const transfers=LC_MOVES.filter(m=>m.type==="Transfer"&&m.status!=="Completed").length;
 const promos=LC_MOVES.filter(m=>m.type==="Promotion"&&m.status!=="Effective").length;
 const offb=cnt["Offboarding"];
 const overdue=lcAllTasks().filter(lcTaskOverdue).length;
 const att=lcAttention();
 const layoutToggle='<div class="seg lc-seg">'+[["overview","Overview"],["operational","Operational"]].map(o=>'<button class="'+(lcDashLayout===o[0]?'on':'')+'" data-lcdash="'+o[0]+'">'+o[1]+'</button>').join('')+'</div>';
 const kpis='<div class="kpi-exec kpi-6 mb">'
  +lcKpi("New joiners (30d)",joinM,"preboarding + onboarding","primary")
  +lcKpi("In probation",inProb,upConf+" confirmation"+(upConf===1?"":"s")+" due ≤45d","warning")
  +lcKpi("Internal transfers",transfers,"in progress","info")
  +lcKpi("Promotions",promos,"in review / pending","positive")
  +lcKpi("Offboarding",offb,"active cases","accent")
  +lcKpi("Overdue tasks",overdue,"across all stages",overdue>0?"accent":"positive")
  +'</div>';
 const funnelCard='<div class="card"><div class="card-head"><h3>Employees by lifecycle stage</h3><span class="meta">'+LC_CASES.length+' tracked</span></div><div class="card-pad">'+lcFunnel(cnt)+'</div></div>';
 const trendCard='<div class="card"><div class="card-head"><h3>Joiners vs leavers</h3><span class="meta">last 6 months</span></div><div class="card-pad">'+lcTrendChart()+'</div></div>';
 const deptCard='<div class="card"><div class="card-head"><h3>Active lifecycle by department</h3><span class="meta">onboarding + probation</span></div><div class="card-pad">'+lcDeptCompare(vis)+'</div></div>';
 const heatCard='<div class="card"><div class="card-head"><h3>Risk heatmap</h3><span class="meta">stage × health</span></div><div class="card-pad">'+lcHeatmap(vis)+'</div></div>';
 let body;
 if(lcDashLayout==="operational"){
   body=kpis
    +lcAttentionPanel(att)
    +'<div class="rep-sec"><span class="rep-sec-t">Stage overview</span></div>'
    +'<div class="grid cols-2" style="align-items:start">'+funnelCard+heatCard+'</div>'
    +'<div class="rep-sec"><span class="rep-sec-t">Overdue & blocked tasks</span></div>'+lcOverdueTable(vis);
 } else {
   body=kpis
    +'<div class="grid cols-2 mb" style="align-items:start">'+funnelCard+lcAttentionPanel(att,5)+'</div>'
    +'<div class="grid cols-2 mb" style="align-items:start">'+trendCard+deptCard+'</div>'
    +heatCard;
 }
 return '<div class="dash-wrap">'+lcDashHead("People Analytics · Journey","Journey Dashboard","Workforce lifecycle health across every stage — from preboarding to alumni.",layoutToggle)+body+'</div>';
}
function lcOverdueTable(vis){
 const rows=[];vis.forEach(c=>{(c.tasks||[]).forEach(t=>{if(lcTaskOverdue(t)||t.st==="blocked")rows.push({c:c,t:t});});});
 rows.sort((a,b)=>lcDays(a.t.due)-lcDays(b.t.due));
 if(!rows.length)return '<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>Nothing overdue</b><div class="small muted">All lifecycle tasks are within SLA.</div></div></div></div></div>';
 return '<div class="card"><div class="ctrl-table"><table><thead><tr><th>Employee</th><th>Task</th><th>Owner</th><th>Due</th><th>Status</th></tr></thead><tbody>'
  +rows.map(r=>{const p=lcPerson(r.c);const od=lcDays(r.t.due);return '<tr class="clk" data-lcrow="'+r.c.id+'"><td><div class="cellname">'+av(p.name,"width:26px;height:26px;font-size:10px")+'<span class="small" style="font-weight:600">'+p.name+'</span></div></td><td class="small">'+r.t.t+'</td><td>'+ownerChip(r.t.owner)+'</td><td class="mono small" style="color:'+(od<0?'var(--accent-ink)':'var(--warning-ink)')+'">'+(od<0?Math.abs(od)+'d overdue':'due '+r.t.due.slice(5))+'</td><td>'+taskStatePill(r.t.st)+'</td></tr>';}).join('')
  +'</tbody></table></div></div>';
}

/* ---- Manager (AM) dashboard ---- */
function lcDashManager(){
 const vis=lcVisible();const cnt=lcStageCount();const myCnt={};LC_STAGES.forEach(s=>myCnt[s]=vis.filter(c=>c.stage===s).length);
 const att=lcAttention();
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("My team in lifecycle",vis.length,"across your accounts","primary")
  +lcKpi("Onboarding",myCnt["Onboarding"]+myCnt["Preboarding"],"joining / ramping","info")
  +lcKpi("In probation",myCnt["Probation"],"reviews to track","warning")
  +lcKpi("Offboarding",myCnt["Offboarding"],"active","accent")
  +'</div>';
 return '<div class="dash-wrap">'+lcDashHead("Manager · Team Lifecycle","Team Lifecycle","Lifecycle status across the people in your accounts.")
  +kpis
  +'<div class="grid cols-2 mb" style="align-items:start"><div class="card"><div class="card-head"><h3>By stage</h3></div><div class="card-pad">'+lcFunnel(myCnt)+'</div></div>'+lcAttentionPanel(att,5)+'</div>'
  +lcTeamList(vis);
}
function lcTeamList(vis){
 if(!vis.length)return '<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0 1 14 0v1"/>')+'<div><b>No one in your scope</b><div class="small muted">Switch persona to see lifecycle cases.</div></div></div></div></div>';
 return '<div class="card"><div class="card-head"><h3>People</h3><span class="meta">'+vis.length+'</span></div><div class="ctrl-table"><table><thead><tr><th>Employee</th><th>Stage</th><th>Progress</th><th>Status</th><th>Next milestone</th><th></th></tr></thead><tbody>'
  +vis.map(c=>{const p=lcPerson(c);return '<tr class="clk" data-lcrow="'+c.id+'"><td><div class="cellname">'+av(p.name,"width:28px;height:28px;font-size:10px")+'<div><div style="font-weight:600;font-size:12.5px">'+p.name+'</div><div class="small muted">'+p.role+'</div></div></div></td><td>'+lcStagePill(c.stage)+'</td><td style="min-width:120px"><div class="flex center gap">'+lcProgress(c.progress,LC_STAGE_TONE[c.stage])+'<span class="mono small">'+c.progress+'%</span></div></td><td>'+lcHealth(c.health)+'</td><td class="small">'+c.nextMs+' <span class="muted mono">'+(c.nextDate&&c.stage!=="Active"&&c.stage!=="Alumni"?'· '+c.nextDate.slice(5):'')+'</span></td><td><button class="btn btn-ghost lc-view" data-lcjourney="'+c.id+'" style="height:28px;font-size:11px">View journey</button></td></tr>';}).join('')
  +'</tbody></table></div></div>';
}

/* ---- Leader dashboard ---- */
function lcDashLeader(){
 const vis=lcVisible();
 const myTasks=[];vis.forEach(c=>{(c.tasks||[]).forEach(t=>{if(t.owner==="Leader"&&t.st!=="done")myTasks.push({c:c,t:t});});});
 const probs=vis.filter(c=>c.stage==="Probation");
 const onb=vis.filter(c=>c.stage==="Onboarding"||c.stage==="Preboarding");
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("My onboarding tasks",myTasks.length,"assigned to you","primary")
  +lcKpi("Team onboarding",onb.length,"ramping","info")
  +lcKpi("Probation reviews",probs.length,"to evaluate","warning")
  +lcKpi("Team readiness",vis.length?Math.round(vis.reduce((a,c)=>a+c.progress,0)/vis.length)+"%":"—","avg progress","positive")
  +'</div>';
 const taskCard='<div class="card"><div class="card-head"><h3>My lifecycle tasks</h3><span class="meta">'+myTasks.length+'</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
  +(myTasks.length?myTasks.map(r=>{const p=lcPerson(r.c);const od=lcDays(r.t.due);return '<div class="lc-task-row clk" data-lcrow="'+r.c.id+'"><span class="lc-task-dot" style="background:'+(r.t.st==="blocked"?'var(--accent)':od<0?'var(--warning)':'var(--info)')+'"></span><div class="lc-task-main"><div class="lc-task-t">'+r.t.t+'</div><div class="small muted">'+p.name+' · '+r.c.stage+'</div></div><span class="mono small" style="color:'+(od<0?'var(--accent-ink)':'var(--muted)')+'">'+(od<0?Math.abs(od)+'d late':'due '+r.t.due.slice(5))+'</span>'+taskStatePill(r.t.st)+'</div>';}).join(''):'<div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>No open tasks</b><div class="small muted">You are all caught up.</div></div></div>')
  +'</div></div>';
 const probCard='<div class="card"><div class="card-head"><h3>Probation to review</h3><span class="meta">'+probs.length+'</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
  +(probs.length?probs.map(c=>{const p=lcPerson(c);const risk=c.prob?c.prob.risk:0;return '<div class="lc-task-row clk" data-lcprob="'+c.id+'">'+av(p.name,"width:28px;height:28px;font-size:10px")+'<div class="lc-task-main"><div class="lc-task-t">'+p.name+'</div><div class="small muted">'+c.sub+' · due '+c.nextDate.slice(5)+'</div></div><span class="lc-risk '+(risk>=60?'hi':risk>=35?'mid':'lo')+'">risk '+risk+'</span></div>';}).join(''):'<div class="lc-empty small muted" style="padding:14px">No one in probation on your team.</div>')
  +'</div></div>';
 return '<div class="dash-wrap">'+lcDashHead("Leader · Onboarding & Coaching","Team Readiness","Your onboarding tasks, probation reviews, and team ramp-up.")+kpis+'<div class="grid cols-2" style="align-items:start">'+taskCard+probCard+'</div>'+lcTeamList(vis);
}

/* ---- Member dashboard ---- */
function lcDashMember(){
 const meId=me().id;let c=LC_CASES.find(x=>lcPerson(x).id===meId);
 if(!c){const e=me();c={id:"self",ref:e.id,stage:e.status==="probation"?"Probation":e.status==="onboard"?"Onboarding":"Active",sub:"",progress:100,health:"On track",started:e.joined,nextMs:"—",nextDate:"",tasks:[],events:(e.hist||[]).map(h=>({date:(h.w||"").slice(0,10),stage:"Active",title:h.a,note:"",done:true})),docs:(e.docs||[]).map(d=>({name:d.n,type:d.t,st:"signed"}))};}
 const p=lcPerson(c);
 const myTasks=(c.tasks||[]).filter(t=>t.owner==="Employee");
 const kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("My stage",c.stage,c.sub||"—",LC_STAGE_TONE[c.stage])
  +lcKpi("Journey progress",c.progress+"%","",LC_STAGE_TONE[c.stage])
  +lcKpi("My open tasks",myTasks.filter(t=>t.st!=="done").length,"to complete","primary")
  +lcKpi("Next milestone",c.nextDate&&c.stage!=="Active"?c.nextDate.slice(5):"—",c.nextMs,"info")
  +'</div>';
 const taskCard='<div class="card"><div class="card-head"><h3>My tasks</h3></div><div class="card-pad" style="display:flex;flex-direction:column;gap:8px">'
  +(myTasks.length?myTasks.map(t=>{const od=lcDays(t.due);return '<div class="lc-task-row"><span class="lc-check '+(t.st==="done"?"on":"")+'">'+(t.st==="done"?icon('<path d="M20 6L9 17l-5-5"/>'):'')+'</span><div class="lc-task-main"><div class="lc-task-t"'+(t.st==="done"?' style="text-decoration:line-through;color:var(--muted)"':'')+'>'+t.t+'</div><div class="small muted">due '+t.due.slice(5)+'</div></div>'+taskStatePill(t.st)+'</div>';}).join(''):'<div class="lc-empty small muted" style="padding:14px">No tasks assigned to you right now.</div>')
  +'</div></div>';
 const docCard='<div class="card"><div class="card-head"><h3>My documents</h3></div><div class="card-pad" style="display:flex;flex-direction:column;gap:7px">'
  +(c.docs||[]).map(d=>'<div class="lc-doc"><span class="lc-doc-i">'+icon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>')+'</span><div class="lc-doc-m"><div class="lc-doc-n">'+d.name+'</div><div class="small muted">'+d.type+'</div></div>'+lcDocPill(d.st)+'</div>').join('')
  +'</div></div>';
 return '<div class="dash-wrap">'+lcDashHead("My Lifecycle","My Journey","Track your milestones, tasks, and documents.")
  +kpis
  +'<div class="card mb"><div class="card-head"><h3>My lifecycle timeline</h3><button class="btn btn-ghost" data-lcjourney="'+c.id+'" style="margin-left:auto;height:28px;font-size:11px">Open full journey</button></div><div class="card-pad">'+lcTimelineMini(c)+'</div></div>'
  +'<div class="grid cols-2" style="align-items:start">'+taskCard+docCard+'</div></div>';
}
function lcDocPill(s){const m={signed:["positive","Signed"],pending:["warning","Pending"],missing:["accent","Missing"]};const x=m[s]||["muted",s];return '<span class="status-pill" style="background:var(--'+x[0]+'-soft);color:var(--'+x[0]+'-ink)">'+x[1]+'</span>';}
function lcTimelineMini(c){
 const evs=(c.events||[]).slice().sort((a,b)=>new Date(a.date)-new Date(b.date));
 if(!evs.length)return '<div class="small muted">No timeline events yet.</div>';
 return '<div class="lc-tl lc-tl-mini">'+evs.map(e=>'<div class="lc-tl-item '+(e.done?"done":"future")+'"><div class="lc-tl-marker" style="--mc:'+lcStageColor(e.stage)+'"></div><div class="lc-tl-body"><div class="lc-tl-when mono">'+e.date+'</div><div class="lc-tl-title">'+e.title+'</div></div></div>').join('')+'</div>';
}

function lcWireDashboard(){
 document.querySelectorAll("[data-lcdash]").forEach(b=>b.onclick=()=>{lcDashLayout=b.dataset.lcdash;renderLifecycleTab("lc_dashboard");});
 document.querySelectorAll("[data-lcatt]").forEach(b=>b.onclick=()=>{const tab=b.dataset.lcatttab;const id=b.dataset.lcatt;if(tab==="lc_directory"&&id){lcJourneyId=id;}if(tab==="lc_probation"&&id){lcProbId=id;}lcGo(tab);});
 document.querySelectorAll("[data-lcjourney]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();lcOpenJourney(b.dataset.lcjourney);});
 document.querySelectorAll("[data-lcrow]").forEach(b=>b.onclick=()=>lcOpenJourney(b.dataset.lcrow));
 document.querySelectorAll("[data-lcprob]").forEach(b=>b.onclick=()=>{lcProbId=b.dataset.lcprob;lcGo("lc_probation");});
}

/* ============================ DIRECTORY ============================ */
function lcDirectory(){
 const all=lcVisible();
 const depts=["All"].concat([...new Set(all.map(c=>lcPerson(c).dept))]);
 let rows=all.slice();
 if(lcDirStage!=="All")rows=rows.filter(c=>c.stage===lcDirStage);
 if(lcDirDept!=="All")rows=rows.filter(c=>lcPerson(c).dept===lcDirDept);
 if(lcDirQ){const q=lcDirQ.toLowerCase();rows=rows.filter(c=>{const p=lcPerson(c);return (p.name+" "+p.role+" "+p.dept).toLowerCase().indexOf(q)>=0;});}
 const PER=8;const pages=Math.max(1,Math.ceil(rows.length/PER));if(lcDirPage>=pages)lcDirPage=0;
 const shown=rows.slice(lcDirPage*PER,lcDirPage*PER+PER);
 const fchip=(id,val,opts)=>'<span class="df-chip">'+id+' <select data-lcdir="'+id.toLowerCase()+'">'+opts.map(o=>'<option'+(val===o?' selected':'')+'>'+o+'</option>').join('')+'</select></span>';
 const filters='<div class="dash-filters"><div class="df-left">'
  +'<span class="df-chip lc-search">'+icon('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')+'<input id="lcDirSearch" placeholder="Search name, role…" value="'+lcDirQ.replace(/"/g,'&quot;')+'"></span>'
  +fchip("Stage",lcDirStage,["All"].concat(LC_STAGES))
  +fchip("Dept",lcDirDept,depts)
  +'</div><span class="df-note">'+rows.length+' of '+all.length+' employees</span></div>';
 const body=shown.length?shown.map(c=>{const p=lcPerson(c);return '<tr class="clk" data-lcrow="'+c.id+'">'
   +'<td><div class="cellname">'+av(p.name,"width:30px;height:30px;font-size:11px")+'<div><div style="font-weight:600;font-size:12.5px">'+p.name+'</div><div class="small muted mono">'+p.id+'</div></div></div></td>'
   +'<td class="small">'+p.dept+'</td><td class="small">'+p.role+'</td><td class="small">'+(p.mgr?mgrName(p.mgr):"—")+'</td>'
   +'<td>'+lcStagePill(c.stage)+'</td>'
   +'<td style="min-width:130px"><div class="flex center gap">'+lcProgress(c.progress,LC_STAGE_TONE[c.stage])+'<span class="mono small">'+c.progress+'%</span></div></td>'
   +'<td>'+lcHealth(c.health)+'</td>'
   +'<td class="small">'+c.nextMs+'</td>'
   +'<td><button class="btn btn-ghost lc-view" data-lcjourney="'+c.id+'" style="height:28px;font-size:11px">View journey</button></td></tr>';}).join(''):'<tr><td colspan="9" class="empty" style="padding:30px">No employees match these filters.</td></tr>';
 const pager=pages>1?'<div class="exc-pager"><button class="exc-pg" data-lcdirpage="'+(lcDirPage-1)+'"'+(lcDirPage===0?' disabled':'')+'>'+icon('<path d="M15 18l-6-6 6-6"/>')+'</button><span class="exc-pgn mono">'+(lcDirPage+1)+' / '+pages+'</span><button class="exc-pg" data-lcdirpage="'+(lcDirPage+1)+'"'+(lcDirPage>=pages-1?' disabled':'')+'>'+icon('<path d="M9 18l6-6-6-6"/>')+'</button></div>':'';
 return '<div class="dash-wrap">'+lcDashHead("Journey","Directory","Every employee and where they are in their journey. Filter by stage or department, then open a journey.")
  +filters
  +'<div class="card"><div class="ctrl-table"><table><thead><tr><th>Employee</th><th>Department</th><th>Position</th><th>Manager</th><th>Stage</th><th>Progress</th><th>Status</th><th>Next milestone</th><th></th></tr></thead><tbody>'+body+'</tbody></table></div>'+pager+'</div></div>';
}
function lcWireDirectory(){
 document.querySelectorAll("[data-lcdir]").forEach(s=>s.onchange=()=>{const k=s.dataset.lcdir;if(k==="stage")lcDirStage=s.value;else if(k==="dept")lcDirDept=s.value;lcDirPage=0;renderLifecycleTab("lc_directory");});
 const se=document.getElementById("lcDirSearch");if(se)se.oninput=()=>{lcDirQ=se.value;lcDirPage=0;renderLifecycleTab("lc_directory");const s2=document.getElementById("lcDirSearch");if(s2){s2.focus();s2.setSelectionRange(s2.value.length,s2.value.length);}};
 document.querySelectorAll("[data-lcdirpage]").forEach(b=>{if(!b.disabled)b.onclick=()=>{lcDirPage=parseInt(b.dataset.lcdirpage);renderLifecycleTab("lc_directory");};});
 document.querySelectorAll("[data-lcjourney]").forEach(b=>b.onclick=(e)=>{e.stopPropagation();lcOpenJourney(b.dataset.lcjourney);});
 document.querySelectorAll("[data-lcrow]").forEach(b=>b.onclick=()=>lcOpenJourney(b.dataset.lcrow));
}
function lcDirectoryTableOnly(){return "";}
function lcWireDirectory2(){}


/* boot — all lifecycle const data is initialized above this line */
showModule("people");


/* ===================================================================
   KPI METRICS PERFORMANCE — Project Health Intelligence Center
   =================================================================== */
let kpiSub="overview", kpiProj="all", kpiCapaF="All", PM_CAPA=null;
var KPI_COL_META=[['ontime','On-time',function(p){return p.m?p.m.OnTime:null;}],['leak','Leakage',function(p){return p.m?p.m.LR:null;}],['defect','Defect',function(p){return p.m?p.m.DR:null;}],['predict','Predict.',function(p){return p.predict;}],['util','Util.',function(p){return p.util;}],['css','CSAT',function(p){return p.css;}]];
var KPI_COLS={ontime:true,leak:true,defect:true,predict:true,util:true,css:true};
function kpiConfigOpen(){
 var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
 openModal('<div class="modal-h"><div><h3>Configure KPI metrics</h3><div class="small muted" style="margin-top:3px">Choose which metrics appear in the KPI Explorer report</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
  +'<div class="modal-b"><div class="kpi-cfg">'+KPI_COL_META.map(function(c){return '<label class="kpi-cfg-row"><input type="checkbox" data-kcfg="'+c[0]+'"'+(KPI_COLS[c[0]]?' checked':'')+'><span class="kpi-cfg-n">'+c[1]+'</span></label>';}).join('')+'</div><div class="small muted mt">At least one metric stays on. Pillar scores &amp; OHS are unaffected.</div></div>'
  +'<div class="modal-f"><button class="btn btn-primary" id="kcfgDone">Done</button></div>');
 var m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=function(){closeModal();renderProject('metrics');};
 m.querySelectorAll('[data-kcfg]').forEach(function(cb){cb.onchange=function(){var on=KPI_COL_META.filter(function(c){return c[0]===cb.dataset.kcfg?cb.checked:KPI_COLS[c[0]];}).length;if(!cb.checked&&KPI_COL_META.filter(function(c){return KPI_COLS[c[0]];}).length<=1){cb.checked=true;toast('Keep at least one metric','warn');return;}KPI_COLS[cb.dataset.kcfg]=cb.checked;};});
 m.querySelector('#kcfgDone').onclick=function(){closeModal();renderProject('metrics');};
}
function pmH(s){let h=0;for(let i=0;i<s.length;i++)h=(h*33+s.charCodeAt(i))%997;return h/997;}
function pmBias(p){return p.rag==="Green"?1:p.rag==="Yellow"?0.6:0.3;}
const KPI_DEFS=[
 {pl:"Quality",n:"Defect Leakage",u:"%",dir:"down",g:10,y:25,f:p=>p.m&&p.m.LR!=null?Math.round(p.m.LR*100):Math.round(8+(1-pmBias(p))*45+pmH(p.id+"dl")*6)},
 {pl:"Quality",n:"Reopened Rate",u:"%",dir:"down",g:5,y:12,f:p=>Math.round(2+(1-pmBias(p))*18+pmH(p.id+"rr")*4)},
 {pl:"Quality",n:"DRE",u:"%",dir:"up",g:90,y:80,f:p=>Math.round(96-(1-pmBias(p))*26-pmH(p.id+"dre")*5)},
 {pl:"Quality",n:"Defect Density",u:"/KLOC",dir:"down",g:1,y:2.5,f:p=>Math.round((0.6+(1-pmBias(p))*2.6+pmH(p.id+"dd")*0.5)*10)/10},
 {pl:"Cost",n:"Gross Margin",u:"%",dir:"up",g:35,y:25,f:p=>Math.round(42-(1-pmBias(p))*22+pmH(p.id+"gm")*4)},
 {pl:"Cost",n:"Billable Rate",u:"%",dir:"up",g:80,y:70,f:p=>Math.round(90-(1-pmBias(p))*22+pmH(p.id+"br")*3)},
 {pl:"Cost",n:"Utilization",u:"%",dir:"band",band:[85,105],f:p=>p.util},
 {pl:"Cost",n:"Effort Consumption",u:"x",dir:"down",g:1.0,y:1.15,f:p=>p.m&&p.m.EC!=null?Math.round(p.m.EC*100)/100:Math.round((0.85+(1-pmBias(p))*0.45)*100)/100},
 {pl:"Delivery",n:"On-time Delivery",u:"%",dir:"up",g:95,y:85,f:p=>p.m&&p.m.OnTime!=null?Math.round(p.m.OnTime*100):Math.round(96-(1-pmBias(p))*24)},
 {pl:"Delivery",n:"Forecast Accuracy",u:"%",dir:"up",g:90,y:80,f:p=>Math.round(93-(1-pmBias(p))*22+pmH(p.id+"fa")*4)},
 {pl:"Delivery",n:"Release Predictability",u:"%",dir:"up",g:75,y:55,f:p=>p.predict},
 {pl:"Delivery",n:"SPI",u:"",dir:"up",g:0.95,y:0.85,f:p=>Math.round((1.03-(1-pmBias(p))*0.28+pmH(p.id+"spi")*0.04)*100)/100},
 {pl:"Process",n:"Process Compliance",u:"%",dir:"up",g:90,y:80,f:p=>Math.round(94-(1-pmBias(p))*20+pmH(p.id+"pc")*3)},
 {pl:"Process",n:"Retro Closure",u:"%",dir:"up",g:80,y:60,f:p=>Math.round(88-(1-pmBias(p))*34+pmH(p.id+"rc")*5)},
 {pl:"Process",n:"Audit Compliance",u:"%",dir:"up",g:95,y:85,f:p=>Math.round(97-(1-pmBias(p))*16+pmH(p.id+"ac")*2)},
 {pl:"Process",n:"CAPA Closure",u:"%",dir:"up",g:85,y:65,f:p=>Math.round(90-(1-pmBias(p))*36+pmH(p.id+"capa")*5)}
];
const KPI_FORMULA={"Defect Leakage":"Defects found in production ÷ total defects × 100","Reopened Rate":"Reopened defects ÷ total resolved × 100","DRE":"Defects removed before release ÷ total defects × 100","Defect Density":"Total defects ÷ thousand lines of code","Gross Margin":"(Revenue − delivery cost) ÷ revenue × 100","Billable Rate":"Billable effort ÷ total capacity × 100","Utilization":"Busy effort ÷ available capacity × 100","Effort Consumption":"Actual effort ÷ planned effort (EAC / budget)","On-time Delivery":"Milestones delivered on time ÷ committed × 100","Forecast Accuracy":"1 − |actual − forecast| ÷ forecast","Release Predictability":"Releases shipped as planned ÷ planned × 100","SPI":"Earned value ÷ planned value","Process Compliance":"Process steps followed ÷ required × 100","Retro Closure":"Retro actions closed ÷ raised × 100","Audit Compliance":"Audit items passed ÷ total × 100","CAPA Closure":"CAPA actions closed on time ÷ total × 100"};
function kpiUnit(d,v){return d.u==="x"?v+"×":d.n==="SPI"?v:(v+d.u);}
function kpiStat(v,d){if(d.dir==="band"){const lo=d.band[0],hi=d.band[1];return (v>=lo&&v<=hi)?"Green":(v<lo-12||v>hi+10)?"Red":"Yellow";}if(d.dir==="up")return v>=d.g?"Green":v>=d.y?"Yellow":"Red";return v<=d.g?"Green":v<=d.y?"Yellow":"Red";}
const STAT_SCORE={Green:92,Yellow:68,Red:45};
function kpiTone(s){return s==="Green"?"positive":s==="Yellow"?"warning":"accent";}
function kpiTrend(p,d){const h=pmH(p.id+d.n+"tr");return h<0.34?"down":h<0.68?"flat":"up";}
function pillarScores(scope){const pls=["Quality","Cost","Delivery","Process"];const o={};pls.forEach(pl=>{const defs=KPI_DEFS.filter(d=>d.pl===pl);let t=0,c=0;scope.forEach(p=>defs.forEach(d=>{t+=STAT_SCORE[kpiStat(d.f(p),d)];c++;}));o[pl]=c?Math.round(t/c):0;});return o;}
function ohsOf(sc){return Math.round(sc.Quality*.3+sc.Delivery*.3+sc.Cost*.2+sc.Process*.2);}
function ohsRag(o){return o>=80?"Green":o>=62?"Yellow":"Red";}
function ohsCol(o){const r=ohsRag(o);return r==="Green"?"var(--positive)":r==="Yellow"?"var(--warning)":"var(--accent)";}
function kpiBench(def,vis){const vals=vis.map(p=>def.f(p));return vals.reduce((a,b)=>a+b,0)/(vals.length||1);}
function ohsGauge(o){const col=ohsCol(o);const R=70,cx=90,cy=92;const ang=Math.PI*(1-Math.max(0,Math.min(100,o))/100);const x=cx+R*Math.cos(ang),y=cy-R*Math.sin(ang);
 return '<svg viewBox="0 0 180 108" width="190" style="display:block">'
  +'<path d="M20 92 A70 70 0 0 1 160 92" fill="none" stroke="var(--surface-3)" stroke-width="13" stroke-linecap="round"/>'
  +'<path d="M20 92 A70 70 0 0 1 '+x.toFixed(1)+' '+y.toFixed(1)+'" fill="none" stroke="'+col+'" stroke-width="13" stroke-linecap="round"/>'
  +'<text x="90" y="78" text-anchor="middle" font-family="Geist" font-weight="600" font-size="36" fill="var(--ink)">'+o+'</text>'
  +'<text x="90" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">OHS / 100</text></svg>';}

function pmMetricCell(val,kind){
 if(val==null)return '<td class="mono small muted" style="text-align:center">·</td>';
 let txt,tone;
 if(kind==="ontime"){txt=Math.round(val*100)+"%";tone=val>=0.95?"positive":val>=0.85?"warning":"accent";}
 else if(kind==="leak"){txt=Math.round(val*100)+"%";tone=val<=0.1?"positive":val<=0.5?"warning":"accent";}
 else if(kind==="defect"){txt=val;tone=val<=0.5?"positive":val<=1.5?"warning":"accent";}
 else if(kind==="predict"){txt=val+"%";tone=val>=75?"positive":val>=55?"warning":"accent";}
 else if(kind==="util"){txt=val+"%";tone=(val>=85&&val<=105)?"positive":(val>105?"accent":"warning");}
 else {txt=val.toFixed(2);tone=val>=4.3?"positive":val>=4.0?"warning":"accent";}
 return '<td style="text-align:center"><span class="mono small" style="font-weight:700;color:var(--'+tone+'-ink)">'+txt+'</span></td>';
}
function pmMetrics(){
 const all=pmVisibleProjects();
 const myAccts=[...new Set(all.map(p=>p.acc))];
 if(pmAccSel!=="all"&&myAccts.indexOf(pmAccSel)<0)pmAccSel="all";
 const vis=all.filter(p=>pmAccSel==="all"||p.acc===pmAccSel);
 const roleNote=fullAccess()?"Operational Health Score, QCDP pillars and per-project KPIs across the portfolio.":(PM_PERSONA[persona]?"Scoped to your "+PM_PERSONA[persona].role+" projects ("+PM_PERSONA[persona].name+").":"No projects assigned to this persona.");
 const head='<div class="page-head"><div><div class="eyebrow">Project Monitoring · Performance</div><h1>KPI Metrics Performance</h1><p>'+roleNote+'</p></div></div>';
 const _canIn=fullAccess()||isManager();const _inProjs=fullAccess()?all:(isManager()?all.filter(p=>(PM_PERSONA.manager&&PM_PERSONA.manager.projects||[]).indexOf(p.id)>=0):[]);
 const filters='<div class="dash-filters"><div class="df-left"><span class="df-chip">Account <select id="pmAcc"><option value="all" '+(pmAccSel==="all"?"selected":"")+'>All ('+myAccts.length+')</option>'+myAccts.map(a=>'<option '+(a===pmAccSel?"selected":"")+'>'+a+'</option>').join('')+'</select></span>'+(_canIn&&_inProjs.length?'<span class="df-chip">Project <select id="pmKpiProj">'+_inProjs.map(p=>'<option value="'+p.id+'">'+p.name+'</option>').join('')+'</select></span>':'')+'</div>'+(_canIn&&_inProjs.length?'<button class="btn btn-primary" id="kpiInputBtn" style="height:34px">'+icon('<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>')+'Manual KPI input</button>':'<span class="df-note">'+vis.length+' project'+(vis.length===1?'':'s')+'</span>')+'</div>';
 if(!vis.length)return '<div class="dash-wrap">'+head+'<div class="card empty" style="padding:46px">No projects visible for this persona.</div></div>';
 const sc=pillarScores(vis), ohs=ohsOf(sc), rag=ohsRag(ohs);
 const ragName={Green:"Healthy",Yellow:"At risk",Red:"Critical"}[rag];
 const worstPl=Object.keys(sc).sort((a,b)=>sc[a]-sc[b])[0];
 const crit=vis.filter(p=>ohsRag(ohsOf(pillarScores([p])))==="Red");
 /* OVERVIEW hero */
 const hero='<div class="card kpi-hero mb"><div class="kpi-hero-l">'+ohsGauge(ohs)+'<div><span class="status-pill" style="background:var(--'+kpiTone(rag)+'-soft);color:var(--'+kpiTone(rag)+'-ink);font-size:12px">'+ragName+'</span><div class="kpi-rank">'+vis.length+' projects · '+crit.length+' critical · '+vis.filter(p=>p.reported).length+'/'+vis.length+' reported</div></div></div>'
  +'<div class="kpi-hero-r">'+["Quality","Cost","Delivery","Process"].map(pl=>'<div class="kpi-pill-card"><div class="kpi-pill-n">'+pl+'</div><div class="kpi-pill-s" style="color:var(--'+kpiTone(ohsRag(sc[pl]))+'-ink)">'+sc[pl]+'</div><div class="lc-prog"><div class="lc-prog-fill" style="width:'+sc[pl]+'%;background:'+ohsCol(sc[pl])+'"></div></div></div>').join('')+'</div></div>';
 const ai='<div class="rep-insight mb" style="background:var(--'+kpiTone(rag)+'-soft);color:var(--'+kpiTone(rag)+'-ink)"><span class="spark-dot"></span><span><b>AI summary —</b> '+(fullAccess()?"Portfolio":"Your")+' OHS is <b>'+ohs+'/100</b> ('+ragName+'). Weakest pillar: <b>'+worstPl+'</b> ('+sc[worstPl]+'%). '+(crit.length?'<b>'+crit.length+'</b> project'+(crit.length>1?'s need':' needs')+' attention: '+crit.slice(0,4).map(p=>p.name).join(", ")+'.':'No critical projects this cycle.')+'</span></div>';
 /* KPI EXPLORER table */
 const rows=vis.slice().sort((a,b)=>a.predict-b.predict).map(p=>'<tr class="clk" data-pmrow="'+p.id+'"><td><div style="font-weight:600;font-size:12.5px">'+p.name+'</div><div class="small mono muted">'+p.id+'</div></td><td class="small">'+p.acc+'</td><td>'+ragPill(p.rag)+'</td>'
  +KPI_COL_META.filter(c=>KPI_COLS[c[0]]).map(c=>pmMetricCell(c[2](p),c[0])).join('')+'</tr>').join('');
 const _ecols=KPI_COL_META.filter(c=>KPI_COLS[c[0]]);const _cfgBtn=(fullAccess()||isManager())?'<button class="btn btn-ghost" id="kpiCfgBtn" style="height:30px;font-size:12px;margin-left:auto">'+icon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>')+'Configure metrics</button>':'';const table='<div class="card"><div class="card-head"><h3>KPI Explorer</h3><span class="meta">per-project metrics · click a row for the weekly report</span>'+_cfgBtn+'</div><div class="tbl-wrap"><table><thead><tr><th>Project</th><th>Account</th><th>Health</th>'+_ecols.map(c=>'<th style="text-align:center">'+c[1]+'</th>').join('')+'</tr></thead><tbody>'+rows+'</tbody></table></div><div class="small muted" style="padding:10px 16px">'+_ecols.length+' metric'+(_ecols.length===1?'':'s')+' shown · use Configure metrics to add or remove columns. Pillar scores roll up into the OHS above.</div></div>';
 return '<div class="dash-wrap">'+head+filters+hero+ai+table+'</div>';
}
function kpiInputProjects(){const all=pmVisibleProjects();return fullAccess()?all:(isManager()?all.filter(function(p){return (PM_PERSONA.manager&&PM_PERSONA.manager.projects||[]).indexOf(p.id)>=0;}):[]);}
var KPI_INPUTS={};
function kpiCurWeek(){return PM_WEEKS[PM_WEEKS.length-1];}
function kpiPrefill(p,week){
 var rec=KPI_INPUTS[p.id]&&KPI_INPUTS[p.id][week];
 if(rec)return {ot:rec.ot,lr:rec.lr,ec:rec.ec,pcv:rec.pcv,existing:true};
 if(week===kpiCurWeek()){var lr=p.type==='ticket'?p.m.DR:p.m.LR;return {ot:p.m.OnTime!=null?p.m.OnTime:'',lr:lr!=null?lr:'',ec:p.m.EC!=null?p.m.EC:'',pcv:p.m.PCV!=null?p.m.PCV:'',existing:true};}
 return {ot:'',lr:'',ec:'',pcv:'',existing:false};
}
function kpiManualInput(projId){
 var projs=kpiInputProjects();if(!projs.length){toast('No project you can input KPIs for','warn');return;}
 var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
 var projSel='<select class="inp" id="pmiProj">'+projs.map(function(p){return '<option value="'+p.id+'"'+(p.id===projId?' selected':'')+'>'+p.name+' ('+p.acc+')</option>';}).join('')+'</select>';
 var weekSel='<select class="inp" id="pmiWeek">'+PM_WEEKS.slice().reverse().map(function(w){return '<option value="'+w+'"'+(w===kpiCurWeek()?' selected':'')+'>'+w+(w===kpiCurWeek()?' \u00b7 current':'')+'</option>';}).join('')+'</select>';
 openModal('<div class="modal-h"><div><h3>Manual KPI input</h3><div class="small muted" style="margin-top:3px">Pick a project &amp; week \u2014 edit the record; QCDP &amp; final RAG compute live</div></div><div class="flex center gap"><span id="pmiEdit"></span><span id="pmiPrev"></span><button class="drawer-close" id="modalClose">'+x+'</button></div></div>'
  +'<div class="modal-b" id="evalForm"><div class="field-grid mb"><div><label class="field-k">Project</label>'+projSel+'</div><div><label class="field-k">Reporting week</label>'+weekSel+'</div>'
  +'<div><label class="field-k">On-time rate (0\u20131) \u2192 Delivery</label><input class="inp" id="pmiOt" placeholder="0.95"></div>'
  +'<div><label class="field-k">Leakage / Defect (0\u20131) \u2192 Quality</label><input class="inp" id="pmiLr" placeholder="0.10"></div>'
  +'<div><label class="field-k">Actual vs budget \u2192 Cost</label><input class="inp" id="pmiEc" placeholder="1.00"></div>'
  +'<div><label class="field-k">Commitment / velocity (0\u20131) \u2192 Process</label><input class="inp" id="pmiPcv" placeholder="0.90"></div></div>'
  +'<div class="kb-execrow" id="pmiQcdp"></div></div>'
  +'<div class="modal-f"><button class="btn btn-ghost" id="pmiCancel">Cancel</button><button class="btn btn-primary" id="pmiSave">Save record</button></div>');
 var m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#pmiCancel').onclick=closeModal;
 function calc(){var p=pmFind(m.querySelector('#pmiProj').value);var t=Object.assign({},p.m);
  var ot=m.querySelector('#pmiOt').value,lr=m.querySelector('#pmiLr').value,ec=m.querySelector('#pmiEc').value,pcv=m.querySelector('#pmiPcv').value;
  if(ot!=='')t.OnTime=+ot;if(lr!==''){if(p.type==='ticket')t.DR=+lr;else t.LR=+lr;}if(ec!=='')t.EC=+ec;if(pcv!=='')t.PCV=+pcv;
  var fake=Object.assign({},p,{m:t});var q=autoQCDP(fake);var rag=worst([q.Q,q.C,q.D,q.P]);
  m.querySelector('#pmiPrev').innerHTML=ragPill(rag);
  m.querySelector('#pmiQcdp').innerHTML=[['Quality',q.Q],['Cost',q.C],['Delivery',q.D],['Process',q.P]].map(function(k){var c=k[1]==='Green'?'positive':k[1]==='Yellow'?'warning':'accent';return '<div class="kb-execk"><div class="kb-execv" style="font-size:15px;color:var(--'+c+'-ink)">'+ragDot(k[1])+' '+k[1]+'</div><div class="kb-execl">'+k[0]+'</div></div>';}).join('');
  return {t:t,rag:rag,q:q};}
 function load(){var p=pmFind(m.querySelector('#pmiProj').value);var wk=m.querySelector('#pmiWeek').value;var pf=kpiPrefill(p,wk);
  m.querySelector('#pmiOt').value=pf.ot;m.querySelector('#pmiLr').value=pf.lr;m.querySelector('#pmiEc').value=pf.ec;m.querySelector('#pmiPcv').value=pf.pcv;
  m.querySelector('#pmiEdit').innerHTML=pf.existing?'<span class="tag tag-rep">Editing existing</span>':'<span class="tag tag-new">New record</span>';
  calc();}
 m.querySelector('#pmiProj').onchange=load;m.querySelector('#pmiWeek').onchange=load;
 ['pmiOt','pmiLr','pmiEc','pmiPcv'].forEach(function(id){m.querySelector('#'+id).addEventListener('input',calc);});
 load();
 m.querySelector('#pmiSave').onclick=function(){var p=pmFind(m.querySelector('#pmiProj').value);var wk=m.querySelector('#pmiWeek').value;var c=calc();
  KPI_INPUTS[p.id]=KPI_INPUTS[p.id]||{};KPI_INPUTS[p.id][wk]={ot:m.querySelector('#pmiOt').value,lr:m.querySelector('#pmiLr').value,ec:m.querySelector('#pmiEc').value,pcv:m.querySelector('#pmiPcv').value,rag:c.rag};
  if(wk===kpiCurWeek()){p.m=c.t;p.qauto=c.q;p.rag=c.rag;p.reported=true;p.gw=0;}
  audit('KPI manual input',p.name,wk+' \u00b7 QCDP '+c.q.Q[0]+c.q.C[0]+c.q.D[0]+c.q.P[0]+' \u00b7 '+c.rag);closeModal();renderProject('metrics');toast('KPI record saved \u2014 '+p.name+' '+wk+' \u2192 '+c.rag);};
}
/* ---- 1. OVERVIEW ---- */
function kpiOverview(scope,vis){
 const sc=pillarScores(scope), ohs=ohsOf(sc), rag=ohsRag(ohs);
 const ragName={Green:"Healthy",Yellow:"At risk",Red:"Critical"}[rag];
 const ranks=vis.map(p=>({p:p,o:ohsOf(pillarScores([p]))})).sort((a,b)=>b.o-a.o);
 const single=kpiProj!=="all"?scope[0]:null;
 const rank=single?ranks.findIndex(r=>r.p.id===single.id)+1:null;
 const worstPl=Object.keys(sc).sort((a,b)=>sc[a]-sc[b])[0];
 const worstKpi=KPI_DEFS.filter(d=>d.pl===worstPl).map(d=>({d:d,st:kpiStat(d.f(scope[0]),d),v:d.f(scope[0])})).sort((a,b)=>STAT_SCORE[a.st]-STAT_SCORE[b.st])[0];
 const hero='<div class="card kpi-hero"><div class="kpi-hero-l">'+ohsGauge(ohs)+'<div><span class="status-pill" style="background:var(--'+kpiTone(rag)+'-soft);color:var(--'+kpiTone(rag)+'-ink);font-size:12px">'+ragName+'</span>'+(rank?'<div class="kpi-rank">Portfolio rank <b>#'+rank+'</b> of '+vis.length+'</div>':'<div class="kpi-rank">'+vis.length+' projects · '+ranks.filter(r=>ohsRag(r.o)==="Red").length+' critical</div>')+'</div></div>'
  +'<div class="kpi-hero-r">'+["Quality","Cost","Delivery","Process"].map(pl=>'<div class="kpi-pill-card"><div class="kpi-pill-n">'+pl+'</div><div class="kpi-pill-s" style="color:var(--'+kpiTone(ohsRag(sc[pl]))+'-ink)">'+sc[pl]+'</div><div class="lc-prog"><div class="lc-prog-fill" style="width:'+sc[pl]+'%;background:'+ohsCol(sc[pl])+'"></div></div></div>').join('')+'</div></div>';
 const drv=worstKpi?'Primary driver: <b>'+worstKpi.d.n+'</b> at '+kpiUnit(worstKpi.d,worstKpi.v)+' ('+worstKpi.st+'). ':'';
 const ai='<div class="ai-hero" style="margin-top:16px"><div class="ai-hero-h"><div class="ai-hero-title"><div class="agent-spark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2z"/></svg></div><div><div class="ai-hero-t">AI executive summary</div><div class="ai-hero-s">Generated from current QCDP signals</div></div></div></div>'
  +'<div class="rep-insight" style="background:var(--'+kpiTone(rag)+'-soft);color:var(--'+kpiTone(rag)+'-ink)"><span class="spark-dot"></span><span>'+(single?'<b>'+single.name+'</b>':'The portfolio')+' is running at an OHS of <b>'+ohs+'/100</b> ('+ragName+'). The weakest pillar is <b>'+worstPl+'</b> ('+sc[worstPl]+'%). '+drv+(rag==="Green"?'Maintain cadence and protect the gains.':'Open corrective actions on the red KPIs and re-review next cycle.')+'</span></div></div>';
 const trend='<div class="card mt"><div class="card-head"><h3>OHS trend</h3><span class="meta">last 6 months</span></div><div class="card-pad">'+(function(){const base=ohs;const seq=[base-9,base-7,base-4,base-5,base-2,base].map(v=>Math.max(20,Math.min(98,Math.round(v))));return repLineSVG([{name:"OHS",color:ohsCol(ohs),values:seq}],["Jan","Feb","Mar","Apr","May","Jun"]);})()+'</div></div>';
 return hero+ai+trend;
}

/* ---- 2. KPI EXPLORER ---- */
function kpiExplorer(scope,vis){
 const single=scope.length===1?scope[0]:null;
 const note=single?'':'<div class="rep-insight" style="background:var(--info-soft);color:var(--ink-2);margin-bottom:14px"><span class="spark-dot"></span><span>Showing <b>portfolio averages</b>. Pick a project above to see its values and drill into any KPI.</span></div>';
 const pls=[["Quality","positive"],["Cost","warning"],["Delivery","primary"],["Process","info"]];
 const sc=pillarScores(scope);
 const body=pls.map(plArr=>{const pl=plArr[0];const defs=KPI_DEFS.filter(d=>d.pl===pl);
  const cards=defs.map(d=>{const v=single?d.f(single):Math.round(kpiBench(d,scope)*100)/100;const st=kpiStat(v,d);const tr=single?kpiTrend(single,d):"flat";const bench=Math.round(kpiBench(d,vis)*100)/100;const trIco=tr==="up"?'▲':tr==="down"?'▼':'—';const trCol=(tr==="flat")?"var(--muted)":((d.dir==="down")?(tr==="down"?"var(--positive-ink)":"var(--accent-ink)"):(tr==="up"?"var(--positive-ink)":"var(--accent-ink)"));
    return '<button class="kpi-mini" data-kpidrill="'+d.n+'"><div class="kpi-mini-top"><span class="kpi-mini-n">'+d.n+'</span><span class="kpi-dot" style="background:var(--'+kpiTone(st)+')"></span></div><div class="kpi-mini-v">'+kpiUnit(d,v)+'</div><div class="kpi-mini-f"><span class="kpi-mini-th">'+(d.dir==="band"?"band "+d.band[0]+"–"+d.band[1]:(d.dir==="up"?"≥ "+d.g:"≤ "+d.g))+'</span><span style="color:'+trCol+'">'+trIco+'</span><span class="kpi-mini-bm">bench '+kpiUnit(d,bench)+'</span></div></button>';}).join('');
  return '<div class="card mb"><div class="card-head"><div class="flex center gap"><span class="kpi-pl-dot" style="background:var(--'+plArr[1]+')"></span><h3>'+pl+'</h3></div><span class="meta">pillar score '+sc[pl]+'</span></div><div class="card-pad"><div class="kpi-grid">'+cards+'</div></div></div>';}).join('');
 return note+body;
}
function kpiDrill(name){
 const d=KPI_DEFS.find(x=>x.n===name);if(!d)return;
 const all=pmVisibleProjects().filter(p=>pmAccSel==="all"||p.acc===pmAccSel);
 const scope=kpiProj==="all"?all:all.filter(p=>p.id===kpiProj);const p0=scope[0];
 const v=kpiProj==="all"?Math.round(kpiBench(d,scope)*100)/100:d.f(p0);const st=kpiStat(v,d);
 const seq=[v*0.9,v*0.95,v*0.92,v*0.98,v*1.0,v].map(x=>Math.round(x*100)/100);
 const worse=d.dir==="down";
 const rc=st==="Green"?"Within target — no systemic issue detected.":(d.pl==="Quality"?"Insufficient test depth and review coverage; defects escaping to later stages.":d.pl==="Delivery"?"Scope volatility and estimation gaps are eroding commitment reliability.":d.pl==="Cost"?"Capacity imbalance — billable allocation below plan or over-utilization.":"Process steps skipped under delivery pressure; closure cadence slipping.");
 const x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
 openModal('<div class="modal-h"><div><h3>'+d.n+'</h3><div class="small muted" style="margin-top:3px">'+d.pl+' pillar · '+(kpiProj==="all"?"portfolio average":p0.name)+'</div></div><div class="flex center gap"><span class="status-pill" style="background:var(--'+kpiTone(st)+'-soft);color:var(--'+kpiTone(st)+'-ink)">'+st+'</span><button class="drawer-close" id="modalClose">'+x+'</button></div></div>'
  +'<div class="modal-b"><div class="kpi-drill-v">'+kpiUnit(d,v)+'</div>'
  +'<div class="fb"><div class="fm">Formula</div><div class="fnote mono" style="font-size:12px">'+KPI_FORMULA[d.n]+'</div></div>'
  +'<div class="subhead" style="margin-top:14px">Historical trend</div>'+repLineSVG([{name:d.n,color:ohsCol(STAT_SCORE[st]),values:seq}],["Jan","Feb","Mar","Apr","May","Jun"])
  +'<div class="fb" style="margin-top:8px"><div class="fm">Root cause</div><div class="fnote">'+rc+'</div></div>'
  +'<div class="subhead" style="margin-top:14px">Action history</div><div class="lc-tl" style="margin-top:8px"><div class="lc-tl-item done"><div class="lc-tl-marker" style="--mc:var(--primary)"></div><div class="lc-tl-body"><div class="lc-tl-when mono">2026-05-20</div><div class="lc-tl-title">Threshold breached → CAPA opened</div></div></div><div class="lc-tl-item '+(st==="Green"?"done":"future")+'"><div class="lc-tl-marker" style="--mc:var(--'+kpiTone(st)+')"></div><div class="lc-tl-body"><div class="lc-tl-when mono">2026-06-09</div><div class="lc-tl-title">'+(st==="Green"?"Recovered to Green":"Corrective action in progress")+'</div></div></div></div></div>'
  +'<div class="modal-f"><button class="btn btn-ghost" id="kpiDrillClose">Close</button></div>');
 const m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#kpiDrillClose').onclick=closeModal;
}

/* ---- 3. TRENDS & BENCHMARK ---- */
function kpiTrends(scope,vis){
 const ohs=ohsOf(pillarScores(scope));const pavg=ohsOf(pillarScores(vis));
 const mk=(b)=>[b-9,b-7,b-5,b-5,b-2,b].map(v=>Math.max(20,Math.min(98,Math.round(v))));
 const histCard='<div class="card mb"><div class="card-head"><h3>Historical OHS trend</h3><span class="meta">'+(kpiProj==="all"?"portfolio":scope[0].name)+' vs portfolio</span></div><div class="card-pad">'+repLineSVG([{name:"This",color:ohsCol(ohs),values:mk(ohs)},{name:"Portfolio",color:"var(--muted)",dash:true,values:mk(pavg)}],["Jan","Feb","Mar","Apr","May","Jun"])+'<div class="trend-legend"><span class="tl-i"><span class="tl-sw" style="background:'+ohsCol(ohs)+'"></span>'+(kpiProj==="all"?"Portfolio":"This project")+'</span><span class="tl-i"><span class="tl-sw" style="background:var(--muted)"></span>Portfolio avg</span></div></div></div>';
 const sc=pillarScores(scope), pavgSc=pillarScores(vis);const IND={Quality:85,Cost:80,Delivery:88,Process:82};
 const benchRows=["Quality","Cost","Delivery","Process"].map(pl=>'<div class="bench-row"><div class="bench-l">'+pl+'</div><div class="bench-bars"><div class="bench-bar"><div class="bench-fill" style="width:'+sc[pl]+'%;background:var(--primary)"></div><span class="bench-v">'+sc[pl]+'</span></div><div class="bench-marks"><span class="bench-m" style="left:'+pavgSc[pl]+'%" title="Portfolio">▲</span><span class="bench-m ind" style="left:'+IND[pl]+'%" title="Industry">◆</span></div></div></div>').join('');
 const benchCard='<div class="card"><div class="card-head"><h3>Benchmark comparison</h3><span class="meta">project · portfolio ▲ · industry ◆</span></div><div class="card-pad">'+benchRows+'<div class="bench-legend small muted"><span>Bar = this scope</span><span>▲ portfolio avg</span><span>◆ industry target</span></div></div></div>';
 return histCard+benchCard;
}

/* ---- 4. EXECUTIVE MATRIX ---- */
function pmEQI(p){const s=pillarScores([p]);return Math.round(s.Quality*.6+s.Process*.4);}
function pmTDI(p){return Math.max(8,Math.min(92,Math.round(28+(1-pmBias(p))*46+pmH(p.id+"tdi")*14)));}
function kpiMatrix(vis){
 const W=620,H=420,pl=44,pb=44,pt=20,pr=20,pw=W-pl-pr,ph=H-pt-pb;
 const mx=pl+pw/2,my=pt+ph/2;
 const quad=(x,y,w,h,fill,label,sub,align)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+fill+'" opacity=".5"/><text x="'+(align==="r"?x+w-10:x+10)+'" y="'+(y+18)+'" text-anchor="'+(align==="r"?"end":"start")+'" font-size="11" font-weight="700" fill="var(--ink-2)">'+label+'</text><text x="'+(align==="r"?x+w-10:x+10)+'" y="'+(y+32)+'" text-anchor="'+(align==="r"?"end":"start")+'" font-size="9.5" fill="var(--muted)">'+sub+'</text>';
 let g='';
 g+=quad(pl,pt,pw/2,ph/2,"var(--positive-soft)","Healthy","High quality · low debt","l");
 g+=quad(mx,pt,pw/2,ph/2,"var(--warning-soft)","Hidden Risk","Quality now · debt rising","r");
 g+=quad(pl,my,pw/2,ph/2,"var(--surface-3)","Legacy Burden","Low quality · stable","l");
 g+=quad(mx,my,pw/2,ph/2,"var(--accent-soft)","System Failure","Low quality · high debt","r");
 g+='<line x1="'+mx+'" y1="'+pt+'" x2="'+mx+'" y2="'+(pt+ph)+'" stroke="var(--line-strong)"/><line x1="'+pl+'" y1="'+my+'" x2="'+(pl+pw)+'" y2="'+my+'" stroke="var(--line-strong)"/>';
 g+='<text x="'+(pl+pw/2)+'" y="'+(H-10)+'" text-anchor="middle" font-size="10" fill="var(--muted)">Technical Debt Index (TDI) →</text>';
 g+='<text transform="translate(14,'+(pt+ph/2)+') rotate(-90)" text-anchor="middle" font-size="10" fill="var(--muted)">Engineering Quality Index (EQI) →</text>';
 vis.forEach(p=>{const eqi=pmEQI(p),tdi=pmTDI(p);const cx=pl+tdi/100*pw,cy=pt+ph-(eqi/100*ph);const col=ohsCol(ohsOf(pillarScores([p])));
  g+='<circle cx="'+cx.toFixed(1)+'" cy="'+cy.toFixed(1)+'" r="7" fill="'+col+'" fill-opacity=".3" stroke="'+col+'" stroke-width="2"/><text x="'+(cx+10).toFixed(1)+'" y="'+(cy+3).toFixed(1)+'" font-size="9" fill="var(--ink-2)" font-weight="600">'+p.id+'</text>';});
 const svg='<svg viewBox="0 0 '+W+' '+H+'" width="100%" style="max-width:660px;display:block;margin:0 auto">'+g+'</svg>';
 const fail=vis.filter(p=>pmEQI(p)<60&&pmTDI(p)>50);
 const ins='<div class="rep-insight" style="background:'+(fail.length?'var(--accent-soft);color:var(--accent-ink)':'var(--positive-soft);color:var(--positive-ink)')+';margin-top:14px"><span class="spark-dot"></span><span>'+(fail.length?'<b>'+fail.length+'</b> project'+(fail.length>1?'s are':' is')+' in <b>System Failure</b> (low quality, high debt): '+fail.map(p=>p.id).join(", ")+'. Prioritise refactoring + quality recovery.':'No projects in System Failure. Watch any in Hidden Risk for rising technical debt.')+'</span></div>';
 return '<div class="card"><div class="card-head"><h3>Engineering Health Matrix</h3><span class="meta">EQI × TDI · '+vis.length+' projects</span></div><div class="card-pad">'+svg+ins+'</div></div>';
}

/* ---- 5. CORRECTIVE ACTIONS ---- */
function pmBuildCapa(){
 if(PM_CAPA)return PM_CAPA;
 const owners=["Khanh Minh (PMO)","Thuy Pham (PMO)","Nhung Nguyen (PMO)"];const out=[];let seq=0;
 PM_PROJECTS.forEach(p=>{KPI_DEFS.forEach(d=>{const v=d.f(p);const st=kpiStat(v,d);if(st==="Red"||(st==="Yellow"&&pmH(p.id+d.n)>0.6)){
   const type=d.pl==="Quality"?"CAPA":d.pl==="Delivery"?"Risk":"Improvement";
   out.push({id:(type==="CAPA"?"CAPA":type==="Risk"?"RISK":"IMP")+"-"+(101+seq++),proj:p.id,pname:p.name,kpi:d.n,type:type,sev:st==="Red"?"High":"Medium",owner:owners[seq%3],due:"2026-W-2"+(2+seq%4),status:st==="Red"?"In progress":"Open",prog:st==="Red"?45:15});}});});
 PM_CAPA=out.slice(0,16);return PM_CAPA;
}
function pmCapaAdvance(id){const it=pmBuildCapa().find(x=>x.id===id);if(!it)return;if(it.status==="Open"){it.status="In progress";it.prog=Math.max(it.prog,40);}else if(it.status==="In progress"){it.status="Done";it.prog=100;}audit("Corrective action updated",it.pname,it.kpi+" → "+it.status);renderProject("metrics");toast(it.id+" → "+it.status,"ok");}
function kpiCapa(vis){
 const vid=new Set(vis.map(p=>p.id));
 let items=pmBuildCapa().filter(c=>vid.has(c.proj));
 const types=["All","CAPA","Risk","Improvement"];
 if(kpiCapaF!=="All")items=items.filter(c=>c.type===kpiCapaF);
 const open=items.filter(c=>c.status!=="Done").length;
 const kpis='<div class="grid kpi-row mb"><div class="card kpi"><span class="lbl">Open actions</span><div class="val" style="color:var(--warning)">'+open+'</div></div><div class="card kpi"><span class="lbl">CAPA</span><div class="val">'+pmBuildCapa().filter(c=>vid.has(c.proj)&&c.type==="CAPA").length+'</div></div><div class="card kpi"><span class="lbl">Risks</span><div class="val" style="color:var(--accent)">'+pmBuildCapa().filter(c=>vid.has(c.proj)&&c.type==="Risk").length+'</div></div><div class="card kpi"><span class="lbl">Improvements</span><div class="val">'+pmBuildCapa().filter(c=>vid.has(c.proj)&&c.type==="Improvement").length+'</div></div></div>';
 const filt='<div class="dash-filters"><div class="df-left"><div class="seg lc-seg">'+types.map(t=>'<button class="'+(kpiCapaF===t?'on':'')+'" data-capaf="'+t+'">'+t+'</button>').join('')+'</div></div></div>';
 const stPill=s=>'<span class="status-pill '+(s==="Done"?"cst-hired":s==="In progress"?"cst-interview":"cst-hold")+'">'+s+'</span>';
 const rows=items.map(c=>'<tr><td class="mono small">'+c.id+'</td><td><span class="tag" style="background:var(--'+(c.type==="Risk"?"accent":c.type==="CAPA"?"warning":"info")+'-soft);color:var(--'+(c.type==="Risk"?"accent":c.type==="CAPA"?"warning":"info")+'-ink)">'+c.type+'</span></td><td><div style="font-weight:600;font-size:12.5px">'+c.kpi+'</div><div class="small muted">'+c.pname+'</div></td><td><span class="status-pill" style="background:var(--'+(c.sev==="High"?"accent":"warning")+'-soft);color:var(--'+(c.sev==="High"?"accent":"warning")+'-ink)">'+c.sev+'</span></td><td class="small">'+c.owner+'</td><td class="mono small">'+c.due+'</td><td style="min-width:120px"><div class="flex center gap">'+lcProgress(c.prog,c.prog>=100?"positive":"primary")+'<span class="mono small">'+c.prog+'%</span></div></td><td>'+stPill(c.status)+'</td><td>'+(c.status!=="Done"?'<button class="btn btn-ghost" data-capaadv="'+c.id+'" style="height:26px;font-size:11px">Advance</button>':'')+'</td></tr>').join('')||'<tr><td colspan="9" class="empty" style="padding:24px">No corrective actions in scope.</td></tr>';
 return kpis+filt+'<div class="card"><div class="card-head"><h3>Corrective action register</h3><span class="meta">CAPA · Risk Mitigation · Improvement</span></div><div class="tbl-wrap"><table><thead><tr><th>ID</th><th>Type</th><th>KPI / Project</th><th>Severity</th><th>Owner</th><th>Due</th><th>Progress</th><th>Status</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div></div>';
}

/* ---- 6. PREDICTIVE ANALYTICS ---- */
function kpiPredict(scope){
 const ohs=ohsOf(pillarScores(scope));const rag=ohsRag(ohs);const single=scope.length===1?scope[0]:null;
 const dir=rag==="Red"?-1:rag==="Yellow"?0:1;
 const fc=[ohs,ohs+dir*2-1,ohs+dir*3,ohs+dir*4-1,ohs+dir*5,ohs+dir*6].map(v=>Math.max(20,Math.min(98,Math.round(v))));
 const conf=rag==="Green"?86:rag==="Yellow"?72:64;
 const fcCard='<div class="card mb"><div class="card-head"><h3>OHS forecast</h3><span class="meta">next 6 months · confidence '+conf+'%</span></div><div class="card-pad">'+repLineSVG([{name:"Forecast",color:ohsCol(fc[fc.length-1]),dash:true,values:fc}],["Jul","Aug","Sep","Oct","Nov","Dec"])+'<div class="rep-insight" style="background:var(--'+kpiTone(ohsRag(fc[fc.length-1]))+'-soft);color:var(--'+kpiTone(ohsRag(fc[fc.length-1]))+'-ink);margin-top:6px"><span class="spark-dot"></span><span>Projected OHS reaches <b>'+fc[fc.length-1]+'</b> ('+{Green:"Healthy",Yellow:"At risk",Red:"Critical"}[ohsRag(fc[fc.length-1])]+') by December at current trajectory.</span></div></div>';
 const sc=pillarScores(scope);
 const risks=[["Delivery risk",Math.max(8,100-sc.Delivery),"accent"],["Margin risk",Math.max(8,100-sc.Cost),"warning"],["Quality risk",Math.max(8,100-sc.Quality),"accent"]];
 const riskCard='<div class="card mb"><div class="card-head"><h3>Risk forecast</h3><span class="meta">probability of breach · 90 days</span></div><div class="card-pad">'+risks.map(r=>'<div class="lt-row"><div class="lt-label" style="width:120px"><div class="lt-stage">'+r[0]+'</div></div><div class="lt-track"><div class="lt-fill" style="width:'+r[1]+'%;background:var(--'+r[2]+')"></div></div><div class="lt-days mono">'+r[1]+'%</div></div>').join('')+'</div></div>';
 const recs=[];
 if(sc.Quality<75)recs.push({sev:"crit",t:"Stabilise quality before next release",b:"Quality pillar at "+sc.Quality+"%. Add regression coverage and a defect-triage gate.",conf:82});
 if(sc.Delivery<75)recs.push({sev:"warn",t:"Re-baseline the delivery plan",b:"Delivery at "+sc.Delivery+"%. Use 3-point estimation and cut WIP to lift predictability.",conf:77});
 if(sc.Cost<78)recs.push({sev:"warn",t:"Rebalance capacity",b:"Cost pillar at "+sc.Cost+"%. Review billable allocation and over-utilization.",conf:74});
 if(!recs.length)recs.push({sev:"pos",t:"Hold the current operating model",b:"All pillars healthy. Keep cadence and monitor leading indicators.",conf:88});
 const dot={crit:"var(--accent)",warn:"var(--warning)",pos:"var(--positive)"};const cls={crit:"crit",warn:"warn",pos:"pos"};
 const recCard='<div class="ai-hero"><div class="ai-hero-h"><div class="ai-hero-title"><div class="agent-spark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2z"/></svg></div><div><div class="ai-hero-t">AI recommendations</div><div class="ai-hero-s">Prioritised by forecast impact</div></div></div></div><div class="ai-cards ai-cards-rich">'+recs.map(r=>'<div class="ai-card '+cls[r.sev]+'"><div class="ai-h"><span class="ai-dot" style="background:'+dot[r.sev]+'"></span>'+(r.sev==="crit"?"CRITICAL":r.sev==="warn"?"RECOMMENDED":"POSITIVE")+'</div><div class="ai-title">'+r.t+'</div><div class="ai-desc">'+r.b+'</div><div class="ai-conf"><span class="ai-mini">Confidence</span><div class="ai-conf-bar"><div class="ai-conf-fill" style="width:'+r.conf+'%;background:'+dot[r.sev]+'"></div></div><span class="ai-conf-n mono">'+r.conf+'</span></div></div>').join('')+'</div></div>';
 return fcCard+riskCard+recCard;
}


/* =====================================================================
   ███  SUPER CENTURY AI  ███  — unified chat across the 4 domain agents
   ===================================================================== */
let SCA_MSGS=[]; let SCA_THINKING=false; let SCA_INPUT="";
const SCA_AGENTS=[
 {k:'people',name:'People Agent',ic:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/>',color:'#0047FF',desc:'Headcount, utilization, attrition, skills & workforce health'},
 {k:'hiring',name:'Hiring Agent',ic:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',color:'#1f8a5b',desc:'Open positions, candidates, interviews & offers'},
 {k:'pm',name:'PM Agent',ic:'<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="6"/><rect x="12" y="7" width="3" height="10"/><rect x="17" y="13" width="3" height="4"/>',color:'#b86e00',desc:'Portfolio health, RA, KPIs & project risks'},
 {k:'lifecycle',name:'Lifecycle Agent',ic:'<path d="M22 11V9a2 2 0 0 0-2-2h-6l-2-3H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7"/><path d="M16 19l2 2 4-4"/>',color:'#7c4dff',desc:'Onboarding, probation, movement & offboarding'}
];
function scaAgent(k){return SCA_AGENTS.find(a=>a.k===k);}
const SCA_PROMPTS={
 people:["How many employees do we have?","What's our attrition rate?","Where are the biggest skill gaps?","Are we over or under utilized?"],
 hiring:["How many open positions?","How's the candidate pipeline?","Which interviews are this week?","What's our offer acceptance rate?"],
 pm:["Which projects are at risk?","What's the portfolio health?","What's our billable rate?","Which projects are understaffed?"],
 lifecycle:["Who is onboarding right now?","Any probation decisions due?","What's in offboarding?","Show pending promotions & transfers"]
};
function scaCard(label,val,tone){return '<span class="sca-chip"><span class="sca-chip-v" style="color:'+(tone||'var(--ink)')+'">'+val+'</span>'+label+'</span>';}
/* ---- intent engine: returns {agent, html} ---- */
function scaAnswer(qRaw){
 const q=(qRaw||'').toLowerCase();
 const has=(...ws)=>ws.some(w=>q.indexOf(w)>=0);
 /* ---------- PEOPLE ---------- */
 if(has('how many employee','headcount','total employee','total staff','how many people','company size')){
   return {agent:'people',html:'We currently have <b>'+WF.total+'</b> employees, <b>'+WF.active+'</b> active ('+Math.round(WF.active/WF.total*100)+'%) and '+WF.onLeave+' on leave or notice. Headcount is up <b>'+WF.totalDelta+'%</b> month-over-month.<div class="sca-chips">'+scaCard('total',WF.total)+scaCard('active',WF.active,'var(--positive-ink)')+scaCard('on leave/notice',WF.onLeave,'var(--warning-ink)')+'</div>'};
 }
 if(has('attrition','turnover','leaving','leaver','quit','resign')){
   return {agent:'people',html:'Attrition is <b>'+WF.attrition+'%</b>, down from '+WF.spk.attr[0]+'% a year ago. The hotspot is <b>Veritone</b> (delivery) at '+WF.turnover[0].r+'% and rising <b>voluntary exits in Middle QA</b>. Top exit reason is <b>career growth</b>, not pay.<div class="sca-chips">'+scaCard('attrition',WF.attrition+'%','var(--positive-ink)')+scaCard('highest team',WF.turnover[0].d)+'</div>'};
 }
 if(has('utiliz','bench','idle','billable')){
   const bill=WF.alloc.reduce((s,d)=>s+d.billable,0);
   return {agent:'people',html:'Utilization is <b>'+WF.util+'%</b> against an '+WF.utilTarget+'% target ('+(WF.utilTarget-WF.util)+' below). <b>'+WF.bench+'</b> people are idle and '+bill+' are billable. The idle pool sits mostly in QA & Engineering — staff them before opening new hires.<div class="sca-chips">'+scaCard('utilization',WF.util+'%','var(--warning-ink)')+scaCard('idle',WF.bench,'var(--warning-ink)')+scaCard('billable',bill,'var(--positive-ink)')+'</div>'};
 }
 if(has('skill gap','skills','skill','capacity risk','ai/ml','ai / ml')){
   const g=WF.skillGap.slice().sort((a,b)=>(a.cur/a.req)-(b.cur/b.req))[0];
   return {agent:'people',html:'The biggest skill gap is <b>'+g.s+'</b> — only '+g.cur+' people against a need of '+g.req+' ('+Math.round(g.cur/g.req*100)+'% coverage). <b>Java</b> is also short ~12 people. These two constrain delivery first.<div class="sca-chips">'+WF.skillGap.map(s=>scaCard(s.s,Math.round(s.cur/s.req*100)+'%',s.cur/s.req<0.6?'var(--accent-ink)':'var(--ink)')).join('')+'</div>'};
 }
 if(has('seniority','junior','senior mix','experience mix')){
   const sr=WF.seniority[3].n+WF.seniority[4].n+WF.seniority[5].n;
   return {agent:'people',html:'The team is junior-heavy: only <b>'+Math.round(sr/WF.total*100)+'%</b> are Senior or above. Mentoring and code-review capacity are the constraint — protect senior review time and accelerate Middle→Senior promotions.<div class="sca-chips">'+WF.seniority.map(s=>scaCard(s.l,s.n)).join('')+'</div>'};
 }
 if(has('workforce health','people health','hr health')){
   return {agent:'people',html:'Workforce health is <b>'+WF.health+'/100</b> (Healthy), up from '+WF.spk.health[0]+'. Watch items: rising QA attrition and the AI/ML skill gap.'};
 }
 if(has('forecast','headcount plan','enough people','staff the next','capacity forecast')){
   const dec=WF.forecast[WF.forecast.length-1];
   return {agent:'people',html:'At today\u2019s hiring pace we\u2019ll be short <b>'+(dec.demand-dec.fc)+' people by Q4</b> against demand. Hiring velocity needs to rise ~30% or lower-priority scope slips.<div class="sca-chips">'+scaCard('Q4 demand',dec.demand)+scaCard('forecast',dec.fc)+scaCard('gap','-'+(dec.demand-dec.fc),'var(--accent-ink)')+'</div>'};
 }
 /* ---------- HIRING ---------- */
 if(has('open position','requisition','open role','open req','vacanc','how many position')){
   const open=REQS.filter(r=>r.status!=='Filled');
   return {agent:'hiring',html:'There are <b>'+open.length+'</b> open positions. The oldest and at-risk ones need attention on sourcing. Demand is up ~28% MoM.<div class="sca-chips">'+scaCard('open',open.length,'var(--warning-ink)')+'</div>'};
 }
 if(has('pipeline','candidate','how many applicant','applicants')){
   const st=s=>CANDIDATES.filter(c=>c.status===s).length;
   return {agent:'hiring',html:'Pipeline now: <b>'+st('New')+'</b> new, <b>'+st('Screening')+'</b> screening, <b>'+st('Interview')+'</b> interviewing, <b>'+st('Offer')+'</b> in offer, <b>'+st('Hired')+'</b> hired. The tightest gate is Screening→Interview.<div class="sca-chips">'+['New','Screening','Interview','Offer','Hired'].map(s=>scaCard(s,st(s))).join('')+'</div>'};
 }
 if(has('interview')){
   const sched=INTERVIEWS.filter(i=>i.status==='Scheduled');const wk=sched.filter(i=>i.date>='2026-06-09'&&i.date<='2026-06-16');
   return {agent:'hiring',html:'<b>'+sched.length+'</b> interviews are scheduled, <b>'+wk.length+'</b> this week. Completed interviews now capture a result, rating and feedback that rolls up to the candidate.<div class="sca-chips">'+scaCard('scheduled',sched.length)+scaCard('this week',wk.length,'var(--warning-ink)')+'</div>'};
 }
 if(has('offer','acceptance')){
   const oe=(typeof OFFER_STATS!=='undefined')?OFFER_STATS:{extended:12,accepted:9};
   return {agent:'hiring',html:'Offer acceptance is <b>'+Math.round(oe.accepted/oe.extended*100)+'%</b> ('+oe.accepted+' of '+oe.extended+' accepted).'};
 }
 if(has('time to hire','leadtime','lead time','how long to hire','time-to-hire')){
   const ttfs=HIRE_HISTORY.map(h=>Math.round((new Date(h.approved)-new Date(h.created))/864e5));
   const avg=Math.round(ttfs.reduce((a,b)=>a+b,0)/ttfs.length);
   return {agent:'hiring',html:'Average time-to-hire is <b>'+avg+' days</b> against a 30-day goal. The slowest step is Interview→Offer — usually panel scheduling.'};
 }
 if(has('recruiter','best source','source quality','channel')){
   return {agent:'hiring',html:'Referrals are the best-value channel \u2014 most hires from the fewest applicants. The strongest recruiter this quarter leads on hires and on-time rate. (See Hiring \u2192 Reports for the full leaderboard.)'};
 }
 /* ---------- PM ---------- */
 if(has('project at risk','at risk','red project','critical project','which project','project health','portfolio')){
   const red=PM_PROJECTS.filter(p=>p.rag==='Red'),yel=PM_PROJECTS.filter(p=>p.rag==='Yellow');
   return {agent:'pm',html:'Portfolio: <b>'+red.length+' critical</b> and <b>'+yel.length+' at-risk</b> projects of '+PM_PROJECTS.length+'. Critical: '+(red.slice(0,4).map(p=>p.name).join(', ')||'none')+'.<div class="sca-chips">'+scaCard('critical',red.length,'var(--accent-ink)')+scaCard('at risk',yel.length,'var(--warning-ink)')+scaCard('healthy',PM_PROJECTS.length-red.length-yel.length,'var(--positive-ink)')+'</div>'};
 }
 if(has('billable rate','ra ','resourcing','resource alloc','utilization rate')){
   const mm=RA_PEOPLE.reduce((s,p)=>s+raMM(p),0),bmm=RA_PEOPLE.reduce((s,p)=>s+raBillMM(p),0);
   return {agent:'pm',html:'Portfolio billable rate is <b>'+Math.round(bmm/mm*100)+'%</b> (target \u2265 80%). RA Monitoring lets each PM staff people and set monthly effort.<div class="sca-chips">'+scaCard('billable rate',Math.round(bmm/mm*100)+'%','var(--positive-ink)')+'</div>'};
 }
 if(has('kpi','ohs','health score','predictability')){
   const sc=pillarScores(PM_PROJECTS),ohs=ohsOf(sc);
   return {agent:'pm',html:'Portfolio Operational Health Score is <b>'+ohs+'/100</b>. Weakest pillar: <b>'+Object.keys(sc).sort((a,b)=>sc[a]-sc[b])[0]+'</b>.<div class="sca-chips">'+['Quality','Cost','Delivery','Process'].map(p=>scaCard(p,sc[p])).join('')+'</div>'};
 }
 if(has('understaffed','need people','staffing gap','short staffed')){
   const u=PM_PROJECTS.filter(p=>p.plan>p.staff);
   return {agent:'pm',html:'<b>'+u.length+'</b> projects are understaffed (plan > staffed): '+u.slice(0,5).map(p=>p.name+' ('+p.staff+'/'+p.plan+')').join(', ')+'. A backfill requisition can be raised from RA Monitoring.'};
 }
 /* ---------- LIFECYCLE ---------- */
 if(has('onboarding','new joiner','new hire','preboarding')){
   const ob=LC_CASES.filter(c=>c.stage==='Onboarding'||c.stage==='Preboarding');
   return {agent:'lifecycle',html:'<b>'+ob.length+'</b> people are onboarding. '+ob.filter(c=>c.health==='Blocked').length+' are blocked (IT/access). Day-7 and Day-30 audits are tracked per joiner.<div class="sca-chips">'+ob.slice(0,4).map(c=>scaCard(lcPerson(c).name,c.progress+'%')).join('')+'</div>'};
 }
 if(has('probation','confirmation','confirm employee')){
   const pr=LC_CASES.filter(c=>c.stage==='Probation');const due=pr.filter(c=>lcDays(c.nextDate)<=14);
   return {agent:'lifecycle',html:'<b>'+pr.length+'</b> people are in probation; <b>'+due.length+'</b> confirmation decision(s) due within 14 days. High-risk cases are flagged for Pass / Extend / Fail.<div class="sca-chips">'+pr.map(c=>scaCard(lcPerson(c).name,(c.prob?c.prob.risk:0)+' risk',(c.prob&&c.prob.risk>=60)?'var(--accent-ink)':'var(--ink)')).join('')+'</div>'};
 }
 if(has('offboarding','exit','last working','clearance')){
   const off=LC_CASES.filter(c=>c.stage==='Offboarding');
   return {agent:'lifecycle',html:'<b>'+off.length+'</b> people are offboarding. '+off.filter(c=>c.health==='Overdue').length+' overdue on clearance. The 7-stage exit workflow tracks asset return, access revocation and final clearance.<div class="sca-chips">'+off.map(c=>scaCard(lcPerson(c).name,c.off?c.off.type:'')).join('')+'</div>'};
 }
 if(has('promotion','transfer','movement','salary change','salary adjust')){
   const pend=LC_MOVES.filter(m=>m.steps.some(s=>s.st!=='done'));
   return {agent:'lifecycle',html:'<b>'+pend.length+'</b> movement requests are in flight: '+LC_MOVES.filter(m=>m.type==='Promotion').length+' promotions, '+LC_MOVES.filter(m=>m.type==='Transfer').length+' transfers, '+LC_MOVES.filter(m=>m.type==='Salary').length+' salary changes \u2014 each routed through approvals.<div class="sca-chips">'+pend.slice(0,4).map(m=>scaCard(lcPerson(m).name,m.type)).join('')+'</div>'};
 }
 if(has('blocker','attention','what needs','urgent','risk')){
   const at=(typeof lcAttention==='function')?lcAttention():[];
   return {agent:'lifecycle',html:'There are <b>'+at.length+'</b> lifecycle items needing attention (blockers, overdue tasks, pending approvals). Top: '+(at[0]?at[0].txt.replace(/<[^>]+>/g,''):'all clear')+'.'};
 }
 /* ---------- fallback ---------- */
 return {agent:null,html:'I can answer across four agents \u2014 try one of these:<div class="sca-suggest">'+SCA_AGENTS.map(a=>'<div class="sca-sugg-group"><div class="sca-sugg-h" style="color:'+a.color+'">'+a.name+'</div>'+SCA_PROMPTS[a.k].slice(0,2).map(p=>'<button class="sca-sugg" data-scasend="'+p.replace(/"/g,'&quot;')+'">'+p+'</button>').join('')+'</div>').join('')+'</div>'};
}
function scaSend(text){
 const t=(text||'').trim();if(!t)return;
 SCA_MSGS.push({role:'user',text:t});SCA_INPUT="";SCA_THINKING=true;renderAI();
 const ans=scaAnswer(t);
 setTimeout(()=>{SCA_THINKING=false;SCA_MSGS.push({role:'agent',agent:ans.agent,html:ans.html});renderAI();},620);
}
function renderAI(){
 const box=document.getElementById('content');if(!box)return;
 const hero='<div class="sca-hero"><div class="sca-spark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 14l.8 2.2 2.2.8-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z"/></svg></div><div><div class="sca-h1">Super Century AI</div><div class="sca-sub">Ask anything across People, Hiring, Project &amp; Lifecycle — one assistant, four agents.</div></div></div>';
 const agentCards='<div class="sca-agents">'+SCA_AGENTS.map(a=>'<div class="sca-acard"><div class="sca-aic" style="--ac:'+a.color+'">'+icon(a.ic)+'</div><div class="sca-an">'+a.name+'</div><div class="sca-ad">'+a.desc+'</div></div>').join('')+'</div>';
 let thread;
 if(!SCA_MSGS.length){
   thread='<div class="sca-empty">'+agentCards+'<div class="sca-starter"><div class="sca-starter-h">Try asking</div><div class="sca-starter-grid">'+SCA_AGENTS.map(a=>SCA_PROMPTS[a.k].slice(0,2).map(p=>'<button class="sca-sugg" data-scasend="'+p.replace(/"/g,'&quot;')+'"><span class="sca-sugg-dot" style="background:'+a.color+'"></span>'+p+'</button>').join('')).join('')+'</div></div></div>';
 } else {
   thread='<div class="sca-thread" id="scaThread">'+SCA_MSGS.map(m=>{
     if(m.role==='user')return '<div class="sca-msg user"><div class="sca-bub user">'+m.text+'</div></div>';
     const ag=m.agent?scaAgent(m.agent):null;
     const tag=ag?'<span class="sca-src" style="--ac:'+ag.color+'">'+icon(ag.ic)+ag.name+'</span>':'<span class="sca-src" style="--ac:#8b5cf6">'+icon('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10z"/>')+'Super Century AI</span>';
     return '<div class="sca-msg agent"><div class="sca-bub agent">'+tag+'<div class="sca-body">'+m.html+'</div></div></div>';
   }).join('')+(SCA_THINKING?'<div class="sca-msg agent"><div class="sca-bub agent"><div class="sca-think"><span></span><span></span><span></span></div></div></div>':'')+'</div>';
 }
 const composer='<div class="sca-composer"><input id="scaInput" placeholder="Ask Super Century AI\u2026" value="'+SCA_INPUT.replace(/"/g,'&quot;')+'" autocomplete="off"><button class="sca-send" id="scaSendBtn">'+icon('<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>')+'</button></div><div class="sca-hint">Answers read live in-memory data \u00b7 this is a prototype assistant</div>';
 box.innerHTML='<div class="sca-wrap">'+hero+'<div class="sca-stage">'+thread+'</div>'+composer+'</div>';
 const inp=document.getElementById('scaInput');
 if(inp){inp.oninput=()=>{SCA_INPUT=inp.value;};inp.onkeydown=e=>{if(e.key==='Enter'){scaSend(inp.value);}};}
 const sb=document.getElementById('scaSendBtn');if(sb)sb.onclick=()=>scaSend((document.getElementById('scaInput')||{}).value);
 box.querySelectorAll('[data-scasend]').forEach(b=>b.onclick=()=>scaSend(b.dataset.scasend));
 const th=document.getElementById('scaThread');if(th)th.scrollTop=th.scrollHeight;
 if(inp&&SCA_MSGS.length)inp.focus();
}

/* ---- KNOWLEDGE BASE — interview-quality analysis + improvement plans ---- */
var KB_THEMES=[
 {label:'Kubernetes & infra depth',tags:['k8s-depth','incident-response'],action:'Add a hands-on Kubernetes + incident-response scenario with a written scoring rubric to the DevOps / Platform technical round.',owner:'TA Lead + Eng Manager',pri:'High'},
 {label:'Concurrency under live pressure',tags:['concurrency','live-coding'],action:'Replace timed live-coding with a short take-home plus a design walkthrough \u2014 measures concurrency reasoning without test-anxiety bias.',owner:'Eng Interview Panel',pri:'High'},
 {label:'Compensation misalignment',tags:['comp-misalignment'],action:'Confirm compensation expectations against the salary band during screening, before booking the final round.',owner:'Recruiter / TA',pri:'Medium'},
 {label:'CI/CD & test strategy',tags:['ci-cd','test-strategy'],action:'Add a structured test-strategy prompt (flake reduction, pipeline gates) to the QA technical screen.',owner:'QA Lead',pri:'Medium'},
 {label:'System-design rigor',tags:['system-design'],action:'Standardize a system-design rubric (scalability, trade-offs, data modeling) and calibrate panel scoring quarterly.',owner:'Principal Engineer',pri:'Medium'}
];
function kbProPill(p){var c=p==='High'?'accent':p==='Medium'?'warning':'info';return '<span class="status-pill" style="background:var(--'+c+'-soft);color:var(--'+c+'-ink)">'+p+'</span>';}
function renderKnowledgeBase(box){
 var ST=(typeof CASE_STUDIES!=='undefined')?CASE_STUDIES:[];
 var pass=ST.filter(function(c){return c.result==='pass';}),fail=ST.filter(function(c){return c.result==='fail';});
 var total=ST.length||1;var passRate=Math.round(pass.length/total*100);
 var rounds=[...new Set(ST.map(function(c){return c.round;}))];
 var byRound=rounds.map(function(r){var inR=ST.filter(function(c){return c.round===r;});var p=inR.filter(function(c){return c.result==='pass';}).length;return {r:r,n:inR.length,p:p,rate:Math.round(p/inR.length*100)};}).sort(function(a,b){return a.rate-b.rate;});
 var themes=KB_THEMES.map(function(t){var cases=fail.filter(function(c){return (c.tags||[]).some(function(tg){return t.tags.indexOf(tg)>=0;});});return Object.assign({},t,{cases:cases,n:cases.length});}).filter(function(t){return t.n>0;}).sort(function(a,b){return b.n-a.n;});
 var topTheme=themes[0];
 var sig={};pass.forEach(function(c){(c.tags||[]).forEach(function(t){sig[t]=(sig[t]||0)+1;});});
 var sigArr=Object.keys(sig).map(function(k){return {t:k,n:sig[k]};}).sort(function(a,b){return b.n-a.n;});
 var maxSig=Math.max.apply(0,sigArr.map(function(s){return s.n;}).concat([1]));
 var hist=(typeof HIRE_HISTORY!=='undefined')?HIRE_HISTORY.map(function(h){return {pos:h.pos,acc:accName(h.acc),lt:Math.round((new Date(h.approved)-new Date(h.created))/864e5)};}).sort(function(a,b){return b.lt-a.lt;}):[];
 var avgLt=hist.length?Math.round(hist.reduce(function(s,h){return s+h.lt;},0)/hist.length):0;
 var hardRole=hist[0];
 var verdict=passRate>=55?{w:'healthy',c:'positive'}:passRate>=40?{w:'mixed',c:'warning'}:{w:'inefficient',c:'accent'};
 var sig1=sigArr[0]?sigArr[0].t.replace(/-/g,' '):'portfolio depth';
 var sig2top=sigArr.slice(0,2).map(function(s){return s.t.replace(/-/g,' ');}).join('</b> and <b>')||'portfolio depth';
 var exec='<div class="card mb"><div class="card-head"><div class="flex center gap">'+icon('<path d="M12 3l1.7 4.8L18.5 9l-4.8 1.2L12 15l-1.7-4.8L5.5 9l4.8-1.2z"/>')+'<h3>Executive read</h3></div><span class="meta">'+ST.length+' final-stage candidates analyzed</span></div><div class="card-pad"><p class="kb-exec">Final-round conversion is <b>'+passRate+'%</b> \u2014 a <b style="color:var(--'+verdict.c+'-ink)">'+verdict.w+'</b> signal. '
  +(topTheme?'Failures are <b>not random</b>: <b>'+topTheme.n+' of '+fail.length+'</b> rejected candidates fail on <b>'+topTheme.label.toLowerCase()+'</b> \u2014 a <b>process gap, not a sourcing gap</b>. We lose otherwise-qualified people late and burn panel time. ':'')
  +'The clearest predictors of a hire are <b>'+sig2top+'</b> \u2014 screen for these earlier. Average time-to-hire is <b>'+avgLt+' days</b>'+(hardRole?', dragged by <b>'+hardRole.pos+'</b> at '+hardRole.lt+' days':'')+'. <b>Bottom line:</b> fix the '+(themes.length||1)+' interview-process gaps below and pass-rate rises without spending more on sourcing.</p>'
  +'<div class="kb-execrow">'+[['Final pass rate',passRate+'%',verdict.c],['Rejected, analyzed',fail.length,'muted'],['Systemic gaps',themes.length,themes.length>1?'accent':'warning'],['Avg time-to-hire',avgLt+'d','warning']].map(function(k){return '<div class="kb-execk"><div class="kb-execv" style="color:var(--'+(k[2]==='muted'?'ink':k[2]+'-ink')+')">'+k[1]+'</div><div class="kb-execl">'+k[0]+'</div></div>';}).join('')+'</div></div></div>';
 var roundCard='<div class="card"><div class="card-head"><h3>Where candidates fail \u2014 by round</h3><span class="meta">pass rate per interview stage</span></div><div class="card-pad">'
  +byRound.map(function(r){var c=r.rate>=60?'positive':r.rate>=40?'warning':'accent';return '<div class="lt-row"><div class="lt-label" style="width:140px"><div class="lt-stage">'+r.r+' round</div><div class="small muted">'+r.p+'/'+r.n+' passed</div></div><div class="lt-track"><div class="lt-fill" style="width:'+Math.max(4,r.rate)+'%;background:var(--'+c+')"></div></div><div class="lt-days mono" style="color:var(--'+c+'-ink)">'+r.rate+'%</div></div>';}).join('')
  +'<div class="rep-insight" style="background:var(--accent-soft);color:var(--accent-ink)"><span class="spark-dot"></span><span>The <b>'+byRound[0].r+'</b> round is the harshest filter at <b>'+byRound[0].rate+'%</b> \u2014 confirm this is real signal, not an over-tough or mis-calibrated panel.</span></div></div></div>';
 var sigCard='<div class="card"><div class="card-head"><h3>What winning candidates share</h3><span class="meta">source &amp; screen for these</span></div><div class="card-pad">'
  +sigArr.map(function(s){return '<div class="lt-row"><div class="lt-label" style="width:150px"><div class="lt-stage">'+s.t.replace(/-/g,' ')+'</div></div><div class="lt-track"><div class="lt-fill" style="width:'+Math.round(s.n/maxSig*100)+'%;background:var(--positive)"></div></div><div class="lt-days mono">'+s.n+'</div></div>';}).join('')
  +'<div class="rep-insight" style="background:var(--positive-soft);color:var(--positive-ink)"><span class="spark-dot"></span><span>Add an explicit screening check for <b>'+sig1+'</b> at CV / phone stage \u2014 the clearest hire predictor and cheap to verify early.</span></div></div></div>';
 var effRow='<div class="grid cols-2" style="align-items:start">'+roundCard+sigCard+'</div>';
 var failCard='<div class="card"><div class="card-head"><h3>Failure patterns \u2014 root causes</h3><span class="meta">'+fail.length+' rejected candidates clustered by cause</span></div><div class="card-pad"><div class="kb-themes">'
  +themes.map(function(t){return '<div class="kb-theme"><div class="kb-theme-h"><span class="kb-theme-n">'+t.n+'</span><div><div class="kb-theme-t">'+t.label+'</div><div class="small muted">'+Math.round(t.n/fail.length*100)+'% of rejections</div></div></div><div class="kb-theme-who">'+t.cases.map(function(c){return '<span class="kb-who">'+c.name+' \u00b7 '+c.role+'</span>';}).join('')+'</div></div>';}).join('')
  +'</div></div></div>';
 var planCard='<div class="card"><div class="card-head"><div class="flex center gap">'+icon('<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>')+'<h3>Improvement plan</h3></div><span class="meta">owned, prioritized actions from the patterns above</span></div><div class="card-pad"><div class="kb-plans">'
  +themes.map(function(t,ix){return '<div class="kb-plan"><div class="kb-plan-no">'+(ix+1)+'</div><div class="kb-plan-b"><div class="kb-plan-top"><div class="kb-plan-t">'+t.label+'</div>'+kbProPill(t.pri)+'</div><div class="kb-plan-ev">Evidence: <b>'+t.n+' of '+fail.length+'</b> rejections ('+Math.round(t.n/fail.length*100)+'%) cite this.</div><div class="kb-plan-a">'+icon('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>')+'<span>'+t.action+'</span></div><div class="kb-plan-owner">Owner: <b>'+t.owner+'</b></div></div></div>';}).join('')
  +(themes.length?'':'<div class="lc-empty small muted" style="padding:14px">No systemic failure themes \u2014 interview quality is healthy.</div>')+'</div></div></div>';
 var hardCard='<div class="card"><div class="card-head"><h3>Hardest roles to fill</h3><span class="meta">closed positions by leadtime \u00b7 avg '+avgLt+'d</span></div><div class="tbl-wrap"><table><thead><tr><th>Position</th><th>Account</th><th style="text-align:center">Leadtime</th><th>Difficulty</th></tr></thead><tbody>'
  +hist.slice(0,8).map(function(h){var hard=h.lt>40,mid=h.lt>30;return '<tr><td style="font-weight:600;font-size:12.5px">'+h.pos+'</td><td class="small muted">'+h.acc+'</td><td class="mono small" style="text-align:center;color:'+(hard?'var(--accent-ink)':mid?'var(--warning-ink)':'var(--ink-2)')+'">'+h.lt+'d</td><td>'+(hard?'<span class="status-pill cst-rejected">Hard</span>':mid?'<span class="status-pill cst-interview">Moderate</span>':'<span class="status-pill cst-hired">Easy</span>')+'</td></tr>';}).join('')
  +'</tbody></table></div></div>';
 var caseCard='<div class="card"><div class="card-head"><h3>Case study log</h3><span class="meta">the raw evidence \u2014 '+pass.length+' pass \u00b7 '+fail.length+' fail</span></div><div class="card-pad"><div class="kb-cases">'
  +ST.map(function(c){var p=c.result==='pass';return '<div class="kb-case"><div class="kb-case-h"><span class="kb-case-dot" style="background:var(--'+(p?'positive':'accent')+')"></span><b>'+c.name+'</b><span class="status-pill '+(p?'cst-hired':'cst-rejected')+'" style="margin-left:auto">'+(p?'Pass':'Fail')+'</span></div><div class="small muted" style="margin:2px 0 6px">'+c.role+' \u00b7 '+c.round+' round</div><div class="kb-case-r">'+c.reason+'</div><div class="kb-tags">'+(c.tags||[]).map(function(t){return '<span class="tag">'+t+'</span>';}).join('')+'</div></div>';}).join('')
  +'</div></div></div>';
 box.innerHTML='<div class="dash-wrap">'+exec
  +'<div class="rep-sec"><span class="rep-sec-t">Interview effectiveness</span><span class="rep-sec-m">Are our rounds measuring the right things?</span></div>'+effRow
  +'<div class="rep-sec"><span class="rep-sec-t">Failure analysis</span><span class="rep-sec-m">Why we lose candidates \u2014 and whether it is fixable</span></div>'+failCard
  +'<div class="rep-sec"><span class="rep-sec-t">What to change</span></div>'+planCard
  +'<div class="rep-sec"><span class="rep-sec-t">Evidence</span></div>'+hardCard+'<div style="height:14px"></div>'+caseCard+'</div>';
}

/* ===== PERFORMANCE (monthly, two-tier) ===== */
var PERF_SELF={};
function selfGet(id,per){return PERF_SELF[id]&&PERF_SELF[id][per||scPeriod]||null;}
function perfLeads(){return EMP.filter(function(e){return e.status!=='offboard'&&EMP.some(function(x){return x.mgr===e.id&&x.status!=='offboard';});});}
function perfMembersOf(id){return EMP.filter(function(e){return e.mgr===id&&e.status!=='offboard';});}
function perfStatus(sc){if(!sc)return ['Pending','muted'];if(!sc.ack)return ['Submitted','info'];return ['Acknowledged','positive'];}
function perfPill(s){return '<span class="status-pill" style="background:var(--'+s[1]+'-soft);color:var(--'+s[1]+'-ink)">'+s[0]+'</span>';}
function perfHead(sub){return '<div class="page-head"><div><div class="eyebrow">People \u00b7 Performance</div><h1>Performance reviews</h1><p>'+sub+'</p></div>'+scPerSel()+'</div>';}
function perfMemberRow(t,canEdit){var sc=scGet(t.id);var self=selfGet(t.id);var tot=sc?scTotal(sc.scores):null;var st=perfStatus(sc);
 return '<tr><td><div class="cellname">'+av(t.name,"width:28px;height:28px;font-size:10px")+'<div><div class="t1" style="font-size:12.5px">'+t.name+'</div><div class="t2">'+t.role+'</div></div></div></td>'
  +'<td style="text-align:center">'+(self?'<span class="status-pill cst-hired">Done</span>':'<span class="small muted">\u2014</span>')+'</td>'
  +'<td style="text-align:center;font-weight:700" class="mono">'+(tot!=null?tot.toFixed(2):'<span class="small muted">\u2014</span>')+'</td>'
  +'<td style="text-align:center">'+(tot!=null?'<span class="status-pill" style="background:var(--'+scVerdict(tot)[1]+'-soft);color:var(--'+scVerdict(tot)[1]+'-ink)">'+scVerdict(tot)[0]+'</span>':'')+'</td>'
  +'<td>'+perfPill(st)+'</td>'
  +'<td style="text-align:right">'+(canEdit?'<button class="btn btn-ghost" data-eval="'+t.id+'" style="height:28px;font-size:11px">'+(sc?'Edit':'Evaluate')+'</button>':'')+'</td></tr>';}
function perfTable(people,canEdit,emptyMsg){
 if(!people.length)return '<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<path d="M9 11l3 3L22 4"/>')+'<div><b>'+emptyMsg+'</b></div></div></div></div>';
 return '<div class="card"><div class="ctrl-table"><table><thead><tr><th>Person</th><th style="text-align:center">Self-assessment</th><th style="text-align:center">Score</th><th style="text-align:center">Verdict</th><th>Status</th><th></th></tr></thead><tbody>'+people.map(function(t){return perfMemberRow(t,canEdit);}).join('')+'</tbody></table></div></div>';}
function viewPerformance(){if(isEmployee())return perfMember();if(isManager())return perfTL();if(isAM())return perfAM();return perfAdmin();}
function perfAdmin(){
 var leads=perfLeads();
 var leadDone=leads.filter(function(l){return scGet(l.id);}).length;
 var allMembers=[];leads.forEach(function(l){allMembers=allMembers.concat(perfMembersOf(l.id));});
 var memDone=allMembers.filter(function(m){return scGet(m.id);}).length;
 var avgAll=(function(){var v=allMembers.concat(leads).map(function(p){var s=scGet(p.id);return s?scTotal(s.scores):null;}).filter(function(x){return x!=null;});return v.length?v.reduce(function(a,b){return a+b;},0)/v.length:0;})();
 var kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("Team Leads to review",leads.length,leadDone+" evaluated by PMO","primary")
  +lcKpi("Member reviews",memDone+"/"+allMembers.length,allMembers.length?Math.round(memDone/allMembers.length*100)+"% complete":"\u2014","positive")
  +lcKpi("Company avg score",avgAll?avgAll.toFixed(2):"\u2014","this period",avgAll>=4?"positive":"warning")
  +lcKpi("Cycle",scPeriod,"monthly performance","info")
  +'</div>';
 var leadTable='<div class="card mb"><div class="card-head"><h3>Evaluate Team Leads</h3><span class="meta">PMO / Admin tier \u00b7 '+scPeriod+'</span></div><div class="ctrl-table"><table><thead><tr><th>Team Lead</th><th style="text-align:center">Members</th><th style="text-align:center">Team done</th><th style="text-align:center">Lead score</th><th>Status</th><th></th></tr></thead><tbody>'
  +leads.map(function(l){var mem=perfMembersOf(l.id);var md=mem.filter(function(m){return scGet(m.id);}).length;var sc=scGet(l.id);var tot=sc?scTotal(sc.scores):null;var st=perfStatus(sc);
    return '<tr><td><div class="cellname">'+av(l.name,"width:28px;height:28px;font-size:10px")+'<div><div class="t1" style="font-size:12.5px">'+l.name+'</div><div class="t2">'+l.role+'</div></div></div></td>'
     +'<td style="text-align:center" class="mono small">'+mem.length+'</td>'
     +'<td style="text-align:center"><div class="flex center gap" style="justify-content:center">'+lcProgress(mem.length?Math.round(md/mem.length*100):0,md===mem.length?"positive":"warning")+'<span class="mono small">'+md+'/'+mem.length+'</span></div></td>'
     +'<td style="text-align:center;font-weight:700" class="mono">'+(tot!=null?tot.toFixed(2):'<span class="small muted">\u2014</span>')+'</td>'
     +'<td>'+perfPill(st)+'</td><td style="text-align:right"><button class="btn btn-ghost" data-eval="'+l.id+'" style="height:28px;font-size:11px">'+(sc?'Edit':'Evaluate')+'</button></td></tr>';}).join('')
  +'</tbody></table></div></div>';
 var matrix='<div class="card"><div class="card-head"><h3>Member review completion</h3><span class="meta">by team \u00b7 who still needs evaluating</span></div><div class="card-pad" style="display:flex;flex-direction:column;gap:12px">'
  +leads.map(function(l){var mem=perfMembersOf(l.id);if(!mem.length)return '';return '<div><div class="small" style="font-weight:600;margin-bottom:6px">'+l.name+' <span class="muted">\u00b7 '+mem.filter(function(m){return scGet(m.id);}).length+'/'+mem.length+'</span></div><div class="flex" style="flex-wrap:wrap;gap:6px">'+mem.map(function(m){var done=!!scGet(m.id);return '<span class="perf-dot '+(done?'on':'')+'" title="'+m.name+(done?' \u00b7 done':' \u00b7 pending')+'">'+initials(m.name)+'</span>';}).join('')+'</div></div>';}).join('')
  +'</div></div>';
 return '<div class="dash-wrap">'+perfHead("Monthly two-tier reviews \u2014 PMO evaluates Team Leads; Team Leads evaluate their members.")+kpis+leadTable+matrix+'</div>';
}
function perfTL(){
 var u=me();var team=perfMembersOf(u.id);
 var done=team.filter(function(t){return scGet(t.id);}).length;
 var myCard=scGet(u.id);var myTot=myCard?scTotal(myCard.scores):null;
 var avg=(function(){var v=team.map(function(t){var s=scGet(t.id);return s?scTotal(s.scores):null;}).filter(function(x){return x!=null;});return v.length?v.reduce(function(a,b){return a+b;},0)/v.length:0;})();
 var kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("My team",team.length,"to evaluate this month","primary")
  +lcKpi("Evaluated",done+"/"+team.length,team.length?Math.round(done/team.length*100)+"% done":"\u2014","positive")
  +lcKpi("Team avg",avg?avg.toFixed(2):"\u2014","this period",avg>=4?"positive":"warning")
  +lcKpi("My review (PMO)",myTot!=null?myTot.toFixed(2):"Pending",myCard?scVerdict(myTot)[0]:"awaiting",myTot!=null?(myTot>=4?"positive":"warning"):"muted")
  +'</div>';
 var myReview=myCard?'<div class="card mb"><div class="card-head"><h3>My review from PMO</h3><span class="meta">'+myCard.by+' \u00b7 '+scPeriod+'</span></div><div class="card-pad"><div class="flex center gap mb">'+perfPill(perfStatus(myCard))+'<span class="mono" style="font-size:20px;font-weight:700">'+myTot.toFixed(2)+'</span><span class="status-pill" style="background:var(--'+scVerdict(myTot)[1]+'-soft);color:var(--'+scVerdict(myTot)[1]+'-ink)">'+scVerdict(myTot)[0]+'</span></div>'+(myCard.str?'<div class="small" style="margin-bottom:6px"><b style="color:var(--positive-ink)">Strengths:</b> '+myCard.str+'</div>':'')+(myCard.imp?'<div class="small"><b style="color:var(--accent-ink)">Improve:</b> '+myCard.imp+'</div>':'')+(!myCard.ack?'<button class="btn btn-primary" data-perfack="'+u.id+'" style="height:30px;font-size:12px;margin-top:10px">Acknowledge review</button>':'<div class="small muted" style="margin-top:8px">\u2713 Acknowledged</div>')+'</div></div>':'';
 return '<div class="dash-wrap">'+perfHead("Evaluate each of your team members for "+scPeriod+", and review the feedback PMO gave you.")+kpis+myReview+perfTable(team,true,"No direct reports in your scope.")+'</div>';
}
function perfMember(){
 var u=me();var sc=scGet(u.id);var self=selfGet(u.id);var tot=sc?scTotal(sc.scores):null;
 var pillars=Object.keys(SC_PILLAR);
 var kpis='<div class="kpi-exec kpi-4 mb">'
  +lcKpi("My score",tot!=null?tot.toFixed(2):"Pending",sc?scVerdict(tot)[0]:"awaiting manager",tot!=null?(tot>=4?"positive":"warning"):"muted")
  +lcKpi("Self-assessment",self?"Done":"Not started",self?"submitted":"do it first","primary")
  +lcKpi("Status",perfStatus(sc)[0],sc?(sc.ack?"complete":"review ready"):"in progress","info")
  +lcKpi("Cycle",scPeriod,"monthly review","info")
  +'</div>';
 var selfCard='<div class="card mb"><div class="card-head"><h3>My self-assessment</h3><span class="meta">'+scPeriod+' \u00b7 rate yourself before your lead reviews</span><button class="btn '+(self?'btn-ghost':'btn-primary')+'" data-selfeval="'+u.id+'" style="height:30px;font-size:12px;margin-left:auto">'+(self?'Edit self-assessment':'Start self-assessment')+'</button></div>'+(self?'<div class="card-pad"><div class="grid" style="grid-template-columns:repeat(3,1fr);gap:10px">'+pillars.map(function(p){var m=SC_PILLAR[p];var sv=self.scores[p];return '<div class="perf-self-cell"><div class="small muted">'+m[0]+'</div><div class="mono" style="font-size:16px;font-weight:700;color:'+m[2]+'">'+(sv!=null?sv.toFixed(1):'\u2014')+'</div></div>';}).join('')+'</div>'+(self.note?'<div class="small muted" style="margin-top:10px">'+self.note+'</div>':'')+'</div>':'<div class="card-pad"><div class="small muted">You haven\u2019t self-assessed this month yet. It helps your lead calibrate.</div></div>')+'</div>';
 var reviewCard=sc?'<div class="card"><div class="card-head"><h3>My review</h3><span class="meta">'+sc.by+' \u00b7 '+scPeriod+'</span></div><div class="card-pad"><div class="flex center gap mb">'+perfPill(perfStatus(sc))+'<span class="mono" style="font-size:22px;font-weight:700">'+tot.toFixed(2)+'</span><span class="status-pill" style="background:var(--'+scVerdict(tot)[1]+'-soft);color:var(--'+scVerdict(tot)[1]+'-ink)">'+scVerdict(tot)[0]+'</span></div>'
  +'<div class="grid mb" style="grid-template-columns:repeat(3,1fr);gap:10px">'+pillars.map(function(p){var m=SC_PILLAR[p];var pv=scPillar(sc.scores,p);return '<div class="perf-self-cell"><div class="small muted">'+m[0]+'</div><div class="mono" style="font-size:15px;font-weight:700;color:'+m[2]+'">'+(pv!=null?pv.toFixed(2):'\u2014')+'</div>'+(self&&self.scores[p]!=null?'<div class="small muted" style="font-size:10px">self '+self.scores[p].toFixed(1)+'</div>':'')+'</div>';}).join('')+'</div>'
  +(sc.str?'<div class="small" style="margin-bottom:6px"><b style="color:var(--positive-ink)">Strengths:</b> '+sc.str+'</div>':'')+(sc.imp?'<div class="small" style="margin-bottom:6px"><b style="color:var(--accent-ink)">Improve:</b> '+sc.imp+'</div>':'')+(sc.act?'<div class="small"><b>Focus:</b> '+sc.act+'</div>':'')
  +(!sc.ack?'<button class="btn btn-primary" data-perfack="'+u.id+'" style="height:32px;font-size:12px;margin-top:12px">Acknowledge review</button>':'<div class="small muted" style="margin-top:10px">\u2713 You acknowledged this review</div>')+'</div></div>'
  :'<div class="card"><div class="card-pad"><div class="lc-empty">'+icon('<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>')+'<div><b>No review yet</b><div class="small muted">Your lead hasn\u2019t submitted '+scPeriod+' yet.</div></div></div></div></div>';
 return '<div class="dash-wrap">'+perfHead("Your monthly review and self-assessment.")+kpis+selfCard+reviewCard+'</div>';
}
function perfAM(){
 var accs=(typeof amAccounts==='function')?amAccounts().map(function(a){return a.id;}):[];
 var people=EMP.filter(function(e){return e.status!=='offboard'&&accs.indexOf(e.acc)>=0;});
 var done=people.filter(function(p){return scGet(p.id);}).length;
 var kpis='<div class="kpi-exec kpi-3 mb">'+lcKpi("People in your accounts",people.length,"",'primary')+lcKpi("Reviews complete",done+"/"+people.length,people.length?Math.round(done/people.length*100)+"%":"\u2014","positive")+lcKpi("Cycle",scPeriod,"read-only","info")+'</div>';
 return '<div class="dash-wrap">'+perfHead("Review completion across your accounts (read-only).")+kpis+perfTable(people,false,"No people in your accounts.")+'</div>';
}
function perfAck(id){var sc=scGet(id);if(!sc)return;sc.ack=true;sc.ackTs="2026-06-09";audit("Review acknowledged",(EMP.find(function(e){return e.id===id;})||{}).name||id,scPeriod);render("performance");toast("Review acknowledged","ok");}
function openSelfEval(id){
 var t=EMP.find(function(e){return e.id===id;});if(!t)return;var ex=selfGet(id);var pillars=Object.keys(SC_PILLAR);
 var x=icon('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>');
 var rows=pillars.map(function(p){var m=SC_PILLAR[p];var v=ex&&ex.scores[p]!=null?ex.scores[p]:'';return '<div class="ev-row"><span class="evn">'+m[0]+'</span><input class="inp" type="number" min="1" max="5" step="0.5" data-self="'+p+'" value="'+v+'" style="max-width:90px"></div>';}).join('');
 openModal('<div class="modal-h"><div><h3>Self-assessment \u00b7 '+scPeriod+'</h3><div class="small muted" style="margin-top:3px">Rate yourself 1\u20135 on each pillar \u2014 shared with your lead</div></div><button class="drawer-close" id="modalClose">'+x+'</button></div>'
  +'<div class="modal-b" id="evalForm">'+rows+'<label class="field-k" style="margin-top:12px">Notes</label><textarea class="inp" id="selfNote">'+(ex?ex.note||'':'')+'</textarea></div>'
  +'<div class="modal-f"><button class="btn btn-ghost" id="selfCancel">Cancel</button><button class="btn btn-primary" id="selfSave">Submit self-assessment</button></div>');
 var m=document.getElementById('modalWrap');m.querySelector('#modalClose').onclick=closeModal;m.querySelector('#selfCancel').onclick=closeModal;
 m.querySelector('#selfSave').onclick=function(){var sc={};m.querySelectorAll('[data-self]').forEach(function(i){if(i.value!=='')sc[i.dataset.self]=+i.value;});if(Object.keys(sc).length<pillars.length){toast("Rate all pillars","warn");return;}if(!PERF_SELF[id])PERF_SELF[id]={};PERF_SELF[id][scPeriod]={period:scPeriod,scores:sc,note:m.querySelector('#selfNote').value,ts:"2026-06-09"};audit("Self-assessment submitted",t.name,scPeriod);closeModal();render("performance");toast("Self-assessment submitted","ok");};
}

/* boot */
showModule("people");
try{renderMe();}catch(e){}
