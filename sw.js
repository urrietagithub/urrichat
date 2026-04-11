importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyA7XKmn8f1w6hAVUZaS8Eui7FAnZRy0Myg",
    authDomain: "urrichatapp.firebaseapp.com",
    databaseURL: "https://urrichatapp-default-rtdb.firebaseio.com",
    projectId: "urrichatapp",
    storageBucket: "urrichatapp.firebasestorage.app",
    messagingSenderId: "504734750650",
    appId: "1:504734750650:web:51a8def62934aabbeb2f83"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Esto hace que la notificación aparezca cuando la app está cerrada o en segundo plano
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2248%22 fill=%22%23007bff%22/><path d=%22M30 35h40v25H45L30 75V35z%22 fill=%22white%22/></svg>'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});