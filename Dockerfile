FROM microsoft/dotnet:1.1-runtime

WORKDIR /app
COPY ${CWD}/src/build .

EXPOSE 5000/tcp
ENV ASPNETCORE_URLS http://*:5000
ENV ASPNETCORE_ENVIRONMENT Production

ENTRYPOINT ["dotnet", "holmescode.com.dll"]
