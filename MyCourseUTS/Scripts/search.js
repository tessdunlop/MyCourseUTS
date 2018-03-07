var addVisible = false;
var selected = "course";
var lastSelected;
var selectedBlue = "#2478fc";

function getAllCourses() {
    var url = "http://mycourseuts.azurewebsites.net/api/course/getallcourses";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of courses");
        }
    });
    return data;
}
function getAllMajors() {
    var url = "http://mycourseuts.azurewebsites.net/api/major/getallmajors";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of majors");
        }
    });
    return data;
}
function getAllSubMajors() {
    var url = "http://mycourseuts.azurewebsites.net/api/submajor/getallsubmajors";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of submajors");
        }
    });
    return data;
}
function getAllStreams() {
    var url = "http://mycourseuts.azurewebsites.net/api/stream/getallstreams";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of streams");
        }
    });
    return data;
}
function getAllChoiceBlocks() {

    var url = "http://mycourseuts.azurewebsites.net/api/choiceblock/getallchoiceblocks";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of choice blocks");
        }
    });
    return data;
}
function getAllSubjects() {
    var url = "http://mycourseuts.azurewebsites.net/api/subject/getallsubjects";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subjects");
        }
    });
    return data;
}
function getCourseTypes() {
    var url = "http://mycourseuts.azurewebsites.net/api/course/getcoursetypes";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of course types");
        }
    });
    console.log(data);
    return data;
}

function getCourse(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/course/getcourse?courseID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the course");
        }
    });
    return data;
}
function getMajor(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/major/getmajor?majorID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the major");
        }
    });
    return data;
}
function getSubMajor(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/submajor/getsubmajor?subMajorID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the submajor");
        }
    });
    return data;
}
function getStream(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/stream/getstream?streamID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the stream");
        }
    });
    return data;
}
function getChoiceBlock(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/choiceblock/getchoiceblock?choiceblockID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the choice block");
        }
    });
    return data;
}
function getSubject(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/subject/getsubject?subjectID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the subject");
        }
    });
    return data;
}
function getSubjectGrouping(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/subjectgrouping/getsubjectgrouping?subjectgroupingID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the subject grouping");
        }
    });
    return data;
}
function getSubjectRequisites(id) {
    var url = "http://mycourseuts.azurewebsites.net/api/subject/getsubjectrequisite?subjectid=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the subject requisites");
        }
    });
    return data;
}

function getCourses(term) {
    var url = "http://mycourseuts.azurewebsites.net/api/course/getcourses?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        dataType: "json",
        async: false,
        success: function (response) {
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of courses");
        }
    });
    return data;
}
function getMajors(term) {
    var url = "http://mycourseuts.azurewebsites.net/api/major/getmajors?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of majors");
        }
    });
    return data;
}
function getSubMajors(term) {
    var url = "http://mycourseuts.azurewebsites.net/api/submajor/getsubmajors?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of submajors");
        }
    });
    return data;
}
function getStreams(term) {
    var url = "http://mycourseuts.azurewebsites.net/api/stream/getstreams?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of streams");
        }
    });
    return data;
}
function getChoiceBlocks(term) {
    var url = "http://mycourseuts.azurewebsites.net/api/choiceblock/getchoiceblocks?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of choice blocks");
        }
    });
    return data;
}
function getSubjects(term) {
    var url = "http://mycourseuts.azurewebsites.net/api/subject/getsubjects?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subjects");
        }
    });
    return data;
}

function populateDropdown() {
    var select = document.getElementById("courseType");
    var data = getCourseTypes();
    for (var i = 0; data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].ID;
        option.text = data[i].Abbreviation;
        select.add(option, null);
    }
}

