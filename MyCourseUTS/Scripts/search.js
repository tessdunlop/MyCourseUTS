﻿var addVisible = false;
var selected = "course";
var lastSelected;
var selectedBlue = "#2478fc";
var templateItem;
var stage;

var selectedData;
var requisites;
var SMJRel;
var CBKRel;
var STMRel;


var edit = false;

var cor = "#bbd2f7";
var pp = "#d3bbf7";
var maj = "#f7bbbb";
var ele = "#f7f2bb";
var cds = "#ddf7bb";
var mele = "#f7dfbb";

var template = [];
var nextAvailableID = 0;
var relationships = [];
var majorsList = [];


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START OF API CALLS
function getAllCourses() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getallcourses";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of courses");
        }
    });
    return data;
}
function getAllMajors() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/major/getallmajors";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of majors");
        }
    });
    return data;
}
function getAllSubMajors() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/submajor/getallsubmajors";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of submajors");
        }
    });
    return data;
}
function getAllStreams() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/stream/getallstreams";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of streams");
        }
    });
    return data;
}
function getAllChoiceBlocks() {

    var url = "http://mycourseuts.azurewebsites.net/services/api/choiceblock/getallchoiceblocks";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of choice blocks");
        }
    });
    return data;
}
function getAllSubjects() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getallsubjects";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subjects");
        }
    });
    return data;
}

function getCourseTypes() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcoursetypes";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            // console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of course types");
        }
    });
    //console.log(data);
    return data;
}
function getSubjectTypes() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getsubjecttypes";
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subject types");
        }
    });
    //console.log(data);
    return data;
}

function getCourse(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcourse?courseID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/major/getmajor?majorID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajor?subMajorID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/stream/getstream?streamID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblock?choiceblockID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getsubject?subjectID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/subjectgrouping/getsubjectgrouping?subjectgroupingID=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getsubjectrequisite?subjectid=" + id;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcourses?value=" + term;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/major/getmajors?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of majors");
        }
    });
    return data;
}
function getSubMajors(term) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajors?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of submajors");
        }
    });
    return data;
}
function getStreams(term) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/stream/getstreams?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of streams");
        }
    });
    return data;
}
function getChoiceBlocks(term) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblocks?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of choice blocks");
        }
    });
    return data;
}
function getSubjects(term) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getsubjects?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subjects");
        }
    });
    return data;
}
function getListItem(term) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/listitem/getlist?value=" + term;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list");
        }
    });
    return data;
}

function getCourseRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcourserelationship?courseID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of course relationships");
        }
    });
    return data;
}
function getStreamRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/stream/getstreamrelationship?streamID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of stream relationships");
        }
    });
    return data;
}
function getChoiceBlockRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblockrelationship?choiceblockID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of choice block relationships");
        }
    });
    return data;
}
function getSubMajorRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajorrelationship?submajorID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of sub major relationships");
        }
    });
    return data;
}
function getSubjectGroupingRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/subjectgrouping/GetSubjectGroupingRelationship?subjectgroupingID=" + id;
    var data;
    $.ajax({
        url: url,
        type: 'GET',
        async: false,
        success: function (response) {
            //console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subject grouping relationships");
        }
    });
    return data;
}

function addCourse(item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/course/postcourse";
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            //document.getElementById("loading").style.display = "none";
        },
        error: function () {
            alert("There was an issue adding course");
        }
    });
}
function addMajor(item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/major/postmajor";
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding major");
        }
    });
}
function addChoiceBlock(item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/choiceblock/postchoiceblock";
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding choice block");
        }
    });
}
function addStream(item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/stream/poststream";
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding stream");
        }
    });
}
function addSubMajor(item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/submajor/postsubmajor";
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding sub major");
        }
    });
}
function addSubject(item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/subject/postsubject";
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding subject");
        }
    });
}

//delete everything that was in there and then insert the new values
function addCourseRelationship(id, item) {
    console.log(item);
    var url = "http://mycourseuts.azurewebsites.net/Services/api/course/postcourserelationship?courseID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding course relationship");
        }
    });
}
function addChoiceBlockRelationship(id, item) {
    console.log(relationships);
    var url = "http://mycourseuts.azurewebsites.net/Services/api/choiceblock/postchoiceblockrelationship?choiceblockID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding choice block relationship");
        }
    });
}
function addStreamRelationship(id, item) {
    console.log(item);
    var url = "http://mycourseuts.azurewebsites.net/Services/api/stream/poststreamrelationship?streamID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding stream relationship");
        }
    });
}
function addSubMajorRelationship(id, item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/submajor/postsubmajorrelationship?submajorID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding sub major relationship");
        }
    });
}
function addSubjectRequisitesRelationship(id, item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/subject/PostRequisiteRelationship?subjectID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue adding requisite relationship");
        }
    });
}

function deleteCourse(id) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/course/deletecourse?courseID=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue deleting course");
        }
    });
}
function deleteMajor(id) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/major/deletemajor?majorID=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue deleting major");
        }
    });
}
function deleteChoiceBlock(id) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/choiceblock/deletechoiceblock?choiceblockID=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue deleting choice block");
        }
    });
}
function deleteStream(id) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/stream/deletestream?streamID=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue deleting stream");
        }
    });
}
function deleteSubMajor(id) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/submajor/deletesubmajor?submajorD=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue deleting sub major");
        }
    });
}
function deleteSubject(id) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/subject/deletesubject?subjectID=" + id;
    $.ajax({
        url: url,
        type: 'DELETE',
        async: false,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
        },
        error: function () {
            alert("There was an issue deleting subject");
        }
    });
}

function generatePDF(courseID, majorID) {
    console.log(courseID);
    console.log(majorID);

    var url;
    if (majorID == null) {
        url = "http://mycourseuts.azurewebsites.net/Services/api/pdf/getpdf?courseID=" + courseID;
    }
    else {
        url = "http://mycourseuts.azurewebsites.net/Services/api/pdf/getpdf?courseID=" + courseID + "&majorID=" + majorID;
    }
    window.open(url);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END OF API CALLS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AESTHETICS
function populateCourseTypeDropdown() {
    var select = document.getElementById("courseType");
    var data = getCourseTypes();
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].ID;
        option.text = data[i].Abbreviation;
        select.add(option, null);
    }
}
function populateSubjectTypeDropdown(number) {

    var select = document.getElementById("subjectTypeDropDown" + number);
    var data = getSubjectTypes();
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].ID;
        option.text = data[i].Abbreviation;
        select.add(option, null);
    }

}
window.onload = function () {
    populateCourseTypeDropdown();
    document.getElementById("searchBar").focus();
}
function disableMenuBar(option) {
    if (option == true) {
        document.getElementById("course").disabled = true;
        document.getElementById("major").disabled = true;
        document.getElementById("submajor").disabled = true;
        document.getElementById("stream").disabled = true;
        document.getElementById("choiceblock").disabled = true;
        document.getElementById("subject").disabled = true;
    }
    else if (option == false) {
        document.getElementById("course").disabled = false;
        document.getElementById("major").disabled = false;
        document.getElementById("submajor").disabled = false;
        document.getElementById("stream").disabled = false;
        document.getElementById("choiceblock").disabled = false;
        document.getElementById("subject").disabled = false;
    }

}
function clearFields() {
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
    document.getElementById("majorInput").value = "";
    //document.getElementById("majorInput").style.display = "none";

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


    //stream
    document.getElementById("subMajorOption").checked = false;
    document.getElementById("streamDescription").value = "";
    document.getElementById("streamOption").checked = false;
    document.getElementById("choiceBlockOption").checked = false;
    document.getElementById("streamName").value = "";
    document.getElementById("streamId").value = "";
    document.getElementById("streamAbb").value = "";
    document.getElementById("streamVersion").value = "";
    document.getElementById("streamCredit").value = "";
    document.getElementById("streamVersionDescription").value = "";
    document.getElementById("streamStatusActive").checked = true;
    document.getElementById("streamStatusInActive").checked = false;
    document.getElementById("streamSubjectInput").value = "";
   // document.getElementById("streamSubjectInput").style.display = "none";

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
    document.getElementById("subjectCoReq").innerHTML = "";
    document.getElementById("subjectStatusActive").checked = true;
    document.getElementById("subjectStatusInActive").checked = false;
    document.getElementById("subjectAntiReqInput").value = "";
    document.getElementById("subjectCoReqInput").value = "";
    document.getElementById("subjectPreReqInput").value = "";
    //document.getElementById("subjectAntiReqInput").style.display = "none";
    //document.getElementById("subjectCoReqInput").style.display = "none";
    //document.getElementById("subjectPreReqInput").style.display = "none";

    document.getElementById("streamSubjectList").innerHTML = "";
    document.getElementById("subjectPreReq").innerHTML = "";
    document.getElementById("subjectAntiReq").innerHTML = "";
    document.getElementById("subjectCoReq").innerHTML = "";

    document.getElementById("accordion").innerHTML = "";

    //document.getElementById("subjectAddInput").value = "";
    //document.getElementById("subjectTypeDropDown").selectedIndex = 0;
    //document.getElementById("subjectStageInput").value = "";

    selectedCourse = "";
    selectedMajor = "";

    templateItem = "";
    stage = "";

    template = [];
    nextAvailableID = 0;
    relationships = [];
    majorsList = [];

    //handleEdit();
}
function refreshNavColours() {
    document.getElementById("course").style.backgroundColor = "lightskyblue";
    document.getElementById("subject").style.backgroundColor = "lightskyblue";
    document.getElementById("stream").style.backgroundColor = "lightskyblue";
    document.getElementById("submajor").style.backgroundColor = "lightskyblue";
    document.getElementById("choiceblock").style.backgroundColor = "lightskyblue";
    document.getElementById("major").style.backgroundColor = "lightskyblue";

    document.getElementById("course").style.color = "black";
    document.getElementById("subject").style.color = "black";
    document.getElementById("stream").style.color = "black";
    document.getElementById("submajor").style.color = "black";
    document.getElementById("choiceblock").style.color = "black";
    document.getElementById("major").style.color = "black";
}
function hide() {
    document.getElementById('searchDiv').style.display = "none";
    document.getElementById('addDiv').style.display = "none";
    document.getElementById('addCourseFormDiv').style.display = "none";
    document.getElementById('addSubjectFormDiv').style.display = "none";
    document.getElementById('addStreamFormDiv').style.display = "none";
    document.getElementById('addMajorFormDiv').style.display = "none";
    //document.getElementById('subjectListDiv').style.display = "none";
    document.getElementById('submitButtonDiv').style.display = "none";
    document.getElementById('updateButtonDiv').style.display = "none";
    document.getElementById('accordion').style.display = "none";
    //document.getElementById('subjectAddDisable').style.display = "none";
    document.getElementById("courseViewMode").style.display = "none";
    document.getElementById("courseEditMode").style.display = "none";
    document.getElementById("majorViewMode").style.display = "none";
    document.getElementById("majorEditMode").style.display = "none";
    document.getElementById("choiceViewMode").style.display = "none";
    document.getElementById("choiceEditMode").style.display = "none";
    document.getElementById("subjectViewMode").style.display = "none";
    document.getElementById("subjectEditMode").style.display = "none";
}


