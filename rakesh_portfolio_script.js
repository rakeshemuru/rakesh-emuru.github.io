<script>
    // List of messages to cycle through
    var dataText = [
        "Data Science MS Candidate & Research Assistant",
        "Skilled in Machine Learning & End-to-End Data Analytics",
        "Proven Full Stack Development Skills (Django)",
        "Actively Seeking Data Science Roles",
        "Open to prompt employment opportunities."
    ];

    function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    // Change the color and make the text bold
    document.querySelector("#message").innerHTML =
      '<span style="color: white; font-weight: bold;">' +
      text.substring(0, i+1) +
      '</span>' +
      '<span aria-hidden="true" style="border-right: .15em solid white;"></span>'; // Make the cursor white as well

    // Delay for the next character
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    // Delay for the next message
    setTimeout(fnCallback, 700);
  }
}

    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        if (i < dataText.length) {
            typeWriter(dataText[i], 0, function() {
                StartTextAnimation(i + 1);
            });
        }
    }
    StartTextAnimation(0);

document.addEventListener("DOMContentLoaded", function() {
    var listItems = document.querySelectorAll('#about li');

    listItems.forEach(function(item) {
        item.onmouseover = function() {
            this.style.color = 'yellowgreen';
        };
        item.onmouseout = function() {
            this.style.color = '#333';
        };
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
  // Get all anchor tags within the top-menu div
  const menuItems = document.querySelectorAll('.top-menu a');

  menuItems.forEach(item => {
    // Check if the anchor tag has a 'data-target' attribute
    const hasDataTarget = item.hasAttribute('data-target');

    if (hasDataTarget) {
      item.addEventListener('click', function(e) {
        // Prevent the default anchor click behavior
        e.preventDefault();

        // Get the data-target attribute value
        const sectionId = this.getAttribute('data-target');

        // Find the section element
        const sectionElement = document.getElementById(sectionId);

        // Scroll to the section element
        if (sectionElement) {
          sectionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  });
});

function StartTextAnimation(i) {
  if (typeof dataText[i] == 'undefined') {
    setTimeout(function() {
      StartTextAnimation(0);
    }, 20000);
  }
  if (i < dataText.length) {
    // Pick a color class based on the index
    var colorClass = 'text-color-' + (i%3 + 1); // Modulus to cycle through colors
    typeWriter(dataText[i], 0, function() {
      StartTextAnimation(i + 1);
    }, colorClass);
  }
}
</script>
