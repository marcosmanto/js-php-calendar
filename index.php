<?php
  $conn = mysqli_connect('localhost', 'root', '1234', 'calendar_app');

  if (!$conn) {
      die('There was an error connecting to the database.');
  }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700" rel="stylesheet" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    />
    <title>Calendar App: Build</title>
    <link rel="icon" type="image/png" href="images/icon2.png" sizes="72x72" />
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <section class="current-day">
      <h1 id="app-name-landscape" class="current-day__title">My Calendar</h1>
      <div class="current-day__heading">
        <h2 id="cur-year" class="current-day__subtitle">2021</h2>
        <h3 id="cur-day-week" class="current-day__day-info">Monday</h3>
        <h3 id="cur-month" class="current-day__day-info">June</h3>
        <h3 id="cur-day" class="current-day__day-info">7</h3>
      </div>
      <button class="btn btn--landscape current-day__btn">Change Theme</button>
    </section>
    <section class="calendar">
      <h1 id="app-name-portrait" class="calendar__title">My Calendar</h1>
      <div class="calendar__wrapper">
        <div class="calendar__header">
          <div class="calendar__year">2021</div>
          <div class="calendar__navigation">
            <div class="calendar__prev-month"><i class="fas fa-caret-left"></i></div>
            <div class="calendar__month">December</div>
            <div class="calendar__next-month"><i class="fas fa-caret-right"></i></div>
          </div>
        </div>

        <div class="calendar__table">
          <div class="calendar__day">Sun</div>
          <div class="calendar__day">Mon</div>
          <div class="calendar__day">Tue</div>
          <div class="calendar__day">Wed</div>
          <div class="calendar__day">Thu</div>
          <div class="calendar__day">Fri</div>
          <div class="calendar__day">Sat</div>
          <div class="calendar__number calendar__number--off"><div class="calendar__day-number"></div></div>
          <div class="calendar__number calendar__number--off"><div class="calendar__day-number"></div></div>
          <div class="calendar__number calendar__number--off"><div class="calendar__day-number"></div></div>
          <div class="calendar__number calendar__number--off"><div class="calendar__day-number"></div></div>
          <div class="calendar__number"><div class="calendar__day-number">1</div></div>
          <div class="calendar__number"><div class="calendar__day-number">2</div></div>
          <div class="calendar__number"><div class="calendar__day-number">3</div></div>
          <div class="calendar__number calendar__number--has-tooltip">
            <div class="calendar__day-number">4</div>
            <img src="images/note2.png" alt="Note">
            <span>This is a pretty good note.</span>
          </div>
          <div class="calendar__number"><div class="calendar__day-number">5</div></div>
          <div class="calendar__number"><div class="calendar__day-number">6</div></div>
          <div class="calendar__number"><div class="calendar__day-number">7</div></div>
          <div class="calendar__number"><div class="calendar__day-number">8</div></div>
          <div class="calendar__number"><div class="calendar__day-number">9</div></div>
          <div class="calendar__number calendar__number--has-tooltip">
            <div class="calendar__day-number">10</div>
            <img src="images/note1.png" alt="Note">
            <span>This is a pretty good note.</span>
          </div>
          <div class="calendar__number"><div class="calendar__day-number">11</div></div>
          <div class="calendar__number"><div class="calendar__day-number">12</div></div>
          <div class="calendar__number"><div class="calendar__day-number">13</div></div>
          <div class="calendar__number calendar__number--selected"><div class="calendar__day-number">14</div></div>
          <div class="calendar__number"><div class="calendar__day-number">15</div></div>
          <div class="calendar__number"><div class="calendar__day-number">16</div></div>
          <div class="calendar__number"><div class="calendar__day-number">17</div></div>
          <div class="calendar__number"><div class="calendar__day-number">18</div></div>
          <div class="calendar__number"><div class="calendar__day-number">19</div></div>
          <div class="calendar__number"><div class="calendar__day-number">20</div></div>
          <div class="calendar__number"><div class="calendar__day-number">21</div></div>
          <div class="calendar__number"><div class="calendar__day-number">22</div></div>
          <div class="calendar__number calendar__number--active"><div class="calendar__day-number">23</div></div>
          <div class="calendar__number"><div class="calendar__day-number">24</div></div>
          <div class="calendar__number"><div class="calendar__day-number">25</div></div>
          <div class="calendar__number"><div class="calendar__day-number">26</div></div>
          <div class="calendar__number"><div class="calendar__day-number">27</div></div>
          <div class="calendar__number"><div class="calendar__day-number">28</div></div>
          <div class="calendar__number"><div class="calendar__day-number">29</div></div>
          <div class="calendar__number"><div class="calendar__day-number">30</div></div>
          <div class="calendar__number"><div class="calendar__day-number">31</div></div>
        </div>
      </div>

      <div class="calendar__button">
        <button class="btn btn--primary btn--portrait">Change Theme</button>
      </div>
    </section>

    <dialog class="dialog">
      <div class="dialog__popup">
        <i class="far fa-times-circle" aria-hidden="true"></i>
        <div class="color-chooser" hidden>
          <h3>What's your favorite color?</h3>
          <div class="color-chooser__color-options">
            <div class="color-chooser__color-option color-chooser__color-option--blue">
              <div data-selected-color="blue" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Blue</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--red color-chooser__color-option--selected">
              <div data-selected-color="red" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Red</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--purple">
              <div data-selected-color="purple" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Purple</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--green">
              <div data-selected-color="green" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Green</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--orange">
              <div data-selected-color="orange" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Orange</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--deep-orange">
              <div data-selected-color="deep-orange" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Deep Orange</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--baby-blue">
              <div data-selected-color="baby-blue" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Baby Blue</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--cerise">
              <div data-selected-color="cerise" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Cerise</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--lime">
              <div data-selected-color="lime" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Lime</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--teal">
              <div data-selected-color="teal" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Teal</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--pink">
              <div data-selected-color="pink" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Pink</h4>
            </div>
            <div class="color-chooser__color-option color-chooser__color-option--black">
              <div data-selected-color="black" class="color-chooser__color-preview"><i class="fas fa-check"></i></div>
              <h4>Black</h4>
            </div>
          </div>
          <button class="btn btn--black">Update</button>
        </div>
        <div class="note-editor" hidden>
          <h3>Add a note to the calendar</h3>
          <textarea class="note-editor__textarea" name="post-it"></textarea>
          <div class="note-editor__buttons">
            <button class="btn btn--black">Post it</button><button class="btn btn--danger">Delete it</button>
          </div>
        </div>

      </div>
    </dialog>
    <script src="js/app.js"></script>
  </body>
</html>