function disableMenuBar(option) {
    if (option == true) {
        document.getElementById("btnCourse").disabled = true;
        document.getElementById("btnMajor").disabled = true;
        document.getElementById("btnSubMajor").disabled = true;
        document.getElementById("btnStream").disabled = true;;
        document.getElementById("btnChoiceBlock").disabled = true;
        document.getElementById("btnSubject").disabled = true;
    }
    else if (option == false) {
        document.getElementById("btnCourse").disabled = false;
        document.getElementById("btnMajor").disabled = false;
        document.getElementById("btnSubMajor").disabled = false;
        document.getElementById("btnStream").disabled = false;;
        document.getElementById("btnChoiceBlock").disabled = false;
        document.getElementById("btnSubject").disabled = false;
    }

}
function refreshFields() {
    document.getElementById("courseStatusActive").checked = true;
    document.getElementById("majorStatusActive").checked = true;
    document.getElementById("streamStatusActive").checked = true;
    document.getElementById("subjectStatusActive").checked = true;

    //course
    document.getElementById("courseName").value = "";
    document.getElementById("courseId").value = "";
    document.getElementById("courseType").selectedIndex = 0;
    document.getElementById("courseAbb").value = "";
    document.getElementById("courseYears").value = "";
    document.getElementById("courseStages").value = "";
    document.getElementById("courseCredit").value = "";
    document.getElementById("courseVersion").value = "";
    document.getElementById("courseVersionDescription").value = "";
    document.getElementById("courseDescription").value = "";

    //major
    document.getElementById("majorName").value = "";
    document.getElementById("majorId").value = "";
    document.getElementById("majorAbb").value = "";
    document.getElementById("majorVersion").value = "";
    document.getElementById("majorStages").value = "";
    document.getElementById("majorCredit").value = "";
    document.getElementById("majorVersionDescription").value = "";
    document.getElementById("majorDescription").value = "";
    document.getElementById("majorStatusActive").checked = true;
    document.getElementById("majorStatusInActive").checked = false;
    document.getElementById("includeMajorTemplate").checked = false;

    //stream
    document.getElementById("subMajorOption").checked = false;
    document.getElementById("streamDescription").value = "";
    document.getElementById("streamOption").checked = false;
    document.getElementById("choiceBlockOption").checked = false;
    document.getElementById("streamName").value = "";
    document.getElementById("streamId").value = "";
    document.getElementById("streamAbb").value = "";
    document.getElementById("streamVersion").value = "";
    document.getElementById("majorCredit").value = "";
    document.getElementById("streamVersionDescription").value = "";
    document.getElementById("streamStatusActive").checked = true;
    document.getElementById("streamStatusInActive").checked = false;

    //subject
    document.getElementById("subjectName").value = "";
    document.getElementById("subjectId").value = "";
    document.getElementById("subjectAbb").value = "";
    document.getElementById("subjectCredit").value = "";
    document.getElementById("subjectVersion").value = "";
    document.getElementById("subjectVersionDescription").value = "";
    document.getElementById("subjectDescription").value = "";
    document.getElementById("subjectPreReq").innerHTML = "";
    document.getElementById("subjectAntiReq").innerHTML = "";
    document.getElementById("subjectStatusActive").checked = true;
    document.getElementById("subjectStatusInActive").checked = false;
    document.getElementById("subjectAntiReqInput").value = "";
    document.getElementById("subjectPreReqInput").value = "";
    document.getElementById("subjectAntiReqInput").style.display = "none";
    document.getElementById("subjectPreReqInput").style.display = "none";


    handleEdit();
}

window.onload = function () {
    populateDropdown();
}

getAllCourses();
getAllMajors();
getAllSubMajors();
getAllStreams();
getAllChoiceBlocks();
getAllSubjects();
getCourseTypes();


function removeReqFromList(id) {
    var listElement = document.getElementById(id);
    if ($("#" + id).hasClass("disabled")) { }
    else {
        listElement.remove();
    }
}
function handlePreReq(term) {
    var data = new Array();
    data = getSubjects(term);

    $("#subjectPreReqInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            console.log(ui);
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectPreReq");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeReqFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success ');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subReq.appendChild(a);
        }

    });
}
function handleAntiReq(term) {
    var data = new Array();
    data = getSubjects(term);

    $("#subjectAntiReqInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            console.log(ui);
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectAntiReq");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeReqFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subReq.appendChild(a);
        }

    });
}


