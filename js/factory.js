app.factory("bombfactory", function ($http, $q) {
    return {
        naptol: function (number) {
            var pr = $q.defer();
            var url = 'https://m.naaptol.com/faces/jsp/ajax/ajax.jsp?actionname=checkMobileUserExists&mobile=' + number;
            setTimeout(function () {
                console.log("waiting");
                $http.get(url).then(function (data) {
                    console.log("resolving data");
                    pr.resolve(data);
                }, function (error) {
                    pr.reject(error);
                    console.log("rejecting error");
                });
                return pr.promise;
            }, 1000);
        }
    };
});