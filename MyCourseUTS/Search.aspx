<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Search.aspx.cs" Inherits="MyCourseUTS.Search" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="Scripts/search.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container" id="container">
        <br />
        <br />
        <div class="row">
            <div class="col-md">
                <div class="btn-group btn-group-toggle" data-toggle="buttons" id="menuTabs">
                    <label class="btn" style="background-color: #2478fc" id="course">
                        <input type="radio" name="course" id="btnCourse" checked onclick="handleCourse();" />
                        Course
                   
                   
                   
                    </label>
                    <label class="btn" style="background-color: lightskyblue" id="major">
                        <input type="radio" name="major" id="btnMajor" onclick="handleMajor();" />
                        Major
                   
                   
                   
                    </label>
                    <label class="btn" style="background-color: lightskyblue" id="submajor">
                        <input type="radio" name="major" id="btnSubMajor" onclick="handleSubMajor();" />
                        Sub-Major
                   
                   
                   
                    </label>
                    <label class="btn" style="background-color: lightskyblue" id="stream">
                        <input type="radio" name="stream" id="btnStream" onclick="handleStream();" />
                        Stream
                   
                   
                   
                    </label>
                    <label class="btn" style="background-color: lightskyblue" id="choiceblock">
                        <input type="radio" name="choiceblock" id="btnChoiceBlock" onclick="handleChoiceBlock();" />
                        Choice Block
                   
                   
                   
                    </label>
                    <label class="btn" style="background-color: lightskyblue" id="subject">
                        <input type="radio" name="subject" id="btnSubject" onclick="handleSubject();" />
                        Subject
                   
                   
                   
                    </label>

                </div>
            </div>
            <div class="col-md" style="text-align: right">
                <h1 style="text-shadow: 1px 1px 1px #2478fc; color: lightskyblue; font-size: 50px">UTS:my<b>Course</b></h1>
            </div>
        </div>
        <br />
        <br />



        <div class="row">
            <div class="col-sm-11" id="searchDiv" style="width: 100%; padding-top: 12px">
                <input id="searchBar" name="searchBar" type="text" class="form-control typeahead" placeholder="Search Courses" oninput="handleSearch(this.value);" />
            </div>
            <div class="col-sm-1" style="text-align: right; width: 20%; padding-bottom: 12px" id="addDiv">
                <button id="btnAdd" type="button" class="btn btn-lg" onclick="handleAdd();" style="background-color: lightskyblue; color: #2478fc"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
        </div>

        <div class="row">
            <div class="col-md">
            </div>
        </div>

        <div id="addCourseFormDiv" style="display: none">
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Course Name</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="courseName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Course Identification</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="courseId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Course Type</b></p>
                </div>
                <div class="col-sm" style="padding-bottom: 8px">
                    <select id="courseType" class="form-control" style="width: 60%; height: 100%">
                    </select>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Course Abbreviation</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="courseAbb" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Course Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="courseDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-top: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Number of Years</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseYears" class="form-control" style="width: 60%;" oninput="checkYearValue(this.value);" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Number of Stages</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseStages" class="form-control" style="width: 60%;" oninput="checkStageValue(this.value);" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Credit Points</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="courseVersion" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="courseVersionDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Status</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="courseStatus" id="courseStatusActive" />Active</label>
                    <label class="radio-inline">
                        <input type="radio" name="courseStatus" id="courseStatusInActive" />Inactive</label>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Include Major</b></p>
                </div>
                <div class="col-sm radio">
                    <input type="checkbox" value="includeMajor" id="includeMajor" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Include Template</b></p>
                </div>
                <div class="col-sm radio">
                    <input type="checkbox" value="includeCourseTemplate" id="includeCourseTemplate" />
                </div>
                <br />
                <br />
            </div>
        </div>



        <div id="addMajorFormDiv" style="display: none">
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Major Name</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="majorName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Major Identification</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="majorId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-bottom: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Courses</b></p>
                </div>
                <div class="col-sm">
                    <div class="list-group" id="courseMajorList" style="width: 60%;"></div>
                    <input id="courseMajorInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Courses this Major belongs to" oninput="handleCourseMajorListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Major Abbreviation</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="majorAbb" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Major Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="majorDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-top: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Number of Stages</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="majorStages" class="form-control" style="width: 60%;" oninput="checkStageValue(this.value);" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Credit Points</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="majorCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="majorVersion" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="majorVersionDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>

            <div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Status</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="majorStatus" id="majorStatusActive" />Active</label>
                    <label class="radio-inline">
                        <input type="radio" name="majorStatus" id="majorStatusInActive" />Inactive</label>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Include Template</b></p>
                </div>
                <div class="col-sm radio">
                    <input type="checkbox" value="includeMajorTemplate" id="includeMajorTemplate" />
                </div>
                <br />
                <br />
            </div>
            <%--<div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Include Sub-Major, Stream or Choice Block</b></p>
                </div>
                <div class="col-sm radio">
                    <input type="checkbox" value="includeStream" id="includeStream" />
                </div>
                <br />
                <br />
            </div>--%>
        </div>




        <div id="addStreamFormDiv" style="display: none">
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Option</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="optionType" id="subMajorOption" onclick="handleSubMajor();" />Sub-Major</label>
                    <label class="radio-inline">
                        <input type="radio" name="optionType" id="streamOption" onclick="handleStream();" />Stream</label>
                    <label class="radio-inline">
                        <input type="radio" name="optionType" id="choiceBlockOption" onclick="handleChoiceBlock();" />Choice Block</label>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p id="streamNameTitle"><b>Stream Name</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p id="streamIDTitle"><b>Stream Identification</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p id="streamAbbreviationTitle"><b>Stream Abbreviation</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamAbb" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-bottom: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Subjects</b></p>
                </div>
                <div class="col-sm">
                    <div class="list-group" id="streamSubjectList" style="width: 60%;"></div>
                    <input id="streamSubjectInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add subjects, streams, choice blocks or sub-majors" oninput="handleStmCbkSmjListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right" id="streamDescriptionTitle">
                    <p><b>Stream Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="streamDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-top: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Credit Points</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="streamCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamVersion" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right" id="streamVersionDescriptionTitle">
                    <p><b>Version Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="streamVersionDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Status</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="streamStatus" id="streamStatusActive" />Active</label>
                    <label class="radio-inline">
                        <input type="radio" name="streamStatus" id="streamStatusInActive" />Inactive</label>
                </div>
                <br />
                <br />
            </div>
        </div>


        <div id="addSubjectFormDiv" style="display: none">
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Subject Name</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="subjectName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Subject Identification</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="subjectId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Subject Abbreviation</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="subjectAbb" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Subject Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="subjectDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-top: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Credit Points</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="subjectCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-top: 3px;">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="subjectVersion" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Version Description</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="subjectVersionDescription" rows="5" style="width: 60%;"></textarea>
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Status</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="subjectStatus" id="subjectStatusActive" />Active</label>
                    <label class="radio-inline">
                        <input type="radio" name="subjectStatus" id="subjectStatusInActive" />Inactive</label>
                </div>
            </div>
            <div class="row" style="padding-bottom: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Pre-Requisites:</b></p>
                </div>
                <div class="col-sm">
                    <div class="list-group" id="subjectPreReq" style="width: 60%;"></div>
                    <input id="subjectPreReqInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Pre-Requisites" oninput="handlePreRequisiteListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Anti-Requisites:</b></p>
                </div>
                <div class="col-sm">
                    <div class="list-group" id="subjectAntiReq" style="width: 60%;"></div>
                    <input id="subjectAntiReqInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Anti-Requisites" oninput="handleAntiRequisiteListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
        </div>






        <div id="timetable" style="text-align: center;">

            <div id="subjectAddDisable" style="display: none">
                <hr />
                <h1 style="text-align: center; color: #2478fc">Template Designer</h1><hr /><br />
                <div class="row">
                    <div class="col" style="text-align: right; padding-top: 12px">
                        <p><b>Subject or Group</b></p>
                    </div>
                    <div class="col" style="padding-top: 12px">
                        <input id="subjectAddInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Subject, CBK, SMJ or STM" oninput="handleSubjectInput(this.value);" style="width: 100%;" />
                    </div>
                    <div class="col" style="text-align: center;"></div>
                </div>
                <div class="row">
                    <div class="col" style="text-align: right; padding-top: 12px">
                        <p><b>Subject Type</b></p>
                    </div>
                    <div class="col" style="padding-top: 12px">
                        <select id="subjectTypeDropDown" class="form-control" style="width: 100%; height: 100%">
                        </select>
                    </div>
                    <div class="col" style="text-align: center;"></div>
                </div>
                <div class="row">
                    <div class="col" style="text-align: right; padding-top: 12px">
                        <p><b>Stage</b></p>
                    </div>
                    <div class="col" style="padding-top: 12px">
                        <input id="subjectStageInput" name="searchBar" type="number" class="form-control typeahead" style="width: 100%;" oninput="handleSubjectStageInput(this.value)" />
                    </div>
                    <div class="col" style="text-align: left; padding-bottom: 30px">
                        <button disabled id="btnTimetableAdd" type="button" class="btn btn-lg" onclick="addToTimetable();" style="background-color: green; color: white"><span class="glyphicon glyphicon-plus"></span></button>
                    </div>
                </div>
                <div class="row" style="padding-bottom: 8px">
                    <%--<div class="col-sm" style="text-align:center">
                    <button disabled id="btnTimetableAdd" type="button" class="btn btn-lg" onclick="addToTimetable();" style="background-color: green; color: white"><span class="glyphicon glyphicon-plus"></span></button>
                </div>--%>
                </div>
            </div>
        </div>

        <div class="row" id="headerRow"></div>
        <br />
        <br />


        <div class="row" id="updateButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnEdit" type="button" class="btn btn-lg" onclick="handleEdit();" style="background-color: #2478fc; color: white">Edit</button>
                <button id="btnSave" type="button" class="btn btn-lg" onclick="handleSaveChanges();" style="background-color: green; color: white">Save</button>
                <button id="btnDelete" type="button" class="btn btn-lg" onclick="handleDelete();" style="background-color: red; color: white">Delete</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: darkgrey; color: white">Cancel</button>
            </div>
        </div>

        <div class="row" id="submitButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnSubmit" type="button" class="btn btn-lg" onclick="handleSubmit();" style="background-color: green; color: white">Submit</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
    </div>

</asp:Content>

