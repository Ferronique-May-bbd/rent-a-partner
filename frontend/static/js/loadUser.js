const getUser = async() => {
    let url = 'http://localhost:5501/get-user?:id';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

const renderUser = async() =>  {
    let user = await getUser();
    let html = '';
    user => {
        let htmlSegment = `    <section id="image-section">
        <img onclick="document.getElementById('my-pictures').click()" id="picture" src="'${user.ProfilePicUrl}'"><input type="file" id="my-pictures" onchange="loadFile(event, 'picture')">
    </section>
    <section id="details-section">
        <form method="post" class="form-section">
            <label class="lbl">Phone Number:</label>
            <input type="text" class="control" name="phoneNumber" value="'${user.Phone}'">
            <label class="lbl">Email:</label>
            <input type="email" class="control" name="email" value="'${user.Email}'">
            <label class="lbl">Height:</label>
            <input type="text" class="control" name="height" value="'${user.Height}'">
            <label class="lbl">Race:</label>
            <input type="text" class="control" name="race" value="'${user.Race}'">
            <label class="lbl">Home language:</label>
            <input type="text" class="control" name="homeLanguage" value="'${user.Language}'">
            <label class="lbl">Location:</label>
            <input type="text" class="control" name="location" value="'${user.Location}'">
            <label class="lbl">Bio:</label>
            <textarea id="Bio" class="control" maxlength="1000" value="'${user.Bio}'" rows="10"></textarea>
            <input class="btn btn-peach" type="submit" value="Update" id="submitForm">
        </form>
    </section>
                                `;

        html += htmlSegment;
    };

    let container = document.querySelector('.main_content');
    container.innerHTML = html;
}

renderUser();