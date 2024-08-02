using ProjectDotNet.Services;
using Serilog;
using Serilog.Events;
using TestUserApi.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddCors(opt =>
{
    opt.AddDefaultPolicy(o =>
    {
        o.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        o.Build();
    });
});
builder.Services.AddSerilog((services, lc) => lc
    .ReadFrom.Configuration(builder.Configuration)
    .MinimumLevel.Override("Microsoft", LogEventLevel.Error)
    .ReadFrom.Services(services)
    .Enrich.FromLogContext()
    .WriteTo.Console());



builder.Services.AddControllers();
builder.Services.AddTransient<IUserRepositoryService, UserRepositoryService>();
builder.Services.AddTransient<IGroupRepositoryService, GroupRepositoryService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// Configure the HTTP request pipeline.
app.UseCors();
app.MapControllers();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();




app.MapFallbackToFile("index.html");

app.Run();