function hoverOn(e, item, id) {
    if (!edit) {
        console.log(item);
        var content = "<div id='hover' style='text-align: center;'><b><u>";
        var type = id.toString().substring(0, 3);
        var data;

        if (type == "SMJ") {
            data = getSubMajorRelationship(id);
            content += "Contents of Sub-Major:</u></b></div><br/><ul>";
        }
        else if (type == "STM") {
            data = getStreamRelationship(id);
            content += "Contents of Stream:</u></b></div><br/<ul>>";
        }
        else if (type == "CBK") {
            data = getChoiceBlockRelationship(id);
            content += "Contents of Choice Block:</u></b></div><br/><ul>";
        }
        else if (id.length < 4) {
            data = getSubjectGroupingRelationship(id);
            content += "Contents of Choice:</u></b></div><br/><ul>";
        }
        else {
            data = getSubjectRequisites(id);
            content += "Subject Pre-Requisites:</u></b></div><br/><ul>";
        }


        for (var i = 0; i < data.length; i++) {
            if (data[i].ContentStream != null) {
                content += "<div><li>" + data[i].ContentStream.Name + " - " + data[i].ContentStream.ID + "</li></div>";
            }
            if (data[i].ContentSubMajor != null) {
                content += "<div><li>" + data[i].ContentSubMajor.Name + " - " + data[i].ContentSubMajor.ID + "</li></div>";
            }
            if (data[i].ContentChoiceBlock != null) {
                content += "<div><li>" + data[i].ContentChoiceBlock.Name + " - " + data[i].ContentChoiceBlock.ID + "</li></div>";
            }
            if (data[i].ContentSubjectGrouping != null) {
                if (data[i].ContentSubjectGrouping.ID != id) {
                    var grouping = getSubjectGroupingRelationship(data[i].ContentSubjectGrouping.ID);
                    for (var x = 0; x < grouping.length; x++) {
                        if (grouping[x].ContentStream != null) {
                            content += "<div><li>" + grouping[x].ContentStream.Name + " - " + grouping[x].ContentStream.ID + "</li></div>";
                        }
                        else if (grouping[x].ContentSubMajor != null) {
                            content += "<div><li>" + grouping[x].ContentSubMajor.Name + " - " + grouping[x].ContentSubMajor.ID + "</li></div>";
                        }
                        else if (grouping[x].ContentChoiceBlock != null) {
                            content += "<div><li>" + grouping[x].ContentChoiceBlock.Name + " - " + grouping[x].ContentChoiceBlock.ID + "</li></div>";
                        }
                        else if (grouping[x].Subject != null) {
                            content += "<div><li>" + grouping[x].Subject.Name + " - " + grouping[x].Subject.ID + "</li></div>";
                        }
                    }
                }
            }
            if (data[i].Subject != null) {
                if (data[i].Requisite != null) {
                    if (data[i].RequisiteType.ID == 1) {//Prereqs only
                        content += "<div><li>" + data[i].Requisite.Name + " - " + data[i].Requisite.ID + "</li></div><br/>";
                    }
                }
                else {
                    content += "<div><li>" + data[i].Subject.Name + " - " + data[i].Subject.ID + "</li></div><br/>";
                }
            }
        }
        content += "</ul>";

        var compareStart = "<div id='hover' style='text-align: center;'><b><u>";
        var compareEnd = ":</u></b></div><br/><ul></ul>";

        if (!(content == compareStart + "Contents of Sub-Major" + compareEnd || content == compareStart + "Contents of Choice Block" + compareEnd || content == compareStart + "Contents of Stream" + compareEnd || content == compareStart + "Contents of Choice" + compareEnd || content == compareStart + "Subject Pre-Requisites" + compareEnd)) {
            var preview = document.getElementById("preview");
            preview.style.display = "block";
            preview.innerHTML = content;

            var body = document.body.getBoundingClientRect();
            var elemRect = item.getBoundingClientRect();
            var offset = elemRect.top - body.top;
            console.log(offset);

            preview.style.top = e.pageY + "px";
            preview.style.left = e.pageX + "px";
        }
    }
}
function hoverOff() {
    var preview = document.getElementById("preview");
    preview.innerHTML = "";
    preview.style.display = "none";
    console.log("off");
}