function handleSearch(term) {

    var data = new Array();
    if (selected == "course") {
        data = getCourses(term);
    }
    else if (selected == "major") {
        data = getMajors(term)
    }
    else if (selected == "submajor") {
        data = getSubMajors(term);
    }
    else if (selected == "choiceblock") {
        data = getChoiceBlocks(term);
    }
    else if (selected == "stream") {
        data = getStreams(term);
    }
    else if (selected == "subject") {
        data = getSubjects(term);
    }
    $("#searchBar").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            disableMenuBar(true);
            document.getElementById("addDiv").style.display = "none";
            console.log(ui);
            document.getElementById('searchDiv').style.display = "none";
            document.getElementById("btnSave").disabled = true;
            if (selected == "course") {
                var data = getCourse(ui.item.value);
                console.log(data);
                document.getElementById("courseName").value = data.Name;
                document.getElementById("courseId").value = data.ID;
                document.getElementById("courseType").selectedIndex = data.CourseType.ID - 1;
                document.getElementById("courseAbb").value = data.Abbreviation;
                document.getElementById("courseYears").value = data.Years;
                document.getElementById("courseStages").value = data.Stages;
                document.getElementById("courseCredit").value = data.CreditPoints;
                document.getElementById("courseVersion").value = data.Version;
                document.getElementById("courseVersionDescription").value = data.VersionDescription;
                document.getElementById("courseDescription").value = data.CourseDescription;
                if (data.Active == true) {
                    document.getElementById("courseStatusActive").checked = true;
                }
                else {
                    document.getElementById("courseStatusInActive").checked = true;
                }
                if (data.HasMajor == true) {
                    document.getElementById("includeMajor").checked = true;
                }
                if (data.HasTemplate == true) {
                    document.getElementById("includeCourseTemplate").checked = true;
                }

                document.getElementById("courseName").readOnly = true;
                document.getElementById("courseId").readOnly = true;
                document.getElementById("courseType").disabled = true;
                document.getElementById("courseAbb").readOnly = true;
                document.getElementById("courseYears").readOnly = true;
                document.getElementById("courseStages").readOnly = true;
                document.getElementById("courseCredit").readOnly = true;
                document.getElementById("courseVersion").readOnly = true;
                document.getElementById("courseVersionDescription").readOnly = true;
                document.getElementById("courseDescription").readOnly = true;
                document.getElementById("courseStatusActive").disabled = true;
                document.getElementById("courseStatusInActive").disabled = true;
                document.getElementById("includeCourseTemplate").disabled = true;
                document.getElementById("includeMajor").disabled = true;

                document.getElementById('addCourseFormDiv').style.display = "block";

            }
            else if (selected == "major") {
                var data = getMajor(ui.item.value);
                console.log(data);
                document.getElementById("majorName").value = data.Name;
                document.getElementById("majorId").value = data.ID;
                document.getElementById("majorAbb").value = data.Abbreviation;
                document.getElementById("majorVersion").value = data.Version;
                document.getElementById("majorStages").value = data.Stage;
                document.getElementById("majorCredit").value = data.CreditPoints;
                document.getElementById("majorVersionDescription").value = data.VersionDescription;
                document.getElementById("majorDescription").value = data.MajorDescription;
                if (data.Active == true) {
                    document.getElementById("majorStatusActive").checked = true;
                }
                else {
                    document.getElementById("majorStatusInActive").checked = true;
                }
                if (data.HasTemplate == true) {
                    document.getElementById("includeMajorTemplate").checked = true;
                }

                document.getElementById("majorName").readOnly = true;
                document.getElementById("majorId").readOnly = true;
                document.getElementById("majorAbb").readOnly = true;
                document.getElementById("majorVersion").readOnly = true;
                document.getElementById("majorStages").readOnly = true;
                document.getElementById("majorCredit").readOnly = true;
                document.getElementById("majorVersionDescription").readOnly = true;
                document.getElementById("majorDescription").readOnly = true;
                document.getElementById("majorStatusActive").disabled = true;
                document.getElementById("majorStatusInActive").disabled = true;
                document.getElementById("includeMajorTemplate").disabled = true;

                document.getElementById('addMajorFormDiv').style.display = "block";
            }
            else if (selected == "submajor" || selected == "stream" || selected == "choiceblock") {
                var data;

                if (selected == "submajor") {
                    data = getSubMajor(ui.item.value);
                    document.getElementById("subMajorOption").checked = true;
                    document.getElementById("streamDescription").value = data.SubMajorDescription;
                }
                else if (selected == "stream") {
                    data = getStream(ui.item.value);
                    document.getElementById("streamOption").checked = true;
                    document.getElementById("streamDescription").value = data.StreamDescription;
                }
                else if (selected == "choiceblock") {
                    data = getChoiceBlock(ui.item.value);
                    document.getElementById("choiceBlockOption").checked = true;
                    document.getElementById("streamDescription").value = data.ChoiceBlockDescription;
                }

                document.getElementById("streamName").value = data.Name;
                document.getElementById("streamId").value = data.ID;
                document.getElementById("streamAbb").value = data.Abbreviation;
                document.getElementById("streamVersion").value = data.Version;
                document.getElementById("majorCredit").value = data.CreditPoints;
                document.getElementById("streamVersionDescription").value = data.VersionDescription;

                if (data.Active == true) {
                    document.getElementById("streamStatusActive").checked = true;
                }
                else {
                    document.getElementById("streamStatusInActive").checked = true;
                }

                document.getElementById("subMajorOption").disabled = true;
                document.getElementById("streamOption").disabled = true;
                document.getElementById("choiceBlockOption").disabled = true;
                document.getElementById("streamName").readOnly = true;
                document.getElementById("streamId").readOnly = true;
                document.getElementById("streamAbb").readOnly = true;
                document.getElementById("streamVersion").readOnly = true;
                document.getElementById("streamCredit").readOnly = true;
                document.getElementById("streamVersionDescription").readOnly = true;
                document.getElementById("streamDescription").readOnly = true;
                document.getElementById("streamStatusActive").disabled = true;
                document.getElementById("streamStatusInActive").disabled = true;

                document.getElementById('addStreamFormDiv').style.display = "block";
            }
            else if (selected == "subject") {
                var data = getSubject(ui.item.value);
                var reqs = getSubjectRequisites(ui.item.value);
                console.log(data);
                console.log(reqs);
                document.getElementById("subjectName").value = data.Name;
                document.getElementById("subjectId").value = data.ID;
                document.getElementById("subjectAbb").value = data.Abbreviation;
                document.getElementById("subjectCredit").value = data.CreditPoints;
                document.getElementById("subjectVersion").value = data.Version;
                document.getElementById("subjectVersionDescription").value = data.VersionDescription;
                document.getElementById("subjectDescription").value = data.SubjectDescription;

                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].RequisiteType.Abbreviation == "PRE") {
                        var a = document.createElement("a");
                        var subReq = document.getElementById("subjectPreReq");
                        a.setAttribute('id', reqs[i].Requisite.ID);
                        a.setAttribute('onClick', "removeReqFromList(this.id)");
                        a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                        a.appendChild(document.createTextNode(reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name));
                        subReq.appendChild(a);

                        //$("#subjectAntiReq").append("<a href='#' class='list-group-item list-group-item-action list-group-item-success disabled'>" + reqs[i].Requisite.ID +" - " + reqs[i].Requisite.Name + "</a>");
                    }
                    else if (reqs[i].RequisiteType.Abbreviation == "ANTI") {
                        var a = document.createElement("a");
                        var subReq = document.getElementById("subjectAntiReq");
                        a.setAttribute('id', reqs[i].Requisite.ID);
                        a.setAttribute('onClick', "removeReqFromList(this.id)");
                        a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger disabled');
                        a.appendChild(document.createTextNode(reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name));
                        subReq.appendChild(a);
                        //$("#subjectPreReq").append("<a href='#' class='list-group-item list-group-item-action list-group-item-danger disabled'>" + reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name + "</a>");
                    }
                }

                if (data.Active == true) {
                    document.getElementById("subjectStatusActive").checked = true;
                }
                else {
                    document.getElementById("subjectStatusInActive").checked = true;
                }

                document.getElementById("subjectName").readOnly = true;
                document.getElementById("subjectId").readOnly = true;
                document.getElementById("subjectAbb").readOnly = true;
                document.getElementById("subjectCredit").readOnly = true;
                document.getElementById("subjectVersion").readOnly = true;
                document.getElementById("subjectStatusActive").disabled = true;
                document.getElementById("subjectStatusInActive").disabled = true;
                document.getElementById("subjectVersionDescription").readOnly = true;
                document.getElementById("subjectDescription").readOnly = true;
                document.getElementById("subjectPreReq").readOnly = true;
                document.getElementById("subjectAntiReq").readOnly = true;
                document.getElementById("subjectAntiReqInput").style.display = "none";
                document.getElementById("subjectPreReqInput").style.display = "none";

                document.getElementById('addSubjectFormDiv').style.display = "block";
            }
            document.getElementById('cancelButtonDiv').style.display = "block";

        }

    });
}



