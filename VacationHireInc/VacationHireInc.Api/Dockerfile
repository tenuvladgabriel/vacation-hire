FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["VacationHireInc.Api/VacationHireInc.Api.csproj", "VacationHireInc.Api/"]
RUN dotnet restore "VacationHireInc.Api/VacationHireInc.Api.csproj"
COPY . .
WORKDIR "/src/VacationHireInc.Api"
RUN dotnet build "VacationHireInc.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VacationHireInc.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VacationHireInc.Api.dll"]
