var addVisible = false;
var selected = "course";
var lastSelected;
var selectedBlue = "#2478fc";
var subject;
var stage;

var selectedData;

var cor = "#bbd2f7";
var pp = "#d3bbf7";
var maj = "#f7bbbb";
var ele = "#f7f2bb";
var cds = "#ddf7bb";
var mele = "#f7dfbb";



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////START OF API CALLS
function getAllCourses() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getallcourses";
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/major/getallmajors";
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/submajor/getallsubmajors";
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/stream/getallstreams";
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

    var url = "http://mycourseuts.azurewebsites.net/services/api/choiceblock/getallchoiceblocks";
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getallsubjects";
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcoursetypes";
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
function getSubjectTypes() {
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getsubjecttypes";
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
            alert("There was an issue retrieving the list of subject types");
        }
    });
    console.log(data);
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajors?value=" + term;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/stream/getstreams?value=" + term;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblocks?value=" + term;
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
    var url = "http://mycourseuts.azurewebsites.net/services/api/subject/getsubjects?value=" + term;
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

function getCourseRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcourserelationship?courseID=" + id;
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
            alert("There was an issue retrieving the list of course relationships");
        }
    });
    return data;
}
function getMajorRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/major/getmajorrelationship?majorID=" + id;
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
            alert("There was an issue retrieving the list of major relationships");
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
            console.log(response);
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
            console.log(response);
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
            console.log(response);
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
            console.log(response);
            data = response;
        },
        error: function () {
            alert("There was an issue retrieving the list of subject grouping relationships");
        }
    });
    return data;
}
function getCourseMajorRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/course/getcoursemajorrelationship?majorid=" + id;
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
            alert("There was an issue retrieving the courses");
        }
    });
    return data;
}




//Need to add the logic for all these below
function updateCourse(id) { }
function updateMajor(id) { }
function updateChoiceBlock(id) { }
function updateStream(id) { }
function updateSubMajor(id) { }
function updateSubject(id) { }

function addCourse(item) {

}
function addMajor(item) {

}
function addChoiceBlock(item) {

}
function addStream(item) {

}
function addSubMajor(item) {

}
function addSubject(item) {

}

//delete everything that was in there and then insert the new values
function updateCourseRelationship(id, item) { }
function updateMajorRelationship(id, item) { }
function updateCourseMajorRelationship(id, item) { }
function updateChoiceBlockRelationship(id, item) { }
function updateStreamRelationship(id, item) { }
function updateSubMajorRelationship(id, item) { }
function updateSubjectRelationship(id, item) { }
function updateSubjectRequisites(id, item) { }

