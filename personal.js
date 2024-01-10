$(document).ready(function () {
    let myTeamData = [
        {
            "room_id": 1,
            "date": "2012-04-23",
            "time": "13:30",
            "game": "game1",
            "member1": "member1",
            "member2": "member2",
            "member3": "member3",
            "member4": "member4",
        },
        {
            "room_id": 2,
            "date": "2021-02-01",
            "time": "14:30",
            "game": "game2",
            "member1": "member1",
            "member2": "member2",
            "member3": "member3",
            "member4": "",
        }
    ]

    let interested_joined_data = [
        {
            "room_id": 1,
            "date": "2012-04-23",
            "time": "13:30",
            "game": "game1",
            "host": "host",
            "member1": "member1",
            "member2": "member2",
            "member3": "member3",
        },
        {
            "room_id": 2,
            "date": "2021-02-01",
            "time": "14:30",
            "game": "game2",
            "host": "host",
            "member1": "member1",
            "member2": "member2",
            "member3": "",
        }
    ]
    // if (sessionStorage.getItem('email') == null) {
    //     // if not logged in, email key in sessionStorage will be null and user will be redirected to login page 
    //     window.location.href = "Login.html";
    // }
    $("#tabs").tabs();

    $(document).ready(function() {
        getMyTeam();
        getInterestedTeam();
        getJoinedTeam();
    })

    function getMyTeam() {
        // get all reports from database with edit, delete, and assign btns for each data entry 
        var displaytable = $('#myTeam tbody');
                displaytable.empty();
                $(myTeamData).each(function (index, element) {
                    displaytable.append("<tr>"
                        + "<td class='room_id'>" + element.room_id + '</td>'
                        + "<td class='date'>" + element.date + '</td>'
                        + "<td class='time'>" + element.time + '</td>'
                        + "<td class='game'>" + element.game + '</td>'
                        + "<td class='member1'>" + element.member1 + '</td>'
                        + "<td class='member2'>" + element.member2 + '</td>'
                        + "<td class='member3'>" + element.member3 + '</td>'
                        + "<td class='member4'>" + element.member4 + '</td>'
                        + "<td><input type='button' class='edit_myTeam btn' value='Edit' /></td>"
                        + "<td><input type='button' class='delete_myTeam btn' value='Delete' /></td>"
                        + "</tr>")
                });
                $('#myTeam').DataTable({
                    paging: true,
                    stripeClasses: [],
                    autoWidth: false,
                    "bLengthChange": false,
                });
        // $.ajax({
        //     url: url + 'getMyTeam',
        //     dataType: 'json',
        //     method: 'post',
        //     data: JSON.stringify({
        //         email: sessionStorage.getItem('email')
        //     }),
        //     success: function (data) {
        //         if (data == "-1") {
        //             alert("Error!");
        //         }
        //         var parsed = JSON.parse(data);
        //         var displaytable = $('#myTeam tbody');
        //         displaytable.empty();
        //         $(parsed).each(function (index, element) {
        //             displaytable.append("<tr>"
        //                 + "<td class='room_id'>" + element.room_id + '</td>'
        //                 + "<td class='time'>" + element.time + '</td>'
        //                 + "<td class='game'>" + element.game + '</td>'
        //                 + "<td class='member1'>" + element.member1 + '</td>'
        //                 + "<td class='member2'>" + element.member2 + '</td>'
        //                 + "<td class='member3'>" + element.member3 + '</td>'
        //                 + "<td class='member4'>" + element.member4 + '</td>'
        //                 + "<td><input type='button' class='edit btn' value='Edit' /></td>"
        //                 + "<td><input type='button' class='delete btn' value='Delete' /></td>"
        //                 + "</tr>")
        //         });
        //         $('#myTeam').DataTable({
        //             paging: true,
        //             stripeClasses: [],
        //             autoWidth: false
        //         });
        //     },
        //     error: function (err) {
        //         alert(JSON.stringify(err));
        //     }
        // });
    };

    function getInterestedTeam() {
        var displaytable = $('#interestedTeam tbody');
                displaytable.empty();
                $(interested_joined_data).each(function (index, element) {
                    displaytable.append("<tr>"
                        + "<td class='room_id'>" + element.room_id + '</td>'
                        + "<td class='date'>" + element.date + '</td>'
                        + "<td class='time'>" + element.time + '</td>'
                        + "<td class='game'>" + element.game + '</td>'
                        + "<td class='host'>" + element.host + '</td>'
                        + "<td class='member1'>" + element.member1 + '</td>'
                        + "<td class='member2'>" + element.member2 + '</td>'
                        + "<td class='member3'>" + element.member3 + '</td>'
                        + "<td><input type='button' class='delete_interestedTeam btn' value='Delete' /></td>"
                        + "</tr>")
                });
                $('#interestedTeam').DataTable({
                    paging: true,
                    stripeClasses: [],
                    autoWidth: false,
                    "bLengthChange": false,
                });
        // $.ajax({
        //     url: url + 'getInterestedTeam',
        //     dataType: 'json',
        //     method: 'post',
        //     data: JSON.stringify({
        //         email: sessionStorage.getItem('email')
        //     }),
        //     success: function (data) {
        //         if (data == "-1") {
        //             alert("Error!");
        //         }
        //         var parsed = JSON.parse(data);
        //         var displaytable = $('#interestedTeam tbody');
        //         displaytable.empty();
        //         $(parsed).each(function (index, element) {
        //             displaytable.append("<tr>"
        //                 + "<td class='room_id'>" + element.room_id + '</td>'
        //                 + "<td class='time'>" + element.time + '</td>'
        //                 + "<td class='game'>" + element.game + '</td>'
        //                 + "<td class='host'>" + element.host + '</td>'
        //                 + "<td class='member1'>" + element.member1 + '</td>'
        //                 + "<td class='member2'>" + element.member2 + '</td>'
        //                 + "<td class='member3'>" + element.member3 + '</td>'
        //                 + "<td><input type='button' class='delete_interested btn' value='Delete' /></td>"
        //                 + "</tr>")
        //         });
        //         $('#interestedTeam').DataTable({
        //             paging: true,
        //             stripeClasses: [],
        //             autoWidth: false
        //         });
        //     },
        //     error: function (err) {
        //         alert(JSON.stringify(err));
        //     }
        // });
    };

    function getJoinedTeam() {
        var displaytable = $('#joinedTeam tbody');
                displaytable.empty();
                $(interested_joined_data).each(function (index, element) {
                    displaytable.append("<tr>"
                        + "<td class='room_id'>" + element.room_id + '</td>'
                        + "<td class='date'>" + element.date + '</td>'
                        + "<td class='time'>" + element.time + '</td>'
                        + "<td class='game'>" + element.game + '</td>'
                        + "<td class='host'>" + element.host + '</td>'
                        + "<td class='member1'>" + element.member1 + '</td>'
                        + "<td class='member2'>" + element.member2 + '</td>'
                        + "<td class='member3'>" + element.member3 + '</td>'
                        + "<td><input type='button' class='leave_joinedTeam btn' value='Leave' /></td>"
                        + "</tr>")
                });
                $('#joinedTeam').DataTable({
                    paging: true,
                    stripeClasses: [],
                    autoWidth: false,
                    "bLengthChange": false,
                });
        // $.ajax({
        //     url: url + 'getJoinedTeam',
        //     dataType: 'json',
        //     method: 'post',
        //     data: JSON.stringify({
        //         email: sessionStorage.getItem('email')
        //     }),
        //     success: function (data) {
        //         if (data == "-1") {
        //             alert("Error!");
        //         }
        //         var parsed = JSON.parse(data);
        //         var displaytable = $('#joinedTeam tbody');
        //         displaytable.empty();
        //         $(parsed).each(function (index, element) {
        //             displaytable.append("<tr>"
        //                 + "<td class='room_id'>" + element.room_id + '</td>'
        //                 + "<td class='time'>" + element.time + '</td>'
        //                 + "<td class='game'>" + element.game + '</td>'
        //                 + "<td class='host'>" + element.host + '</td>'
        //                 + "<td class='member1'>" + element.member1 + '</td>'
        //                 + "<td class='member2'>" + element.member2 + '</td>'
        //                 + "<td class='member3'>" + element.member3 + '</td>'
        //                 + "<td><input type='button' class='leave_joinedTeam btn' value='Leave' /></td>"
        //                 + "</tr>")
        //         });
        //         $('#joinedTeam').DataTable({
        //             paging: true,
        //             stripeClasses: [],
        //             autoWidth: false
        //         });
        //     },
        //     error: function (err) {
        //         alert(JSON.stringify(err));
        //     }
        // });
    };

    $('.dialog').dialog({
        // set properties of jquery ui dialog
        draggable: false,
        resizable: false,
        modal: true,
        autoOpen: false,
        position: { my: 'top', at: 'top+150' },
        width: 'auto',
        // open: function () {
        //     $($.fn.dataTable.tables(true)).DataTable().columns.adjust(); // need to resize the column width of DataTable when dialog is opened
        // },
        // close: function () {
        //     // $('.assign_add_shared_user').prop('checked', false); // clear checked radio btn when assign dialog is closed
        //     $('#assign_shared_user_table').DataTable().search('').draw(); // clear the search bar of the assign datatable after the dialog is closed 
        // }
    });

    $("body").on("click", ".ui-widget-overlay", function () {
        // close dialogs when click outside the dialogs
        $('#edit_myTeam_dialog').dialog("close");
        $('#delete_myTeam_dialog').dialog("close");
    });

    // set global variables so that their values could be stored in one function and used in other functions
    var current_room_id = "";
    var current_date = "";
    var current_time = "";
    var current_game = "";
    var host = "";
    var current_member1 = "";
    var current_member2 = "";
    var current_member3 = "";
    var current_member4 = "";

    // function add_shared_user() {
    //     // get all shared users and display them in the dropdown menu of the add table 
    //     $.ajax({
    //         url: url + 'getSharedUsersEmail',
    //         dataType: 'json',
    //         method: 'get',
    //         success: function (data) {
    //             if (data == "-1") {
    //                 alert("Error!");
    //             }
    //             var parsed = JSON.parse(data);
    //             var dropdown = $('#new_shared_user');
    //             dropdown.empty();
    //             $(parsed).each(function (index, element) {
    //                 dropdown.append("<option class='option'>" + element.email + "</option>");
    //             });
    //         },
    //         error: function (err) {
    //             alert(JSON.stringify(err));
    //         }
    //     });
    // };
    // add_shared_user();

    $(document).on('click', '.edit_myTeam', function () {
        // when click on the edit btn
        current_room_id = $(this).closest('tr').children('td.room_id').text();;
        current_date = $(this).closest('tr').children('td.date').text();;
        current_time = $(this).closest('tr').children('td.time').text();;
        current_game = $(this).closest('tr').children('td.game').text();;
        current_member1 = $(this).closest('tr').children('td.member1').text();;
        current_member2 = $(this).closest('tr').children('td.member2').text();;
        current_member3 = $(this).closest('tr').children('td.member3').text();;
        current_member4 = $(this).closest('tr').children('td.member4').text();;
        $('#edit_room_id').val(current_room_id);
        $('#edit_date').val(current_date);
        $('#edit_time').val(current_time);
        $('#edit_game').val(current_game);
        $('#edit_member1').val(current_member1);
        $('#edit_member2').val(current_member2);
        $('#edit_member3').val(current_member3);
        $('#edit_member4').val(current_member4);
        $('#edit_myTeam_dialog').dialog('open');
    });

    $('#edit_myTeam_btn').click(function () {
        // when click on submit btn on edit dialog 
        var new_room_id = $('#edit_room_id').val();
        var new_date = $('#edit_date').val();
        var new_time = $('#edit_time').val();
        var new_game = $('#edit_game').val();
        var new_member1 = $('#edit_member1').val();
        var new_member2 = $('#edit_member2').val();
        var new_member3 = $('#edit_member3').val();
        var new_member4 = $('#edit_member4').val();

        if ((current_name == new_name) && (current_group_id == new_group_id) 
            && (current_report_id == new_report_id) && (current_dataset_id == new_dataset_id)) {
            alert('Please enter in new information!');
        } else {
            alert("some ajax")
            // $.ajax({
            //     url: url + 'editReport',
            //     method: 'put',
            //     data: JSON.stringify({
            //         'old_room_id': current_room_id,
            //         'old_date': current_date,
            //         'old_time': current_time,
            //         'old_game': current_game,
            //         'old_member1': current_member1,
            //         'old_member1': current_member2,
            //         'old_member1': current_member3,
            //         'old_member1': current_member4,
            //         'new_room_id': new_room_id,
            //         'new_date': new_date,
            //         'new_time': new_time,
            //         'new_game': new_game,
            //         'new_member1': new_member1,
            //         'new_member1': new_member2,
            //         'new_member1': new_member3,
            //         'new_member1': new_member4,
            //     }),
            //     contentType: "application/json; charset=utf-8",
            //     success: function (response) {
            //         alert()
            //     },
            //     error: function (err) {
            //         alert(err);
            //     }
            //});
        }
    });

    $(document).on('click', '.delete_myTeam', function () {
        // when click on delete btn 
        current_room_id = $(this).closest('tr').children('td.room_id').text();
        current_date = $(this).closest('tr').children('td.date').text();
        current_time = $(this).closest('tr').children('td.time').text();
        current_game = $(this).closest('tr').children('td.game').text();
        $('#delete_room_id').html(current_room_id);
        $('#delete_date').html(current_date);
        $('#delete_time').html(current_time);
        $('#delete_game').html(current_game);

        $('#delete_myTeam_dialog').dialog('open');
    });

    $('#yes_myTeam').click(function () {
        // when click on yes on delete dialog 
        alert("some ajax");
        // $.ajax({
        //     url: url + 'deleteReport',
        //     method: 'delete',
        //     data: JSON.stringify({
        //         'room_id': current_room_id,
        //     }),
        //     contentType: "application/json; charset=utf-8",
        //     success: function (response) {
        //         if (response == 0) {
        //             alert("Success!")
        //             location.reload();
        //         } else if (response == -1) {
        //             alert("Error!");
        //         } else {
        //             alert("Failed! This report is assigned to one or more customers!");
        //         }
        //     },
        //     error: function (err) {
        //         alert(JSON.stringify(err));
        //     }
        // });
        $('#delete_myTeam_dialog').dialog('close');
    });

    $('.no').click(function () {
        // when click on no on delete dialog 
        $('#delete_myTeam_dialog').dialog('close');
        $('#delete_interestedTeam_dialog').dialog('close');
    });

    $(document).on('click', '.delete_interestedTeam', function () {
        // when click on delete btn 
        current_room_id = $(this).closest('tr').children('td.room_id').text();
        current_date = $(this).closest('tr').children('td.date').text();
        current_time = $(this).closest('tr').children('td.time').text();
        current_game = $(this).closest('tr').children('td.game').text();
        $('#delete_room_id_int').html(current_room_id);
        $('#delete_date_int').html(current_date);
        $('#delete_time_int').html(current_time);
        $('#delete_game_int').html(current_game);

        $('#delete_interestedTeam_dialog').dialog('open');
    });

    $('#yes_interestedTeam').click(function () {
        // when click on yes on delete dialog 
        alert("some ajax");
        // $.ajax({
        //     url: url + 'deleteReport',
        //     method: 'delete',
        //     data: JSON.stringify({
        //         'room_id': current_room_id,
        //         'email': sessionStorage.getItem('email')
        //     }),
        //     contentType: "application/json; charset=utf-8",
        //     success: function (response) {
        //         if (response == 0) {
        //             alert("Success!")
        //             location.reload();
        //         } else if (response == -1) {
        //             alert("Error!");
        //         } else {
        //             alert("Failed! This report is assigned to one or more customers!");
        //         }
        //     },
        //     error: function (err) {
        //         alert(JSON.stringify(err));
        //     }
        // });
        $('#delete_interestedTeam_dialog').dialog('close');
    });

    $(document).on('click', '.leave_joinedTeam', function () {
        // when click on delete btn 
        current_room_id = $(this).closest('tr').children('td.room_id').text();
        current_date = $(this).closest('tr').children('td.date').text();
        current_time = $(this).closest('tr').children('td.time').text();
        current_game = $(this).closest('tr').children('td.game').text();
        $('#leave_room_id').html(current_room_id);
        $('#leave_date').html(current_date);
        $('#leave_time').html(current_time);
        $('#leave_game').html(current_game);

        $('#leave_joinedTeam_dialog').dialog('open');
    });

    $('#yes_joinedTeam').click(function () {
        // when click on yes on delete dialog 
        alert("some ajax");
        // $.ajax({
        //     url: url + 'deleteReport',
        //     method: 'delete',
        //     data: JSON.stringify({
        //         'room_id': current_room_id,
        //         'email': sessionStorage.getItem('email')
        //     }),
        //     contentType: "application/json; charset=utf-8",
        //     success: function (response) {
        //         if (response == 0) {
        //             alert("Success!")
        //             location.reload();
        //         } else if (response == -1) {
        //             alert("Error!");
        //         } else {
        //             alert("Failed! This report is assigned to one or more customers!");
        //         }
        //     },
        //     error: function (err) {
        //         alert(JSON.stringify(err));
        //     }
        // });
        $('#leave_joinedTeam_dialog').dialog('close');
    });




    // $('#add_report').click(function () {
    //     // when click on add btn 
    //     var name = $('#new_report_name').val();
    //     var email = $('#new_shared_user').val();
    //     var group_id = $('#new_group_id').val();
    //     var report_id = $('#new_report_id').val();
    //     var dataset_id = $('#new_dataset_id').val();

    //     if (name == '' || group_id == '' || report_id == '' || dataset_id == '') {
    //         alert("Please fill in all fields!");
    //     } else {
    //         $.ajax({
    //             url: url + 'addReport',
    //             method: 'post',
    //             data: JSON.stringify({
    //                 'name': name,
    //                 'email': email,
    //                 'group_id': group_id,
    //                 'report_id': report_id,
    //                 'dataset_id': dataset_id
    //             }),
    //             contentType: "application/json; charset=utf-8",
    //             success: function (response) {
    //                 if (response == 0) {
    //                     alert("Success!")
    //                     location.reload();
    //                 } else if (response == 2) {
    //                     alert("Report Name already exists!")
    //                 } else if (response == 3) {
    //                     alert("Report Group ID already exists!")
    //                 } else if (response == 4) {
    //                     alert("Report ID already exists!")
    //                 } else if (response == 5) {
    //                     alert("Report Dataset ID already exists!")
    //                 } else if (response == -1) {
    //                     alert("Error!");
    //                 } else {
    //                     alert("Failed!");
    //                 }
    //             },
    //             error: function (err) {
    //                 alert(err);
    //             }
    //         });
    //     }
    // });
    // $('#logout').click(function () {
    //     // remove the value of email key in sessionStorage if logged out
    //     sessionStorage.removeItem('email');
    //     window.location.href = "Login.html";
    // })
});