function refreshNavColours() {
    document.getElementById("course").style.backgroundColor = "lightskyblue";
    document.getElementById("subject").style.backgroundColor = "lightskyblue";
    document.getElementById("stream").style.backgroundColor = "lightskyblue";
    document.getElementById("submajor").style.backgroundColor = "lightskyblue";
    document.getElementById("choiceblock").style.backgroundColor = "lightskyblue";
    document.getElementById("major").style.backgroundColor = "lightskyblue";
}

function hide() {
    document.getElementById('searchDiv').style.display = "none";
    document.getElementById('addDiv').style.display = "none";

    document.getElementById('addCourseFormDiv').style.display = "none";
    document.getElementById('addSubjectFormDiv').style.display = "none";
    document.getElementById('addStreamFormDiv').style.display = "none";
    document.getElementById('addMajorFormDiv').style.display = "none";
    document.getElementById('addCourseSubjectsFormDiv').style.display = "none";

    document.getElementById('subjectListDiv').style.display = "none";

    document.getElementById('submitButtonDiv').style.display = "none";
    document.getElementById('backButtonDiv').style.display = "none";
    document.getElementById('nextButtonDiv').style.display = "none";
    document.getElementById('subjectSubmitButtonDiv').style.display = "none";
    document.getElementById('updateButtonDiv').style.display = "none";
}

