document.addEventListener('DOMContentLoaded', function () {

    window.onscroll = function () {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progressBar").style.width = scrolled + "%";
    };
});

function openParagraph(element) {
    console.log(element);
    var div = element.nextElementSibling;
    console.log("div--->", div);
    if (div) {
        var classList = div.classList;
        console.log(classList);

        if (classList.contains('is_hidden_true')) {
            classList.add('is_hidden_false');
            classList.remove('is_hidden_true');
            div.removeAttribute('hidden');
        }else{
            classList.add('is_hidden_true');
            classList.remove('is_hidden_false');
            div.setAttribute('hidden', true);
        }
    }
}

function copyToClipboard() {
    var phoneNumber = document.getElementById("mobile_no").innerText.trim();

    var tempInput = document.createElement("textarea");
    tempInput.value = phoneNumber;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Phone number copied to clipboard: " + phoneNumber);
}

am5.ready(function () {

    var root_1 = am5.Root.new("chartdiv_1");
    var root_2 = am5.Root.new("chartdiv_2");
    var root_3 = am5.Root.new("chartdiv_3");

    var exporting_1 = am5plugins_exporting.Exporting.new(root_1, {
        menu: am5plugins_exporting.ExportingMenu.new(root_1, {})
    });
    var exporting_2 = am5plugins_exporting.Exporting.new(root_2, {
        menu: am5plugins_exporting.ExportingMenu.new(root_2, {})
    });
    var exporting_3 = am5plugins_exporting.Exporting.new(root_3, {
        menu: am5plugins_exporting.ExportingMenu.new(root_3, {})
    });

    root_1.setThemes([
        am5themes_Animated.new(root_1)
    ]);
    root_2.setThemes([
        am5themes_Animated.new(root_2)
    ]);
    root_3.setThemes([
        am5themes_Animated.new(root_3)
    ]);

    var chart_1 = root_1.container.children.push(am5percent.PieChart.new(root_1, {
        layout: root_1.verticalLayout
    }));
    var chart_2 = root_2.container.children.push(am5percent.PieChart.new(root_2, {
        layout: root_2.verticalLayout
    }));
    var chart_3 = root_3.container.children.push(am5percent.PieChart.new(root_3, {
        layout: root_3.verticalLayout
    }));

    var series_1 = chart_1.series.push(am5percent.PieSeries.new(root_1, {
        valueField: "value",
        categoryField: "category"
    }));
    var series_2 = chart_2.series.push(am5percent.PieSeries.new(root_2, {
        valueField: "value",
        categoryField: "category"
    }));
    var series_3 = chart_3.series.push(am5percent.PieSeries.new(root_3, {
        valueField: "value",
        categoryField: "category"
    }));

    series_1.data.setAll([
        { value: 7.96, category: "Sem III" },
        { value: 8.14, category: "Sem IV" },
        { value: 7.55, category: "Sem V" },
        { value: 7.26, category: "Sem VI" },
        { value: 8.10, category: "Sem VII" },
        { value: 8.00, category: "Sem VIII" },
    ]);
    series_2.data.setAll([
        { value: 80.33, category: "Sem I" },
        { value: 76.88, category: "Sem II" },
        { value: 87.57, category: "Sem III" },
        { value: 83.28, category: "Sem IV" },
        { value: 88.75, category: "Sem V" },
        { value: 97.57, category: "Sem VI" },
    ]);
    series_3.data.setAll([
        { value: 93, category: "Tamil" },
        { value: 68, category: "English" },
        { value: 76, category: "Mathematics" },
        { value: 78, category: "Science" },
        { value: 95, category: "Social Science" },
    ]);

    var legend_1 = chart_1.children.push(am5.Legend.new(root_1, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
    }));
    var legend_2 = chart_2.children.push(am5.Legend.new(root_2, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
    }));
    var legend_3 = chart_3.children.push(am5.Legend.new(root_3, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15
    }));


    legend_1.data.setAll(series_1.dataItems);
    legend_2.data.setAll(series_2.dataItems);
    legend_3.data.setAll(series_3.dataItems);

    series_1.appear(1000, 100);
    series_2.appear(1000, 100);
    series_3.appear(1000, 100);
});