function disabledAddSubjectButton() {
    //if (document.getElementById("subjectAddInput").value != "" && document.getElementById("subjectStageInput").value != "") {
    //    document.getElementById("btnTimetableAdd").disabled = false;
    //}
    //else {
    //    document.getElementById("btnTimetableAdd").disabled = true;
    //}
}
function removeValidation() {
    document.getElementById("labelCourseName").style.color = "black";
    document.getElementById("labelCourseId").style.color = "black";
    document.getElementById("labelCourseAbbreviation").style.color = "black";
    document.getElementById("labelCourseYears").style.color = "black";
    document.getElementById("labelCourseStages").style.color = "black";
    document.getElementById("labelCourseCredit").style.color = "black";
    document.getElementById("labelCourseVersion").style.color = "black";

    document.getElementById("labelMajorName").style.color = "black";
    document.getElementById("labelMajorId").style.color = "black";
    document.getElementById("labelMajorAbbreviation").style.color = "black";
    document.getElementById("labelMajorStages").style.color = "black";
    document.getElementById("labelMajorCredit").style.color = "black";
    document.getElementById("labelMajorVersion").style.color = "black";

    document.getElementById("labelStreamName").style.color = "black";
    document.getElementById("labelStreamId").style.color = "black";
    document.getElementById("labelStreamAbbreviation").style.color = "black";
    document.getElementById("labelStreamCredit").style.color = "black";
    document.getElementById("labelStreamVersion").style.color = "black";

    document.getElementById("labelSubjectName").style.color = "black";
    document.getElementById("labelSubjectId").style.color = "black";
    document.getElementById("labelSubjectAbbreviation").style.color = "black";
    document.getElementById("labelSubjectCredit").style.color = "black";
    document.getElementById("labelSubjectVersion").style.color = "black";
}
function checkIfValid(type, name, id, abbreviation, years, stages, creditPoints, version) {
    var valid = true;
    if (selected == "course") {
        if (name == "" || id == "" || abbreviation == "" || years == "" || stages == "" || creditPoints == "" || version == "") {
            valid = false;
        }
    }
    else if (selected == "major") {
        if (name == "" || id == "" || abbreviation == "" || stages == "" || creditPoints == "" || version == "") {
            valid = false;
        }
    }
    else {
        if (name == "" || id == "" || abbreviation == "" || creditPoints == "" || version == "") {
            valid = false;
        }
    }

    if (!valid) {
        if (name == "") {
            document.getElementById("label" + type + "Name").style.color = "red";
        }
        else {
            document.getElementById("label" + type + "Name").style.color = "black";
        }
        if (id == "") {
            document.getElementById("label" + type + "Id").style.color = "red";
        }
        else {
            document.getElementById("label" + type + "Id").style.color = "black";
        }
        if (abbreviation == "") {
            document.getElementById("label" + type + "Abbreviation").style.color = "red";
        }
        else {
            document.getElementById("label" + type + "Abbreviation").style.color = "black";
        }
        if (selected == "course") {
            if (years == "") {
                document.getElementById("label" + type + "Years").style.color = "red";
            }
            else {
                document.getElementById("label" + type + "Years").style.color = "black";
            }
        }
        if (selected == "course" || selected == "major") {
            if (stages == "") {
                document.getElementById("label" + type + "Stages").style.color = "red";
            }
            else {
                document.getElementById("label" + type + "Stages").style.color = "black";
            }
        }
        if (creditPoints == "") {
            document.getElementById("label" + type + "Credit").style.color = "red";
        }
        else {
            document.getElementById("label" + type + "Credit").style.color = "black";
        }
        if (version == "") {
            document.getElementById("label" + type + "Version").style.color = "red";
        }
        else {
            document.getElementById("label" + type + "Version").style.color = "black";
        }
        return false;
    }
    else {
        return true;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END AESTHETICS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS PUSHING AND REMOVING ITEMS FROM LIST
function populateStmCbkSmjSubjects(id) {
    var data;
    var title;
    if (selected == "submajor") {
        data = getSubMajorRelationship(id);
        title = "SubMajor";
    }
    else if (selected == "stream") {
        data = getStreamRelationship(id);
        title = "Stream";
    }
    else if (selected == "choiceblock") {
        data = getChoiceBlockRelationship(id);
        title = "ChoiceBlock";
    }
    //relationships = data;

    var list = document.getElementById("streamSubjectList");
    var searchBar = document.getElementById("streamSubjectInput");



    //console.log(data);
    for (var i = 0; i < data.length; i++) {
        var number = data[i].ID;
        if (number < 20) {
            number = number + 100;
        }
        if (number > nextAvailableID) {
            nextAvailableID = number + 1;
        }


        if (data[i].ContentStream != null) {
            //Add functionality that if hover over this it will display the list of subjects within this
            var a = document.createElement("a");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].ContentStream.ID + " - " + data[i].ContentStream.Name));
            list.appendChild(a);

            relationships.push({
                "ID": number,
                title: { "ID": document.getElementById("streamId").value },
                "Subject": null,
                "ContentChoiceBlock": null,
                "ContentSubMajor": null,
                "Stream": null,
                "ContentSubjectGrouping": null,
                "ContentStream": { "ID": data[i].ContentStream.ID }
            });

        }
        else if (data[i].ContentSubMajor != null) {
            //Add functionality that if hover over this it will display the list of subjects within this
            var a = document.createElement("a");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].ContentSubMajor.ID + " - " + data[i].ContentSubMajor.Name));
            list.appendChild(a);

            relationships.push({
                "ID": number,
                title: { "ID": document.getElementById("streamId").value },
                "Subject": null,
                "ContentChoiceBlock": null,
                "ContentSubMajor": { "ID": data[i].ContentSubMajor.ID },
                "Stream": null,
                "ContentSubjectGrouping": null,
                "ContentStream": null
            });
        }
        else if (data[i].ContentChoiceBlock != null) {
            //Add functionality that if hover over this it will display the list of subjects within this
            var a = document.createElement("a");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].ContentChoiceBlock.ID + " - " + data[i].ContentChoiceBlock.Name));
            list.appendChild(a);

            relationships.push({
                "ID": number,
                title: { "ID": document.getElementById("streamId").value },
                "Subject": null,
                "ContentChoiceBlock": { "ID": data[i].ContentChoiceBlock.ID },
                "ContentSubMajor": null,
                "Stream": null,
                "ContentSubjectGrouping": null,
                "ContentStream": null
            });

        }
        else if (data[i].ContentSubjectGrouping != null) {
            relationships.push({
                "ID": number,
                title: { "ID": document.getElementById("streamId").value },
                "Subject": null,
                "ContentChoiceBlock": null,
                "ContentSubMajor": null,
                "Stream": null,
                "ContentSubjectGrouping": { "ID": data[i].ContentSubjectGrouping.ID },
                "ContentStream": null
            });

            //Do a call to get all the subjects within this subject grouping
            var grouping = getSubjectGroupingRelationship(data[i].ContentSubjectGrouping.ID);
            for (var x = 0; x < grouping.length; x++) {
                if (grouping[x].ContentStream != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', number);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentStream.ID + " - " + grouping[x].ContentStream.Name));
                    list.appendChild(a);
                }
                else if (grouping[x].ContentSubMajor != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', number);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentSubMajor.ID + " - " + grouping[x].ContentSubMajor.Name));
                    list.appendChild(a);
                }
                else if (grouping[x].ContentChoiceBlock != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', number);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentChoiceBlock.ID + " - " + grouping[x].ContentChoiceBlock.Name));
                    list.appendChild(a);
                }
                else if (grouping[x].Subject != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', number);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].Subject.ID + " - " + grouping[x].Subject.Name));
                    list.appendChild(a);
                }
            }

        }
        else if (data[i].Subject != null) {
            var a = document.createElement("a");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].Subject.ID + " - " + data[i].Subject.Name));
            list.appendChild(a);

            relationships.push({
                "ID": number,
                title: { "ID": document.getElementById("streamId").value },
                "Subject": { "ID": data[i].Subject.ID },
                "ContentChoiceBlock": null,
                "ContentSubMajor": null,
                "Stream": null,
                "ContentSubjectGrouping": null,
                "ContentStream": null
            });

        }
        //console.log(relationships);
    }
}