function refreshTimetable() {
    document.getElementById("stageOne").innerHTML = "";
    document.getElementById("stageTwo").innerHTML = "";
    document.getElementById("stageThree").innerHTML = "";
    document.getElementById("stageFour").innerHTML = "";
    document.getElementById("stageFive").innerHTML = "";
    document.getElementById("stageSix").innerHTML = "";
    document.getElementById("stageSeven").innerHTML = "";
    document.getElementById("stageEight").innerHTML = "";
    document.getElementById("stageNine").innerHTML = "";
    document.getElementById("stageTen").innerHTML = "";

    document.getElementById("subjectStage").value = "";
    document.getElementById("subjectType").value = "";
    document.getElementById("subjectTitle").value = "";
    document.getElementById("subjectNumber").value = "";
}

function clearCourse() {
    document.getElementById('courseName').value = "";
    document.getElementById('courseId').value = "";
    document.getElementById('courseAbb').value = "";
    document.getElementById('courseYears').value = "";
    document.getElementById('courseStages').value = "";
    document.getElementById('courseCredit').value = "";
    document.getElementById('courseVersion').value = "";
    document.getElementById('courseVersionDescription').value = "";
    document.getElementById("courseStatus").checked = true;
}

function clearMajor() {
    document.getElementById('majorName').value = "";
    document.getElementById('majorId').value = "";
    document.getElementById('majorCourseId').value = "";
    document.getElementById('majorAbb').value = "";
    document.getElementById('majorVersion').value = "";
    document.getElementById('majorVersionDescription').value = "";
    document.getElementById("majorStatus").checked = true;
}

function clearStream() {
    document.getElementById('streamName').value = "";
    document.getElementById('streamId').value = "";
    document.getElementById('streamMajorId').value = "";
    document.getElementById('streamAbb').value = "";
    document.getElementById('streamVersion').value = "";
    document.getElementById('streamVersionDescription').value = "";
    document.getElementById("streamStatus").checked = true;
}

function clearSubject() {
    document.getElementById('subjectName').value = "";
    document.getElementById('subjectId').value = "";
    document.getElementById('subjectAbb').value = "";
    document.getElementById('subjectCredit').value = "";
    document.getElementById('subjectDescription').value = "";
    document.getElementById('subjectVersion').value = "";
    document.getElementById('subjectVersionDescription').value = "";
    document.getElementById('subjectPreReq').value = "";
    document.getElementById('subjectReq').value = "";
    document.getElementById("subjectStatus").checked = true;
}



//Displays the course form
function handleCourse() {
    selected = "course";
    document.getElementById('searchBar').value = "";
    refreshNavColours();
    document.getElementById("course").style.backgroundColor = selectedBlue;
    document.getElementsByName('searchBar')[0].placeholder = "Search Courses";
    if (addVisible == true) {
        hide();
        document.getElementById('addCourseFormDiv').style.display = "block";
        document.getElementById('nextButtonDiv').style.display = "block";
    }
}

//displays the major form
function handleMajor() {
    selected = "major";
    document.getElementById('searchBar').value = "";
    refreshNavColours();
    document.getElementById("major").style.backgroundColor = selectedBlue;
    document.getElementsByName('searchBar')[0].placeholder = "Search Majors";
    if (addVisible == true) {
        hide();
        document.getElementById('addMajorFormDiv').style.display = "block";
        document.getElementById('backButtonDiv').style.display = "block";
    }
}

