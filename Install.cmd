dotnet build content
nuget.exe pack
dotnet new --uninstall MiniReact.Template
dotnet new --install .\MiniReact.Template.0.2.0.nupkg
dotnet clean content
