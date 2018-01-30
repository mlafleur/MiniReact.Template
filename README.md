# Dotnet MiniReact Template

MiniReact is a "bare minimum" React.js app template for ASP.NET Core using Razor Pages.
Exorcising this template results in a bare-bones React.js app hosted within a Razor Page.

## Key Technologies

- [ASP.NET Core 2.0](https://docs.microsoft.com/en-us/aspnet/core/aspnetcore-2.0) - This is the core framework responsible for servicing and routing incoming requests to the application.
- [Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/mvc/razor-pages/?tabs=visual-studio) - A stripped down implementation of ASP.NET MVC for scenarios where a distinct Controller and Model are unnecessary.
- [React.js](https://reactjs.org) - A popular front-end framework that was originally developed for Facebook.
- [TypeScript](https://www.typescriptlang.org) - A typed language based on JavaScript that compiles into plain JavaScript.
- [WebPack](https://webpack.js.org/) - A _static module bundler_ for JavaScript. If you're familure with traditional app development,  think of TypeScript as the "compiler" and WebPack as the "linker".

_Warning: At the moment the item more minimal than the template is this "Read Me"._

## Project Structure

- `wwwroot` - Root directory for the web app (this is where any static content would go)
- `MiniReact.csproj` - C# Project File
- `Program.cs` - Entry point for the web app
- `Startup.cs` - Handles startup tasks, app configuration, and service configuration
- `package.json` - Defines the list of NPM packages our application requires
- `tsconfig.json` - TypeScript Compiler configuration
- `webpack.config.js` - WebPack configuration script
- `Pages` - Directory holding the source for the app's Razor Pages
    - `_ViewImports.cshtml` - See [Importing Shared Directives](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/layout#importing-shared-directives)]
    - `Index.cshtml` - A simple Razor Page for hosting the React.js application
    - `Index.cshtml.cs` - The Razor Page Controller for the `Index.cshtml` page
- `Client` - Directory holding the TypeScript for our React.js Application
    - `components` - Directory holding the various application components (views, widgets, etc.).
        - `Home.tsx` - The "home" page of the App
        - `Layout.tsx` - A shared master layout used by each page
    - `main.tsx` - The main entry point for the application
    - `routes.tsx` - Defines the routeing table for the application, translating the URL to the correct App page to render

## Building & Installing the Template

Executing `Install.cmd` script will produce a NuGet package containing the template and install it locally.

## Using the Template

Create a new directory where you wish you project to be created. From within that directory, execute the [`dotnet new`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore2x) command:

```ps
dotnet new minireact
```

This will result in a new project based on the MiniReact template. Unless otherwise specified via the `--name` parameter, the new project's name will be the same as the directory you created it in. 

## Running the Project

From the command prompt, call [`dotnet run`](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-run?tabs=netcore2x)