//displays the stream form
function handleStream() {
    selected = "stream";
    document.getElementById('searchBar').value = "";
    document.getElementById("streamOption").checked = true;
    document.getElementById("streamNameTitle").innerHTML = "<b>Stream Name</b>";
    document.getElementById("streamIDTitle").innerHTML = "<b>Stream Indentification</b>";
    document.getElementById("streamAbbreviationTitle").innerHTML = "<b>Stream Abbreviation</b>";
    document.getElementById("streamDescriptionTitle").innerHTML = "<b>Stream Description</b>";
    refreshNavColours();
    document.getElementById("stream").style.backgroundColor = selectedBlue;
    document.getElementsByName('searchBar')[0].placeholder = "Search Streams";

    if (addVisible == true) {
        hide();
        document.getElementById('addStreamFormDiv').style.display = "block";
        document.getElementById('backButtonDiv').style.display = "block";
    }
}

function handleSubMajor() {
    selected = "submajor";
    document.getElementById('searchBar').value = "";
    document.getElementById("subMajorOption").checked = true
    document.getElementById("streamNameTitle").innerHTML = "<b>Sub-Major Name</b>";
    document.getElementById("streamIDTitle").innerHTML = "<b>Sub-Major Identification</b>";
    document.getElementById("streamAbbreviationTitle").innerHTML = "<b>Sub-Major Abbreviation</b>";
    document.getElementById("streamDescriptionTitle").innerHTML = "<b>Sub-Major Description</b>";
    refreshNavColours();
    document.getElementById("submajor").style.backgroundColor = selectedBlue;
    document.getElementsByName('searchBar')[0].placeholder = "Search Sub-Majors";

    if (addVisible == true) {
        hide();
        document.getElementById('addStreamFormDiv').style.display = "block";
        document.getElementById('backButtonDiv').style.display = "block";
    }
}

function handleChoiceBlock() {
    selected = "choiceblock";
    document.getElementById('searchBar').value = "";
    document.getElementById("choiceBlockOption").checked = true
    document.getElementById("streamNameTitle").innerHTML = "<b>Choice Block Name</b>";
    document.getElementById("streamIDTitle").innerHTML = "<b>Choice Block Identification</b>";
    document.getElementById("streamAbbreviationTitle").innerHTML = "<b>Choice Block Abbreviation</b>";
    document.getElementById("streamDescriptionTitle").innerHTML = "<b>Choice Block Description</b>";
    refreshNavColours();
    document.getElementById("choiceblock").style.backgroundColor = selectedBlue;
    document.getElementsByName('searchBar')[0].placeholder = "Search Choice Blocks";

    if (addVisible == true) {
        hide();
        document.getElementById('addStreamFormDiv').style.display = "block";
        document.getElementById('backButtonDiv').style.display = "block";
    }
}

//displays the subject form
function handleSubject() {
    selected = "subject";
    document.getElementById('searchBar').value = "";
    refreshNavColours();
    document.getElementById("subject").style.backgroundColor = selectedBlue;
    document.getElementsByName('searchBar')[0].placeholder = "Search Subjects";
    if (addVisible == true) {
        hide();
        document.getElementById('addSubjectFormDiv').style.display = "block";
        document.getElementById('subjectSubmitButtonDiv').style.display = "block";
    }
}

//displays the page where the user can add particular subjects to courses in the correct stages and types etc
function handleCourseSubjects() {
    refreshNavColours();
    hide();
    document.getElementById('addCourseSubjectsFormDiv').style.display = "block";
    document.getElementById('subjectListDiv').style.display = "block";
    document.getElementById('submitButtonDiv').style.display = "block";
    document.getElementById("subject").style.backgroundColor = selectedBlue;
}


//this handles the adding to the form
function handleAdd() {
    addVisible = true;
    //document.getElementById('searchDiv').style.display = "none";
    //document.getElementById('addDiv').style.display = "none";

    if (selected == "course") {
        handleCourse();
    }
    else if (selected == "major") {
        handleMajor();
    }
    else if (selected == "stream") {
        handleStream();
    }
    else if (selected == "submajor") {
        handleSubMajor();
    }
    else if (selected == "choiceblock") {
        handleChoiceBlock();
    }
    else if (selected == "subject") {
        handleSubject();
    }
}

