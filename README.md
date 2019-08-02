# ![Logo](https://i.imgur.com/UPlNBo1.png) Airlytics - An AirBnb Host Listing Price Optimizer <a href="https://airlytics.netlify.com">Live Site</a>


## Installation
Clone the repository and download the yarn package manager on your local machine.

## Installation Command
To install the package manager enter ```yarn install``` in the terminal
<br/><br/>
To start the application on localHost enter ```yarn start``` in the terminal

## Usage
To login, provide the following credentials into the Login Form:

```
Username: Bob
Password: password
```

Once successfully logged in, a token will be placed on the browser's localStorage which will be used in all subsequent Axios requests to the backend.

After a successful Login POST the Nav bar will dynamically render the `Your Listings` and `Logout` links, in addition to this, users will be automatically redirected to the `Your-Listings` page pictured below...
<br/>
<br/>
![Your Listings](https://i.imgur.com/fMbsUi5.jpg)
<br />
<br />
From here users may ADD, UPDATE, or DELETE listings based on their needs.
<br/>
<br/>
`TO VIEW A SPECIFIC LISTING'S DETAILS:` Click the `View Details` button on the Listing Card and a modal will appear with the relevant information as pictured below...
<br/>
<br/>
![Listing Details](https://i.imgur.com/KGVoH9I.png)
<br/>
<br/>
`TO ADD A LISTING:` Click the `Add Listing` box which will direct the user to a Form which can be populated to add a new Listing
<br/>
<br/>
![Add Listing](https://i.imgur.com/p4D9eEH.png)
<br/>
<br/>
`TO UPDATE A LISTING:` Click the specific listing's `Update Listing` button which will direct the user to a Form pre-populated with that listing's information - users can choose to update all the fields or only a few, if a field is unchanged the data will persist.
<br/>
<br/>
![Update Listing](https://i.imgur.com/3Np8Rhb.png)
<br/>
<br/>
`TO DELETE A LISTING:` Click the `Trash Can icon` in the top-right corner of the Listing Card
<br/>
<br/>
![Delete Listing](https://i.imgur.com/Bzl04ZD.png)
<br/>
<br/>
`TO LOGOUT:` Click the Logout button in the Navigation Menu in the top-right corner of the page (Desktop view), upon successful Logout, the user's access token will be removed from localStorage and the user will be redirected to the Login page while the Nav dynamically reverts back to the Login/Register links.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
