/**
 * slider.js 
 * Contains logic for chaging tabs to select on change of device resolution.
 */



window.addEventListener("load", function() {
    createTabs(".tabs")
});

/**
 * To create Tabs and point to selected tab
 * @param  {[string]} selector [selector for the tab class]
 *
 */
function createTabs(selector) {

    all_tabs = document.querySelectorAll(selector + " li a");
    div_contents = document.querySelector(selector).getElementsByTagName("div");
    for (var i = 0; i < all_tabs.length; i++) {
        if (all_tabs[i].classList.contains('active')) {
            div_contents[i].style.display = "block";
        }

    }

    for (i = 0; i < all_tabs.length; i++) {

        document.querySelectorAll(".tabs li a")[i].addEventListener('click', function(e) {

            for (i = 0; i < div_contents.length; i++)
                div_contents[i].style.display = "none";

            for (i = 0; i < all_tabs.length; i++)
                all_tabs[i].classList.remove("active");

            clicked_tab = e.target || e.srcElement;

            clicked_tab.classList.add('active');
            selected_div = clicked_tab.getAttribute('href');

            document.querySelector(selected_div).style.display = "block";
        });
    }

    set(all_tabs,true); //Inital Call 
}

/**
 * To call to Set the tabs and check for media size.
 * @param {[object]} tabs     [Contains all the Tabs]
 * @param {[boolean]} flag     [Indicator for inital set or not]
 */
function set(tabs,flag) {
    function mediaqueryresponse(mql) {
        if (mql.matches) {
           
            // ADD THE select here
            var select = document.createElement("SELECT");
            for (var i = 0; i < tabs.length; i++) {
                var ele = tabs[i];
                var option = document.createElement("option");
                option.text = ele.innerHTML;
                if (tabs[i].className.indexOf('active') >= 0)
                    option.selected = true;

                select.add(option);
            }

            //add event listner to select
            select.addEventListener("change", function(e) {
               
                var src_element = e.target || e.srcElement;
                var tabRef = document.querySelectorAll(".tabs li a")[src_element.selectedIndex];
                tabRef.click(); // simulate click
            });

            // Add the select as the first child
            var element = document.querySelector(".tabs");
            element.insertBefore(select, element.firstChild);
            element.firstChild.nextElementSibling.style.visibility = "hidden";


        } else {
            var element = document.querySelector(".tabs");
            element.removeChild(element.firstChild);
            element.firstElementChild.style.visibility = "visible";
           
        }
    }

    var mql = window.matchMedia("screen and (max-width: 480px)");
    if (flag)
        mediaqueryresponse(mql);
    mql.addListener(mediaqueryresponse);
}
