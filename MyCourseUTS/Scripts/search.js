var addVisible = false;
var selected = "course";
var lastSelected;
var selectedBlue = "#2478fc";
var templateItem;
var stage;

var selectedData;

var cor = "#bbd2f7";
var pp = "#d3bbf7";
var maj = "#f7bbbb";
var ele = "#f7f2bb";
var cds = "#ddf7bb";
var mele = "#f7dfbb";

var template = [];
var nextAvailableID = 0;
var relationships = [];


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
function getMajorRelationship(id) {
    var url = "http://mycourseuts.azurewebsites.net/services/api/major/getmajorrelationship?majorID=" + id;
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
        },
        error: function () {
            alert("There was an issue adding course relationship");
        }
    });
}
function addMajorRelationship(id, item) {
    console.log(item);
    var url = "http://mycourseuts.azurewebsites.net/Services/api/major/postmajorrelationship?majorID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            document.getElementById("loading").style.display = "none";
        },
        error: function () {
            alert("There was an issue adding major relationship");
        }
    });
}
function addCourseMajorRelationship(id, item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/major/postcoursemajorrelationship?majorID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            document.getElementById("loading").style.display = "none";
        },
        error: function () {
            alert("There was an issue adding course major relationship");
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
            document.getElementById("loading").style.display = "none";
        },
        error: function () {
            alert("There was an issue adding choice block relationship");
        }
    });
}
function addStreamRelationship(id, item) {
    var url = "http://mycourseuts.azurewebsites.net/Services/api/stream/poststreamrelationship?streamID=" + id;
    $.ajax({
        url: url,
        type: 'POST',
        async: false,
        data: JSON.stringify(item),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
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
            document.getElementById("loading").style.display = "none";
        },
        error: function () {
            alert("There was an issue deleting subject");
        }
    });
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

        //var select = document.getElementById("subjectTypeDropDown"+number);
        //var data = getSubjectTypes();
        //for (var i = 0; i < data.length; i++) {
        //    var option = document.createElement("option");
        //    option.value = data[i].ID;
        //    option.text = data[i].Abbreviation;
        //    select.add(option, null);
        //}
    
}
window.onload = function () {
    //populateSubjectTypeDropdown();
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
    document.getElementById("streamCredit").value = "";
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

    document.getElementById("courseMajorList").innerHTML = "";
    document.getElementById("streamSubjectList").innerHTML = "";
    document.getElementById("subjectPreReq").innerHTML = "";
    document.getElementById("subjectAntiReq").innerHTML = "";

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
    document.getElementById('accordion').style.display = "none";
    //document.getElementById('subjectAddDisable').style.display = "none";
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
    //console.log(data);
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
    //if (document.getElementById("subjectAddInput").value != "" && document.getElementById("subjectStageInput").value != "") {
    //    document.getElementById("btnTimetableAdd").disabled = false;
    //}
    //else {
    //    document.getElementById("btnTimetableAdd").disabled = true;
    //}
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
    relationships = data;

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
            handleHover(data[i].ContentStream.ID, number);

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
            handleHover(data[i].ContentSubMajor.ID, number);

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
            handleHover(data[i].ContentChoiceBlock.ID, number);

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
                    handleHover(grouping[x].ContentStream.ID, number);
                }
                else if (grouping[x].ContentSubMajor != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', number);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentSubMajor.ID + " - " + grouping[x].ContentSubMajor.Name));
                    list.appendChild(a);
                    handleHover(grouping[x].ContentSubMajor.ID, number);
                }
                else if (grouping[x].ContentChoiceBlock != null) {
                    var a = document.createElement("a");
                    a.setAttribute('id', number);
                    a.setAttribute('onClick', "removeFromList(this.id)");
                    a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success disabled');
                    a.appendChild(document.createTextNode(grouping[x].ContentChoiceBlock.ID + " - " + grouping[x].ContentChoiceBlock.Name));
                    list.appendChild(a);
                    handleHover(grouping[x].ContentChoiceBlock.ID, number);
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
                    label: value.Name,
                    value: value.ID
                }
            }));
        },
        select: function (event, ui) {
            nextAvailableID++;
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectPreReq");
            a.setAttribute('id', nextAvailableID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success ');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectPreReqInput").value = "";

            relationships.push({
                "ID": nextAvailableID,
                "Subject": { "ID": +document.getElementById("subjectId").value },
                "Requisite": { "ID": ui.item.value },
                "RequisiteType": { "ID": 1 }
            });

            //console.log(relationships);
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
            //console.log(ui);
            nextAvailableID++;
            var a = document.createElement("a");
            var subReq = document.getElementById("subjectAntiReq");
            a.setAttribute('id', nextAvailableID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-danger');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subReq.appendChild(a);
            document.getElementById("subjectAntiReqInput").value = "";

            relationships.push({
                "ID": nextAvailableID,
                "Subject": { "ID": +document.getElementById("subjectId").value },
                "Requisite": { "ID": ui.item.value },
                "RequisiteType": { "ID": 2 }
            });

            //console.log(relationships);
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
            nextAvailableID++;
            var subjectList = document.getElementById("streamSubjectList");
            var a = document.createElement("a");
            a.setAttribute('id', nextAvailableID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            subjectList.appendChild(a);
            handleHover(ui.item.value, nextAvailableID);
            document.getElementById("streamSubjectInput").value = "";

            //need to check if its stm etc
            //relationship.push({
            //    "ID": nextAvailableID,
            //    title: { "ID": document.getElementById("streamID").value },
            //    "Subject": null,
            //    "ContentChoiceBlock": null,
            //    "ContentSubMajor": null,
            //    "Stream": null,
            //    "ContentSubjectGrouping": null,
            //    "ContentStream": { "ID": data[i].ContentStream.ID }
            //});

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
            nextAvailableID++;
            //console.log(ui);
            console.log(nextAvailableID);
            var a = document.createElement("a");
            var courseMajorList = document.getElementById("courseMajorList");
            a.setAttribute('id', nextAvailableID);
            a.setAttribute('onClick', "removeFromList(this.id)");
            a.setAttribute('class', 'list-group-item list-group-item-action list-group-item-success');
            a.appendChild(document.createTextNode(ui.item.value + " - " + ui.item.label));
            courseMajorList.appendChild(a);

            relationships.push({
                "ID": nextAvailableID,
                "Major": { "ID": document.getElementById("majorId").value },
                "Course": { "ID": ui.item.value }
            });
            console.log(relationships);


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
                //console.log(selectedData);
            }
            else if (selected == "major") {
                selectedData = getMajor(ui.item.value);
                handleViewEditMajor(selectedData);
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
            }
            else if (selected == "subject") {
                selectedData = getSubject(ui.item.value);
                handleViewEditSubject(selectedData);
                //console.log(selectedData);
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
            //console.log(ui);
            templateItem = getSubject(ui.item.value);//need to change this so it can select from cbk, stm and smj as well
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

    console.log(data);
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
    document.getElementById("streamNameTitle").innerHTML = "<b>Stream Name</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamIDTitle").innerHTML = "<b>Stream Indentification</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamAbbreviationTitle").innerHTML = "<b>Stream Abbreviation</b><b style='color: red; font-size:large'> *</b>";
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
    document.getElementById("streamNameTitle").innerHTML = "<b>Sub-Major Name</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamIDTitle").innerHTML = "<b>Sub-Major Identification</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamAbbreviationTitle").innerHTML = "<b>Sub-Major Abbreviation</b><b style='color: red; font-size:large'> *</b>";
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
    document.getElementById("streamNameTitle").innerHTML = "<b>Choice Block Name</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamIDTitle").innerHTML = "<b>Choice Block Identification</b><b style='color: red; font-size:large'> *</b>";
    document.getElementById("streamAbbreviationTitle").innerHTML = "<b>Choice Block Abbreviation</b><b style='color: red; font-size:large'> *</b>";
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
    refreshNavColours();
    hide();


    document.getElementById("includeMajor").checked = false;
    document.getElementById("includeCourseTemplate").checked = false;
    document.getElementById("includeMajorTemplate").checked = false;

    document.getElementById("course").style.backgroundColor = selectedBlue;

    document.getElementById('btnEdit').disabled = false;

    document.getElementById('searchDiv').style.display = "block";
    document.getElementById('addDiv').style.display = "block";
    document.getElementById('updateButtonDiv').style.display = "none";
    document.getElementById('submitButtonDiv').style.display = "none";
    document.getElementById("searchBar").focus();
}
//this controls the save button, and updates the changes to the database
function handleSave() {
    document.getElementById("loading").style.display = "block";
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
        var hasMajor = document.getElementById("includeMajor").checked;
        var hasTemplate = document.getElementById("includeCourseTemplate").checked;

        var item = {
            "ID": id, "Name": name, "Abbreviation": abbreviation, "CourseDescription": description,
            "Years": years, "Stages": stages, "CreditPoints": creditPoints, "Version": version, "VersionDescription": versionDescription,
            "CourseType": { "ID": typeID }, "Active": status, "hasMajor": hasMajor, "hasTemplate": hasTemplate
        };
        addCourse(item);

        if (hasTemplate == true) {
            addCourseRelationship(id, template);
        }
        else {
            template = [];
            addCourseRelationship(id, template);
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

        var item = {
            "ID": id, "Name": name, "Abbreviation": abbreviation, "MajorDescription": description,
            "Stages": stages, "CreditPoints": creditPoints, "Version": version, "VersionDescription": versionDescription,
            "Active": status, "hasTemplate": hasTemplate
        };
        addMajor(item);
        if (hasTemplate == true) {
            addMajorRelationship(id, template);
        }
        else {
            template = [];
            addMajorRelationship(id, template);
        }

        addCourseMajorRelationship(id, relationships);

    }
    else if (selected == "stream") {
        var name = document.getElementById("streamName").value;
        var id = document.getElementById("streamId").value;
        var abbreviation = document.getElementById("streamAbb").value;
        var description = document.getElementById("streamDescription").value;
        var creditPoints = document.getElementById("streamCredit").value;
        var version = document.getElementById("streamVersion").value;
        var versionDescription = document.getElementById("streamVersionDescription").value;
        var status = document.getElementById("streamStatusActive").checked;

        var item = {
            "ID": id, "Name": name, "Abbreviation": abbreviation, "StreamDescription": description,
            "Version": version, "VersionDescription": versionDescription,
            "Active": status, "CreditPoints": creditPoints
        };
        addStream(item);

        //Need to add the logic for adding data into the course major list
        //addStreamRelationship(id, relationships);
    }
    else if (selected == "submajor") {
        var name = document.getElementById("streamName").value;
        var id = document.getElementById("streamId").value;
        var abbreviation = document.getElementById("streamAbb").value;
        var description = document.getElementById("streamDescription").value;
        var creditPoints = document.getElementById("streamCredit").value;
        var version = document.getElementById("streamVersion").value;
        var versionDescription = document.getElementById("streamVersionDescription").value;
        var status = document.getElementById("streamStatusActive").checked;

        var item = {
            "ID": id, "Name": name, "Abbreviation": abbreviation, "SubMajorDescription": description,
            "Version": version, "VersionDescription": versionDescription,
            "Active": status, "CreditPoints": creditPoints
        };
        addSubMajor(item);
        //addSubMajorRelationship(id, relationships);
    }
    else if (selected == "choiceblock") {
        var name = document.getElementById("streamName").value;
        var id = document.getElementById("streamId").value;
        var abbreviation = document.getElementById("streamAbb").value;
        var description = document.getElementById("streamDescription").value;
        var creditPoints = document.getElementById("streamCredit").value;
        var version = document.getElementById("streamVersion").value;
        var versionDescription = document.getElementById("streamVersionDescription").value;
        var status = document.getElementById("streamStatusActive").checked;

        var item = {
            "ID": id, "Name": name, "Abbreviation": abbreviation, "ChoiceBlockDescription": description,
            "Version": version, "VersionDescription": versionDescription,
            "Active": status, "CreditPoints": creditPoints
        };
        addChoiceBlock(item);
        //addChoiceBlockRelationship(id, relationships);
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

        var item = {
            "ID": id, "Name": name, "Abbreviation": abbreviation, "SubjectDescription": description,
            "Version": version, "VersionDescription": versionDescription,
            "Active": status, "CreditPoints": creditPoints
        };
        addSubject(item);
        addSubjectRequisitesRelationship(id, relationships);
    }

    handleCancel();

}
//this controls the edit button, and allows the user to make edits to the object
function handleEdit() {
    document.getElementById("btnEdit").disabled = true;

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
//This deletes an item from the database ie subject, course etc 
function handleDelete() {
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////END ALL BUTTONS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All TEMPLATE FUNCTIONS

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
        //console.log("enabled");
        document.getElementById("includeCourseTemplate").disabled = false;
        document.getElementById("includeMajorTemplate").disabled = false;
        var stage = +document.getElementById("courseStages").value;
        document.getElementById("courseYears").value = Math.round(stage / 2);
    }
    else {
        //console.log("disabled");
        document.getElementById("includeCourseTemplate").disabled = true;
        document.getElementById("includeMajorTemplate").disabled = true;
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#includeCourseTemplate").addEventListener('change', templateCheck);
    document.querySelector("#includeMajorTemplate").addEventListener('change', templateCheck);
});
function templateCheck() {
    var accordion = document.getElementById("accordion");
    if (includeCourseTemplate.checked || includeMajorTemplate.checked) {
        if (selectedData.HasTemplate == true) {
            //buildTimetableStructure(selectedData.Stages);
            populateExistingTimetable();
        }
        else {
            var stages = +document.getElementById("courseStages").value;
            //buildTimetableStructure(stages);
        }
        document.getElementById("courseStages").disabled = true;
        document.getElementById("majorStages").disabled = true;
        document.getElementById("courseYears").disabled = true;
        //document.getElementById("subjectAddDisable").style.display = "block";
    }
    else {
        accordion.innerHTML = "";
        //document.getElementById("subjectAddDisable").style.display = "none";
        document.getElementById("courseStages").disabled = false;
        document.getElementById("courseYears").disabled = false;
        document.getElementById("majorStages").disabled = false;
    }
}
function buildTimetableStructure(stages) {
    //var headerRow = document.getElementById("headerRow");
    //for (var i = 1; i < stages + 1; i++) {
    //    headerRow.innerHTML += "<div class='col-sm'><u><h4><center>Stage " + i + "</center></h4></u><br /><div id='" + i + "'></div></div>";
    //}
}





