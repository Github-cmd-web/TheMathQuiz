function addUser() {
    player1_name = document.getElementById("player1_name_input");
    player2_name = document.getElementById("player2_name_input");

    localStorage.setItem("Player 1", player1_name);
    localStorage.setItem("Player 2", player2_name);

    window.location = "quiz_game_page.html";
}