function handlePreRequisiteListPush(term) {
    var data = new Array();
    data = getSubjects(term);

    $("#subjectPreReqInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            event.preventDefault();
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectPreReq");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success ');
            a.appendChild(document.createTextNode(ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectPreReqInput").value = "";

            relationships.push({
                "ID": ui.item.value,
                "Subject": { "ID": +document.getElementById("subjectId").value },
                "Requisite": { "ID": ui.item.value },
                "RequisiteType": { "ID": 1 }
            });

            //console.log(relationships);
            $(this).val('');
        }

    });
}
function handleAntiRequisiteListPush(term) {
    var data = new Array();
    data = getSubjects(term);

    $("#subjectAntiReqInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            event.preventDefault();
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectAntiReq");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger');
            a.appendChild(document.createTextNode(ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectAntiReqInput").value = "";

            relationships.push({
                "ID": ui.item.value,
                "Subject": { "ID": +document.getElementById("subjectId").value },
                "Requisite": { "ID": ui.item.value },
                "RequisiteType": { "ID": 2 }
            });

            //console.log(relationships);
            $(this).val('');
        }

    });
}
function handleCoRequisiteListPush(term) {
    var data = new Array();
    data = getSubjects(term);

    $("#subjectCoReqInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            event.preventDefault();
           
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectCoReq");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-warning');
            a.appendChild(document.createTextNode(ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectCoReqInput").value = "";

            relationships.push({
                "ID": ui.item.value,
                "Subject": { "ID": +document.getElementById("subjectId").value },
                "Requisite": { "ID": ui.item.value },
                "RequisiteType": { "ID": 3 }
            });
            $(this).val('');
            //console.log(relationships);
        }

    });
}
function handleStmCbkSmjListPush(term) {
    var data = getListItem(term);

    $("#streamSubjectInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            event.preventDefault();

            nextAvailableID++;
            var subjectList = document.getElementById("streamSubjectList");
            var a = document.createElement("a");
            a.setAttribute('id', ui.item.label + nextAvailableID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success');
            a.appendChild(document.createTextNode(ui.item.label));
            subjectList.appendChild(a);
            document.getElementById("streamSubjectInput").value = "";

            var type = (ui.item.value).toString().substring(0, 3);
            if (selected == "submajor") {
                if (type == "SMJ") {
                    relationships.push({
                        "ID": nextAvailableID,
                        "SubMajor": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": { "ID": ui.item.value },
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
                else if (type == "STM") {

                    relationships.push({
                        "ID": nextAvailableID,
                        "SubMajor": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": { "ID": ui.item.value }
                    });
                }
                else if (type == "CBK") {

                    relationships.push({
                        "ID": nextAvailableID,
                        "SubMajor": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": { "ID": ui.item.value },
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
                else if (ui.item.value.length < 4) {

                    relationships.push({
                        "ID": nextAvailableID,
                        "SubMajor": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": { "ID": ui.item.value },
                        "ContentStream": null
                    });
                }
                else {

                    relationships.push({
                        "ID": nextAvailableID,
                        "SubMajor": { "ID": selectedData.ID },
                        "Subject": { "ID": ui.item.value },
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
            }
            else if (selected == "stream") {
                if (type == "SMJ") {
                    relationships.push({
                        "ID": nextAvailableID,
                        "Stream": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": { "ID": ui.item.value },
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
                else if (type == "STM") {

                    relationships.push({
                        "ID": nextAvailableID,
                        "Stream": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": { "ID": ui.item.value }
                    });
                }
                else if (type == "CBK") {

                    relationships.push({
                        "ID": nextAvailableID,
                        "Stream": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": { "ID": ui.item.value },
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
                else if (ui.item.value.length < 4) {

                    relationships.push({
                        "ID": nextAvailableID,
                        "Stream": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": { "ID": ui.item.value },
                        "ContentStream": null
                    });
                }
                else {

                    relationships.push({
                        "ID": nextAvailableID,
                        "Stream": { "ID": selectedData.ID },
                        "Subject": { "ID": ui.item.value },
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
            }
            else if (selected == "choiceblock") {
                if (type == "SMJ") {
                    relationships.push({
                        "ID": nextAvailableID,
                        "ChoiceBlock": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": { "ID": ui.item.value },
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
                else if (type == "STM") {

                    relationships.push({
                        "ID": nextAvailableID,
                        "ChoiceBlock": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": { "ID": ui.item.value }
                    });
                }
                else if (type == "CBK") {

                    relationships.push({
                        "ID": nextAvailableID,
                        "ChoiceBlock": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": { "ID": ui.item.value },
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
                else if (ui.item.value.length < 4) {

                    relationships.push({
                        "ID": nextAvailableID,
                        "ChoiceBlock": { "ID": selectedData.ID },
                        "Subject": null,
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": { "ID": ui.item.value },
                        "ContentStream": null
                    });
                }
                else {

                    relationships.push({
                        "ID": nextAvailableID,
                        "ChoiceBlock": { "ID": selectedData.ID },
                        "Subject": { "ID": ui.item.value },
                        "ContentChoiceBlock": null,
                        "ContentSubMajor": null,
                        "ContentSubjectGrouping": null,
                        "ContentStream": null
                    });
                }
            }

            

            console.log(relationships);

            //need to check if its stm etc
            $(this).val('');

        }
    });

}
function handleMajorListPush(term) {
    var data = new Array();
    data = getMajors(term);

    $("#majorInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            event.preventDefault();

            var name = document.getElementById("courseName").value;
            var id = document.getElementById("courseId").value;
            var abbreviation = document.getElementById("courseAbb").value;
            var description = document.getElementById("courseDescription").value;
            var years = document.getElementById("courseYears").value;
            var stages = document.getElementById("courseStages").value;
            var creditPoints = document.getElementById("courseCredit").value;
            var version = document.getElementById("courseVersion").value;
            
            if (checkIfValid("Course", name, id, abbreviation, years, stages, creditPoints, version)) {
                var exists = 0;
                for (var x = 0; x < majorsList.length; x++) {
                    if (ui.item.value == majorsList[x].ID) {
                        exists = 1;
                    }
                }
                if (exists == 0) {
                    majorsList.push(getMajor(ui.item.value));
                }
                template.push({
                    "ID": ui.item.value,
                    "Course": { "ID": document.getElementById("courseId").value },
                    "Major": { "ID": ui.item.value },
                    "Subject": null,
                    "ChoiceBlock": null,
                    "SubMajor": null,
                    "Stream": null,
                    "SubjectGrouping": null,
                    "SubjectType": null,
                    "Stage": null,
                    "Year": null,
                    "HasTemplate": false
                });
                refreshTemplate();
                
            //some refresh to add this to the list
            }
            else {
                alert("Please enter valid Course information before adding a major");
            }

            //$("#majorInput").val("");
            //document.getElementById("majorInput").value = "";
            $(this).val('');
        }
       
    });
    
}
function removeFromList(id) {
    var listElement = document.getElementById(id);
    if ($("#" + id).hasClass("disabled")) { }
    else {
        listElement.remove();
        for (var i = 0; i < relationships.length; i++) {
            if (relationships[i].ID == id) {
                console.log(relationships[i]);
                relationships.splice(i, 1);
            }
        }
        console.log(relationships);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END FUNCTIONS PUSHING AND REMOVING ITEMS FROM LIST


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////HANDLES INPUT EVENTS
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
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            document.getElementById("introViewMode").style.display = "none";
            disableMenuBar(true);
            document.getElementById("addDiv").style.display = "none";
            document.getElementById('searchDiv').style.display = "none";
            document.getElementById("btnSave").disabled = true;
            document.getElementById("btnDelete").disabled = true;
            document.getElementById('updateButtonDiv').style.display = "flex";
            if (selected == "course") {
                selectedData = getCourse(ui.item.value);
                handleViewEditCourse(selectedData);
                document.getElementById("courseViewMode").style.display = "block";
                document.getElementById("courseEditMode").style.display = "none";
                //console.log(selectedData);
            }
            else if (selected == "major") {
                selectedData = getMajor(ui.item.value);
                handleViewEditMajor(selectedData);
                document.getElementById("majorViewMode").style.display = "block";
                document.getElementById("majorEditMode").style.display = "none";
                //console.log(selectedData);
            }
            else if (selected == "submajor" || selected == "stream" || selected == "choiceblock") {
                if (selected == "submajor") {
                    selectedData = getSubMajor(ui.item.value);
                    //console.log(selectedData);
                }
                else if (selected == "stream") {
                    selectedData = getStream(ui.item.value);
                    //console.log(selectedData);
                }
                else if (selected == "choiceblock") {
                    selectedData = getChoiceBlock(ui.item.value);
                    //console.log(selectedData);
                }
                handleViewEditStreamSubChoice(selectedData);
                document.getElementById("choiceViewMode").style.display = "block";
                document.getElementById("choiceEditMode").style.display = "none";
            }
            else if (selected == "subject") {
                selectedData = getSubject(ui.item.value);
                handleViewEditSubject(selectedData);
                //console.log(selectedData);
                document.getElementById("subjectViewMode").style.display = "block";
                document.getElementById("subjectEditMode").style.display = "none";
            }
        }
    });
}
function handleSubjectInput(term, number) {
    var data = getListItem(term);
    disabledAddSubjectButton();

    $("#subjectAddInput" + number).autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.ID + " - " + value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            //console.log(ui);
            var type = (ui.item.value).toString().substring(0, 3);
            if (type == "CBK") {
                templateItem = getChoiceBlock(ui.item.value);
            }
            else if (type == "STM") {
                templateItem = getStream(ui.item.value);
            }
            else if (type == "SMJ") {
                templateItem = getSubMajor(ui.item.value);
            }
            else {
                templateItem = getSubject(ui.item.value);
            }
            disabledAddSubjectButton();
        }

    });
}
function handleSubjectStageInput(term) {
    stage = term;
    disabledAddSubjectButton();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END HANDLES INPUT EVENTS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS TO EDIT/loaVIEW OBJECTS
function handleViewEditCourse(data) {

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
    document.getElementById("majorInput").disabled = true;


    document.getElementById('addCourseFormDiv').style.display = "block";
    mapCourseRelationships();
    //refreshTemplate(data.Stages);
    refreshTemplate();

    if (majorsList.length != 0) {
        for (var i = 0; i < majorsList.length; i++) {
            document.getElementById("input" + majorsList[i].ID).style.display = "none";
            document.getElementById("remove" + majorsList[i].ID).style.display = "none";
        }
    }
    else {
        document.getElementById("input" + selectedData.ID).style.display = "none";
    }



}
function handleViewEditMajor(data) {

    document.getElementById("majorName").value = data.Name;
    document.getElementById("majorId").value = data.ID;
    document.getElementById("majorAbb").value = data.Abbreviation;
    document.getElementById("majorVersion").value = data.Version;
    document.getElementById("majorStages").value = data.Stages;
    document.getElementById("majorCredit").value = data.CreditPoints;
    document.getElementById("majorVersionDescription").value = data.VersionDescription;
    document.getElementById("majorDescription").value = data.MajorDescription;
    if (data.Active == true) {
        document.getElementById("majorStatusActive").checked = true;
    }
    else {
        document.getElementById("majorStatusInActive").checked = true;
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
    document.getElementById("majorInput").style.display = "none";

    document.getElementById('addMajorFormDiv').style.display = "block";
}
function handleViewEditStreamSubChoice(data) {
    if (selected == "submajor") {
        document.getElementById("subMajorOption").checked = true;
        document.getElementById("streamDescription").value = data.SubMajorDescription;
    }
    else if (selected == "stream") {
        document.getElementById("streamOption").checked = true;
        document.getElementById("streamDescription").value = data.StreamDescription;
    }
    else if (selected == "choiceblock") {
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
    document.getElementById("streamSubjectInput").readOnly = true;
    populateStmCbkSmjSubjects(data.ID);

    document.getElementById('addStreamFormDiv').style.display = "block";
}
function handleViewEditSubject(data) {
    var reqs = getSubjectRequisites(data.ID);
    relationships = reqs;
    //console.log(data);
    //console.log(reqs);
    document.getElementById("subjectName").value = data.Name;
    document.getElementById("subjectId").value = data.ID;
    document.getElementById("subjectAbb").value = data.Abbreviation;
    document.getElementById("subjectCredit").value = data.CreditPoints;
    document.getElementById("subjectVersion").value = data.Version;
    document.getElementById("subjectVersionDescription").value = data.VersionDescription;
    document.getElementById("subjectDescription").value = data.SubjectDescription;

    for (var i = 0; i < reqs.length; i++) {
        var number = reqs[i].ID;
        if (number < 20) {
            number = number + 100;
        }
        if (number > nextAvailableID) {
            nextAvailableID = number + 1;
        }

        if (reqs[i].RequisiteType.Abbreviation == "PRE") {
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectPreReq");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name));
            subReq.appendChild(a);

            //$("#subjectAntiReq").append("<a href='#' class='list-group-item list-group-item-action list-group-item-success disabled'>" + reqs[i].Requisite.ID +" - " + reqs[i].Requisite.Name + "</a>");
        }
        else if (reqs[i].RequisiteType.Abbreviation == "ANTI") {
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectAntiReq");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger disabled');
            a.appendChild(document.createTextNode(reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name));
            subReq.appendChild(a);
            //$("#subjectPreReq").append("<a href='#' class='list-group-item list-group-item-action list-group-item-danger disabled'>" + reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name + "</a>");
        }
        else if (reqs[i].RequisiteType.Abbreviation == "CO") {
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectCoReq");
            a.setAttribute('id', number);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-warning disabled');
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
    document.getElementById("subjectCoReq").readOnly = true;
    document.getElementById("subjectAntiReqInput").readOnly = "true";
    document.getElementById("subjectCoReqInput").readOnly = "true";
    document.getElementById("subjectPreReqInput").readOnly = "true";

    document.getElementById('addSubjectFormDiv').style.display = "block";
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END FUNCTIONS TO EDIT/VIEW OBJECTS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TAB BUTTON FUNCTIONS
//Displays the course form
function handleCourse() {
    selected = "course";
    document.getElementById('searchBar').value = "";
    $("#course").tab('show');
    //refreshNavColours();
    //document.getElementById("course").style.backgroundColor = selectedBlue;
    //document.getElementById("course").style.color = "white";
    document.getElementsByName('searchBar')[0].placeholder = "Search Courses";
    if (addVisible == true) {
        hide();
        document.getElementById('addCourseFormDiv').style.display = "block";
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('nextButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
//displays the major form
function handleMajor() {
    selected = "major";
    document.getElementById('searchBar').value = "";
    //refreshNavColours();
    //document.getElementById("major").style.backgroundColor = selectedBlue;
    //document.getElementById("major").style.color = "white";
    document.getElementsByName('searchBar')[0].placeholder = "Search Majors";
    if (addVisible == true) {
        hide();
        document.getElementById('addMajorFormDiv').style.display = "block";
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
//displays the stream form
function handleStream() {
    selected = "stream";
    document.getElementById('searchBar').value = "";
    document.getElementById("streamOption").checked = true;
    document.getElementById("labelStreamName").innerHTML = "<b>Stream Name</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("labelStreamId").innerHTML = "<b>Stream Indentification</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("labelStreamAbbreviation").innerHTML = "<b>Stream Abbreviation</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamDescriptionTitle").innerHTML = "<b>Stream Description</b>";
    //refreshNavColours();
    //document.getElementById("stream").style.backgroundColor = selectedBlue;
    // document.getElementById("stream").style.color = "white";
    document.getElementsByName('searchBar')[0].placeholder = "Search Streams";

    if (addVisible == true) {
        hide();
        document.getElementById('addStreamFormDiv').style.display = "block";
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
function handleSubMajor() {
    selected = "submajor";
    document.getElementById('searchBar').value = "";
    document.getElementById("subMajorOption").checked = true
    document.getElementById("labelStreamName").innerHTML = "<b>Sub-Major Name</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("labelStreamId").innerHTML = "<b>Sub-Major Identification</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("labelStreamAbbreviation").innerHTML = "<b>Sub-Major Abbreviation</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamDescriptionTitle").innerHTML = "<b>Sub-Major Description</b>";
    //refreshNavColours();
    //document.getElementById("submajor").style.backgroundColor = selectedBlue;
    //document.getElementById("submajor").style.color = "white";
    document.getElementsByName('searchBar')[0].placeholder = "Search Sub-Majors";

    if (addVisible == true) {
        hide();
        document.getElementById('addStreamFormDiv').style.display = "block";
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
function handleChoiceBlock() {
    selected = "choiceblock";
    document.getElementById('searchBar').value = "";
    document.getElementById("choiceBlockOption").checked = true
    document.getElementById("labelStreamName").innerHTML = "<b>Choice Block Name</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("labelStreamId").innerHTML = "<b>Choice Block Identification</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("labelStreamAbbreviation").innerHTML = "<b>Choice Block Abbreviation</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamDescriptionTitle").innerHTML = "<b>Choice Block Description</b>";
    // refreshNavColours();
    //document.getElementById("choiceblock").style.backgroundColor = selectedBlue;
    //document.getElementById("choiceblock").style.color = "white";
    document.getElementsByName('searchBar')[0].placeholder = "Search Choice Blocks";

    if (addVisible == true) {
        hide();
        document.getElementById('addStreamFormDiv').style.display = "block";
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
//displays the subject form
function handleSubject() {
    selected = "subject";
    document.getElementById('searchBar').value = "";
    //refreshNavColours();
    //document.getElementById("subject").style.backgroundColor = selectedBlue;
    //document.getElementById("subject").style.color = "white";
    document.getElementsByName('searchBar')[0].placeholder = "Search Subjects";
    if (addVisible == true) {
        hide();
        document.getElementById('addSubjectFormDiv').style.display = "block";
        document.getElementById('submitButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END TAB BUTTON FUNCTIONS




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All BUTTONS
//this handles the adding to the form
function handleAdd() {
    addVisible = true;
    document.getElementById("introViewMode").style.display = "none";
    document.getElementById("subMajorOption").disabled = false;
    document.getElementById("streamOption").disabled = false;
    document.getElementById("choiceBlockOption").disabled = false;
    //document.getElementById('searchDiv').style.display = "none";
    //document.getElementById('addDiv').style.display = "none";
    handleEdit(true);

    if (selected == "course") {
        handleCourse();
        document.getElementById("courseEditMode").style.display = "block";
    }
    else if (selected == "major") {       
        handleMajor();
        document.getElementById("majorEditMode").style.display = "block";
    }
    else if (selected == "stream") {     
        handleStream();
        document.getElementById("choiceEditMode").style.display = "block";
    }
    else if (selected == "submajor") {
        handleSubMajor();
        document.getElementById("choiceEditMode").style.display = "block";
    }
    else if (selected == "choiceblock") {
        handleChoiceBlock();
        document.getElementById("choiceEditMode").style.display = "block";
    }
    else if (selected == "subject") {
        handleSubject();
        document.getElementById("subjectEditMode").style.display = "block";
    }
}
//this controls the cancel button, and clears everything back to default
function handleCancel() {
    $("#loading").show();
    edit = false;
    disableMenuBar(false);
    addVisible = false;
    handleCourse();
    clearFields();
    hide();
    removeValidation();
    document.getElementById('btnEdit').disabled = false;
    document.getElementById('searchDiv').style.display = "block";
    document.getElementById('addDiv').style.display = "block";
    document.getElementById('updateButtonDiv').style.display = "none";
    document.getElementById('submitButtonDiv').style.display = "none";
    document.getElementById("searchBar").focus();

    document.getElementById("btnEdit").style.display = "block";
    document.getElementById("btnCancel").style.display = "block";
    document.getElementById("btnSave").style.display = "none";
    document.getElementById("btnDelete").style.display = "none";

    $("#loading").hide();
}
//this controls the save button, and updates the changes to the database
function handleSave() {
    var confirmSave = confirm("Are you sure you want to save?");
    if (confirmSave) {
        var valid = true;
        //NEED TO ADD LOADING FUNCTIONALITY HERE
        if (selected == "course") {
            var name = document.getElementById("courseName").value;
            var id = document.getElementById("courseId").value;
            var abbreviation = document.getElementById("courseAbb").value;
            var description = document.getElementById("courseDescription").value;
            var years = document.getElementById("courseYears").value;
            var stages = document.getElementById("courseStages").value;
            var creditPoints = document.getElementById("courseCredit").value;
            var version = document.getElementById("courseVersion").value;
            var versionDescription = document.getElementById("courseVersionDescription").value;
            var typeID = document.getElementById("courseType").selectedIndex + 1;
            var status = document.getElementById("courseStatusActive").checked;

            if (checkIfValid("Course", name, id, abbreviation, years, stages, creditPoints, version)) {
                $("#loading").show();
                var item = {
                    "ID": id, "Name": name, "Abbreviation": abbreviation, "CourseDescription": description,
                    "Years": years, "Stages": stages, "CreditPoints": creditPoints, "Version": version, "VersionDescription": versionDescription,
                    "CourseType": { "ID": typeID }, "Active": status
                };
                addCourse(item);
                addCourseRelationship(id, template);
                handleCancel();
            }
        }
        else if (selected == "major") {
            var name = document.getElementById("majorName").value;
            var id = document.getElementById("majorId").value;
            var abbreviation = document.getElementById("majorAbb").value;
            var description = document.getElementById("majorDescription").value;
            var stages = document.getElementById("majorStages").value;
            var creditPoints = document.getElementById("majorCredit").value;
            var version = document.getElementById("majorVersion").value;
            var versionDescription = document.getElementById("majorVersionDescription").value;
            var status = document.getElementById("majorStatusActive").checked;
            var hasTemplate = document.getElementById("includeMajorTemplate").checked;

            if (checkIfValid("Course", name, id, abbreviation, "0", stages, creditPoints, version)) {
                $("#loading").show();
                var item = {
                    "ID": id, "Name": name, "Abbreviation": abbreviation, "MajorDescription": description,
                    "Stages": stages, "CreditPoints": creditPoints, "Version": version, "VersionDescription": versionDescription,
                    "Active": status
                };
                addMajor(item);
                handleCancel();
            }
        }
        else if (selected == "stream" || selected == "choiceblock" || selected == "submajor") {
            var name = document.getElementById("streamName").value;
            var id = document.getElementById("streamId").value;
            var abbreviation = document.getElementById("streamAbb").value;
            var description = document.getElementById("streamDescription").value;
            var creditPoints = document.getElementById("streamCredit").value;
            var version = document.getElementById("streamVersion").value;
            var versionDescription = document.getElementById("streamVersionDescription").value;
            var status = document.getElementById("streamStatusActive").checked;

            if (checkIfValid("Stream", name, id, abbreviation, "0", "0", creditPoints, version)) {
                $("#loading").show();
                if (selected == "stream") {
                    var item = {
                        "ID": id, "Name": name, "Abbreviation": abbreviation, "StreamDescription": description,
                        "Version": version, "VersionDescription": versionDescription,
                        "Active": status, "CreditPoints": creditPoints
                    };
                    addStream(item);
                    addStreamRelationship(selectedData.ID, relationships);
                }
                else if (selected == "choiceblock") {
                    var item = {
                        "ID": id, "Name": name, "Abbreviation": abbreviation, "ChoiceBlockDescription": description,
                        "Version": version, "VersionDescription": versionDescription,
                        "Active": status, "CreditPoints": creditPoints
                    };
                    addChoiceBlock(item);
                    addChoiceBlockRelationship(selectedData.ID, relationships);
                }
                else if (selected == "submajor") {
                    var item = {
                        "ID": id, "Name": name, "Abbreviation": abbreviation, "SubMajorDescription": description,
                        "Version": version, "VersionDescription": versionDescription,
                        "Active": status, "CreditPoints": creditPoints
                    };
                    addSubMajor(item);
                    addSubMajorRelationship(selectedData.ID, relationships);
                }
                handleCancel();
            }
        }

        else if (selected == "subject") {
            var name = document.getElementById("subjectName").value;
            var id = document.getElementById("subjectId").value;
            var abbreviation = document.getElementById("subjectAbb").value;
            var description = document.getElementById("subjectDescription").value;
            var creditPoints = document.getElementById("subjectCredit").value;
            var version = document.getElementById("subjectVersion").value;
            var versionDescription = document.getElementById("subjectVersionDescription").value;
            var status = document.getElementById("subjectStatusActive").checked;

            if (checkIfValid("Subject", name, id, abbreviation, "0", "0", creditPoints, version)) {
                $("#loading").show();
                var item = {
                    "ID": id, "Name": name, "Abbreviation": abbreviation, "SubjectDescription": description,
                    "Version": version, "VersionDescription": versionDescription,
                    "Active": status, "CreditPoints": creditPoints
                };
                addSubject(item);
                addSubjectRequisitesRelationship(id, relationships);
                handleCancel();
            }
        }
    }
}
//this controls the edit button, and allows the user to make edits to the object
function handleEdit(newAddition) {
    newAddition = newAddition || false; 

    document.getElementById("btnEdit").disabled = true;
    edit = true;

    document.getElementById("btnSave").disabled = false;
    document.getElementById("btnDelete").disabled = false;

    document.getElementById("btnEdit").style.display = "none";
    document.getElementById("btnCancel").style.display = "block";
    document.getElementById("btnSave").style.display = "block";
    document.getElementById("btnDelete").style.display = "block";

    if (selected == "course") {
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
        document.getElementById("majorInput").disabled = false;
        document.getElementById("majorInput").style.display = "block";
        document.getElementById("courseViewMode").style.display = "none";
        document.getElementById("courseEditMode").style.display = "block";

        if (newAddition == false) {
            if (majorsList.length != 0) {
                for (var i = 0; i < majorsList.length; i++) {
                    document.getElementById("input" + majorsList[i].ID).style.display = "block";
                    document.getElementById("remove" + majorsList[i].ID).style.display = "block";
                }
            }
            else {
                document.getElementById("input" + selectedData.ID).style.display = "block";
            }
        }
    }
    else if (selected == "major") {
        document.getElementById("majorViewMode").style.display = "none";
        document.getElementById("majorEditMode").style.display = "block";

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
    }
    else if (selected == "subject") {
        document.getElementById("subjectViewMode").style.display = "none";
        document.getElementById("subjectEditMode").style.display = "block";

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
        var CoList = document.getElementById("subjectCoReq");
        var CoItems = CoList.getElementsByTagName("a");
        for (var i = 0; i < CoItems.length; i++) {
            $("#" + CoItems[i].id).removeClass("disabled");
        }

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
        document.getElementById("subjectCoReq").readOnly = false;

        document.getElementById("subjectCoReqInput").readOnly = false;
        document.getElementById("subjectAntiReqInput").readOnly = false;
        document.getElementById("subjectPreReqInput").readOnly = false;
    }
    else {
        document.getElementById("choiceViewMode").style.display = "none";
        document.getElementById("choiceEditMode").style.display = "block";

        var streamSubjectList = document.getElementById("streamSubjectList");
        var items = streamSubjectList.getElementsByTagName("a");
        for (var i = 0; i < items.length; i++) {
            $("#" + items[i].id).removeClass("disabled");
        }

        document.getElementById("streamName").readOnly = false;
        document.getElementById("streamId").readOnly = false;
        document.getElementById("streamAbb").readOnly = false;
        document.getElementById("streamVersion").readOnly = false;
        document.getElementById("streamCredit").readOnly = false;
        document.getElementById("streamVersionDescription").readOnly = false;
        document.getElementById("streamDescription").readOnly = false;
        document.getElementById("streamStatusActive").disabled = false;
        document.getElementById("streamStatusInActive").disabled = false;
        document.getElementById("streamSubjectInput").readOnly = false;
    }
}
//This deletes an item from the database ie subject, course etc 
function handleDelete() {
    var confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
        document.getElementById("loading").style.display = "block";
        if (selected == "course") {
            deleteCourse(selectedData.ID);
        }
        else if (selected == "major") {
            deleteMajor(selectedData.ID);
        }
        else if (selected == "stream") {
            deleteStream(selectedData.ID);
        }
        else if (selected == "submajor") {
            deleteSubMajor(selectedData.ID);
        }
        else if (selected == "choiceblock") {
            deleteChoiceBlock(selectedData.ID);
        }
        else if (selected == "subject") {
            deleteSubject(selectedData.ID);
        }
        handleCancel();
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END ALL BUTTONS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All TEMPLATE FUNCTIONS
function checkYearValue(year) {
    if (year != "") {
        document.getElementById("courseStages").value = (+year * 2);
        if (selectedData != null) {
            refreshTemplate();
        }
    }
}
function checkStageValue(stage) {
    if (stage != "") {
        document.getElementById("courseYears").value = (+stage / 2);
        if (selectedData != null) {
            refreshTemplate();
        }
    }

}


function mapCourseRelationships() {
    template = [];
    majorsList = [];
    template = getCourseRelationship(selectedData.ID);
    var exists;
    for (var i = 0; i < template.length; i++) {
        if (template[i].Major != null) {
            exists = 0;
            for (var x = 0; x < majorsList.length; x++) {
                if (template[i].Major.ID == majorsList[x].ID) {
                    exists = 1;
                }
            }
            if (exists == 0) {
                majorsList.push(template[i].Major);
            }
        }
    }
}

function refreshTemplate() {
    //document.getElementById("majorInput").value = "";
    var totalStages = +document.getElementById("courseStages").value;
    console.log(template);
    var accordion = document.getElementById("accordion");
    accordion.innerHTML = "";
    accordion.style.display = "block";
    var updated;
    if (majorsList.length != 0) {
        for (var y = 0; y < majorsList.length; y++) {
            var name = majorsList[y].Name;
            var id = majorsList[y].ID
            for (var x = 0; x < template.length; x++) {
                if (majorsList[y].ID == template[x].Major.ID) {
                    updated = template[x].DateUpdated;
                    console.log(updated);
                }
            }
            if (updated == null) {
                updated = "now";
            }
            if (selectedData == null) {
                accordion.innerHTML += "<button id='button" + y + "' type='button' style='background-color:lightskyblue; color: black' onclick='showAccordion(" + y + ")' class='w3-btn w3-block'>" + id + " - " + name + "</button><div id='" + y + "' class=' w3-hide'><div id='input" + id + "'><div class='row' ><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject or Group</b></p></div> <div class='col' style='padding-top: 12px'> <input id='subjectAddInput" + y + "' name='searchBar' type='text' class='form-control typeahead' placeholder='Subject, CBK, SMJ or STM' oninput='handleSubjectInput(this.value, " + y + ");' style='width: 100%;' /></div> <div class='col' style='text-align: center;'></div> </div > <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject Type</b></p></div><div class='col' style='padding-top: 12px'><select id='subjectTypeDropDown" + y + "' class='form-control' style='width: 100%; height: 100%'> </select> </div> <div class='col' style='text-align: center;'></div></div> <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Stage</b></p></div> <div class='col' style='padding-top: 12px''><input id='subjectStageInput" + y + "' name='searchBar' type='number' class='form-control typeahead' style='width: 100%;' oninput='handleSubjectStageInput(this.value)' /> </div> <div class='col' style='text-align: left; padding-bottom: 30px'><button id='btnTimetableAdd' type='button' class='btn btn-lg' onclick='addToTimetable(" + y + ");' style='background-color: green; color: white'><i class='fa fa-plus'></i></button ></div></div></div><div class='row' id='body" + y + "'></div><br/><p style='text-align:right;'>Last Updated: " + updated + "</p><br/><center><button id='remove" + id + "' style='text-align:center;' class='btn btn-danger' type='button' onclick='removeMajor(this.id);'>Remove " + name + " from " + document.getElementById("courseName").value + "</button></center><br/><br/></div>";
            }
            else {
                accordion.innerHTML += "<button id='button" + y + "' type='button' style='background-color:lightskyblue; color: black' onclick='showAccordion(" + y + ")' class='w3-btn w3-block'>" + id + " - " + name + "</button><div id='" + y + "' class=' w3-hide'><div id='input" + id + "'><div class='row' ><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject or Group</b></p></div> <div class='col' style='padding-top: 12px'> <input id='subjectAddInput" + y + "' name='searchBar' type='text' class='form-control typeahead' placeholder='Subject, CBK, SMJ or STM' oninput='handleSubjectInput(this.value, " + y + ");' style='width: 100%;' /></div> <div class='col' style='text-align: center;'></div> </div > <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject Type</b></p></div><div class='col' style='padding-top: 12px'><select id='subjectTypeDropDown" + y + "' class='form-control' style='width: 100%; height: 100%'> </select> </div> <div class='col' style='text-align: center;'></div></div> <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Stage</b></p></div> <div class='col' style='padding-top: 12px''><input id='subjectStageInput" + y + "' name='searchBar' type='number' class='form-control typeahead' style='width: 100%;' oninput='handleSubjectStageInput(this.value)' /> </div> <div class='col' style='text-align: left; padding-bottom: 30px'><button id='btnTimetableAdd' type='button' class='btn btn-lg' onclick='addToTimetable(" + y + ");' style='background-color: green; color: white'><i class='fa fa-plus'></i></button ></div></div></div><div class='row' id='body" + y + "'></div><br/><p style='text-align:right;'>Last Updated: " + updated + "</p><br/><center><button id='remove" + id + "' style='text-align:center;' class='btn btn-danger' type='button' onclick='removeMajor(this.id);'>Remove " + name + " from " + selectedData.Name + "</button></center><br/><button id='" + id + "' type='button' class='btn' style='float: right;' onclick='generatePDF(\"" + selectedData.ID + "\" , \"" + id + "\")'>Download PDF</button><br/><br/></div>";
            }
            //accordion.innerHTML += "<button id='button" + y + "' type='button' style='background-color:lightskyblue; color: black' onclick='showAccordion(" + y + ")' class='w3-btn w3-block'>" + majorsList[y].ID + " - " + majorsList[y].Name + "</button><div id='" + y + "' class=' w3-hide'><div id='input" + majorsList[y].ID + "'><div class='row' ><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject or Group</b></p></div> <div class='col' style='padding-top: 12px'> <input id='subjectAddInput" + y + "' name='searchBar' type='text' class='form-control typeahead' placeholder='Subject, CBK, SMJ or STM' oninput='handleSubjectInput(this.value, " + y + ");' style='width: 100%;' /></div> <div class='col' style='text-align: center;'></div> </div > <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject Type</b></p></div><div class='col' style='padding-top: 12px'><select id='subjectTypeDropDown" + y + "' class='form-control' style='width: 100%; height: 100%'> </select> </div> <div class='col' style='text-align: center;'></div></div> <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Stage</b></p></div> <div class='col' style='padding-top: 12px''><input id='subjectStageInput" + y + "' name='searchBar' type='number' class='form-control typeahead' style='width: 100%;' oninput='handleSubjectStageInput(this.value)' /> </div> <div class='col' style='text-align: left; padding-bottom: 30px'><button id='btnTimetableAdd' type='button' class='btn btn-lg' onclick='addToTimetable(" + y + ");' style='background-color: green; color: white'><i class='fa fa-plus'></i></button ></div></div></div><div class='row' id='body" + y + "'></div><br/><p style='text-align:right;'>Last Updated: " + updated + "</p><br/><center><button id='remove" + majorsList[y].ID + "' style='text-align:center;' class='btn btn-danger' type='button' onclick='removeMajor(this.id);'>Remove " + majorsList[y].Name + " from " + selectedData.Name + "</button></center><br/><button id='" + majorsList[y].ID + "' type='button' class='btn' style='float: right;' onclick='generatePDF(\"" + selectedData.ID + "\" , \"" + majorsList[y].ID + "\")'>Download PDF</button><br/><br/></div>";
            populateSubjectTypeDropdown(y);
            var space = document.getElementById("body" + y);
            for (var x = 1; x < totalStages + 1; x++) {
                space.innerHTML += "<div class='col-sm' style='padding:0'><u><h4><center>Stage " + x + "</center></h4></u><br /><div id='stageHeading" + x + y + "'></div></div>";
            }
        }
        populateExistingTimetable(totalStages, "majors");

    }
    else {
        for (var x = 0; x < template.length; x++) {
            if (selectedData.ID == template[x].Course.ID) {
                updated = template[x].DateUpdated;
                console.log(updated);
            }
        }
        if (updated == null) {
            updated = "now";
        }

        var y = 0;
        accordion.innerHTML += "<button id='button" + y + "' type='button' style='background-color:lightskyblue; color: black' onclick='showAccordion(" + y + ")' class='w3-btn w3-block'>" + selectedData.ID + " - " + selectedData.Name + "</button><div id='" + y + "' class=' w3-hide'><div id='input" + selectedData.ID + "'><div class='row' ><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject or Group</b></p></div> <div class='col' style='padding-top: 12px'> <input id='subjectAddInput" + y + "' name='searchBar' type='text' class='form-control typeahead' placeholder='Subject, CBK, SMJ or STM' oninput='handleSubjectInput(this.value, " + y + ");' style='width: 100%;' /></div> <div class='col' style='text-align: center;'></div> </div > <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject Type</b></p></div><div class='col' style='padding-top: 12px'><select id='subjectTypeDropDown" + y + "' class='form-control' style='width: 100%; height: 100%'> </select> </div> <div class='col' style='text-align: center;'></div></div> <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Stage</b></p></div> <div class='col' style='padding-top: 12px''><input id='subjectStageInput" + y + "' name='searchBar' type='number' class='form-control typeahead' style='width: 100%;' oninput='handleSubjectStageInput(this.value)' /> </div> <div class='col' style='text-align: left; padding-bottom: 30px'><button id='btnTimetableAdd' type='button' class='btn btn-lg' onclick='addToTimetable(" + y + ");' style='background-color: green; color: white'><i class='fa fa-plus'></i></button ></div></div></div><div class='row' id='body" + y + "'></div><br/><p style='text-align:right;'>Last Updated: " + updated + "</p><br/><button id='" + selectedData.ID + "' type='button' class='btn' style='float: right;' onclick='generatePDF(\"" + selectedData.ID + "\")'>Download PDF</button></div>";
        populateSubjectTypeDropdown(y);
        var space = document.getElementById("body" + y);
        for (var x = 1; x < totalStages + 1; x++) {
            space.innerHTML += "<div class='col-sm' style='padding:0'><u><h4><center>Stage " + x + "</center></h4></u><br /><div id='stageHeading" + x + y + "'></div></div>";
        }
        populateExistingTimetable(totalStages, "course");
    }

}

function populateExistingTimetable(totalStages, type) {
    for (var x = 1; x < totalStages + 1; x++) {
        for (var i = 0; i < template.length; i++) {
            if (type == "majors") {
                for (var y = 0; y < majorsList.length; y++) {
                    if (template[i].HasTemplate) {
                        if (template[i].Major.ID == majorsList[y].ID) {
                            pushToTemplate(x, y, i);
                        }
                    }
                }
            }
            else if (type == "course") {
                pushToTemplate(x, 0, i);
            }
        }
    }
}

//pushes existing db subjects to template
function pushToTemplate(x, y, i) {
    var column = document.getElementById("stageHeading" + x + y);
    var name;
    var id;
    var type;
    var colour;
    var credit;

    if (template[i].Stage == x) {
        if (template[i].Stream != null) {
            name = template[i].Stream.Name;
            id = template[i].Stream.ID;
            credit = template[i].Stream.CreditPoints;
            type = template[i].SubjectType.Abbreviation;
        }
        else if (template[i].ChoiceBlock != null) {
            name = template[i].ChoiceBlock.Name;
            id = template[i].ChoiceBlock.ID;
            credit = template[i].ChoiceBlock.CreditPoints;
            type = template[i].SubjectType.Abbreviation;
        }
        else if (template[i].SubMajor != null) {
            name = template[i].SubMajor.Name;
            id = template[i].SubMajor.ID;
            credit = template[i].SubMajor.CreditPoints;
            type = template[i].SubjectType.Abbreviation;
        }
        else if (template[i].Subject != null) {
            name = template[i].Subject.Name;
            id = template[i].Subject.ID;
            credit = template[i].Subject.CreditPoints;
            type = template[i].SubjectType.Abbreviation;
        }
        else if (template[i].SubjectGrouping != null) {
            name = "Choice";
            id = template[i].SubjectGrouping.ID;
            credit = 6;
            type = template[i].SubjectType.Abbreviation;
        }


        if (type == "COR") {
            colour = cor;
        }
        else if (type == "PP") {
            colour = pp;
        }
        else if (type == "MAJ") {
            colour = maj;
        }
        else if (type == "ELE") {
            colour = ele;
        }
        else if (type == "CDS") {
            colour = cds;
        }
        else if (type == "MELE") {
            colour = mele;
        }

        //var string = "<div onmouseover='hoverOn(event, this, \"" + id + "\");' onmouseout='hoverOff();' id='" + template[i].ID + "'onclick='removeSubject(this.id);' ><div class='row' style='height: 30px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>";
        var string = "<div onmouseover='hoverOn(event, this, \"" + id + "\");' onmouseout='hoverOff();' id='" + template[i].ID + "'onclick='removeSubject(this.id);'  style='height: 140px; border: thin solid black; font-size:8pt; background-color: " + colour + ";' class='col text-center'><center><p><b>" + name + " </b><br/>" + credit + "<br/>" + id + "<br/>" + type + "</p></center></div>";

        column.innerHTML += string;

        //$("#item" + id).attr("disabled", "disabled").off("click");
    }
}

//adds new subjects to template
function addToTimetable(majorNumber) {
    //They also should be able to choose from stream, choiceblock and submajors here as well as subjects

    var name = templateItem.Name;
    var id = templateItem.ID;
    var e = document.getElementById("subjectTypeDropDown" + majorNumber);
    var type = e.options[e.selectedIndex].text;
    var colour;
    var credit = templateItem.CreditPoints;
    var stages = +document.getElementById("courseStages").value;
    var itemID = id + majorNumber;//probably need to change this later cause issue if there are two of the same subjects in the same timetable

    var typeChecker = id.toString().substring(0, 3);



    if (majorsList.length == 0) {
        if (typeChecker == "SMJ") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": null,
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": { "ID": id },
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else if (typeChecker == "STM") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": null,
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": { "ID": id },
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else if (typeChecker == "CBK") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": null,
                "Subject": null,
                "ChoiceBlock": { "ID": id },
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else if (id.length < 4) {//group
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": null,
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": { "ID": id },
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else {//subject
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": null,
                "Subject": { "ID": id },
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }

    }
    else {
        if (typeChecker == "SMJ") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": { "ID": majorsList[majorNumber].ID },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": { "ID": id },
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else if (typeChecker == "STM") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": { "ID": majorsList[majorNumber].ID },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": { "ID": id },
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else if (typeChecker == "CBK") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": { "ID": majorsList[majorNumber].ID },
                "Subject": null,
                "ChoiceBlock": { "ID": id },
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else if (id.length < 4) {//group
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": { "ID": majorsList[majorNumber].ID },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": { "ID": id },
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
        else {//subject
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Major": { "ID": majorsList[majorNumber].ID },
                "Subject": { "ID": id },
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex + 1 },
                "Stage": +stage,
                "Year": +Math.round(stage / 2),
                "HasTemplate": true
            });
        }
    }

    console.log(template);

    if (type == "COR") {
        colour = cor;
    }
    else if (type == "PP") {
        colour = pp;
    }
    else if (type == "MAJ") {
        colour = maj;
    }
    else if (type == "ELE") {
        colour = ele;
    }
    else if (type == "CDS") {
        colour = cds;
    }
    else if (type == "MELE") {
        colour = mele;
    }

    for (var i = 1; i < stages + 1; i++) {
        if (stage == i) {
            var column = document.getElementById("stageHeading" + i + majorNumber);
            var string = "<div  id='" + itemID + "' onclick='removeSubject(this.id);' onmouseover='hoverOn(event, this, " + id + ");' onmouseout='hoverOff();'  style='height: 140px;  font-size:8pt; border: thin solid black; background-color: " + colour + ";' class='col text-center'><center><p><b>" + name + " </b><br/>" + credit + "<br/>" + id + "<br/>" + type + "</p></center></div>";

                //"<div id='" + itemID + "' onclick='removeSubject(this.id);' onmouseover='hoverOn(event, this, " + id + ");' onmouseout='hoverOff();' style='font-size:8pt'><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>"
            column.innerHTML += string;
            $("#" + itemID).attr("disabled", "disabled").off("click");
        }
    }
    document.getElementById("subjectAddInput" + majorNumber).value = "";
    document.getElementById("subjectTypeDropDown" + majorNumber).selectedIndex = 0;
    document.getElementById("subjectStageInput" + majorNumber).value = "";
}

//This removes a subject from the timetable grid
function removeSubject(number) {
    if (edit) {
        console.log(number);
        document.getElementById(number).remove();
        //remove that json object from the template array
        for (var i = 0; i < template.length; i++) {
            if (template[i].ID == number) {
                console.log(template[i]);
                template.splice(i, 1);
            }
        }
        console.log(template);
    }
}

function showAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        document.getElementById("button" + id).style.backgroundColor = selectedBlue;
        document.getElementById("button" + id).style.color = "white";
    }
    else {
        x.className = x.className.replace(" w3-show", "");
        document.getElementById("button" + id).style.backgroundColor = "lightskyblue";
        document.getElementById("button" + id).style.color = "black";
    }
}

function removeMajor(majorID) {
    console.log(majorID);
    console.log(majorsList);
    console.log(template);
    majorID = majorID.slice(6);
    var confirmDelete = confirm("Are you sure you want to remove " + majorID + " from this course?");

    if (confirmDelete) {
        for (var i = 0; i < majorsList.length; i++) {
            if (majorsList[i].ID == majorID) {
                majorsList.splice(i, 1);
                var length = template.length;
                for (var x = 0; x < length; x++) {
                    for (var y = 0; y < template.length; y++) {
                        if (template[y].Major.ID == majorID) {
                            template.splice(y, 1);
                        }
                    }
                }
            }
        }
        console.log(template);
        refreshTemplate();
    }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All TEMPLATE FUNCTIONS