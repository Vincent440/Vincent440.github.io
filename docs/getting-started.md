# Getting Started

Basic guide to cloning the repository down and starting on a new machine.

1.  **Clone the GitHub Repository**

    Use git to clone the project down

    ```shell
    git clone <project url>
    ```

1.  **Create `.env` file**

    Navigate into your new site’s directory and create the required `.env` file.

    ```shell
    cd <project name>
    touch .env
    ```

1.  **Add GitHub Token and login to `.env` file**

    Open up the `.env` file.

    ```shell
    code .env
    ```

    Paste and fill the code below with your own credentials.

    ```env
    LOGIN_GITHUB=<USERNAME>
    PERSONAL_ACCESS_TOKEN_GITHUB=<TOKEN_STRING>
    ```

1.  **Start developing.**

    Start it up.

    ```shell
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`\_. This is a tool you can use to experiment with querying your data.
