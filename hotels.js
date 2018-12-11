var hotel = {
    name: "CareerDevs JavaScript Hotel",
    rating: 5.0,
    roomRate: 325,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function () {
        //length of the number of rooms available, returned as an integer (1, 5, 20, etc)
        return this.roomNumbersAvailable.length;
    },

    numberOfRooms: function () {
        //available rooms added to booked rooms 
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },

    bookRoom: function() {
        //only book a room if one is available

        if (this.numberOfRoomsAvailable() > 0) {
            var selectedRoomDD =  document.getElementById("selectedRoom").value;
            this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));
             ////////////////////////////////////////////////////////////////////////////

             var roomsListed= "<form> <select id= 'selectedRoom'>";

             
            for (var i = 0; i < this.roomNumbersAvailable.length; i++) {

            roomsListed += "<option value =" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
            }
            roomsListed += "</select>";
            roomsListed += "</form>";
            document.getElementById("selectARoom").innerHTML = roomsListed ;
            ////////////////////////////////////////////////////////////////////////////////////////////////////

            var roomsBooked = "<form> <select id= 'bookedRoom'>";
            for (var i = 0; i < this.roomNumbersBooked.length; i++) {

            roomsBooked += "<option value =" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
            }
            roomsBooked += "</select></form>";
            document.getElementById("rmBooked").innerHTML = roomsBooked ;
    
             }

        },

    unBookRoom: function() {
        //only book a room if one is available

        if (this.roomNumbersBooked.length > 0) {

            var selectedRoomBooked =  document.getElementById("bookedRoom").value;
            this.roomNumbersAvailable.unshift(this.roomNumbersBooked.splice(this.roomNumbersBooked.indexOf(selectedRoomBooked), 1));
             ////////////////////////////////////////////////////////////////////////////

             var roomsListed= "<form> <select id= 'selectedRoom'>";

             
            for (var i = 0; i < this.roomNumbersAvailable.length; i++) {

                roomsListed += "<option value =" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
            }
            roomsListed += "</select> </form>";
            document.getElementById("selectARoom").innerHTML = roomsListed ;
            ////////////////////////////////////////////////////////////////////////////////////////////////////
            var roomsBooked = "<form> <select id= 'bookedRoom'>";
            for (var i = 0; i < this.roomNumbersBooked.length; i++) {
                roomsBooked += "<option value =" + this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
            }
            roomsBooked += "</select></form>";
            document.getElementById("rmBooked").innerHTML = roomsBooked ;

    
             }

        }

};


// End of UL List Section

// Start of select a room method
//roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],

var selectRoomList = "<form> <select id= 'selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {

    selectRoomList += "<option value =" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}
selectRoomList += "</select></form>";
document.getElementById("selectARoom").innerHTML = selectRoomList;

////////////////////////////////////////////////////////////////////////////////////
var roomsBooked = "<form> <select id= 'bookedRoom'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {

     roomsBooked += "<option value =" + hotel.roomNumbersBooked[i] + ">" + hotel.roomNumbersBooked[i] + "</option>";
}
roomsBooked += "</select></form>";
document.getElementById("rmBooked").innerHTML = roomsBooked ;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
