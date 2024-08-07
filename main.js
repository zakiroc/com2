
async function fetchComments() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        
      
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        
        const comments = await response.json();
        
  
        const commentsToDisplay = comments.slice(0, 20);

       
        const container = document.getElementById('comments-container');

    
        commentsToDisplay.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <h3>${comment.name}</h3>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p>${comment.body}</p>
            `;
            container.appendChild(commentElement);
        });
    } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
    }
}


window.onload = fetchComments;
