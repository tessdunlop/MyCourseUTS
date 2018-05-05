<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Search.aspx.cs" Inherits="MyCourseUTS.Search" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="Scripts/search.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <%-- <div class="container" id="container" style=" background-color:pink">--%>
    <div id="loading">
    </div>
    <div id="container">
        <br />
        <br />
        <div id="preview" class="row"></div>

        <div class="row">
            <div class="col-md">


                <ul id="nav" class="nav nav-pills">
                    <li class="nav-item">
                        <a id="course" class="nav-link active" data-toggle="pill" href="#" onclick="handleCourse();">Course</a>
                    </li>
                    <li class="nav-item">
                        <a id="major" class="nav-link" data-toggle="pill" href="#" onclick="handleMajor();">Major</a>
                    </li>
                    <li class="nav-item">
                        <a id="submajor" class="nav-link" data-toggle="pill" href="#" onclick="handleSubMajor();">Sub-Major</a>
                    </li>
                    <li class="nav-item">
                        <a id="stream" class="nav-link" data-toggle="pill" href="#" onclick="handleStream();">Stream</a>
                    </li>
                    <li class="nav-item">
                        <a id="choiceblock" class="nav-link" data-toggle="pill" href="#" onclick="handleChoiceBlock();">Choice Block</a>
                    </li>
                    <li class="nav-item">
                        <a id="subject" class="nav-link" data-toggle="pill" href="#" onclick="handleSubject();">Subject</a>
                    </li>
                </ul>

            </div>

        </div>
        <div class="row">
            <div class="col-md" style="text-align: right">
                <h1 style="text-shadow: 1px 1px 1px #2478fc; color: lightskyblue; font-size: 50px">UTS:my<b>Course</b></h1>
            </div>
        </div>
        <br />
        <br />

        <div id="introViewMode" style="display: block" class="viewMode">
            <b>PLEASE READ:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>From the menu select the item type that you would like to add or search for</li>
                <li>If you would like to add, hit the plus button on the right hand side of the screen</li>
                <li>If you would like to search, start typing in the search bar and select the item from the drop down. Note: please allow a few seconds after selecting your item for it to appear on the page</li>
            </ul>
        </div>
        <br />

        <div class="row">
            <div class="col-sm-11" id="searchDiv" style="width: 100%; padding-top: 12px">
                <input id="searchBar" name="searchBar" type="text" class="form-control typeahead" placeholder="Search Courses" oninput="handleSearch(this.value);" />
            </div>
            <div class="col-sm-1 float-right" id="addDiv" style="text-align: right;">
                <button id="btnAdd" type="button" class="btn btn-lg" onclick="handleAdd();"><i class="fa fa-plus"></i></button>
            </div>
        </div>

        <div class="row">
            <div class="col-md">
            </div>
        </div>

        <%--<div id="loading"></div>--%>



        <div id="courseViewMode" class="viewMode">
            <b>VIEW MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>Here you can view the Course information</li>
                <li>You can expand and collapse the Course/Major template information by selecting the Course/Major you want to view in the list below</li>
                <li>Hovering over a subject will display the requisite information</li>
                <li>Hovering over a subject grouping will display its contents</li>
                <li>The cancel button will take you back to the search bar home page</li>
            </ul>
        </div>
        <div class="editMode" id="courseEditMode">
            <b>EDIT MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>You can edit the course information</li>
                <li>You can delete the entire course and its information</li>
                <li>To add a major search for it in the Majors input bar and select the major you want to add (it will be pushed to the list below which you can expand to view)</li>
                <li>To delete a major, expand the major you want to delete and hit the “Delete Major” button at the bottom</li>
                <li>To add a subject to a course or major template, expand the course or major from the list below, enter the subjects, choice block, sub major or stream from the input bar, select the subject type and where you want that subject to sit in the template then press the plus button to add</li>
                <li>To delete a subject simply click on the subject within the template and it will be removed</li>
                <li>Please make sure you have filled in the mandatory information before adding Majors to the Course</li>
                <li>Please note that a save is required before changes can be seen in the PDF generation</li>
                <li>To discard all changes simply hit the cancel button</li>
                <li>The save button will update all the data within the page including template and course information that you have not touched.</li>
                <li>DO NOT go back, refresh or close the page while saving as this could risk losing all the course data </li>
            </ul>
        </div>

        <div id="majorViewMode" class="viewMode">
            <%--View Mode: —> turn off when edit button is pressed--%>
            <b>VIEW MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>Here you can view the Major information</li>
            </ul>

            <%--Edit Mode: —> turn on when edit button is pressed--%>
        </div>
        <div id="majorEditMode" class="editMode">
            <b>EDIT MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>You can edit the major information</li>
                <li>You can delete the entire major and its information</li>
                <li>DO NOT go back, refresh or close the page while saving as this could risk losing all the major data </li>
            </ul>
        </div>

        <div id="choiceViewMode" class="viewMode">
            <%--View Mode: —> turn off when edit button is pressed--%>
            <b>VIEW MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>Here you can view the Subject grouping information</li>
            </ul>

            <%--Edit Mode: —> turn on when edit button is pressed--%>
        </div>
        <div id="choiceEditMode" class="editMode">
            <b>EDIT MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>You can edit the subject grouping information</li>
                <li>You can delete the entire group and its information</li>
                <li>To add to the contents of the group (either subject, CBK, STM, or SMJ) type what you want to add in the contents input field and then select the item to add it to the list</li>
                <li>DO NOT go back, refresh or close the page while saving as this could risk losing all the subject data </li>
            </ul>
        </div>

        <div id="subjectViewMode" class="viewMode">
            <%--View Mode: —> turn off when edit button is pressed--%>
            <b>VIEW MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>Here you can view the Subject information</li>
            </ul>

            <%--Edit Mode: —> turn on when edit button is pressed--%>
        </div>
        <div class="editMode" id="subjectEditMode" class="editMode">
            <b>EDIT MODE:</b>
            <br />
            <br />
            <ul style="font-size: 12px;">
                <li>You can edit the subject information</li>
                <li>You can delete the entire subject and its information</li>
                <li>To add a requisite search for the subject in the appropriate input field and then select the subject to push to the appropriate list</li>
                <li>DO NOT go back, refresh or close the page while saving as this could risk losing all the subject data </li>
            </ul>
        </div>

        <br />
        <br />
        <div id="addCourseFormDiv" style="display: none">
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelCourseName">Course Name</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="courseName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelCourseId">Course Identification</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="courseId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>

            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Course Type</b><b style="color: red; font-size: large"> *</b></p>
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
                    <p><b id="labelCourseAbbreviation">Course Abbreviation</b><b style="color: red; font-size: large"> *</b></p>
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
                    <p><b id="labelCourseYears">Number of Years</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseYears" class="form-control" style="width: 60%;" oninput="checkYearValue(this.value);" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelCourseStages">Number of Stages</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseStages" class="form-control" style="width: 60%;" oninput="checkStageValue(this.value);" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelCourseCredit">Credit Points</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelCourseVersion">Version</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseVersion" class="form-control" style="width: 60%;" />
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
                    <p><b>Status</b><b style="color: red; font-size: large"> *</b></p>
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
            <div class="row" style="padding-bottom: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Majors</b></p>
                </div>
                <div class="col-sm">
                    <input id="majorInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Majors belonging to this course" oninput="handleMajorListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
            <%--            <div class="row">
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
            </div>--%>
            <br />
            <br />
        </div>



        <div id="addMajorFormDiv" style="display: none">
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelMajorName">Major Name</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="majorName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelMajorId">Major Identification</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="majorId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelMajorAbbreviation">Major Abbreviation</b><b style="color: red; font-size: large"> *</b></p>
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
                    <p><b id="labelMajorStages">Number of Stages</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="majorStages" class="form-control" style="width: 60%;" oninput="checkStageValue(this.value);" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelMajorCredit">Credit Points</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="majorCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelMajorVersion">Version</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="majorVersion" class="form-control" style="width: 60%;" />
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
                    <p><b>Status</b><b style="color: red; font-size: large"> *</b></p>
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
            <%--            <div class="row">
                <div class="col-sm" style="text-align: right; padding-top: 10px;">
                    <p><b>Include Template</b></p>
                </div>
                <div class="col-sm radio">
                    <input type="checkbox" value="includeMajorTemplate" id="includeMajorTemplate" />
                </div>
                <br />
                <br />
            </div>--%>
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
                    <p id="labelStreamName"><b>Stream Name</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p id="labelStreamId"><b>Stream Identification</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p id="labelStreamAbbreviation"><b>Stream Abbreviation</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="streamAbb" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-bottom: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Contents</b></p>
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
                    <p><b id="labelStreamCredit">Credit Points</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="streamCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelStreamVersion">Version</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="streamVersion" class="form-control" style="width: 60%;" />
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
                    <p><b>Status</b><b style="color: red; font-size: large"> *</b></p>
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
                    <p><b id="labelSubjectName">Subject Name</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="text" id="subjectName" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelSubjectId">Subject Identification</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="subjectId" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelSubjectAbbreviation">Subject Abbreviation</b><b style="color: red; font-size: large"> *</b></p>
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
                    <p><b id="labelSubjectCredit">Credit Points</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="subjectCredit" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row" style="padding-top: 3px;">
                <div class="col-sm" style="text-align: right">
                    <p><b id="labelSubjectVersion">Version</b><b style="color: red; font-size: large"> *</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="subjectVersion" class="form-control" style="width: 60%;" />
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
                    <p><b>Status</b><b style="color: red; font-size: large"> *</b></p>
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
                    <div class="list-group" id="subjectPreReq" style="width: 60%; padding-top: 5px;"></div>
                    <input id="subjectPreReqInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Pre-Requisites" oninput="handlePreRequisiteListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Anti-Requisites:</b></p>
                </div>
                <div class="col-sm">
                    <div class="list-group" id="subjectAntiReq" style="width: 60%; padding-top: 5px;"></div>
                    <input id="subjectAntiReqInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Anti-Requisites" oninput="handleAntiRequisiteListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Co-Requisites:</b></p>
                </div>
                <div class="col-sm">
                    <div class="list-group" id="subjectCoReq" style="width: 60%; padding-top: 15px;"></div>
                    <input id="subjectCoReqInput" name="searchBar" type="text" class="form-control typeahead" placeholder="Add Co-Requisites" oninput="handleCoRequisiteListPush(this.value);" style="width: 60%;" />
                </div>
            </div>
        </div>


        <div id="accordion" style="text-align: center;">
        </div>



        <div class="row" id="headerRow"></div>
        <br />
        <br />

        <div class="row" id="updateButtonDiv">
            <%--<div class="col-md" style="text-align: right">--%>

            <button id="btnSave" type="button" class="btn btn-lg" onclick="handleSave();" style="background-color: green; color: white; display: none;">Save</button> 
            <button id="btnDelete" type="button" class="btn btn-lg" onclick="handleDelete();" style="background-color: red; color: white; display: none;">Delete</button> 
            <button id="btnEdit" type="button" class="btn btn-lg" onclick="handleEdit();" style="background-color: #2478fc; color: white">Edit</button> 
            <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: darkgrey; color: white">Cancel</button> 
            <button id="btnBack" type="button" class="btn btn-lg" onclick="handleBack();" style="background-color: darkgrey; color: white">Back</button> 
            <%--</div>--%>
        </div>

        <div class="row" id="submitButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnSubmit" type="button" class="btn btn-lg" onclick="handleSave();" style="background-color: green; color: white">Submit</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleBack();" style="background-color: red; color: white">Back</button>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />



        <div id="saveAlert"></div>
    </div>

</asp:Content>