function deleteCourse(id) {
    //delete from courses
    //delete from majorcourserelationship
    //delete from courserelationship
}
function deleteMajor(id) {
    //delete from majors
    //delete from majorcourserelationship
    //delete from majorrelationship
    //delete from subjectgrouping??? one of these has majorid in the table
}
function deleteChoiceBlock(id) {
    //delete from choiceblocks
    //delete from subjectgroupings
    //delete from subjectrelationships
    //delete from streamrelationships
    //delete from submajorrelationships
    //delete from choiceblockrelationships
    //delete from courserelationship
}
function deleteStream(id) {
    //delete from streams
    //delete from subjectgroupings
    //delete from subjectrelationships
    //delete from streamrelationships
    //delete from submajorrelationships
    //delete from choiceblockrelationships
    //delete from courserelationship
}
function deleteSubMajor(id) {
    //delete from submajors
    //delete from subjectgroupings
    //delete from subjectrelationships
    //delete from streamrelationships
    //delete from submajorrelationships
    //delete from choiceblockrelationships
    //delete from courserelationship   
}
function deleteSubject(id) {
    //delete from subjects
    //delete from subjectgroupings
    //delete from subjectrelationships
    //delete from streamrelationships
    //delete from submajorrelationships
    //delete from choiceblockrelationships
    //delete from courserelationship   
    //delete from requisiterelationship
    //delete from courserelationship
    //delete from majorrelationship
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
function populateSubjectTypeDropdown() {
    var select = document.getElementById("subjectTypeDropDown");
    var data = getSubjectTypes();
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.value = data[i].ID;
        option.text = data[i].Abbreviation;
        select.add(option, null);
    }
}
window.onload = function () {
    populateSubjectTypeDropdown();
    populateCourseTypeDropdown();
    document.getElementById("searchBar").focus();
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
    document.getElementById("courseMajorInput").value = "";
    document.getElementById("courseMajorInput").style.display = "none";

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
    document.getElementById("streamSubjectInput").value = "";
    document.getElementById("streamSubjectInput").style.display = "none";

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


    document.getElementById("subjectAddInput").value = "";
    document.getElementById("subjectTypeDropDown").selectedIndex = 0;
    document.getElementById("subjectStageInput").value = "";

    selectedCourse = "";
    selectedMajor = "";

    subject = "";
    stage = "";

    handleEdit();
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
    //document.getElementById('subjectListDiv').style.display = "none";
    document.getElementById('submitButtonDiv').style.display = "none";
    document.getElementById('updateButtonDiv').style.display = "none";
    document.getElementById('subjectAddDisable').style.display = "none";
}
function handleHover(id, itemID) {
    var data;
    var type = id.toString().substring(0, 3);
    if (type == "SMJ") {
        data = getSubMajorRelationship(id);
    }
    else if (type == "STM") {
        data = getStreamRelationship(id);
    }
    else if (type == "CBK") {
        data = getChoiceBlockRelationship(id);
    }
    else {
        data = getSubjectGroupingRelationship(id);
    }
    console.log(data);
    var content = "";

    for (var i = 0; i < data.length; i++) {
        if (data[i].ContentStream != null) {
            content += data[i].ContentStream.ID + ", ";
        }
        if (data[i].ContentSubMajor != null) {
            content += data[i].ContentSubMajor.ID + ", ";
        }
        if (data[i].ContentChoiceBlock != null) {
            content += data[i].ContentChoiceBlock.ID + ", ";
        }
        if (data[i].ContentSubjectGrouping != null) {
            if (data[i].ContentSubjectGrouping.ID != id) {
                var grouping = getSubjectGroupingRelationship(data[i].ContentSubjectGrouping.ID);
                for (var x = 0; x < grouping.length; x++) {
                    if (grouping[x].ContentStream != null) {
                        content += grouping[x].ContentStream.ID + ", ";
                    }
                    else if (grouping[x].ContentSubMajor != null) {
                        content += grouping[x].ContentSubMajor.ID + ", ";
                    }
                    else if (grouping[x].ContentChoiceBlock != null) {
                        content += grouping[x].ContentChoiceBlock.ID + ", ";
                    }
                    else if (grouping[x].Subject != null) {
                        content += grouping[x].Subject.ID + ", ";
                    }
                }
            }
        }
        if (data[i].Subject != null) {
            content += data[i].Subject.ID + ", ";
        }
    }
    content = content.substring(0, content.length - 2);

    var item = document.getElementById(itemID);
    item.setAttribute("title", content);
    item.setAttribute("data-toggle", "popover");
    item.setAttribute("data-placement", "right");
}
function disabledAddSubjectButton() {
    if (document.getElementById("subjectAddInput").value != "" && document.getElementById("subjectStageInput").value != "") {
        document.getElementById("btnTimetableAdd").disabled = false;
    }
    else {
        document.getElementById("btnTimetableAdd").disabled = true;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END AESTHETICS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS PUSHING AND REMOVING ITEMS FROM LIST
function populateStmCbkSmjSubjects(id) {
    var data;
    if (selected == "submajor") {
        data = getSubMajorRelationship(id);
    }
    else if (selected == "stream") {
        data = getStreamRelationship(id);
    }
    else if (selected == "choiceblock") {
        data = getChoiceBlockRelationship(id);
    }

    var list = document.getElementById("streamSubjectList");
    var searchBar = document.getElementById("streamSubjectInput");

    console.log(data);
    for (var i = 0; i < data.length; i++) {
        if (data[i].ContentStream != null) {
            //Add functionality that if hover over this it will display the list of subjects within this
            var a = document.createElement("a");
            a.setAttribute('id', data[i].ContentStream.ID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].ContentStream.ID + " - " + data[i].ContentStream.Name));
            list.appendChild(a);
            handleHover(data[i].ContentStream.ID, data[i].ContentStream.ID);
        }
        else if (data[i].ContentSubMajor != null) {
            //Add functionality that if hover over this it will display the list of subjects within this
            var a = document.createElement("a");
            a.setAttribute('id', data[i].ContentSubMajor.ID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].ContentSubMajor.ID + " - " + data[i].ContentSubMajor.Name));
            list.appendChild(a);
            handleHover(data[i].ContentSubMajor.ID, data[i].ContentSubMajor.ID);
        }
        else if (data[i].ContentChoiceBlock != null) {
            //Add functionality that if hover over this it will display the list of subjects within this
            var a = document.createElement("a");
            a.setAttribute('id', data[i].ContentChoiceBlock.ID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].ContentChoiceBlock.ID + " - " + data[i].ContentChoiceBlock.Name));
            list.appendChild(a);
            handleHover(data[i].ContentChoiceBlock.ID, data[i].ContentChoiceBlock.ID);
        }
        else if (data[i].ContentSubjectGrouping != null) {
            //Do a call to get all the subjects within this subject grouping
            var grouping = getSubjectGroupingRelationship(data[i].ContentSubjectGrouping.ID);
            for (var x = 0; x < grouping.length; x++) {
                if (grouping[x].ContentStream != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', grouping[x].ContentStream.ID);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentStream.ID + " - " + grouping[x].ContentStream.Name));
                    list.appendChild(a);
                    handleHover(grouping[x].ContentStream.ID, grouping[x].ContentStream.ID);
                }
                else if (grouping[x].ContentSubMajor != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', grouping[x].ContentSubMajor.ID);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentSubMajor.ID + " - " + grouping[x].ContentSubMajor.Name));
                    list.appendChild(a);
                    handleHover(grouping[x].ContentSubMajor.ID, grouping[x].ContentSubMajor.ID);
                }
                else if (grouping[x].ContentChoiceBlock != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', grouping[x].ContentChoiceBlock.ID);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentChoiceBlock.ID + " - " + grouping[x].ContentChoiceBlock.Name));
                    list.appendChild(a);
                    handleHover(grouping[x].ContentChoiceBlock.ID, grouping[x].ContentChoiceBlock.ID);
                }
                else if (grouping[x].Subject != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', grouping[x].Subject.ID);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].Subject.ID + " - " + grouping[x].Subject.Name));
                    list.appendChild(a);
                }
            }

        }
        else if (data[i].Subject != null) {
            var a = document.createElement("a");
            a.setAttribute('id', data[i].Subject.ID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(data[i].Subject.ID + " - " + data[i].Subject.Name));
            list.appendChild(a);
        }
    }
}
function handlePreRequisiteListPush(term) {
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
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success ');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectPreReqInput").value = "";
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
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectAntiReqInput").value = "";
        }

    });
}
function handleStmCbkSmjListPush(term) {
    //need to create an API that allows the user to search from subjects, streams, choiceblocks and submajors --> display name and number for this dropdown
    var data;// = new Array();
    //var streams = getAllStreams();
    data = getStreams(term);
    //var choiceBlocks = getAllChoiceBlocks();
    //var subMajors = getAllSubMajors();
    //var subjects = getAllSubjects();

    $("#streamSubjectInput").autocomplete({
        source: function (request, response) {
            response($.map(data, function (value, key) {
                return {
                    label: value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            var subjectList = document.getElementById("streamSubjectList");
            var a = document.createElement("a");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subjectList.appendChild(a);
            handleHover(ui.item.value, ui.item.value);
            document.getElementById("streamSubjectInput").value = "";
            console.log(document.getElementById("streamSubjectInput").value);
        }
    });

}
function handleCourseMajorListPush(term) {
    var data = new Array();
    data = getCourses(term);

    $("#courseMajorInput").autocomplete({
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
            var courseMajorList = document.getElementById("courseMajorList");
            a.setAttribute('id', ui.item.value);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            courseMajorList.appendChild(a);
        }
    });
}
function removeFromList(id) {
    var listElement = document.getElementById(id);
    if ($("#" + id).hasClass("disabled")) { }
    else {
        listElement.remove();
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
                    label: value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            disableMenuBar(true);
            document.getElementById("addDiv").style.display = "none";
            document.getElementById('searchDiv').style.display = "none";
            document.getElementById("btnSave").disabled = true;
            document.getElementById("btnDelete").disabled = true;
            document.getElementById('updateButtonDiv').style.display = "block";
            if (selected == "course") {
                selectedData = getCourse(ui.item.value);
                handleViewEditCourse(selectedData);
                console.log(selectedData);
            }
            else if (selected == "major") {
                selectedData = getMajor(ui.item.value);
                handleViewEditMajor(selectedData);
                console.log(selectedData);
            }
            else if (selected == "submajor" || selected == "stream" || selected == "choiceblock") {
                if (selected == "submajor") {
                    selectedData = getSubMajor(ui.item.value);
                    console.log(selectedData);
                }
                else if (selected == "stream") {
                    selectedData = getStream(ui.item.value);
                    console.log(selectedData);
                }
                else if (selected == "choiceblock") {
                    selectedData = getChoiceBlock(ui.item.value);
                    console.log(selectedData);
                }
                handleViewEditStreamSubChoice(selectedData);
            }
            else if (selected == "subject") {
                selectedData = getSubject(ui.item.value);
                handleViewEditSubject(selectedData);
                console.log(selectedData);
            }
        }
    });
}
function handleSubjectInput(term) {
    var data = new Array();
    data = getSubjects(term);
    disabledAddSubjectButton();

    $("#subjectAddInput").autocomplete({
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
            subject = getSubject(ui.item.value);
            disabledAddSubjectButton();
        }

    });
}
function handleSubjectStageInput(term) {
    stage = term;
    disabledAddSubjectButton();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END HANDLES INPUT EVENTS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FUNCTIONS TO EDIT/VIEW OBJECTS
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
function handleViewEditMajor(data) {
    var courses = getCourseMajorRelationship(data.ID);
    console.log(data);
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
    if (data.HasTemplate == true) {
        document.getElementById("includeMajorTemplate").checked = true;
    }
    for (var i = 0; i < courses.length; i++) {
        var a = document.createElement("a");
        var list = document.getElementById("courseMajorList");
        a.setAttribute('id', courses[i].Course.ID);
        a.setAttribute('onClick', "removeFromList(this.id)");
        a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
        a.appendChild(document.createTextNode(courses[i].Course.ID + " - " + courses[i].Course.Name));
        list.appendChild(a);
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
    document.getElementById("courseMajorInput").style.display = "none";

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
    document.getElementById("streamSubjectInput").style.display = "none";
    populateStmCbkSmjSubjects(data.ID);

    document.getElementById('addStreamFormDiv').style.display = "block";
}
function handleViewEditSubject(data) {
    var reqs = getSubjectRequisites(data.ID);
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
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
            a.appendChild(document.createTextNode(reqs[i].Requisite.ID + " - " + reqs[i].Requisite.Name));
            subReq.appendChild(a);

            //$("#subjectAntiReq").append("<a href='#' class='list-group-item list-group-item-action list-group-item-success disabled'>" + reqs[i].Requisite.ID +" - " + reqs[i].Requisite.Name + "</a>");
        }
        else if (reqs[i].RequisiteType.Abbreviation == "ANTI") {
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectAntiReq");
            a.setAttribute('id', reqs[i].Requisite.ID);
            a.setAttribute('onClick', "removeFromList(this.id)");
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END FUNCTIONS TO EDIT/VIEW OBJECTS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TAB BUTTON FUNCTIONS
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
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('nextButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
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
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
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
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
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
        document.getElementById('submitButtonDiv').style.display = "block";
        //document.getElementById('backButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
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
        document.getElementById('submitButtonDiv').style.display = "block";
    }
    document.getElementById("searchBar").focus();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END TAB BUTTON FUNCTIONS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All BUTTONS
//this handles the adding to the form
function handleAdd() {
    addVisible = true;
    document.getElementById("subMajorOption").disabled = false;
    document.getElementById("streamOption").disabled = false;
    document.getElementById("choiceBlockOption").disabled = false;
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
//this controls the cancel button, and clears everything back to default
function handleCancel() {
    disableMenuBar(false);
    addVisible = false;
    selected = "course";
    document.getElementById('searchBar').value = "";

    document.getElementsByName('searchBar')[0].placeholder = "Search Courses";

    clearFields();
    clearTimetable();
    refreshNavColours();
    hide();


    document.getElementById("includeMajor").checked = false;
    document.getElementById("includeCourseTemplate").checked = false;
    document.getElementById("includeMajorTemplate").checked = false;

    document.getElementById("course").style.backgroundColor = selectedBlue;

    document.getElementById('searchDiv').style.display = "block";
    document.getElementById('addDiv').style.display = "block";
    document.getElementById('updateButtonDiv').style.display = "none";
    document.getElementById('submitButtonDiv').style.display = "none";
    document.getElementById("searchBar").focus();
}
//this controls the save button, and updates the changes to the database
function handleSave() { }
//this controls the edit button, and allows the user to make edits to the object
function handleEdit() {
    templateCheck();

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
    var courseMajorList = document.getElementById("courseMajorList");
    var items = courseMajorList.getElementsByTagName("a");
    for (var i = 0; i < items.length; i++) {
        $("#" + items[i].id).removeClass("disabled");
    }
    var streamSubjectList = document.getElementById("streamSubjectList");
    var items = streamSubjectList.getElementsByTagName("a");
    for (var i = 0; i < items.length; i++) {
        $("#" + items[i].id).removeClass("disabled");
    }

    document.getElementById("btnSave").disabled = false;
    document.getElementById("btnDelete").disabled = false;

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
    if (document.getElementById("courseStages").value != "") {
        document.getElementById("includeCourseTemplate").disabled = false;
    }
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
    if (document.getElementById("majorStages").value != "") {
        document.getElementById("includeMajorTemplate").disabled = false;
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
    document.getElementById("courseMajorInput").style.display = "block";
    document.getElementById("streamSubjectInput").style.display = "block";

}
//this controls the submit button which sends the data via and ajax call to the database
function handleSubmit() { }
//this controls the update button which updates a particular item that already exists within the database
function handleUpdate() { }
//This deletes an item from the database ie subject, course etc 
function handleDelete() {
    selectedData.ID
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END ALL BUTTONS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All TEMPLATE FUNCTIONS
function clearTimetable() {
    var headerRow = document.getElementById("headerRow");
    headerRow.innerHTML = "";
}
function checkYearValue(value) {
    if (value != "") {
        document.getElementById("includeCourseTemplate").disabled = false;
        document.getElementById("includeMajorTemplate").disabled = false;
        var year = +document.getElementById("courseYears").value;
        document.getElementById("courseStages").value = year * 2;
    }
    else {
        document.getElementById("includeCourseTemplate").disabled = true;
        document.getElementById("includeMajorTemplate").disabled = true;
    }
}
function checkStageValue(value) {
    if (value != "") {
        console.log("enabled");
        document.getElementById("includeCourseTemplate").disabled = false;
        document.getElementById("includeMajorTemplate").disabled = false;
        var stage = +document.getElementById("courseStages").value;
        document.getElementById("courseYears").value = stage / 2;
    }
    else {
        console.log("disabled");
        document.getElementById("includeCourseTemplate").disabled = true;
        document.getElementById("includeMajorTemplate").disabled = true;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#includeCourseTemplate").addEventListener('change', templateCheck);
    document.querySelector("#includeMajorTemplate").addEventListener('change', templateCheck);
});
function templateCheck() {
    var headerRow = document.getElementById("headerRow");
    if (includeCourseTemplate.checked || includeMajorTemplate.checked) {

        if (selectedData.HasTemplate == true) {
            buildTimetableStructure(selectedData.Stages);
            populateExistingTimetable();
        }
        else {
            var stages;
            if (selected == "course") {
                stages = +document.getElementById("courseStages").value;
            }
            else if (selected == "major") {
                stages = +document.getElementById("majorStages").value;//Make the add template checkbox disabled unless this is entered
            }
            buildTimetableStructure(stages);
        }
        document.getElementById("courseStages").disabled = true;
        document.getElementById("majorStages").disabled = true;
        document.getElementById("courseYears").disabled = true;
        document.getElementById("subjectAddDisable").style.display = "block";
    }
    else {
        headerRow.innerHTML = "";
        document.getElementById("subjectAddDisable").style.display = "none";
        document.getElementById("courseStages").disabled = false;
        document.getElementById("courseYears").disabled = false;
        document.getElementById("majorStages").disabled = false;
    }
}
function buildTimetableStructure(stages) {
    var headerRow = document.getElementById("headerRow");
    for (var i = 1; i < stages + 1; i++) {
        headerRow.innerHTML += "<div class='col-sm'><u><h4><center>Stage " + i + "</center></h4></u><br /><div id=" + i + "></div></div>";
    }
}
function populateExistingTimetable() {
    var stages = selectedData.Stages;
    var column;
    var items;

    var subject0Count = 0;
    var subject1Count = 0;
    var subject2Count = 0;
    var subject3Count = 0;
    var CBKCount = 0;
    var STMCount = 0;
    var SMJCount = 0;
    var groupCount = 0;

    if (selectedData.ID.substring(0, 3) == "MAJ") {
        items = getMajorRelationship(selectedData.ID);
    }
    else {
        items = getCourseRelationship(selectedData.ID);
    }

    console.log(items);

    //add body
    for (var i = 1; i < stages + 1; i++) {
        column = document.getElementById(i);
        for (var x = 0; x < items.length; x++) {
            var name;
            var id;
            var type;
            var colour;
            var credit;
            var number;

            if (items[x].Stage == i) {
                if (items[x].Stream != null) {
                    name = items[x].Streams.Name;
                    id = items[x].Streams.ID;
                    credit = items[x].Streams.CreditPoints;
                    type = items[x].SubjectType.Abbreviation;
                }
                else if (items[x].ChoiceBlock != null) {
                    name = items[x].ChoiceBlock.Name;
                    id = items[x].ChoiceBlock.ID;
                    credit = items[x].ChoiceBlock.CreditPoints;
                    type = items[x].SubjectType.Abbreviation;
                }
                else if (items[x].SubMajor != null) {
                    name = items[x].SubMajor.Name;
                    id = items[x].SubMajor.ID;
                    credit = items[x].SubMajor.CreditPoints;
                    type = items[x].SubjectType.Abbreviation;
                }
                else if (items[x].Subject != null) {
                    name = items[x].Subject.Name;
                    id = items[x].Subject.ID;
                    credit = items[x].Subject.CreditPoints;
                    type = items[x].SubjectType.Abbreviation;
                }
                else if (items[x].SubjectGrouping != null) {
                    name = "Choice";
                    id = items[x].SubjectGrouping.ID;
                    credit = 6;
                    type = items[x].SubjectType.Abbreviation;
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


                number = id;
                //to handle the ids of repeating subjects, cbk, stm or smj
                if (id == 0) {
                    if (subject0Count != 0) {
                        id += subject0Count;
                    }
                    subject0Count++;
                    number = 0;
                }
                else if (id == 1) {
                    if (subject1Count != 0) {
                        id += subject1Count;
                    }
                    subject1Count++;
                    number = 0;
                }
                else if (id == 2) {
                    if (subject2Count != 0) {
                        id += subject2Count;
                    }
                    subject2Count++;
                    number = 0;
                }
                else if (id == 3) {
                    if (subject3Count != 0) {
                        id += subject3Count;
                    }
                    subject3Count++;
                    number = 0;
                }
                else if (name == "Choice") {
                    if (groupCount != 0) {
                        id += groupCount;
                    }
                    groupCount++;
                }

                if (id.toString().substring(0, 3) == "STM") {
                    if (STMCount != 0) {
                        id += STMCount;
                    }
                    STMCount++;
                }
                else if (id.toString().substring(0, 3) == "SMJ") {
                    if (SMJCount != 0) {
                        id += SMJCount;
                    }
                    SMJCount++;
                }
                else if (id.toString().substring(0, 3) == "CBK") {
                    if (CBKCount != 0) {
                        id += CBKCount;
                    }
                    CBKCount++;
                }
                var string = "<div id='item" + id + "' onclick='removeSubject(this.id);'><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + number + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>"
                column.innerHTML += string;

                if (id.toString().substring(0, 3) == "CBK" || id.toString().substring(0, 3) == "SMJ" || id.toString().substring(0, 3) == "STM" || name == "Choice") {
                    handleHover(number, "item" + id);
                }

                $("#item" + id).attr("disabled", "disabled").off("click");


            }
        }

    }
}
function addToTimetable() {
    //They also should be able to choose from stream, choiceblock and submajors here as well as subjects

    var column;
    var name = subject.Name;
    var id = subject.ID;
    var e = document.getElementById("subjectTypeDropDown");
    var type = e.options[e.selectedIndex].text;
    var colour;
    var credit = subject.CreditPoints;

    var stages;
    if (selected == "course") {
        stages = +document.getElementById("courseStages").value;
    }
    else if (selected == "major") {
        stages = +document.getElementById("majorStages").value;//Make the add template checkbox disabled unless this is entered
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

    console.log(name);
    console.log(id);
    console.log(type);
    console.log(credit);
    console.log(colour);
    console.log(stages);

    for (var i = 1; i < stages + 1; i++) {
        if (stage == i) {
            column = document.getElementById(i);
            var string = "<div id='item" + id + "' onclick='removeSubject(this.id);'><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>"
            column.innerHTML += string;
            if (id.toString().substring(0, 3) == "CBK" || id.toString().substring(0, 3) == "SMJ" || id.toString().substring(0, 3) == "STM" || name == "Choice") {
                handleHover(number, "item" + id);
            }
            $("#item" + id).attr("disabled", "disabled").off("click");
        }
    }
    document.getElementById("subjectAddInput").value = "";
    document.getElementById("subjectTypeDropDown").selectedIndex = 0;
    document.getElementById("subjectStageInput").value = "";
}
//This removes a subject from the timetable grid
function removeSubject(number) {
    document.getElementById(number).remove();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All TEMPLATE FUNCTIONS