//this controls the back button
function handleBack() {
    if (lastSelected == "course") {
        handleCourse();
        refreshTimetable();
    }
    else if (lastSelected == "major") {
        lastSelected = "course";
        handleMajor();
        refreshTimetable();
    }
    else if (lastSelected == "stream") {
        lastSelected = "major";
        handleStream();
        refreshTimetable();
    }

    else if (lastSelected == "submajor") {
        lastSelected = "major";
        handleStream();
        refreshTimetable();
    }

    else if (lastSelected == "choiceblock") {
        lastSelected = "major";
        handleStream();
        refreshTimetable();
    }
}

//this controls the next button
function handleNext() {
    if (selected == "course") {// (document.getElementById('btnCourse').checked) {
        document.getElementById('addCourseFormDiv').style.display = "none";
        if (document.getElementById("includeMajor").checked == true) {
            selected = "major";
            lastSelected = "course";
            document.getElementById('majorCourseId').value = document.getElementById('courseId').value;
            handleMajor();
        }
        else {
            selected = "addSubject";
            lastSelected = "course";
            handleCourseSubjects();
        }
    }
    else if (selected == "major") {
        document.getElementById('addMajorFormDiv').style.display = "none";
        if (document.getElementById("includeStream").checked == true) {
            selected = "stream";
            lastSelected = "major";
            document.getElementById('streamMajorId').value = document.getElementById('majorId').value;
            handleStream();
        }
        else {
            selected = "addSubject";
            lastSelected = "major";
            handleCourseSubjects();
        }
    }
    else if (selected == "stream") {
        selected = "addSubject";
        lastSelected = "stream";
        handleCourseSubjects();
    }
}

//this controls the cancel button, and clears everything back to default
function handleCancel() {
    disableMenuBar(false);
    addVisible = false;
    selected = "course";
    document.getElementById('searchBar').value = "";
    document.getElementsByName('searchBar')[0].placeholder = "Search Courses";
    refreshFields();
    refreshNavColours();
    refreshTimetable();
    hide();

    document.getElementById("includeMajor").checked = false;
    document.getElementById("includeCourseTemplate").checked = false;
    document.getElementById("includeMajorTemplate").checked = false;

    document.getElementById("course").style.backgroundColor = selectedBlue;

    document.getElementById('searchDiv').style.display = "block";
    document.getElementById('addDiv').style.display = "block";
    document.getElementById('cancelButtonDiv').style.display = "none";

    //clearCourse();
    //clearMajor();
    //clearStream();
    //clearSubject();
}

//this controls the save button, and updates the changes to the database
function handleSaveChanges() {

}