function populateExistingTimetable() {
    var stages = selectedData.Stages;
    var column;
    var items = getCourseRelationship(selectedData.ID);
    var majorsList = [];
    var exists;
    template = items;

    var accordion = document.getElementById("accordion");
    accordion.style.display = "block";

    for (var i = 0; i < items.length; i++) {
        if (items[i].Major != null) {
            exists = 0;
            for (var x = 0; x < majorsList.length; x++) {
                if (items[i].Major.ID == majorsList[x].ID) {
                    exists = 1;
                }
            }
            if (exists == 0) {
                majorsList.push(items[i].Major);
            }
        }
    }

    //checks for major relationship
    if (majorsList.length != 0) {
        for (var y = 0; y < majorsList.length; y++) {

            accordion.innerHTML += "<button type='button' style='background-color:" + selectedBlue + "; color:white' onclick='showAccordion(" + y + ")' class='w3-btn w3-block'>" + majorsList[y].Name + "</button><div id='" + y + "' class=' w3-hide'><div class='row' ><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject or Group</b></p></div> <div class='col' style='padding-top: 12px'> <input id='subjectAddInput' name='searchBar' type='text' class='form-control typeahead' placeholder='Subject, CBK, SMJ or STM' oninput='handleSubjectInput(this.value);' style='width: 100%;' /></div> <div class='col' style='text-align: center;'></div> </div > <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Subject Type</b></p></div><div class='col' style='padding-top: 12px'><select id='subjectTypeDropDown" + y + "' class='form-control' style='width: 100%; height: 100%'> </select> </div> <div class='col' style='text-align: center;'></div></div> <div class='row'><div class='col' style='text-align: right; padding-top: 12px'><p><b>Stage</b></p></div> <div class='col' style='padding-top: 12px''><input id='subjectStageInput" + y + "' name='searchBar' type='number' class='form-control typeahead' style='width: 100%;' oninput='handleSubjectStageInput(this.value)' /> </div> <div class='col' style='text-align: left; padding-bottom: 30px'><button id='btnTimetableAdd' type='button' class='btn btn-lg' onclick='addToTimetable(" + y +");' style='background-color: green; color: white''><span class='glyphicon glyphicon-plus'></span></button ></div></div><div class='row' id='body"+y+"'></div><br/></div>";


            
            populateSubjectTypeDropdown(y);

            var space = document.getElementById("body"+y);
            for (var x = 1; x < stages + 1; x++) {
                space.innerHTML += "<div class='col-sm'><u><h4><center>Stage " + x + "</center></h4></u><br /><div id='stageHeading" + x + y + "'></div></div>";
            }


            for (var i = 0; i < items.length; i++) {
                if (items[i].HasTemplate == 1) {//Major relationship
                    if (items[i].Major.ID == majorsList[y].ID) {
                        for (var x = 1; x < stages + 1; x++) {
                            column = document.getElementById("stageHeading" + x + y);
                            var name;
                            var id;
                            var type;
                            var colour;
                            var credit;
                            var number;

                            if (items[i].Stage == x) {
                                number = "number" + items[i].ID;

                                if (items[i].Stream != null) {
                                    name = items[i].Stream.Name;
                                    id = items[i].Stream.ID;
                                    credit = items[i].Stream.CreditPoints;
                                    type = items[i].SubjectType.Abbreviation;
                                }
                                else if (items[i].ChoiceBlock != null) {
                                    name = items[i].ChoiceBlock.Name;
                                    id = items[i].ChoiceBlock.ID;
                                    credit = items[i].ChoiceBlock.CreditPoints;
                                    type = items[i].SubjectType.Abbreviation;
                                }
                                else if (items[i].SubMajor != null) {
                                    name = items[i].SubMajor.Name;
                                    id = items[i].SubMajor.ID;
                                    credit = items[i].SubMajor.CreditPoints;
                                    type = items[i].SubjectType.Abbreviation;
                                }
                                else if (items[i].Subject != null) {
                                    name = items[i].Subject.Name;
                                    id = items[i].Subject.ID;
                                    credit = items[i].Subject.CreditPoints;
                                    type = items[i].SubjectType.Abbreviation;
                                }
                                else if (items[i].SubjectGrouping != null) {
                                    name = "Choice";
                                    id = items[i].SubjectGrouping.ID;
                                    credit = 6;
                                    type = items[i].SubjectType.Abbreviation;
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

                                var string = "<div id='" + number + "'onclick='removeSubject(this.id);'><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>"
                                column.innerHTML += string;

                                if (id.toString().substring(0, 3) == "CBK" || id.toString().substring(0, 3) == "SMJ" || id.toString().substring(0, 3) == "STM" || name == "Choice") {
                                    handleHover(id, number);
                                }
                                $("#item" + id).attr("disabled", "disabled").off("click");
                            }
                        }
                    }
                }
            }
        }

    }
    else {//course relationship
        for (var x = 1; x < stages + 1; x++) {
            accordion.innerHTML += "<div class='col-sm'><u><h4><center>Stage " + x + "</center></h4></u><br /><div id='stageHeading" + x + "'></div></div>";
        }
        for (var i = 1; i < stages + 1; i++) {
            column = document.getElementById("stageHeading" + i);
            for (var x = 0; x < items.length; x++) {
                var name;
                var id;
                var type;
                var colour;
                var credit;
                var number;

                if (items[x].Stage == i) {
                    number = "number" + items[i].ID;

                    if (number < 20) {//This is because if it has an id of 1-12ish it will clash with the column ids meaning they will be displayed weird
                        number = number + 100;
                    }
                    if (number > nextAvailableID) {
                        nextAvailableID = number + 1;
                    }

                    if (items[x].Stream != null) {
                        name = items[x].Stream.Name;
                        id = items[x].Stream.ID;
                        credit = items[x].Stream.CreditPoints;
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

                    console.log(number);
                    var string = "<div id='" + number + "'onclick='removeSubject(this.id);'><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>"
                    column.innerHTML += string;

                    if (id.toString().substring(0, 3) == "CBK" || id.toString().substring(0, 3) == "SMJ" || id.toString().substring(0, 3) == "STM" || name == "Choice") {
                        handleHover(id, number);
                    }
                    $("#item" + id).attr("disabled", "disabled").off("click");
                }
            }
        }
    }
}





function addToTimetable(number) {
    //They also should be able to choose from stream, choiceblock and submajors here as well as subjects

    var name = templateItem.Name;
    var id = templateItem.ID;
    var e = document.getElementById("subjectTypeDropDown"+number);
    var type = e.options[e.selectedIndex].text;
    var colour;
    var credit = templateItem.CreditPoints;
    var stages;
    var itemID = id+number;//probably need to change this later

    var typeChecker = id.toString().substring(0, 3);

    if (selected == "course") {
        stages = +document.getElementById("courseStages").value;
        if (typeChecker == "SMJ") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": { "ID": id },
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else if (typeChecker == "STM") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": { "ID": id },
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else if (typeChecker == "CBK") {
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Subject": null,
                "ChoiceBlock": { "ID": id },
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else if (id.length < 4) {//group
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": { "ID": id },
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else {//subject
            template.push({
                "ID": itemID,
                "Course": { "ID": document.getElementById("courseId").value },
                "Subject": { "ID": id },
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }

    }
    else if (selected == "major") {
        stages = +document.getElementById("majorStages").value;//Make the add template checkbox disabled unless this is entered
        if (typeChecker == "SMJ") {
            template.push({
                "ID": itemID,
                "Major": { "ID": document.getElementById("majorId").value },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": { "ID": id },
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else if (typeChecker == "STM") {
            template.push({
                "ID": itemID,
                "Major": { "ID": document.getElementById("majorId").value },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": { "ID": id },
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else if (typeChecker == "CBK") {
            template.push({
                "ID": itemID,
                "Major": { "ID": document.getElementById("majorId").value },
                "Subject": null,
                "ChoiceBlock": { "ID": id },
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else if (id.length < 4) {//group
            template.push({
                "ID": itemID,
                "Major": { "ID": document.getElementById("majorId").value },
                "Subject": null,
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": { "ID": id },
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
            });
        }
        else {//subject
            template.push({
                "ID": itemID,
                "Major": { "ID": document.getElementById("majorId").value },
                "Subject": { "ID": id },
                "ChoiceBlock": null,
                "SubMajor": null,
                "Stream": null,
                "SubjectGrouping": null,
                "SubjectType": { "ID": document.getElementById("subjectTypeDropDown" + number).selectedIndex + 1 },
                "Stage": stage,
                "Year": Math.round(stage / 2)
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
            var column = document.getElementById("stageHeading"+i + number);
            var string = "<div id='" + itemID + "' onclick='removeSubject(this.id);'><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><br /><br /></div></div></div>"
            column.innerHTML += string;
            if (id.toString().substring(0, 3) == "CBK" || id.toString().substring(0, 3) == "SMJ" || id.toString().substring(0, 3) == "STM" || name == "Choice") {
                handleHover(id, itemID);
            }
            $("#"+itemID).attr("disabled", "disabled").off("click");
        }
    }
    document.getElementById("subjectAddInput").value = "";
    document.getElementById("subjectTypeDropDown" + number).selectedIndex = 0;
    document.getElementById("subjectStageInput"+number).value = "";
}
//This removes a subject from the timetable grid
function removeSubject(number) {
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







function showAccordion(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    }
    else {
        x.className = x.className.replace(" w3-show", "");
    }
}







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////All TEMPLATE FUNCTIONS
