// ─── CHANGE YOUR PASSWORD HERE ───────────────────────────
const ADMIN_PASSWORD = "shayan@admin123";
// ─────────────────────────────────────────────────────────

let allStudents = [
  { cnic:"3710120521991", name:"Mubashir Hussain", father:"Nisar khan", course:"HVAC", result:"Pass", cert:"Ready" },
  { cnic:"3110092763433", name:"Muhammad Waqas", father:"Muhammad Sadiq", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3240378107341", name:"Bilawal Hussain", father:"Bilal Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"1350114312701", name:"Hammad Abdullah", father:"Shamsul Rahman", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"6110106624199", name:"Hasnan Tariq", father:"Tariq Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"6110126141287", name:"Ubaid ullah", father:"fazal kareem", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"4240194388755", name:"Muhammad Adeel Akhter", father:"Muhammad Taj khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"4220110997115", name:"Muhammad Mujtaba Karam", father:"Karam Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"1410179983550", name:"Qasid Ali", father:"Hussain Gul", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3650227443873", name:"Ghulam Haider", father:"Muhammad Saleem Dyal", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8210209799611", name:"Muhammad hammad abbasi", father:"Muhammad abbas khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8220347472117", name:"Imran", father:"Muhammad Zafran", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8230245549085", name:"Ahmad Hassan", father:"Muhammad Iftikhar Ahmed", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8230335451683", name:"Ehtisham haleem", father:"Muhammad Haleem", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240110547841", name:"Inzamam ul Haq", father:"Sakhwat Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240135751603", name:"Faisal Hussain Shah", father:"Shaukat Hussain Shah", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240198934187", name:"Saud Ahmed", father:"Mehfooz Ahmed", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3710485117181", name:"Muhammad Waleed", father:"Aurang Zeb", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3710569728389", name:"Saleem akhtar", father:"Muhammad Tariq", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3710585897773", name:"Muhammad Junaid", father:"Muhammad Sabir", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720138322785", name:"Jawad Hassan", father:"Imdad Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720139572625", name:"Muhammad Kamran", father:"Ghulam Murtaza", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720179965137", name:"Aqib javed", father:"Javed Iqbal", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3230278367653", name:"muhammad ayoub", father:"abdul sattar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3230432765277", name:"Muhammad Waqas", father:"Ghulam Asghar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1310203966839", name:"Abdul Salam", father:"Muhammad Azam khan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1310111312857", name:"Saifullah", father:"Habib ul rehman", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1310137967885", name:"Muhammad Uzair Abbasi", father:"Muhammad Irfan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"4210179022429", name:"Amir Hussain", father:"Khalid Hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3720301632731", name:"Ameer Muhammad Khan", father:"Karram khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720337239147", name:"Muhammad Arslan", father:"Muhammad Luqman", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3730361724727", name:"Hamid Ali", father:"Tariq Mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740117032859", name:"Amman tariq", father:"Tariq Mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740139231603", name:"Shehroze Ali", father:"Raja Muhammad Razzaq", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740148967747", name:"ZAIN ABBAS BUTT", father:"Sajid Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740149133773", name:"Muhammad Nabeel", father:"Muhammad Saghir", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740154191359", name:"Iqrar Sultan", father:"Mazhar sultan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740163176763", name:"Adilsafeer", father:"Muhammad safeer", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740173541355", name:"Faisal Mehmood", father:"Zahid Mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740227333177", name:"Tariq Ayaz", father:"Muhammad Ayaz", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"6110110195911", name:"Muhammad Sami Qadir", father:"Ghulam Qadir", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"6110116890503", name:"Asad Mehmood", father:"Manzoor Hussain Mirza", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"2120299719137", name:"Muhammad Ullah", father:"Shah Mehmood", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"8120221167573", name:"Nadeem Qayyum", father:"Muhammad Qayyum", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"8220123870893", name:"Muhammad saad", father:"Sultan Tariq Mahmood", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"8220319960889", name:"Mohsin Khalil", father:"Khalil Ur Rehman", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"8220329660669", name:"Hasnain Fazal Kiani", father:"Fazal Hussain Kiani", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"8220353568575", name:"Aqib Ghafoor Qureshi", father:"Abdul Ghafoor Qureshi", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"8250103926365", name:"Waqar ul islam", father:"Muhammad Aslam", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"1330265523763", name:"Saad Fardous", father:"Muhammad Fardous", course:"Building Painting", result:"Pass", cert:"Ready" },
  { cnic:"1610171718697", name:"Shah Nawaz", father:"Ikram ullah", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1620194937929", name:"Asad Ali", father:"Riaz Ali", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3640154977827", name:"Muhammad Ammar", father:"Allah Ditta", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"8240154354315", name:"Mubashir Mehmood", father:"Mehmood Hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"8270303533825", name:"Muhammad Sabeel", father:"Safeer", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1410203789505", name:"Muhammad Shoaib", father:"Rasheed Gul", course:"Building Painting", result:"Pass", cert:"Ready" },
  { cnic:"1540247938557", name:"Muhammad Kashif", father:"Zameer Gul", course:"Building Painting", result:"Pass", cert:"Ready" },
  { cnic:"3320297134453", name:"Syed Muhammad Fakhar Abbas Shah", father:"Syed zameer ul hassan", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"7160106014527", name:"Umar Khan", father:"Abdullah Khan", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3420177749093", name:"MUHAMMAD BILAL", father:"MUHAMMAD NAZIR", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3460148014875", name:"Shahid zia", father:"Zia ullah But", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3720191922967", name:"Farhan Ahmed", father:"Hafeez Ahmed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3730248937839", name:"MUHAMMAD SALEEM", father:"Muhammad Ashraf", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3730292340289", name:"HAMID NASEER", father:"MUHASMMAD NASEER", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740234707037", name:"nouman altaf", father:"ALLTAF HUSSAIN", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740246364059", name:"Khurram Shehzad", father:"Zia UL Haq", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740286326443", name:"raheel khalid", father:"KHALID MEHMOOD", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740286420493", name:"waleed khalid", father:"khalid mehmood", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740288717621", name:"usman ali", father:"m riaz", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740291612157", name:"ifzal murataza", father:"zafzar iqbal", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740514556257", name:"haris masood", father:"Masood Akhter", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1540283065319", name:"Zeeshan Ahmed", father:"Anwar Hussain", course:"Building Painting", result:"Pass", cert:"Ready" },
  { cnic:"3720314173133", name:"MUHAMMAD HARIS NIZAM", father:"NIZAM UD DIN", course:"Building Painting", result:"Pass", cert:"Ready" },
  { cnic:"1310203748039", name:"Muhammad Haroon", father:"Muhammad safarish", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"1330282254387", name:"Muhammad Umer Altaf", father:"Naeem Altaf", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"6110129158733", name:"Umair ali", father:"Muhammad Safdar", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3130252046369", name:"MUHAMMAD AKMAL", father:"JAM NATHO", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"6110115580354", name:"Sawera Khalid", father:"Khalid masih", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"1430152965477", name:"Syed Mushahid Hussain", father:"Syed Muhammad", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3530253992065", name:"Zaim Younas", father:"Muhammad Younas", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"1530774998323", name:"Muhammad Haroon", father:"Badshah Rahman", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3650285279793", name:"Asad Ullah", father:"Hameed Ullah", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"1730160785275", name:"Muhammad Umar Farooq", father:"Muhammad Jan", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3740178071129", name:"MUHAMMAD AWAIS", father:"MUHAMMAD ISHTIAQ", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3740525143209", name:"Muhammad Husnain", father:"Sajjad Ahmed", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3740532877181", name:"Abdulrehman butt", father:"Muhammad ejaz butt", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3740562758341", name:"Muhammad Sarfraz", father:"Sajid Ur Rehman", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"3740580365359", name:"Aqib Aslam", father:"Muhammad Aslam", course:"Hotel Management", result:"Pass", cert:"Ready" },
  { cnic:"1110198543591", name:"Adnan khan", father:"Shakir ullah khan", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"6110158093771", name:"Mirza Muhammad Danish Baig", father:"Mirza Ishtiaq Baig", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"4320537392393", name:"abdul Samad soomro", father:"Nisar Ahmed", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"2130233930219", name:"Arshad Ali", father:"Muhammad Ibrahim", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"2160477340459", name:"Irshan Ali", father:"Ali Nawaz Khan", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"2260142184203", name:"Sohail Khan", father:"Kher Zaman", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"3620235915979", name:"Muhammad Zahid kanjoo", father:"Rana Rab Nawaz", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"3720185876433", name:"Umair Ahmed", father:"Arshad Mehmood", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740198362259", name:"Muhammad Waleed Kayani", father:"Tariq Mahmood Kayani", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740242070801", name:"Sheraz yousaf", father:"Muhammadyousaf", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"3840504624017", name:"Ahtisham", father:"Khadim Hussain", course:"Front Desk Officer", result:"Pass", cert:"Ready" },
  { cnic:"1610157598265", name:"Jan Sher", father:"Sartaj Ali", course:"Mason", result:"Pass", cert:"Ready" },
  { cnic:"6110151930535", name:"Sami Ur Rehman", father:"Muhammad Gulshad", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"6110158080885", name:"Muhammad Noman", father:"Muhammad Afzal", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"2110480789665", name:"Muhammad Luqman", father:"Mahmood Khan", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"8240155331923", name:"Zaryab Shahid", father:"Shahid Iqbal", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3720340930829", name:"Muhammad Shayan Malik", father:"Muhammad Riaz", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3720386268893", name:"Muhammad Naveed Akhtar", father:"Khalid Mehmood", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3730137518505", name:"MUHAMMAD ABU ABIA ZAR", father:"JAFER ILYAS", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740101263223", name:"Touseef Zahid", father:"Zahid Hussain Bhatti", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740142823007", name:"Jawad Ali", father:"Mirza Azeem", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740179273853", name:"Faizan Mehmood", father:"Khalid Mehmood", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740244803971", name:"Ehtasham Ul Haq", father:"Muhammad Arif", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740288032151", name:"Muhammad zain", father:"Allah Ditta", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740510278385", name:"Muhammad Waji Ul Hassan", father:"Kamran Siddique", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740559101815", name:"Faiz Ahmed Kayani", father:"Ibrar Ahmed kiyani", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740592344065", name:"Aqib Mehmood", father:"Waheed Mehmood Kayani", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"3740704104789", name:"Naveed Ahmed", father:"Saghir Ahmed", course:"Shuttering Carpenter", result:"Pass", cert:"Ready" },
  { cnic:"6110153152743", name:"Muhammad Naeem", father:"Maqbool Ur Rehman", course:"Steel Fixer", result:"Pass", cert:"Ready" },
  { cnic:"1730132450507", name:"Naqeeb Khan", father:"Fazal Nabi Khan", course:"Steel Fixer", result:"Pass", cert:"Ready" },
  { cnic:"3830260168285", name:"Muhammad Ibrahim", father:"Hafiz Umer Farooq", course:"Steel Fixer", result:"Pass", cert:"Ready" },
  { cnic:"3740540599109", name:"Adnan Imran", father:"Muhammad Imran", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740554251603", name:"HASSAN NAWAZ", father:"muhammad nawaz", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740560204715", name:"Muhammad Hassan", father:"Anwar Ahmed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740592945027", name:"jahanzaib hassan", father:"tanveer ahmed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740703754605", name:"usman Zafar", father:"zafar iqbal", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740703817269", name:"ali raza", father:"jamshaid akhtar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740513016719", name:"Shain shah", father:"Shah Jahan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740578991050", name:"Muhammad Hanzala Shahid", father:"Shahid Mehmood Akbar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3810310552235", name:"RASHID BASHIR", father:"BASHIR UD DIN AHMAD", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3240389828423", name:"Mazhar Abbas", father:"Malazam Hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1330248225163", name:"Saqib Abbasi", father:"Abdul hameed khan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1330303413579", name:"Nabeel Ahmed", father:"Barkhordar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"4220195429317", name:"Sohail Ahmed Qureshi", father:"Abid Hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"4220197815399", name:"Muhammad Owais Qureshi", father:"Abid hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"4230189280357", name:"Danish Makhan", father:"Makhan khan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"2140252679715", name:"Laiq Shah", father:"Moosam khan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"8120312472161", name:"aman ullah", father:"Muhammad faras khan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"8120332798363", name:"Hassan Zahoor", father:"Zahoor Ahmed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"8120501251489", name:"Teemoor Zaman", father:"Muhammad Zaman", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3720401548173", name:"Mutahir Hassan", father:"Hassan Rasheed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740265072871", name:"Muhammad Danish Zaheer", father:"Zaheer Ahmad", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740564733689", name:"Irtaza shoukat Malik", father:"Shoukat Hussain malik", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3820111903683", name:"Shabraiz Wali", father:"Wali Muhammad", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3210404283027", name:"Muhammad Abadullah", father:"Imam ud Din", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3230233735565", name:"Muhammad nadir abbas", father:"Allah bakhsh", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3320386291661", name:"Attaullah", father:"Allah Dad", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3420138684363", name:"Abu Ul Hassan", father:"Zafar Hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3420257145893", name:"Khurram Iqbal", father:"Muhammad Iqbal Javed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1330255419409", name:"Muhammad Shamim", father:"Muhammad Ishfaque", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1310153192149", name:"Muhammad Faizan", father:"zulfiqar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1340129560765", name:"Shams ur rehman", father:"Abdar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"6110163080507", name:"Zain ul Abdeen", father:"Gohar Rehman Sahi", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"6110197253347", name:"SAAD WAHEED", father:"Waheed Ahmed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1610128270751", name:"Shah Zeb", father:"Mutabar Khan", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1620303821653", name:"Ahmad nazir", father:"nazir muhammad", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"1620304301259", name:"Muhammad zaid", father:"said nawab", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"2120451459481", name:"Fida Amen", father:"Taj Akbar", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"5440019828425", name:"Qaisar Abbas", father:"Zafar Iqbal", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"5440079308797", name:"Sanaullah Achakzai", father:"Usman Ghani", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3720355154039", name:"Muhammad Jibran Ahmed", father:"Shah Muhammad", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3820151581851", name:"Khadim hussain", father:"muhammad Hussain", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"4520632383853", name:"Ansar Ahmed", father:"Afaque Hussain.", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"3740229928685", name:"Uzair Daud", father:"Muhammad Daud", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740245191699", name:"Hamid Hussain", father:"Muhammad Ilyas", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740252586907", name:"Shoaib Malik", father:"Abdul Malik", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740254208025", name:"Muhammad khurram", father:"Muhammad hanif", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740264027457", name:"Muhammad ismail", father:"Iftikhar Ahmad", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740270537131", name:"Saif ur rehman", father:"m khaliq", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740526788145", name:"Aamir shahzad", father:"Muhammad Ishraf", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740545525653", name:"umar shahzad", father:"Muhammad ashraf", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740548119351", name:"Danish Ali", father:"Muhammad Iftikhar", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740554444409", name:"Zohaib Hassan", father:"Hassan Akhtar", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740557125103", name:"Nasir hanif", father:"Muhammad hanif", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740560810071", name:"Saib zada hammad mustafa qureshi", father:"Saib zada Muhammad altaf qureshi", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740564639639", name:"TAIMUR FARUKH", father:"Farrukh Hussain Malik", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740582447045", name:"M yasim", father:"Mehboob khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740703659275", name:"irtza sikandar", father:"m sharif", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740703898705", name:"Rouman rafaqat", father:"Rafaqat Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740704111421", name:"MUHAMMAD MUBASHIR", father:"Muhammad ilyas", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740704118931", name:"Raja Muhammad Faizan Waqar", father:"Raja Waqar Ahmed", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740161523309", name:"Muhammad Shafique", father:"Muhammad Siddique", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740174663223", name:"Ausaf Ali", father:"Muhammad Ali", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740186585691", name:"Muhammad Arayyan", father:"Ch Altaf Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740522997661", name:"Hamza Ali", father:"Muhammad Nawaz", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740538322501", name:"Muhammad Bilal", father:"Muhammad Shafiq", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3830139825403", name:"Arslan Khan", father:"Latif Ullah Khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3840384840675", name:"Kashif Murad", father:"Malik Murad Ali", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740122046355", name:"muhammad ammar shehzad", father:"Shehzad Ahmed Kayani", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3740142599357", name:"Zain ul abideen kayani", father:"Khalid mehmood", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3740275847831", name:"Majid Ali", father:"Sajid Mehmood", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3740520212095", name:"Mureed Abbas", father:"Muhammad Ishtiaq", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3740577228717", name:"Muhammad HAMZA IDREES", father:"Muhammad IDREES", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3740703955033", name:"Muhammad Nafees", father:"Muhammad Banaras", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3840378318925", name:"Muhammad Adnan", father:"Ghulam Mustafa", course:"DRIVER HTV", result:"Pass", cert:"Ready" },
  { cnic:"3740285778517", name:"inzamam tahir", father:"Tahir Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740703840369", name:"Faizan Jahangir Faizi", father:"Muhammad Jahangir Akhtar", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740703798583", name:"Waqas Ahmed", father:"Naseer Ahmed", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740280739537", name:"Abdullah", father:"Zakir Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3703185497927", name:"Usmantanveer", father:"Muhammad Tanveer", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720129214163", name:"M wajahat", father:"Muhammad Aslam", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740298009775", name:"raja saad javed", father:"raja Muhammad javed", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740284448989", name:"NAEEM AKBAR", father:"SAKHAWAT HUSSAIN", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720126740341", name:"Muhammad Muneeb Iqbal", father:"Muhammad Muneeb Iqbal", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740253124413", name:"Zohaib Tanveer", father:"Muhammad Tanveer", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740564772071", name:"Shakeel Mehmood", father:"Muhammad Ayaz", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8210134942719", name:"ABDULHAMEED", father:"ABDUL LATIF", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740563999903", name:"Umair manzoor", father:"Manzoor Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740552346675", name:"muhammad alishan", father:"Fateh khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740118904779", name:"Hassan aqeel", father:"Mangta khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740501123679", name:"AMMAR ALI", father:"MUHAMMAD MUKHTAR", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740297733699", name:"Muhammad Qasim", father:"nazer muhammad", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740574950819", name:"nabeel abbas", father:"gulfaraz", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740277633117", name:"Muhammad Ibrar", father:"Mehram Khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3730384260923", name:"Muhammad Ahsan", father:"Muhammad Azhar Iqbal", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740138749295", name:"Hamza Ansar", father:"Ansar Mehmood Qureshi", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740160892409", name:"Haseeb Shoukat", father:"Raja Shoukat Mahmood kiani", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740219260545", name:"Muhammad Usman Ameen", father:"Raja Muhammad Ameen", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740269325543", name:"Danish Shahzad", father:"Muhammad Shahzad", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740297743199", name:"Aamir Khan", father:"Nazar Muhammad", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740505812371", name:"Aqib Mehmood", father:"M Arif", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740536751901", name:"Huzaifa jaleel", father:"Abdul jaleel", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740542724795", name:"Syed Hamid Ali Shah", father:"Babar Hussain Shah", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740581320153", name:"Muhammad Ahsan Kiyani", father:"Arshad Mehmood Kayani", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740704157657", name:"Qasim Ali", father:"Basharat Hussain", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3820199699121", name:"Wajahat ahmed", father:"Ajmal khan", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3840540021283", name:"ALI AFZAL", father:"MUHAMMAD AFZAL", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"3740704104789", name:"Naveed Ahmed", father:"Saghir Ahmed", course:"Health & Safety Officer", result:"Pass", cert:"Ready" },
  { cnic:"1540220533723", name:"Sahar Ullah", father:"Zad Ullah", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"1610288823007", name:"Adnan Khan", father:"Muhammad Ayub Khan", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"1610304006097", name:"Tauqeer Muhammad", father:"Zahid gul", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"8120312452123", name:"Mobeen ali shah", father:"Nizam ali Shah", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"8120353652355", name:"Syed wakeel Abbas", father:"Ashfaq hussain Shah", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3630287529971", name:"Faheem ul deen", father:"Kareem ul deen", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"8260103688275", name:"Shahid akhtar farooqi", father:"Salam Akhtar faroqi", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"1730197977451", name:"Imran khan", father:"Bakhtawar Khan", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3720305577735", name:"Muhammad Arslan", father:"Khan Muhammad", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3720367668901", name:"Muhammad Hamza", father:"Abdul Rauf", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3740508906601", name:"Muhammad Asif Javed", father:"Riaz Hussain", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3740560679503", name:"Syed furqan", father:"Syed Taseer Kazmi", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3710234278509", name:"Muhammad Hasnain", father:"Noor Ahmed", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3710304804247", name:"Raja Hassan Shahzad", father:"Babar shahzad", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3740447487985", name:"Israr Ahmed", father:"Khalid Mehmood Abbasi", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3740496756701", name:"Nouman Haleem Abbasi", father:"Muhammad Haleem Abbasi", course:"PLUMBER", result:"Pass", cert:"Ready" },
  { cnic:"3730281491247", name:"Muhammad Qadeer", father:"Ghulam shbir", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3730293662207", name:"Shahzaib raza", father:"Karamraza", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740181034887", name:"Haider Ali", father:"Abid Hussain", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740212693107", name:"Muhammad Awais sajid", father:"Sajid Hussain", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740253825917", name:"Umer farooq", father:"Choudary M Farooq", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740255294859", name:"Aqeel Ahmed", father:"Habib Khan", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740266569883", name:"Imran Guftar", father:"Raja Muhammad Guftar", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740289719943", name:"Syed Zain Ul abideen", father:"Sadaqat Ali Shah", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740293698735", name:"Majid ali", father:"Sajid Mehmood", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740313914009", name:"Abdul Raees", father:"Abdul Qayoom", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740545932525", name:"Ali Sher", father:"Wajid Ali", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740554600417", name:"Atif Mehmood", father:"Tariq Mehmood", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740555368627", name:"Nasir Mehmood", father:"Muhammad Aksar", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740565159017", name:"Muhmmad Nasar", father:"Mumtaz Ali", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740570232379", name:"Moin Akhtar", father:"Muhammad Arif", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3740704053421", name:"Moazzam Ali", father:"Tanveer Akhtar", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3810309352263", name:"Waseem Akram", father:"Abdul Aziz", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3810390749331", name:"Naseer Ahmad", father:"Zahoor ahmad", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3820145778797", name:"Amir ali", father:"Sajid ali", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"3820277427643", name:"Ashiq Hussain", father:"Muhammad Saeed", course:"Plumber", result:"Pass", cert:"Ready" },
  { cnic:"1330210627521", name:"Muhammad Umar", father:"Taj Muhammad", course:"Welder / HVAC", result:"Pass", cert:"Ready" },
  { cnic:"1340396468567", name:"Muhammad Imtiaz", father:"Jehan Zeb", course:"Welder / HVAC", result:"Pass", cert:"Ready" },
  { cnic:"3710525763387", name:"Khalid Mehmood", father:"Abdul Razzaq", course:"Welder / HVAC", result:"Pass", cert:"Ready" },
  { cnic:"1330235446767", name:"Haris Ejaz", father:"Ejaz Ahmad", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"1570125975227", name:"Maaz Ullah shehzad", father:"Shehzad Khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"1730167422713", name:"Atif Ullah", father:"Hadayat Ullah", course:"", result:"Pass", cert:"Ready" },
  { cnic:"3320328216059", name:"Ahmad sher Afgan", father:"sher afgan", course:"", result:"Pass", cert:"Ready" },
  { cnic:"3320341231299", name:"MUHAMMAD HASHIM AZIZ", father:"ABDUL AZIZ TARIQ", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720138662585", name:"Sulman Essa Minhas", father:"Muhammad Javed Minhas", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720139476675", name:"Muhammad Bilal", father:"Ghulam Murtaza", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720148782969", name:"Hammad Ali", father:"Muhammad Asghar", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3720187912635", name:"Khizar Mehmood", father:"Muhammad Ali", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740265936055", name:"Danish Ali", father:"Liaqat Ali", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740548112585", name:"Saad bin shahid", father:"Shahid Mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740549973931", name:"Luqman mehmood", father:"Tariq mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740554852617", name:"Aaqib Mehmood", father:"Khalid Mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740595796005", name:"Ghulam Ali Raza", father:"Abdul Razzaq", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740703534327", name:"Muhammad Hamza", father:"Muhammad riaz", course:"", result:"Pass", cert:"Ready" },
  { cnic:"3740703620177", name:"Mubashar Zafran", father:"Muhammad Zafran", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740703758071", name:"SOHAIB SHAHID", father:"Shahid Mehmood", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3740704043887", name:"Tayyab Irshad", father:"Muhammad Irshad", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3820109175529", name:"Muhammad Tanveer", father:"Muhammad Ramzan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3820138268647", name:"Adil Munir", father:"Abid Munir", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3840340610865", name:"Muhammad Umar", father:"Muhammad Ramzan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"3840359607271", name:"Muhammad ayoub", father:"Liaqat ali", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"4230148431747", name:"MuhammadJawwadAhmed", father:"Mazhar Ahmed", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8120393426367", name:"Zain Khadim", father:"Khadim Hussain", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8230252315419", name:"Idrees yousaf", father:"Muhammad Yousaf", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240114854227", name:"Zeeshan Khurshid", father:"Muhammad Khurshid", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240136332759", name:"Muhammad Shoaib", father:"Muhammad Akram Khan", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240152833005", name:"Muhammad Basit", father:"Muhammad Aslam", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240162053267", name:"Sufian Ashraf", father:"Muhammad Ashraf", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"8240194397293", name:"Muhamad Ihtisham", father:"Abdul Rehman", course:"HMO", result:"Pass", cert:"Ready" },
  { cnic:"6110193055779", name:"Akash Fareed", father:"Muhammad Fareed", course:"Electrician", result:"Pass", cert:"Ready" },
  { cnic:"7150107898685", name:"Ehsan Wali", father:"Latif Anwar", course:"", result:"Pass", cert:"Ready" },
  { cnic:"3740273920143", name:"Muhammad Asad", father:"Muhammad Ashraf", course:"HMO", result:"Pass", cert:"Ready" }
];

updateStats();

// ─── ADMIN LOGIN ───
function showAdminLogin() {
  document.getElementById('overlay').classList.add('show');
  document.getElementById('adminPass').value = '';
  document.getElementById('errorMsg').style.display = 'none';
  setTimeout(() => document.getElementById('adminPass').focus(), 100);
}
function hideModal() {
  document.getElementById('overlay').classList.remove('show');
}
function checkPassword() {
  const entered = document.getElementById('adminPass').value;
  if (entered === ADMIN_PASSWORD) {
    hideModal();
    document.getElementById('adminPanel').classList.add('show');
  } else {
    document.getElementById('errorMsg').style.display = 'block';
    document.getElementById('adminPass').value = '';
    document.getElementById('adminPass').focus();
  }
}
function logoutAdmin() {
  document.getElementById('adminPanel').classList.remove('show');
}

// ─── CSV LOADER ───
function loadCSV(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const lines = e.target.result.split('\n').filter(l => l.trim());
    const raw = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/[\s\-_]/g,''));
    allStudents = [];
    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(',').map(c => c.trim().replace(/^"|"$/g,''));
      if (cols.length < 2) continue;
      const obj = {};
      raw.forEach((h, idx) => obj[h] = cols[idx] || '');
      allStudents.push({
        cnic:   obj['cnic'] || '',
        name:   obj['studentname'] || obj['name'] || '',
        father: obj['fathername']  || obj['father'] || '',
        course: obj['course'] || '',
        result: obj['result'] || 'Not Ready Yet',
        cert:   obj['certificatestatus'] || obj['certificate'] || 'Not Ready Yet',
      });
    }
    updateStats();
    const msg = document.getElementById('loadedMsg');
    msg.style.display = 'block';
    msg.textContent = '✓ ' + allStudents.length + ' students loaded successfully!';
    document.getElementById('resultArea').innerHTML = '';
  };
  reader.readAsText(file);
}

// ─── STATS ───
function updateStats() {
  document.getElementById('statTotal').textContent = allStudents.length;
  document.getElementById('statPass').textContent  = allStudents.filter(s => s.result.toLowerCase() === 'pass').length;
  document.getElementById('statCert').textContent  = allStudents.filter(s => s.cert.toLowerCase() === 'ready').length;
}

// ─── SEARCH ───
function doSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase().replace(/[-\s]/g,'');
  const area = document.getElementById('resultArea');
  if (!q) { area.innerHTML = ''; return; }
  const results = allStudents.filter(s =>
    s.cnic.replace(/[-\s]/g,'').toLowerCase().includes(q) ||
    s.name.toLowerCase().includes(q)
  );
  if (results.length === 0) {
    area.innerHTML = `<div class="not-found">
      <div class="icon">&#128269;</div>
      <h3>No record found</h3>
      <p>No student found for "<strong>${document.getElementById('searchInput').value.trim()}</strong>".<br>
      Please check your CNIC or Name and try again.<br>
      For help contact: 051-1234567</p>
    </div>`;
    return;
  }
  area.innerHTML = results.map(buildCard).join('');
}

function buildCard(s) {
  const r = s.result.toLowerCase();
  const c = s.cert.toLowerCase();
  const cardClass  = r === 'pass' ? 'pass-card' : r === 'fail' ? 'fail-card' : r === 'pending' ? 'pending-card' : 'nr-card';
  const badgeClass = r === 'pass' ? 'badge-pass' : r === 'fail' ? 'badge-fail' : r === 'pending' ? 'badge-pending' : 'badge-nr';
  const certKey  = c === 'ready' ? 'ready' : c === 'processing' ? 'processing' : c === 'not issued' ? 'not-issued' : 'not-recv';
  const certIcon = c === 'ready' ? '&#127881;' : c === 'processing' ? '&#9203;' : c === 'not issued' ? '&#10060;' : '&#8987;';
  const certMsg  = c === 'ready'      ? 'Certificate is ready — please visit admin office to collect' :
                   c === 'processing' ? 'Certificate is being prepared — check again in 2 to 3 days' :
                   c === 'not issued' ? 'Certificate not issued — re-attempt is required' :
                                        'Status not updated yet — please contact admin';
  const cnicFmt = s.cnic.replace(/(\d{5})(\d{7})(\d{1})/, '$1-$2-$3');
  return `<div class="result-card ${cardClass}">
    <div class="card-top">
      <div>
        <div class="student-name">${s.name}</div>
        <div class="cnic-display">CNIC: ${cnicFmt}</div>
      </div>
      <span class="badge ${badgeClass}">${s.result}</span>
    </div>
    <div class="info-grid">
      <div class="info-item"><div class="lbl">Father's Name</div><div class="val">${s.father || '—'}</div></div>
      <div class="info-item"><div class="lbl">Course</div><div class="val">${s.course || '—'}</div></div>
    </div>
    <div class="cert-box ${certKey}">
      <div class="cert-icon">${certIcon}</div>
      <div>
        <div class="cert-title">Certificate Status</div>
        <div class="cert-msg ${certKey}">${certMsg}</div>
      </div>
    </div>
  </div>`;
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') doSearch();
});
document.getElementById('overlay').addEventListener('click', function(e) {
  if (e.target === this) hideModal();
});
