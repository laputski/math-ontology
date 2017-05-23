package com.example.demo.rest;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.*;

@RestController
public class WebWikiController {

    @RequestMapping("/test")
    public String test() {
        return "Sever running!";
    }

    @RequestMapping("/getJson")
    public String getJsonData() {
        String data;
        try(FileInputStream inputStream = new FileInputStream("./data.json")) {


            try (BufferedReader br =
                         new BufferedReader(new InputStreamReader(inputStream))) {
                StringBuilder sb = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) {
                    sb.append(line);
                    sb.append('\n');
                }
                return sb.toString();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }
}
