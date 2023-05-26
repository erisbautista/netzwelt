# Territories List

A very simple Laravel web application for viewing territories

## Description

A simple app that allows the user to Authenticate and view the list of territories provided by the API.

## Getting Started

### Installing

-   Clone the repository using the command

```
git clone https://github.com/erisbautista/netzwelt.git
```

-   After cloning the app. create env and copy the content of the .env.example for your reference.

-   Run the following command to install the npm dependencies

```
npm install
```

### Executing program

-   Run `composer install`
-   Invoke Homestead's make command to generate Vagrantfile and homestead.yaml file.

```
# macOS / Linux...
php vendor/bin/homestead make

# Windows...
vendor\\bin\\homestead make
```

-   Update the `homestead.yaml` file

```
sites:
  - map: netzwelt.local
    to: /home/vagrant/code/public
```

-   on your `hosts` file. add `{IP address from the homestead.yaml file} netzwelt.local`

```
192.168.56.56 netzwelt.local
```

-   After all of that you can now run `vagrant up` to start up your homestead.
-   Run `npm run dev` and navigate to `netzwelt.local` on your chosen browser

## Authors

Contributors names and contact info

Eris Lapidario Bautista
[@Eris Bautista](https://github.com/erisbautista)

## Acknowledgments

-   [Laravel](https://laravel.com/docs/10.x)
