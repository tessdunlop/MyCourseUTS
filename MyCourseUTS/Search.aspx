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
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
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
                <h1 style="text-shadow: 1px 1px 1px #2478fc; color: lightskyblue; font-size: 50px">MyCourse</h1>
            </div>
        </div>
        <br />
        <br />


        <div class="row" id="addDiv">
            <div class="col-md" style="text-align: right">
                <button id="btnAdd" type="button" class="btn btn-lg" onclick="handleAdd();" style="background-color: lightskyblue; color: #2478fc"><span class="glyphicon glyphicon-plus"></span></button>
            </div>
        </div>
         <br />

        <div class="row" id="searchDiv">
            <div class="col-md">
                <input id="searchBar" name="searchBar" type="text" class="form-control typeahead" placeholder="Search Courses" oninput="handleSearch(this.value);"/>
            </div>
        </div>
        <br />
        <br />


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
                    <p><b>Number of Years</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseYears" class="form-control" style="width: 60%;" />
                </div>
                <br />
                <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Number of Stages</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="courseStages" class="form-control" style="width: 60%;" />
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
                    <p><b>Number of Stages</b></p>
                </div>
                <div class="col-sm">
                    <input type="number" id="majorStages" class="form-control" style="width: 60%;" />
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
                    <p><b>Include Sub-Major, Stream or Choice Block</b></p>
                </div>
                <div class="col-sm radio">
                    <input type="checkbox" value="includeStream" id="includeStream" />
                </div>
                <br />
                <br />
            </div>
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
                        <input type="radio" name="optionType" id="choiceBlockOption" onclick="handleChoiceBlock();"/>Choice Block</label>
                </div>
                <br />
                 <br />
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p id="streamNameTitle"><b >Stream Name</b></p>
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
                <div class="col-sm" style="text-align: right">
                    <p><b>Status</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="streamStatus" id="streamStatusActive" />Active</label>
                    <label class="radio-inline">
                        <input type="radio" name="streamStatus" id="streamStatusInActive"/>Inactive</label>
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
                    <p><b>Status</b></p>
                </div>
                <div class="col-sm radio">
                    <label class="radio-inline">
                        <input type="radio" name="subjectStatus" id="subjectActiveStatus" />Active</label>
                    <label class="radio-inline">
                        <input type="radio" name="subjectStatus" id="subjectInActiveStatus" />Inactive</label>
                </div>
            </div>
            <div class="row" style="padding-bottom: 8px">
                <div class="col-sm" style="text-align: right">
                    <p><b>Pre-Requisites:</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="subjectPreReq" rows="5" style="width: 60%;"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-sm" style="text-align: right">
                    <p><b>Requisites:</b></p>
                </div>
                <div class="col-sm">
                    <textarea class="form-control" id="subjectReq" rows="5" style="width: 60%;"></textarea>
                </div>
            </div>
        </div>




        <div id="addCourseSubjectsFormDiv" style="display: none">

            <%--            <div class="row">
                <div class="col-lg-11" style="text-align: center; padding-left: 20%;">
                    <input id="subjectBar" name="subjectBar" type="text" class="form-control" placeholder="Add Subjects" />
                </div>
                <div class="col-sm-1" style="text-align: left; padding-left: 20px;">
                    <button id="btnAddSubject" type="button" class="btn btn-lg" onclick="handleSubjectAdd();" style="background-color: lightskyblue; color: #2478fc"><span class="glyphicon glyphicon-plus"></span></button>
                </div>
            </div>--%>
            <div class="row">
                <div class="col-lg" style="text-align: center;">
                    <input id="subjectBar" name="subjectBar" type="text" class="form-control" placeholder="Add Subjects" />
                </div>
            </div>
            <br />
            <br />

            <div id="selectedSubjectDiv">
                <%--<div id="selectedSubjectDiv" style="display: none">--%>
                <div class="row">
                    <div class="col-lg">
                        <h4 id="subjectTitle" style="text-align: center"></h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg">
                        <h5 id="subjectNumber" style="text-align: center"></h5>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm" style="text-align: right">
                        <p><b>Subject Type</b></p>
                    </div>
                    <div class="col-sm">
                        <input type="text" id="subjectType" class="form-control" style="width: 60%;" />
                    </div>
                    <br />
                    <br />
                </div>
                <div class="row">
                    <div class="col-sm" style="text-align: right">
                        <p><b>Subject Stage</b></p>
                    </div>
                    <div class="col-sm">
                        <input type="number" id="subjectStage" class="form-control" style="width: 60%;" />
                    </div>
                </div>
                <br />
                <br />
                <div class="row">
                    <div class="col-lg">
                        <center><button id="btnAddSubject" type="button" class="btn btn-lg" onclick="handleSubjectAdd();" style="background-color: lightskyblue; color: #2478fc"><span class="glyphicon glyphicon-plus"></span></button></center>
                    </div>
                </div>

                <br />
            </div>
        </div>
        <br />

        <hr />

        <div id="subjectListDiv" style="display: none; text-align: center;">
            <div class="row">
                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            One</h4>
                    </u>
                    <br />
                    <div id="stageOne">

                        <%--                <div id="">
                <div class="row" style="border-top:thin solid black; border-left:thin solid black; border-right:thin solid black; background-color:orange;">
                    <p><b>Software</b></p>
                </div>
                <div class="row" style="border-left:thin solid black; border-right:thin solid black; background-color:orange;">
                    <p>1234</p>
                </div>
                <div class="row" style="border-left:thin solid black; border-right:thin solid black; background-color:orange;">
                    <p>elective</p>
                </div>
                <div class="row" style="border-bottom:thin solid black; border-left:thin solid black; border-right:thin solid black; background-color:orange;">
                    <button>-</button>
                </div>
                </div>--%>
                    </div>
                </div>


                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Two</h4>
                    </u>
                    <br />
                    <div id="stageTwo"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Three</h4>
                    </u>
                    <br />
                    <div id="stageThree"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Four</h4>
                    </u>
                    <br />
                    <div id="stageFour"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Five</h4>
                    </u>
                    <br />
                    <div id="stageFive"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Six</h4>
                    </u>
                    <br />
                    <div id="stageSix"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Seven</h4>
                    </u>
                    <br />
                    <div id="stageSeven"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Eight</h4>
                    </u>
                    <br />
                    <div id="stageEight"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Nine</h4>
                    </u>
                    <br />
                    <div id="stageNine"></div>
                </div>

                <div class="col-sm">
                    <u>
                        <h4>Stage<br />
                            Ten</h4>
                    </u>
                    <br />
                    <div id="stageTen"></div>
                </div>



                <br />
            </div>
            <br />
            <br />
        </div>



        <div class="row" id="cancelButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnEdit" type="button" class="btn btn-lg" onclick="handleEdit();" style="background-color: #2478fc; color: white">Edit</button>
                <button id="btnSave" type="button" class="btn btn-lg" onclick="handleSaveChanges();" style="background-color: #2478fc; color: white">Save</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>


        <div class="row" id="backButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnBack" type="button" class="btn btn-lg" onclick="handleBack();" style="background-color: #2478fc; color: white">Back</button>
                <button id="btnNext" type="button" class="btn btn-lg" onclick="handleNext();" style="background-color: #2478fc; color: white">Next</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>

        <div class="row" id="nextButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnNext" type="button" class="btn btn-lg" onclick="handleNext();" style="background-color: #2478fc; color: white">Next</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>

        <div class="row" id="submitButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnBack" type="button" class="btn btn-lg" onclick="handleBack();" style="background-color: #2478fc; color: white">Back</button>
                <button id="btnSubmit" type="button" class="btn btn-lg" onclick="handleSubmit();" style="background-color: green; color: white">Finished</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>

        <div class="row" id="subjectSubmitButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnSubmit" type="button" class="btn btn-lg" onclick="handleSubmit();" style="background-color: green; color: white">Submit</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>

        <div class="row" id="updateButtonDiv" style="display: none">
            <div class="col-md" style="text-align: right">
                <button id="btnDelete" type="button" class="btn btn-lg" onclick="handleDelete();" style="background-color: red; color: white">Delete</button>
                <button id="btnUpdate" type="button" class="btn btn-lg" onclick="handleUpdate();" style="background-color: green; color: white">Update</button>
                <button id="btnCancel" type="button" class="btn btn-lg" onclick="handleCancel();" style="background-color: red; color: white">Cancel</button>
            </div>
        </div>
    </div>

</asp:Content>