//this controls the edit button, and allows the user to make edits to the object
function handleEdit() {
    var preList = document.getElementById("subjectPreReq");
    var preItems = preList.getElementsByTagName("a");
    for (var i = 0; i < preItems.length; i++) {
        $("#" + preItems[i].id).removeClass("disabled");
    }
    var antiList = document.getElementById("subjectAntiReq");
    var antiItems = antiList.getElementsByTagName("a");
    for (var i = 0; i < antiItems.length; i++) {
        $("#" + antiItems[i].id).removeClass("disabled");
    }

    //$('.list-groupitem').removeClass("disabled");

    document.getElementById("btnSave").disabled = false;

    document.getElementById("courseName").readOnly = false;
    document.getElementById("courseId").readOnly = false;
    document.getElementById("courseType").disabled = false;
    document.getElementById("courseAbb").readOnly = false;
    document.getElementById("courseYears").readOnly = false;
    document.getElementById("courseStages").readOnly = false;
    document.getElementById("courseCredit").readOnly = false;
    document.getElementById("courseVersion").readOnly = false;
    document.getElementById("courseVersionDescription").readOnly = false;
    document.getElementById("courseDescription").readOnly = false;
    document.getElementById("courseStatusActive").disabled = false;
    document.getElementById("courseStatusInActive").disabled = false;
    document.getElementById("includeCourseTemplate").disabled = false;
    document.getElementById("includeMajor").disabled = false;

    document.getElementById("majorName").readOnly = false;
    document.getElementById("majorId").readOnly = false;
    document.getElementById("majorAbb").readOnly = false;
    document.getElementById("majorVersion").readOnly = false;
    document.getElementById("majorStages").readOnly = false;
    document.getElementById("majorCredit").readOnly = false;
    document.getElementById("majorVersionDescription").readOnly = false;
    document.getElementById("majorDescription").readOnly = false;
    document.getElementById("majorStatusActive").disabled = false;
    document.getElementById("majorStatusInActive").disabled = false;
    document.getElementById("includeMajorTemplate").disabled = false;

    document.getElementById("subMajorOption").disabled = false;
    document.getElementById("streamOption").disabled = false;
    document.getElementById("choiceBlockOption").disabled = false;
    document.getElementById("streamName").readOnly = false;
    document.getElementById("streamId").readOnly = false;
    document.getElementById("streamAbb").readOnly = false;
    document.getElementById("streamVersion").readOnly = false;
    document.getElementById("streamCredit").readOnly = false;
    document.getElementById("streamVersionDescription").readOnly = false;
    document.getElementById("streamDescription").readOnly = false;
    document.getElementById("streamStatusActive").disabled = false;
    document.getElementById("streamStatusInActive").disabled = false;

    document.getElementById("subjectName").readOnly = false;
    document.getElementById("subjectId").readOnly = false;
    document.getElementById("subjectAbb").readOnly = false;
    document.getElementById("subjectCredit").readOnly = false;
    document.getElementById("subjectVersion").readOnly = false;
    document.getElementById("subjectStatusActive").disabled = false;
    document.getElementById("subjectStatusInActive").disabled = false;
    document.getElementById("subjectVersionDescription").readOnly = false;
    document.getElementById("subjectDescription").readOnly = false;
    document.getElementById("subjectPreReq").readOnly = false;
    document.getElementById("subjectAntiReq").readOnly = false;
    document.getElementById("subjectAntiReqInput").style.display = "block";
    document.getElementById("subjectPreReqInput").style.display = "block";

}

//this controls the submit button which sends the data via and ajax call to the database
function handleSubmit() { }

//this controls the update button which updates a particular item that already exists within the database
function handleUpdate() { }

//This deletes an item from the database ie subject, course etc 
function handleDelete() { }

//This is the button the user hits to add a subject and the associated information to the list of subjects for the course
function handleSubjectAdd() {
    //These need to change to become the name of the item that was typed in and autocompleted from the database.
    var name = "Software";
    var number = "1111"; // document.getElementById('number').value;
    var credit = "6";

    var div;
    var colour;

    var stage = document.getElementById("subjectStage").value;
    var type = document.getElementById("subjectType").value;

    if (stage == 1) {
        div = document.getElementById("stageOne");
    }
    else if (stage == 2) {
        div = document.getElementById("stageTwo");
    }
    else if (stage == 3) {
        div = document.getElementById("stageThree");
    }
    else if (stage == 4) {
        div = document.getElementById("stageFour");
    }
    else if (stage == 5) {
        div = document.getElementById("stageFive");
    }
    else if (stage == 6) {
        div = document.getElementById("stageSix");
    }
    else if (stage == 7) {
        div = document.getElementById("stageSeven");
    }
    else if (stage == 8) {
        div = document.getElementById("stageEight");
    }
    else if (stage == 9) {
        div = document.getElementById("stageNine");
    }
    else if (stage == 10) {
        div = document.getElementById("stageTen");
    }


    //This should become a dropdown later on
    if (type == "MAJ") {
        colour = "lightsalmon";
    }
    else if (type == "ELE") {
        colour = "lightpink";
    }
    else if (type == "CDS") {
        colour = "lightgreen";
    }
    else if (type == "MELE") {
        colour = "lightcyan";
    }
    else if (type == "COR") {
        colour = "lightsteelblue";
    }
    else if (type == "PP") {
        colour = "lightcoral";
    }

    var string = "<div id='" + number + "'><div class='row' style='border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + number + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><button type='button' style='background-color: red; color: white' class='btn btn-sm' onclick='removeSubject(" + number + ");'><span class='glyphicon glyphicon-minus'></span></button></div></div></div>"
    div.innerHTML += string;

    document.getElementById("subjectStage").value = "";
    document.getElementById("subjectType").value = "";
    document.getElementById("subjectTitle").value = "";
    document.getElementById("subjectNumber").value = "";
}

//This removes a subject from the timetable grid
function removeSubject(number) {
    document.getElementById(number).remove();
}

