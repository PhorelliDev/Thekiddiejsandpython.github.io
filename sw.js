self.addEventListener("install", function(event){
   event.waitUntill(
       caches.open("Rippleton").then(function(cache){
           cache.addAll(
               [
                   "/index.html",
                   "/app.css"
             ]
           )
       })
   )
});

self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.open("Rippleton").then(function(cache){
            return cache.match(event.request);
        })
    )
});