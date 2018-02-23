app.controller('MemberController', ["$scope", function($scope){
    
    // Teacher's
    $scope.coreTeamTeachers = [
        {
            name: "Nayanmoni Kakoty",
            desig: "President",
            img: "./img/NAYAN.jpeg",
            link: "http://agnigarh.tezu.ernet.in/~nkakoty/",
            mail: "mailto:nkakoty@tezu.ernet.in",
            cardClass: "zeror-left animated"
        },
        {
            name: "Dr. Riku Chutia",
            desig: "Vice President",
            img: "./img/RIKU.jpeg",
            link: "http://agnigarh.tezu.ernet.in/~riku/",
            mail: "mailto:riku@tezu.ernet.in",
            cardClass: "zeror-middle animated "
        },
        {
            name: "Ms. Zahnupriya Kalita",
            desig: "Vice President",
            img: "./img/ZK.jpeg",
            link: "http://www.tezu.ernet.in/dmech/people/zk.htm",
            mail: "malito:zk@tezu.ernet.in",
            cardClass: "zeror-right animated"
        },
        {
            name: "Mr. Zubeen Bhuyan",
            desig: "Technical Team Director",
            img: "./img/ZB.jpeg",
            link: "http://agnigarh.tezu.ernet.in/~zubin/index.html",
            mail: "mailto:zubin@tezu.ernet.in",
            cardClass: "firstr-left animated"
        }
    ];


    // Student Member's

    $scope.coreStudentMembers = [
        {
            name: "Rajat Sharma",
            desig: "Student Vice President",
            img: "./img/RajatSharma.jpg",
            github: "https://github.com/rajatsharma369007",
            facebook: "https://www.facebook.com/profile.php?id=100002977450437",
            linkedin: "https://www.linkedin.com/in/rajat-sharma-1144a1119/",
            cardClass: "firstr-middle animated"
        },
        {
            name: "Nabarun Barman",
            desig: "Secretary",
            img: "",
            github: "",
            facebook: "",
            linkedin: "",
            cardClass: "firstr-right animated"
        },
        {
            name: "Dhruba Jyoti Sut",
            desig: "Joint Secretary",
            img: "./img/DhrubaJyotiSut.jpeg",
            github: "",
            facebook: "https://www.facebook.com/dhrubajyoti.sut.3",
            linkedin: "",
            cardClass: "secondr-left animated"
        },
        {
            name: "Devanga Borah",
            desig: "Treasurer",
            img: "./img/DevangaBorah.jpeg",
            github: "",
            facebook: "",
            linkedin: "",
            cardClass: "secondr-middle animated"
        },
        {
            name: "Sourish Sarmah",
            desig: "Technical Team Member",
            img: "https://avatars2.githubusercontent.com/u/35569202?s=400&v=4",
            github: "https://github.com/sourishsarmah",
            facebook: "https://www.facebook.com/sourish.sarmah",
            linkedin: "",
            cardClass: "secondr-right animated"
        },
        {
            name: "Nityananda Gohain",
            desig: "Technical Team Member",
            img: "https://avatars0.githubusercontent.com/u/26831659?s=460&v=4",
            github: "https://github.com/nityanandagohain",
            facebook: "https://www.facebook.com/nityanandagohain",
            linkedin: "https://www.linkedin.com/in/nityananda-gohain/",
            cardClass: "thirdr-left animated"
        },
        {
            name: "Kanishka Chowdhury",
            desig: "Technical Team Member",
            img: "./img/KanishkaChowdhury.jpeg",
            github: "https://github.com/CKanishka",
            facebook: "https://www.facebook.com/kanishka.chowdhury.54",
            linkedin: "https://www.linkedin.com/in/kanishkachowdhury",
            cardClass: "thirdr-middle animated"
        },
        {
            name: "Abhiroop Dutta",
            desig: "Technical Team Member",
            img: "",
            github: "",
            facebook: "",
            linkedin: "",
            cardClass: "thirdr-right animated"
        },
        {
            name: "Adil Bin Bhutto",
            desig: "Technical Team Member",
            img: "./img/AdilBinBhutto.jpg",
            github: "https://github.com/binbhutto",
            facebook: "https://www.facebook.com/adil4bhutto",
            linkedin: "https://www.linkedin.com/in/adil-b-686739b3/",
            cardClass: "fourthr-left animated"
        },
        {
            name: "Manoj Sharma",
            desig: "Technical Team Member",
            img: "./img/ManojSharma.png",
            github: "https://github.com/manojsharma221",
            facebook: "https://www.facebook.com/ms9954098610",
            linkedin: "https://www.linkedin.com/in/manoj-sharma-6b59b9155/",
            cardClass: "fourthr-middle animated"
        },
        {
            name: "Biswajit Bharali",
            desig: "Technical Team Member",
            img: "./img/BiswajitBharali.jpeg",
            github: "",
            facebook: "",
            linkedin: "",
            cardClass: "fourthr-right animated"
        },
        {
            name: "Saurabh Kannaujia",
            desig: "Technical Team Member",
            img: "./img/SaurabhKannaujia.jpg",
            github: "https://github.com/imonstershadow",
            facebook: "https://www.facebook.com/saurabh.kannaujia.9",
            linkedin: "https://www.linkedin.com/in/saurabh-kannaujia-9b5418159",
            cardClass: "fifthr-left animated "
        },
        {
            name: "Prateek Saikia",
            desig: "Event Co-ordinating Team Member",
            img: "./img/Prateeksaikia.jpeg",
            github: "https://github.com/Prateekj7",
            facebook: "https://m.facebook.com/profile.php?id=100001788514377&ref=content_filter",
            linkedin: "",
            cardClass: "fifthr-middle animated"
        },
        {
            name: "Sandeep Sarkar",
            desig: "Event Co-ordinating Team Member",
            img: "./img/SANDEEPSARKAR.png",
            github: "",
            facebook: "",
            linkedin: "",
            cardClass: "fifthr-right animated"
        },
        {
            name: "Deepankar Acharya",
            desig: "Event Co-ordinating Team Member",
            img: "./img/DeepankarAcharya.jpeg",
            github: "",
            facebook: "",
            linkedin: "",
            cardClass: "fifthr-left animated"
        },
    ]

    $scope.webTeam = [
        {
            name: "Adirtha Borgohain",
            desig: "Quizzer & Developer",
            img: "https://avatars3.githubusercontent.com/u/32612696?s=400&u=1a2392549eb9f62ea19ca37ae6864e0681efd745&v=4",
            github: "https://github.com/AdirthaBorgohain",
            facebook: "https://www.facebook.com/EccentricityUnparalleled?ref=br_rs",
            linkedin: "",
            cardClass: ""
        },
        {
            name: "Nityananda Gohain",
            desig: "Developer @ FOSSASIA",
            img: "https://avatars0.githubusercontent.com/u/26831659?s=460&v=4",
            github: "https://github.com/nityanandagohain",
            facebook: "https://www.facebook.com/nityanandagohain",
            linkedin: "https://www.linkedin.com/in/nityananda-gohain/",
            cardClass: ""
        },
        {
            name: "Sourish Sarmah",
            desig: "Backend Developer",
            img: "https://avatars2.githubusercontent.com/u/35569202?s=400&v=4",
            github: "https://avatars2.githubusercontent.com/u/35569202?s=400&v=4",
            facebook: "https://www.facebook.com/sourish.sarmah",
            linkedin: "",
            cardClass: ""
        },
        {
            name: "Debasish Kalita",
            desig: "Developer",
            img: "https://avatars0.githubusercontent.com/u/36163817?s=460&v=4",
            github: "https://github.com/debasishkalita",
            facebook: "https://www.facebook.com/debasishkalita.kalita",
            linkedin: "",
            cardClass: ""
        }
    ]
}]);